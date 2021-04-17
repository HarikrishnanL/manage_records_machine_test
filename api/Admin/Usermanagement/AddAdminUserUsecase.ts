import BaseUseCase from "../../BaseUseCase";
import AddAdminRequestModel from './AddAdminRequestModel'
import AddAdminJoiValidation from './AddAdminJoiValidation'
import { Request, Response } from 'express'


class AddAdminUserUsecase extends BaseUseCase {

    constructor(request: Request, response: Response) {
        super(request, response);
    }

    private requestData: AddAdminRequestModel;

    public validate(): any {
        try {
            this.requestData = this.request.body;
            this.joiValidationUtil(AddAdminJoiValidation, this.requestData);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    // method to add admin to database
    public async execute() {
        try {
            this.validate()
            return ({ code: 200, response: 'success' })
        } catch (error) {
            console.log(error, 'error');
            throw error
        }
    }

    public static create(request, response) {
        const useCase = new AddAdminUserUsecase(request, response)
        return useCase;

    }

}

export default AddAdminUserUsecase