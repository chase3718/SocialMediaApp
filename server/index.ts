import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import get_handler from './get_handler';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.all('/metadata', (req: Request, res: Response) => {
  let response;
	if (req.method === 'GET') {
    console.log('its a get request');
		response = get_handler(req, res);
	}
});

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
