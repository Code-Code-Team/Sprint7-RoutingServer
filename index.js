const express = require('express');
const path = require('path');
const MainRouter = require('./routes/MainRouter');
const UserRouter = require('./routes/UserRouter')

const app = express();
const port = 3000;

app.use('/', MainRouter);

app.use('/user', UserRouter);

app.listen(port, () => {
	console.log(`I'am listening on port ${port}`);
});
