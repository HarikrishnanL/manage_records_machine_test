import express, { Request, Response } from 'express'
import AddAdminUserUsecase from './Usermanagement/AddAdminUserUsecase'

const router = express.Router();

router.post('/portal_stores/admin', async (request: Request, response: Response) => {
    const useCase = AddAdminUserUsecase.create(request, response)
    await useCase.executeAndHandleErrors()
});

export default router