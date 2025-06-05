import { Request, Response } from "express";
import ParticipacionManana from "../models/ParticipacionManana";
import Participante from "../models/Participante";
import Evento from "../models/EventoManana";

export const inscribirEvento = async (req: Request, res: Response) => {
  const { evento_id, participante_id } = req.body;

  try {
    const participacion = await ParticipacionManana.create({
      participante_id,
      evento_id,
    });
    res.status(201).json(participacion);
  } catch (error) {
    res.status(500).json({ error: "Error al inscribirse en el evento" });
  }
};

export const getParticipaciones = async (req: Request, res: Response) => {
  try {
    const participaciones = await ParticipacionManana.findAll({
      include: [
        { model: Participante, attributes: ["nombre", "correo"] },
        { model: Evento, attributes: ["descripcion", "fecha"] }, // 👈 usa columnas existentes
      ],
    });

    const resultado = participaciones.map((participacion: any) => ({
      participante: participacion.Participante?.nombre || "Sin nombre",
      correo: participacion.Participante?.correo || "Sin correo",
      evento: participacion.Evento?.descripcion || "Evento no encontrado",
    }));

    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las participaciones" });
  }
};
