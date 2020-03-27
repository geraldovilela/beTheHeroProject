const express = require('express');
const OngCrontroller = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session',SessionController.create)

routes.get('/ongs', OngCrontroller.index);
routes.post('/ongs', OngCrontroller.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;
