import express from 'express';

import ClassesController from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsControllers';

const routes = express.Router();
const classesController = new ClassesController(); 
const connectionsController = new ConnectionsController()

//Dados viram no corpo da requisição
routes.get('/classes', classesController.index)
routes.post('/classes', classesController.create)
//routes.get('/connections/:id',connectionsController.show)
routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)

export default routes;