import ParticipacionClub from "./ParticipacionClub";
import Participante from "./Participante";
import Club from "./Club";
import Rol from "./Rol";
import Evento from "./EventoManana";
import ParticipacionManana from "./ParticipacionManana";

// Asociaciones
ParticipacionClub.belongsTo(Participante, { foreignKey: "participante_id" });
ParticipacionClub.belongsTo(Club, { foreignKey: "club_id" });
ParticipacionClub.belongsTo(Rol, { foreignKey: "rol_id" });

// Relaciones inversas (opcional pero recomendado)
Participante.hasMany(ParticipacionClub, { foreignKey: "participante_id" });
Club.hasMany(ParticipacionClub, { foreignKey: "club_id" });
Rol.hasMany(ParticipacionClub, { foreignKey: "rol_id" });

// Participante 1:N Participacion
Participante.hasMany(ParticipacionManana, { foreignKey: "participante_id" });
ParticipacionManana.belongsTo(Participante, { foreignKey: "participante_id" });

// Evento 1:N Participacion
Evento.hasMany(ParticipacionManana, { foreignKey: "evento_id" });
ParticipacionManana.belongsTo(Evento, { foreignKey: "evento_id" });

export { ParticipacionClub, Participante, Club, Rol };
