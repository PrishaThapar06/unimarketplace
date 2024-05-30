import { Router } from "express";

import * as controller from '../controllers/appController.js';
const router = Router();

router.route('/register').post(controller.register);
router.route('/login').post(controller.login); //after that include verify user
router.route('/logout').post(controller.logout);

export default router;