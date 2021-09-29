import express = require('express');
import { companyService, scrapeService} from '../services/container'

export default class CompanyController {

    public static async fetchOneCompany(req: express.Request, res: express.Response){
        const { companyId } = req.body;
        await companyService.fetchOne(parseInt(companyId));
    }

    public static async fetchAllCompanies(req: express.Request, res: express.Response){
        await companyService.fetchAll();
    }

}