import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';

function configExpress(app: Application) {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan('dev'));
}

export default configExpress;

/*
const app = express();
const PORT = process.env.PORT ?? 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({ Message: 'For the Emperor' });
});
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
function cors(): any {
  throw new Error('Function not implemented.');
}*/
