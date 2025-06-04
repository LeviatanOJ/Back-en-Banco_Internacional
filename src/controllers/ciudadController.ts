import { Request, Response } from 'express';
import Ciudad from '../models/Ciudad';

export const getCiudades = async (req: Request, res: Response) => {
  try {
    const ciudades = await Ciudad.findAll();
    res.json(ciudades);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las ciudades' });
  }
};