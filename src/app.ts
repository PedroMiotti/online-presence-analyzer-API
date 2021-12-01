import express = require('express');
const app: express.Application = express();

import cors = require("cors");

import Company = require('./routes/api/company.route');
import Scrape = require('./routes/api/scrape.route');

// CONFIG
app.use(cors('*'));

app.use("/api/v1/company", Company);
app.use("/api/v1/scrape", Scrape);

const PORT: (string | number) = process.env.PORT || 5200;
app.listen(PORT, () => console.log(`Server Up ! Listening on port ${PORT}`));
