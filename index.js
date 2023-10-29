const connectToMongo = require("./Database/db");
const express = require("express");
const app = express();
connectToMongo();
const port = 6109 || process.env.PORT;
var cors = require("cors");
const path = require('path');

app.use(cors());
app.use(express.json()); //to convert request data to json

app.get("/", (req, res) {
    res.setHeader("Access-Control-Allow-Credentials","true");
    res.send("Api is running");
});

// Credential Apis
app.use("/api/student/auth", require("./routes/Student Api/studentCredential"));
app.use("/api/faculty/auth", require("./routes/Faculty Api/facultyCredential"));
app.use("/api/admin/auth", require("./routes/Admin Api/adminCredential"));
// Details Apis
app.use("/api/student/details", require("./routes/Student Api/studentDetails"));
app.use("/api/faculty/details", require("./routes/Faculty Api/facultyDetails"));
app.use("/api/admin/details", require("./routes/Admin Api/adminDetails"));
// Other Apis
app.use("/api/timetable", require("./routes/timetable"));
app.use("/api/material", require("./routes/material"));
app.use("/api/notice", require("./routes/notice"));
app.use("/api/subject", require("./routes/subject"));
app.use("/api/marks", require("./routes/marks"));
app.use("/api/branch", require("./routes/branch"));




app.listen(port, () => {
    console.log('Server running successfully');
});
