import express = require('express');
import {  scrapeService} from '../services/container'

export default class ScrapeController {

    public static async triggerOneCompany(req: express.Request, res: express.Response){
        const { companyId } = req.body;

        await scrapeService.triggerOne(parseInt(companyId));
    }

    public static async triggerAllCompanies(req: express.Request, res: express.Response){
        await scrapeService.triggerAll()
    }
}