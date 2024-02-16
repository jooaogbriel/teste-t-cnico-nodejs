import { Request, Response } from 'express';
import { authUserService } from '../shared/services/authUserService';

const AuthUserController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const token = await authUserService({email, password});

        if (!token) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        return res.status(200).json({ token });
    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

export { AuthUserController }