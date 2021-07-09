import { Request, Response } from "express";
import Feed from "../models/feedSchema";
import User from "../models/userSchema";
import Like from "../models/likeSchema";

export default class LikeController {
  createLike = async (req: Request, res: Response) => {
    try {
      //verificar se tem usuario
      if (!req.body.userId) {
        console.log(req.body.userId);
        return res.status(400).json({ message: "Falha ao obter usuario enviado" });
      }

      var user = await User.findById(req.body.userId);

      if (!user) {
        console.log(req.body.userId);
        return res.status(400).json({ message: "Falha ao obter usuario no banco" });
      }

      //verificar se tem post
      if (!req.body.postId) {
        console.log(req.body.postId);
        return res.status(400).json({ message: "Falha ao obter post enviado" });
      }

      var post = await Feed.findById(req.body.postId);

      if (!post) {
          console.log(req.body.postId);
          return res.status(400).json({ message: "Falha ao obter post no banco"});
      }

      let contador = async () => {
          let qtd = (req.body.likeQuantity);
          qtd += 1;
          
      };

      var like = await Like.create({
          userId: req.body.userId,
          postId: req.body.postId,
          likeQuantity: contador
      });


    } catch (error) {
      return res.status(400).json({ message: `Falha em criar like,${error}` });
    }
  };
}
