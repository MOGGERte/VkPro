import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import db from './configs/db.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';
import { authMiddleware } from './middlewares/authMiddleware.js';
import AuthRoutes from './routes/authRoutes.js';
import ProfileRoutes from './routes/profileRoutes.js';
import PostsRoutes from './routes/postsRoutes.js';

const app = express();

const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin: process.env.CLIENT_URL
    })
);
app.use(cookieParser());

app.use('/uploads', express.static('uploads'));

app.use('/api', AuthRoutes);
app.use('/api', authMiddleware, ProfileRoutes);
app.use('/api', authMiddleware, PostsRoutes);

app.use(errorMiddleware);

const start = async () => {
    try {
        await db.any(`select NOW()`);
        console.log('db connected');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (err) {
        console.error(err);
    }
};

start();