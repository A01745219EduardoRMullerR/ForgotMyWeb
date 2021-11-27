const router = require('express').Router()
const controllerTareas = require('../controllers/tareas')

router.get('/tarea', controllerTareas.getTareas)
router.post('/agregarTarea', controllerTareas.agregarTarea)
router.post('/actualizarTarea', controllerTareas.actualizarTarea)
router.post('/eliminarTarea',controllerTareas.borrarTarea)

module.exports = router