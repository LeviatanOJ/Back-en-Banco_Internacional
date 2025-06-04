import { Request, Response } from "express";
import Club from "../models/Club";
import Ciudad from "../models/Ciudad";
import Modalidad from "../models/Modalidad";

export const getClubes = async (req: Request, res: Response) => {
  try {
    const clubes = await Club.findAll({
      include: [
        {
          model: Ciudad,
          as: "Ciudad",
          attributes: ["provincia"],
          required: true,
        },
        {
          model: Modalidad,
          as: "Modalidad",
          attributes: ["nombre"],
          required: true,
        },
      ],
    });

    const resultado = clubes.map((club) => {
      const json = club.toJSON();
      return {
        ...json,
        ciudad: json.Ciudad?.provincia,
        modalidad: json.Modalidad?.nombre,
        ciudad_id: undefined,
        modalidad_id: undefined,
        Ciudad: undefined,
        Modalidad: undefined,
      };
    });

    res.json(resultado);
  } catch (error) {
    console.error("Error al obtener los clubes:", error);
    res.status(500).json({ error: "Error al obtener los clubes" });
  }
};
