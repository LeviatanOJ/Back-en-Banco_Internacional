import { Request, Response } from "express";
import { ParticipacionClub, Participante, Club, Rol } from "../models";

export const getParticipaciones = async (req: Request, res: Response) => {
  try {
    const participaciones = await ParticipacionClub.findAll({
      include: [
        { model: Participante, attributes: ["nombre", "correo"] },
        { model: Club, attributes: ["nombre"] },
        { model: Rol, attributes: ["nombre"] },
      ],
    });

    const resultado = participaciones.map((participacion: any) => ({
      participante: participacion.Participante?.nombre,
      correo: participacion.Participante?.correo, // Agrega el correo del participante al objeto de res
      club: participacion.Club?.nombre,
      rol: participacion.Rol?.nombre,
    }));

    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las participaciones" });
  }
};

export const inscribirClub = async (req: Request, res: Response) => {
  const { club_id, rol_id, participante_id } = req.body;

  try {
    const participacion = await ParticipacionClub.create({
      participante_id,
      club_id,
      rol_id,
    });
    res.status(201).json(participacion);
  } catch (error: any) {
    console.error("Error al inscribirse en el club:", error);
    res.status(500).json({
      error: "Error al inscribirse en el club",
      detalle: error.message,
    });
  }
};
