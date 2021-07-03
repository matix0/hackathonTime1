import { Router } from "express";
import FeedController from "../controllers/feedController";
import { verifyToken } from "../services/middleware";

const feedRoutes = Router();
const feedController = new FeedController();

feedRoutes.post("/", verifyToken, (req, res) => {
  feedController.createFeed(req, res);
});

feedRoutes.get("/", verifyToken, (req, res) => {
  feedController.getFeed(req, res);
});

feedRoutes.delete("/", verifyToken, (req, res) => {
  feedController.deleteFeed(req, res);
});

export default feedRoutes;
