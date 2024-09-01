import express from 'express';
const app: express.Application = express()

app.get('/', function (req: express.Request, res: express.Response) {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log(`App is listen on the port 3000`);
})