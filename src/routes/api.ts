import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/api/', async (req: Request, res: Response) => {
  return res.status(200).send({"msg":"Hello world from get"});
})

router.post('/api/', async (req: Request, res: Response) => {
  const { title, description } = req.body;
console.log(title);
console.log(description);
  
  return res.status(201).send({"msg":"Hello world from post"})
})

export { router as apiRouter }