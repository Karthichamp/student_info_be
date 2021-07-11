const studentControllers = require('../controllers/studentControllers');

module.exports = (app) => {
    app.post('/api/student/add', studentControllers.add);
    app.post('/api/student/update/:studentId', studentControllers.update);
    app.delete('/api/student/delete/:studentId', studentControllers.delete);
    app.get('/api/student/report', studentControllers.report);
};