import 'dotenv/config';
import express from "express";
import cors from "cors";
import path from "path";

import routes from "./routers/routes.js"

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
//app.use('/public', express.static(path.join(__dirname + '/public')));
app.use(express.static('public'));

app.use("/", routes)

/* LEVANTAR EL SERVIDOR */
app.listen(PORT, () => {
  console.log("Servidor levantado en el puerto: ", PORT);
});