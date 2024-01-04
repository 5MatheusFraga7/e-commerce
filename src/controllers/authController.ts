import jwt from 'jsonwebtoken';

class AuthController {
  // Método de exemplo que retorna true
  static asa(): any {
    return true;
  }

  static generateToken(payload: any): string {
    const secret = 'seuSegredoJWT';
    const expiresIn = '1h';

    const token = jwt.sign(payload, secret, { expiresIn });

    return token;
  }

  static verifyCredentials(email: string, password: string): boolean {
    const user = {
      email: 'exemplo@email.com',
      password: 'senha123',
    };

    return email === user.email && password === user.password;
  }
}

export default AuthController;