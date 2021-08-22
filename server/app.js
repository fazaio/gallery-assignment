import express from "express";
import router from './src/routes/'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/data', router.data)
app.use('/admin', router.admin)

app.listen(5000,() => {
     console.log(`app is listening to port 5000`);
})