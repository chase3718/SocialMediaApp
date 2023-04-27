import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

const mysql = require('mysql');

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect();

connection.query('SELECT * FROM users', (err: any, rows: any) => {
  if (err) throw err;

  console.log('Data received from Db:');
  console.table(rows);
});

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});