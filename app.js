import express from 'express';
import router from './routes/router.js';

//création d'une constante app qui va contenir l'application express.js
const app = express();

//la variable port est utilisée pour définir le port sur lequel le serveur va écouter les requêtes le choix du port est arbitraire.
const port = 3000;

//Mise en place d'un console log pour indiquer que le serveur est en écoute sur le port que nous avons défini.
app.listen(port, () => console.log(`En écoute sur le port ${port}!`));

//création de l'application express.js
app.use(express.json());
app.use("/api/",router.router)