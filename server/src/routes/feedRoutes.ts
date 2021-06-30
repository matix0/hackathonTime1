import { Router } from "express";
import FeedController from "../controllers/feedController";

const feedRoutes = Router();
const feedController = new FeedController();

feedRoutes.post("/", (req, res) => {
  feedController.createFeed(req, res);
});

feedRoutes.get("/", (req, res) => {
  feedController.getFeed(req, res);
});

feedRoutes.delete("/", (req, res) => {
  feedController.deleteFeed(req, res);
});

export default feedRoutes;
