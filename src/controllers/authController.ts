import { Request, Response } from "express";
import Participante from "../models/Participante";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { IParticipante, IParticipanteResponse } from "../types/user.types";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { nombre, correo, password }: IParticipante = req.body;

    const participante = await Participante.create({
      nombre,
      correo,
      password,
    });

    const token = jwt.sign({ id: participante.id }, process.env.JWT_SECRET!, {
      expiresIn: "30m",
    });

    const participanteResponse: IParticipanteResponse = {
      id: participante.id,
      nombre: participante.nombre,
      correo: participante.correo,
    };

    res.status(201).json({
      status: "success",
      token,
      data: { participante: participanteResponse },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error instanceof Error ? error.message : "Ha ocurrido un error",
    });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { correo, password } = req.body;

    const participante = await Participante.findOne({ where: { correo } });

    if (
      !participante ||
      !(await bcrypt.compare(password, participante.password))
    ) {
      res.status(401).json({
        status: "fail",
        message: "Correo o contraseña incorrectos",
      });
      return;
    }

    const token = jwt.sign({ id: participante.id }, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    const participanteResponse: IParticipanteResponse = {
      id: participante.id,
      nombre: participante.nombre,
      correo: participante.correo,
    };

    res.status(200).json({
      status: "success",
      token,
      data: { participante: participanteResponse },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error instanceof Error ? error.message : "Ha ocurrido un error",
    });
  }
};
