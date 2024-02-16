import { AuthUserController } from "../controllers/authUserController";
import { createUserController } from "../controllers/createUserController";

const express = require('express');
const router = express.Router();

router.post('/createUser', createUserController)
router.post('/login', AuthUserController)

export {router}