import express from 'express';
const router = express.Router();
import AuthController from '../controllers/authController';
import { Request, Response } from 'express';
router.get('/', (req, res) => {
  res.send('Hopme Page');
});

router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;

  const credentialsAreValid = AuthController.verifyCredentials(email, password);

  if (credentialsAreValid) {
    const token = AuthController.generateToken({ email });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Credenciais inválidas' });
  }
});

export { router as Routes };