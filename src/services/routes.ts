import express from 'express';

import { homeController } from '@controller/home';
import { homeMiddleware } from '@middleware/home';

export const router = express.Router();

router.get('/', homeMiddleware, homeController);
