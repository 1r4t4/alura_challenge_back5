const Router = require ('express');
const CategoriasController = require ('../controllers/CategoriasController')

const router = Router();

router.get('/categorias', CategoriasController.pegaTodasAsCategorias)
router.get('/categorias/:id', CategoriasController.pegaUmaCategoria)
router.get('/categorias/:id/videos', CategoriasController.pegaTodosVideosDaCategoria)
router.post('/categorias/criarcategoria', CategoriasController.criaNovaCategoria)
router.put('/categorias/atualizarcategoria/:id', CategoriasController.atualizaCategoria)
router.delete('/categorias/apagarcategoria/:id', CategoriasController.apagaCategoria)

module.exports = router