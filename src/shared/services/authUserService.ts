import { userSchema } from '../../database/validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../../database/models/user.model';
import { z } from 'zod';

require('dotenv').config()

const jwtSecret = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

const authUserService = async ({email, password}: z.infer<typeof userSchema>) => {
    const user = await User.findOne({ email });

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return null;
    }

    const token = jwt.sign({ userId: user._id, email: user.email }, jwtSecret, {
        expiresIn: '1h',
    });

    return token;
};
export { authUserService }