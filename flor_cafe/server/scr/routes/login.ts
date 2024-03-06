import express from "express";
import loginAuth from '../middlewares/login';

const loginUser =  express.Router();

loginUser.post('/login', loginAuth);

export default loginUser;