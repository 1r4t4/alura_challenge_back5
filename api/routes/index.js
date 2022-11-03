const bodyParser = require ('body-parser');
const videos = require ('./videosRoute');
const categorias = require ('./categoriasRoute');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(videos)
    app.use(categorias)
    app.get('/', (req,res)=> res.send('Bem vinda à minha página de vídeos!'));
}