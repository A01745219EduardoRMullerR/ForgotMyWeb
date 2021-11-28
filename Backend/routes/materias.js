const router = require('express').Router()
const controllerMaterias = require("../controllers/materias")

router.get('/materias', controllerMaterias.getMaterias)
router.post('/agregarMateria', controllerMaterias.agregarMateria)
router.post('/actualizarMateria', controllerMaterias.actualizarMaterias)
router.post('/eliminarMateria',controllerMaterias.borrarMateria)

module.exports = router