import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import fileUpload from 'express-fileupload';

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL || '';

const app = express();

app.use(express.json());
app.use('/api', router);
app.use(fileUpload());

async function startApp() {
  try {
    await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
    app.listen(PORT, () => console.log(`SERVER STARTDED ON PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

startApp();
