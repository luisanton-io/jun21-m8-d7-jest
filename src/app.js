import express from "express";
import cors from "cors";
import { productsRouter } from "./services/products/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.send({ message: "Test success" });
});

app.post("/sum", (req, res) => {
  res.status(200).send({ result: req.body.numbers.reduce((a, c) => a + c) });
});

app.use("/products", productsRouter);

export { app };
