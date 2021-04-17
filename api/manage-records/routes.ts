import express, { Request, Response } from "express";
import ManageRecordsUseCase from "./ManageRecordsUseCase";

const router = express.Router();

router.get('/records/:pageNumber', async (request: Request, response: Response) => {
    const useCase = ManageRecordsUseCase.create(request, response);
    await useCase.executeAndHandleErrors()
})

export default router;