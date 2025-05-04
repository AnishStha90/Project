const express = require('express');
require('dotenv').config();
require('./database/connection');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const UserRoute = require('./routes/userRoute');
const CategoryRoute = require('./routes/categoryRoute')
const MenuRoute = require('./routes/menuRoute');
const TableRoute = require('./routes/tableRoute');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// ✅ Serve static files from public/uploads
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// Routes
app.use(UserRoute);
app.use(CategoryRoute);
app.use(MenuRoute);
app.use(TableRoute);

app.listen(port, () => {
    console.log(`App started successfully at port ${port}`);
});
