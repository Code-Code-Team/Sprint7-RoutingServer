const express = require('express');
const path = require('path');
const MainRouter = require('./routes/MainRouter');
const UserRouter = require('./routes/UserRouter')

const app = express();
const port = 3000;

const viewsPath = path.join(__dirname,"views") 

app.set("view engine", "ejs")
app.set("views" , viewsPath)

app.use('/', MainRouter);

app.use('/register', UserRouter);

app.listen(port, () => {
	console.log(`I'am listening on port ${port}`);
});
