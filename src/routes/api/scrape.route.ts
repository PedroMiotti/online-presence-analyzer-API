import express = require("express");

import ScrapeController from '../../controllers/scrape.controller';

const router = express.Router();

router.get("/", async (req: express.Request, res: express.Response) => {
    await ScrapeController.triggerAllCompanies(req, res);
})

router.get("/:companyName", async (req: express.Request, res: express.Response) => {
    await ScrapeController.triggerOneCompany(req, res);
})

export = router;