import express, { Request, Response } from "express";
import SendEmailUseCase from "./SendEmails/SendEmailUseCase";

const router = express.Router();

router.post('/mail', async (request: Request, response: Response) => {
    const useCase = SendEmailUseCase.create(request, response);
    await useCase.executeAndHandleErrors()
})

export default router;