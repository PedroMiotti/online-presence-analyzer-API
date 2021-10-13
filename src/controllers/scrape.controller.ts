import express = require('express');
import { scrapeService } from '../services/container'

export default class ScrapeController {

    public static async triggerOneCompany(req: express.Request, res: express.Response){
        const { companyName } = req.params;

        const response = await scrapeService.triggerOne(companyName);

        res.status(response.data.status).send(response.data.companies)
    }

    public static async triggerAllCompanies(req: express.Request, res: express.Response){
        const response = await scrapeService.triggerAll();

        res.status(response.data.status).send(response.data.companies)

    }
}