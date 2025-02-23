import jsonServer from "json-server";
import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(express.json()); // 🔹 Garante que o body-parser funcione corretamente
server.use(middlewares);

const SECRET_KEY = "seu_segredo_super_secreto";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// 🚀 Rota de Login
server.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const users: User[] = router.db.get("users").value();

    const user = users.find((u) => u.email === email);
    if (!user) return res.status(401).json({ error: "Usuário não encontrado" });

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return res.status(401).json({ error: "Senha inválida" });

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
      expiresIn: "1h",
    });

    return res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    return res.status(500).json({ error: "Erro no servidor" });
  }
});

// 🚀 Rota para registrar um usuário
server.post("/register", async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const users: User[] = router.db.get("users").value();

    if (users.some((u) => u.email === email))
      return res.status(400).json({ error: "E-mail já cadastrado" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser: User = { id: users.length + 1, name, email, password: hashedPassword };

    router.db.get("users").push(newUser).write();
    return res.status(201).json({ message: "Usuário criado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao registrar usuário" });
  }
});

// Adiciona rotas do JSON Server
server.use(router);

server.listen(3001, () => console.log("🔥 JSON Server rodando em http://localhost:3001"));
