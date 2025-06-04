import { Request, Response } from "express";
import EventoManana from "../models/EventoManana";
import Ciudad from "../models/Ciudad";

export const getEventos = async (req: Request, res: Response) => {
  try {
    const eventos = await EventoManana.findAll({
      include: [
        {
          model: Ciudad,
          as: "Ciudad",
          attributes: ["provincia"],
          required: true,
        },
      ],
    });

    const resultado = eventos.map((evento) => {
      const json = evento.toJSON();
      return {
        ...json,
        ciudad: json.Ciudad?.provincia,
        ciudad_id: undefined,
        Ciudad: undefined,
      };
    });

    res.json(resultado);
  } catch (error) {
    console.error("Error al obtener los eventos:", error);
    res.status(500).json({ error: "Error al obtener los eventos" });
  }
};
