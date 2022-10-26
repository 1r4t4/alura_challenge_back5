const database = require ('../models');

class VideosController {
    static async pegaTodosOsVideos (req,res) {
        try {
        const todosOsVideos = await database.Videos.findAll()
        return res.status(200).json(todosOsVideos)
    } catch (error) {
        return res.status(500).json(error.message)
        } 
    }

    static async pegaUmVideo(req, res) {
        const { id } = req.params
        try {
          const umVideo = await database.Videos.findOne( { 
            where: { 
              id: Number(id) 
            }
          })
          return res.status(200).json(umVideo)
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }

      static async criaNovoVideo(req, res) {
        const novoVideo = req.body
        try {
          const novoVideoCriado = await database.Videos.create(novoVideo)
          return res.status(200).json(novoVideoCriado)
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }

      static async atualizaVideo(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
          await database.Videos.update(novasInfos, { where: { id: Number(id) }})
          const videoAtualizado = await database.Videos.findOne( { where: { id: Number(id) }})
          return res.status(200).json(videoAtualizado)
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }

      static async apagaVideo(req, res) {
        const { id } = req.params
        try {
          await database.Videos.destroy({ where: { id: Number(id) }})
          return res.status(200).json({ mensagem: `id ${id} deletado` })
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
}

module.exports = VideosController;