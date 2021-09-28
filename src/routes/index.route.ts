import express = require("express");

const router = express.Router();

// Fetch all
router.get("/", async(req: express.Request, res: express.Response) => {
    // Controller.fetchall
})

router.get("/:companyId", async(req: express.Request, res: express.Response) => {
    // Controller.fetchone
})

export = router;