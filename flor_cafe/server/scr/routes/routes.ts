import express from 'express';
import loginUser from './login';

const router = express.Router();

router.use("/login", loginUser);

export default router;