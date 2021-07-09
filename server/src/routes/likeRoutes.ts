import {Router} from "express";
import LikeController from "../controllers/likeController";
import { verifyToken } from "../services/middleware";

const likeRoutes = Router();
const likeController = new LikeController();

likeRoutes.post("/", verifyToken, (req, res) => {
    likeController.createLike(req, res);
});

export default likeRoutes;