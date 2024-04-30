import 'dotenv/config';
import { agentes } from '../data/agentes.js';
import { errorMessage } from '../helpers/message.js';
import { validateLogin } from '../helpers/validate.js';
import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET_KEY;
const tokenOptions = { expiresIn: '120s' };

export const login = async (req, res) => {
  try {
    validateLogin(req);

    const { email, password } = req.query;

    const agente = agentes.find(
      (agente) => agente.email === email && agente.password === password
    );

    if (!agente) {
      return res.status(401).json({ message: 'credenciales inválidas' });
    }

    const token = jwt.sign(agente, secretKey, tokenOptions);

    res.status(200).json({
      status: 'Ok',
      is_Active: true,
      message: 'Usuario logueado',
      token: token,
      loggedUser: { email },
    });
  } catch (error) {
    errorMessage(error.message);
    return res.status(500).json({ message: error.message });
  }
};
export const profile = async (req, res) => {
  res.sendFile('profile.html', { root: './public' });
};
