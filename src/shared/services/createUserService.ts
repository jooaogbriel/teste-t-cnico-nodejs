// import { IUser } from "../../../types";
import { User } from "../../database/models/user.model";
import { userSchema } from "../../database/validator";
import { z } from 'zod';
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from 'uuid';

const createUsersService = async ({
  email,
  password,
}: z.infer<typeof userSchema>) => {
    const _id = uuidv4();
const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    userSchema.parse({_id, email,  password });

    const newUser = new User({
      _id,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return newUser;

  } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw new Error("Falha ao criar usuário");
  }
};

export default createUsersService;
