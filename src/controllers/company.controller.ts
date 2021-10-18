import express = require('express');
import { companyService } from '../services/container'

export default class CompanyController {

    public static async fetchOneCompany(req: express.Request, res: express.Response){
        const { companyId } = req.params;
        const companyRecords: any[] = await companyService.fetchOne(parseInt(companyId));
        res.status(200).send(companyRecords);
    }

    public static async fetchAllCompanies(req: express.Request, res: express.Response){
        const companiesRecords: any[] = await companyService.fetchAll();
        res.status(200).send(companiesRecords);
    }

}