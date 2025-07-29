import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { connectDB } from './db.js';

const app = express();

connectDB();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
