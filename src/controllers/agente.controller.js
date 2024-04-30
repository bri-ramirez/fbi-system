import { agentes } from '../data/agentes.js';
import { errorMessage } from '../helpers/message.js';
import { validateLogin } from '../helpers/validate.js';
import jwt from 'jsonwebtoken';

import UserService from '../services/agente.service.js';

const secretKey = "Mi Llave Ultra Secreta";
const tokenOptions = { expiresIn: "120s" };

export const login = async (req, res) => {
  try {
    validateLogin(req);

    const { email, password } = req.query;

    const agente = agentes.find((agente) => agente.email === email && agente.password === password);

    if (!agente){
      return res.status(401).json({ message: 'credenciales inválidas' });
    }

    const token = jwt.sign(agente, secretKey, tokenOptions);

    res.status(200).json({
      status: "Ok",
      is_Active: true,
      message: "Usuario logueado",
      token: token,
      loggedUser: {email},
    });
  } catch (error) {
    errorMessage(error.message);
    return res.status(500).json({ message: error.message });
  }
};
export const profile = async (req, res) => {
  try {
    const { token } = req.query;

    return jwt.verify(token, secretKey, (err, data) => {
      err
        ? res.status(404).json({
            status: "Error",
            message: "Usuario no encontrado",
            error: err,
          })
        : res
            .status(200)
            .json({ status: "Ok", message: "Gracias por la petición" });
    });
  } catch (error) {
    res.json(error);
  }
};
