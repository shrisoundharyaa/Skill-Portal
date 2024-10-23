import express, { json } from 'express';
import connectDB from './config/db';
import userRoutes from './routes/userRoutes';
// eslint-disable-next-line no-undef
require('dotenv').config();

const app = express();
connectDB();

app.use(json());  // Parse JSON bodies
app.use('/api/users', userRoutes);

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
