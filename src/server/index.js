const path = require('path');
const express = require('express');
const cors = require('cors');

const { POINTY_PORT = 3000 } = process.env;

const app = express();
app.use(cors());

app.use('/', express.static(path.join(__dirname, 'static')))

const router = express.Router();
app.use('/api', router);

router.get('/status', (req, res) => {
  res.status(200).json({ status: ':thumbsup:' })
});

app.listen(POINTY_PORT, () => console.log(`Listening on port ${POINTY_PORT}`));