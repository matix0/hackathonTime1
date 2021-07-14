import { Request, Response } from "express";
import Feed from "../models/feedSchema";
import User from "../models/userSchema";
import Like from "../models/likeSchema";

export default class LikeController {

  createLike = async (req: Request, res: Response) => {
    try {
      //verificar se tem usuario
      if (!req.body.userId) {
        return res
          .status(400)
          .json({ message: "Falha ao obter usuario enviado" });
      }

      var user = await User.findById(req.body.userId);

      if (!user) {
        return res
          .status(400)
          .json({ message: "Falha ao obter usuario no banco" });
      }

      // //verificar se tem post
      if (!req.body.postId) {
        return res.status(400).json({ message: "Falha ao obter post enviado" });
      }

      var post = await Feed.findById(req.body.postId);
      if (!post) {
        return res
          .status(400)
          .json({ message: "Falha ao obter post no banco" });
      }

      var ObjectId = require("mongoose").Types.ObjectId;
      var query = {
        userId: new ObjectId(req.body.userId),
        postId: new ObjectId(req.body.postId),
      };
      const postCreated = await Like.find(query);

      if (postCreated.length > 0) {
        return res.status(400).send({ message: `Like já existente` });
      }

      var like = await Like.create({
        userId: req.body.userId,
        postId: req.body.postId,
      });

      return res.status(200).json({ like });
    } catch (error) {
      return res.status(400).json({ message: `Falha em criar like,${error}` });
    }
  };
  static getAllLikes = async () => {
    try {
      var like = await Like.find({});
      return like;
    } catch (error) {
      return error;
    }
  };
}
