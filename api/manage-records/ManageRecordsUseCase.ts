import BaseUseCase from "../../api/BaseUseCase";
import { Request, Response } from 'express';
import data from "../../domain/records/records";
import schedule from 'node-schedule';
class ManageRecordsUseCase extends BaseUseCase {
    constructor(request: Request, response: Response) {
        super(request, response);
    }

    public validate(): any {
        try {
            // this.requestData = this.request.body;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    private filterRecordByDepositionAndColor(record) {
        return record.disposition === 'closed' && (record.color === 'red' || record.color === 'yellow' || record.color === 'blue')
    }

    public async execute() {
        try {
            const pageNumber = Number(this.request.params.pageNumber);
            const pageLimit = 10;
            const getlength = data.length;
            const totalPages = Math.ceil(getlength / pageLimit);

            if (pageNumber < 1 || pageNumber > totalPages) {
                throw new Error("Page number should greater than 1 and less than and equal to " + totalPages);
            }
            let startRecord = ((pageNumber - 1) * pageLimit);
            let lastRecordExclusive = pageNumber * 10;
            let getRecords = data.slice((startRecord), lastRecordExclusive)
            if (getRecords) {
                return {
                    code: 200,
                    data: getRecords,
                    ids: getRecords.map(record => record.id),
                    open: getRecords.filter(record => record.disposition === 'open'),
                    closeCount: getRecords.filter(record => this.filterRecordByDepositionAndColor(record)).length,
                    previousPage: (pageNumber > 1) ? (pageNumber - 1) : null,
                    nextPage: (pageNumber < totalPages) ? (pageNumber + 1) : null,
                    totalPages: totalPages
                }
            }

        } catch (error) {
            console.log(error, 'error');
            throw error
        }
    }

    public static create(request, response) {
        const useCase = new ManageRecordsUseCase(request, response);
        return useCase;
    }
}

export default ManageRecordsUseCase;
