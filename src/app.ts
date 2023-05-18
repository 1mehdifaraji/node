import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';

import { router } from '@services/routes';

const PORT = 2100;
const app = express();

const initMiddlewares = () => {
  app.use(cors());
  app.use(compression());
  app.use(morgan('tiny'));
  app.use(express.json());
  app.use('/static', express.static('src/public'));
  app.use('/api/v1', router);
};

initMiddlewares();

export const runServer = () => {
  app.listen(PORT, () => {
    console.log('Server ran on ' + PORT);
  });
};
