import express, { Request, Response } from 'express';
import mysql, { Connection } from 'mysql';

const app = express();
const port = 3001;

const connection: Connection = mysql.createConnection({
  host: 'austincodes',
  user: 'root',
  password: 'rootlogin',
  database: 'test_DB',
});

connection.connect();

app.get('/api/data', (req: Request, res: Response) => {
  connection.query('SELECT * FROM your_table', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

