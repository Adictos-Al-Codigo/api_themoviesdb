import { UserModel } from "../models/UserModel.js";
import { commentModel } from "../models/commentModel.js";

export const getComment = async (req, res) => {
    try {
      const comment = await commentModel.findAll({
        attributes: ["id","comentario", "id_pelicula", "nombre_pelicula", "fecha", "users_id"],
        where: { state: true },
        include: {
          model: UserModel,
          attributes: ["user"],
          where: {state: true},
          required: true,
        },
      });
      res.status(200).json(comment);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  
  export const createComment = async (req, res) => {
    try {
        await commentModel.create(req.body);
        res.status(201).json({ message: "Registrado Correctamente" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };