import ParticipacionClub from "./ParticipacionClub";
import Participante from "./Participante";
import Club from "./Club";
import Rol from "./Rol";

// Asociaciones
ParticipacionClub.belongsTo(Participante, { foreignKey: "participante_id" });
ParticipacionClub.belongsTo(Club, { foreignKey: "club_id" });
ParticipacionClub.belongsTo(Rol, { foreignKey: "rol_id" });

// Relaciones inversas (opcional pero recomendado)
Participante.hasMany(ParticipacionClub, { foreignKey: "participante_id" });
Club.hasMany(ParticipacionClub, { foreignKey: "club_id" });
Rol.hasMany(ParticipacionClub, { foreignKey: "rol_id" });

export { ParticipacionClub, Participante, Club, Rol };
