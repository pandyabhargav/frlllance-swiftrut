// app.mjs
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/userRoute.js';
import projectRoutes from './routes/projectRoute.js'; 
import path from "path";

dotenv.config(); 

const app = express();
const _diname = path.resolve();

app.use(cors());
app.use(cors({
    origin: 'http://localhost:5173' 
}));
app.use(express.json()); 


app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);

app.use(express.static(path.join(_diname,"/frontend/dist")));
app.get('*', (_,res)=>{
res.sendFile(path.join(_diname,"frontend","dist","index.html"));
})


const PORT = process.env.PORT || 5000; 
app.listen(PORT, async () => {
    await connectDB(); 
    console.log(`Server Starting On http://localhost:${PORT}`);
});
