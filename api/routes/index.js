const bodyParser = require ('body-parser');
const videos = require ('./videosRoute');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(videos)
    app.get('/', (req,res)=> res.send('Bem vinda à minha página de vídeos!'));
}