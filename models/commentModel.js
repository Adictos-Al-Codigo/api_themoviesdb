import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import { UserModel } from "./UserModel.js";

export const commentModel = sequelize.define("comentario", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    comentario: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    id_pelicula: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nombre_pelicula: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fecha: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    state: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    timestamps: false
  }
  
  );

  UserModel.hasMany(commentModel, { foreignKey: "users_id"});
  commentModel.belongsTo(UserModel, { foreignKey: "users_id" });

