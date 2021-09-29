import express = require("express");

import CompanyController from '../../controllers/company.controller';

const router = express.Router();

// Fetch all
router.get("/", async(req: express.Request, res: express.Response) => {
    await CompanyController.fetchAllCompanies(req, res);
})

router.get("/:companyId", async(req: express.Request, res: express.Response) => {
    await CompanyController.fetchOneCompany(req, res);
})

export = router;