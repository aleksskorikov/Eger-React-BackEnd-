
import 'dotenv/config';
import express from 'express';
import { sequelize } from './db.js'; 
import * as models from './models/models.js';
import cors from 'cors';
import router from './routes/index.js';
import fileUpload from 'express-fileupload';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

// Определите __filename и __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 5001;
const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({}));


// app.use(express.static(path.resolve(__dirname, 'static')));
// app.use(express.static(path.join(__dirname, 'static')));
app.use('/static', express.static(path.join(__dirname, 'static')));

app.use('/api', router);



const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        await sequelize.sync({ alter: true }).then(() => {
            console.log('Таблицы синхронизированы');
        }).catch(err => {
            console.error('Ошибка при синхронизации таблиц:', err);
        });
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.error('Error starting server:', e);
    }
};

start();

