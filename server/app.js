import express from "express";
import router from './src/routes/'
import cors from "cors";

const app = express();
const auth = require('./src/middlewares/auth')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())
app.use('/api', router.api)
app.use('/admin', router.admin)

app.listen(5000,() => {
     console.log(`app is listening to port 5000`);
})