import express from 'express';
import bmiCalculator from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);
    try{
        const bmi: string = bmiCalculator(height, weight);
        const response = {
            weight: weight,
            height: height,
            bmi: bmi
        };
        res.json(response);
    }catch(error){
        if(error instanceof Error){
        res.status(418).send({error: error.message});
        }
    }
  });

app.post('/exercises', (req,res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment 
  const {daily_exercises, target} = req.body;
  const exorcises = daily_exercises as number[];

  if(!target || isNaN(Number(target)) || !exorcises.every(e=> typeof e === 'number')) {
   return res.status(400).send({ error: 'malformatted parameters'});
  }
  const result = calculateExercises(Number(target), exorcises);
  return res.json(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});