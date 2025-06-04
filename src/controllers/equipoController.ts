import { Request, Response } from "express";
import Equipo from "../models/Equipo";
import Ciudad from "../models/Ciudad";
import Categoria from "../models/Categoria";

export const getEquipos = async (req: Request, res: Response) => {
  try {
    const equipos = await Equipo.findAll({
      include: [
        { model: Ciudad, as: "Ciudad", attributes: ["provincia", "capital"] },
        { model: Categoria, as: "Categoria", attributes: ["nombre"] },
      ],
    });
    res.json(equipos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los equipos" });
  }
};
