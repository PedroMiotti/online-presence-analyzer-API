import express = require('express');
const app: express.Application = express();

import cors = require("cors");

// CONFIG
app.use(cors());

const PORT: (string | number) = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server Up ! Listening on port ${PORT}`));
