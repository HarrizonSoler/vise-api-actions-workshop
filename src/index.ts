import dotenv from 'dotenv';
import app from './app';


dotenv.config();


const PORT = process.env.PORT || 443;
app.listen(PORT, () => {
console.log(`API VISE escuchando en puerto ${PORT}`);
});
