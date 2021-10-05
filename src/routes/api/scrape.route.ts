import express = require("express");

import ScrapeController from '../../controllers/scrape.controller';

const router = express.Router();

// Trigger all
router.get("/", async(req: express.Request, res: express.Response) => {
    await ScrapeController.triggerAllCompanies(req, res);
})

// Trigger one
router.get("/:companyName", async(req: express.Request, res: express.Response) => {
    await ScrapeController.triggerOneCompany(req, res);
})

export = router;