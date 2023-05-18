import { RequestHandler } from 'express';

export const homeController = ((req, res, next) => {
  console.log(res.locals);
  res.json({ name: 'max' });
}) as RequestHandler;
