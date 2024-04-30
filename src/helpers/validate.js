export const validateLogin = (req) => {

  if (!req.query.email) {
    throw new Error("El campo 'email' es requerido");
  }

  if (!req.query.password) {
    throw new Error("El campo 'password' es requerido");
  }
}
