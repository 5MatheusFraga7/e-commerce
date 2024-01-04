import express from 'express';
import { Routes } from './routes/routes';
import bodyParser from 'body-parser';

// ...

const app = express();
const PORT = 3000;
app.use(bodyParser.json());

app.use("/", Routes);

app.listen(PORT, () => {
  console.log("Server is running");
});