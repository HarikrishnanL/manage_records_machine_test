import BaseUseCase from "../../BaseUseCase";
import { Request, Response } from 'express';
import schedule from 'node-schedule';
import transporter from "../../../domain/services/emailSend";
class SendEmailUseCase extends BaseUseCase {
    private requestData;
    constructor(request: Request, response: Response) {
        super(request, response);
    }

    public validate(): any {
        try {
            this.requestData = this.request.body;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    public async execute() {
        try {
            // let timer = schedule.scheduleJob('* * * * * *', async () => {
            let mailOptions = {
                from: "hari.hk1994@gmail.com",
                to: this.request.body.emailTo,
                subject: "Cron job",
                html: "<h1>welcome to jungle<h1>"
            }
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);

                } else {
                    console.log('Email sent:' + info.response)
                    transporter.close();

                    return { code: 200, message: "email send" }

                }
            })


            // })

        } catch (error) {
            console.log(error, 'error');
            throw error
        }
    }

    public static create(request, response) {
        const useCase = new SendEmailUseCase(request, response);
        return useCase;
    }
}

export default SendEmailUseCase;
