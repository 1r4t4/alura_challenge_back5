const Router = require ('express');
const VideosController = require ('../controllers/VideosController')

const router = Router();

router.get('/videos', VideosController.pegaTodosOsVideos)
router.get('/videos/busca', VideosController.pegaVideoPeloTitulo)
router.get('/videos/:id', VideosController.pegaUmVideo)
router.post('/videos/criarvideo', VideosController.criaNovoVideo)
router.put('/videos/atualizarvideo/:id', VideosController.atualizaVideo)
router.delete('/videos/apagarvideo/:id', VideosController.apagaVideo)

module.exports = router