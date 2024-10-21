const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/info', studentController.getInfo);
router.post('/students', studentController.createStudent);
router.get('/students', studentController.getAllStudents);
router.get('/students/:id', studentController.getStudentById);
router.put('/students/:id', studentController.updateStudent);
router.delete('/students/:id', studentController.deleteStudent);

module.exports = router;