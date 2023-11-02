import { Router } from "express";
import * as controller from "../controllers/product.controllers";
import {
  validateGetProduct,
  validatePostProduct,
} from "../middlewares/validators/product.validator";

const router = Router();

router.get("/", controller.getAll);
router.post("/", validatePostProduct, controller.create);
router.get("/:id", validateGetProduct, controller.getById);
router.put(
  "/:id",
  [validateGetProduct, validatePostProduct],
  controller.update
);
router.delete("/:id", validateGetProduct, controller.remove);

export default router;
