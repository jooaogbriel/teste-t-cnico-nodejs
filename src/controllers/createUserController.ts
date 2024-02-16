import { Response, Request } from "express";
import createUsersService from "../shared/services/createUserService";

export const createUserController = async (req: Request, res: Response) => {
    try {
		const { email, password } = req.body

		const user = await createUsersService({
			email,
			password,
        })

		return res.status(201).json(user)
	} catch (error) {
		if (error instanceof Error) {
			return res.status(400).json({
				message: error.message,
			})
		}
	}
}