export interface IParticipante {
  id?: number;
  nombre: string;
  correo: string;
  password: string;
}

export interface IParticipanteResponse {
  id: number;
  nombre: string;
  correo: string;
}

export interface IUser {
  id?: number;
  name: string;
  email: string;
  password: string;
}

export interface IUserResponse {
  id: number;
  name: string;
  email: string;
}
