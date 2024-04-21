import { Router } from 'express'
import { ReparationController } from '../controllers';
import { authMiddleware } from '../middlewares/auth.middleware';

const reparationRouter = Router()

reparationRouter.get('/',authMiddleware ,ReparationController.getAll)
reparationRouter.get('/:id', authMiddleware,ReparationController.getOne)
reparationRouter.post('/', authMiddleware,ReparationController.create)
reparationRouter.patch('/:id', authMiddleware,ReparationController.update)
reparationRouter.delete('/:id', authMiddleware,ReparationController.delete)
reparationRouter.get('/pdf/:id', ReparationController.getPdf)

export default reparationRouter
