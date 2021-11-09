import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', routes.user);

app.use((req, res) => {
  res.status(404).send('404: Page not found');
});

app.listen(4002, () => {
  console.log(`Example app listening on port 4002!`);
});
