import { Request, Response } from "express";
import Feed from "../models/feedSchema";
import User from "../models/userSchema";
import LikeController from "./likeController";

export default class UserController {
  createFeed = async (req: Request, res: Response) => {
    try {
      if (!req.body.userId) {
        return res.status(400).json({ message: "Falha ao obter usuario" });
      }

      var user = await User.findById(req.body.userId);

      if (!user) {
        return res.status(400).json({ message: "Falha ao obter usuario" });
      }
      var feed = await Feed.create({
        userId: req.body.userId,
        text: req.body.text,
      });

      return res.status(200).send({ feed });
    } catch (error) {
      return res.status(400).json({ message: `Falha em criar feed,${error}` });
    }
  };

  deleteFeed = async (req: Request, res: Response) => {
    try {
      await Feed.findByIdAndDelete(req.body.feedId);
      return res.status(200).json({ message: "Feed deletado com sucesso" });
    } catch (error) {
      return res.status(400).json({ message: "Falha em deletar Feed" });
    }
  };

  getFeed = async (req: Request, res: Response) => {
    try {
      var feed = await Feed.find({})
        .populate("userId", "username")
        .sort({ creationDate: -1 });
        var likes = await LikeController.getAllLikes();
        return res.status(200).send({ feed,likes });
    } catch (error) {
      return res.status(400).json( error );
    }
  };
}
