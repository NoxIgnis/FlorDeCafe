import express from 'express';
import { AuthenticateService } from 'scr/services/auth';

const loginAuth = express.Router();
const authService = new AuthenticateService();

loginAuth.post("/auth",async (req, res) => {
    const { user, password } = req.body;
  
    if (!user || !password) return res.status(400).json({
      message: "User and password are required."
    });
  
    try {
      const authentication = await authService.authenticate(user, password);
      return res.json(authentication);
    } catch (e: any) {
      return res.status(401).json({
        message: e.message
      })
    }
  });

  export default loginAuth;
