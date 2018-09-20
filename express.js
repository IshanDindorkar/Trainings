const express = require("express");
const app = express();

// Enable JSON parsing of request body, by default it is not enabled in ExpressJS
app.use(express.json())

const courses = [
    { id: 1, name: "course 1"},
    { id: 2, name: "course 2"},
    { id: 3, name: "course 3"}
];

// GET requests ...
app.get("/", (req, res) => {
    res.send("Welcome to training session on NodeJS & ExpressJS");
})

// Get all courses
app.get("/api/courses", (req, res) => {
    res.send(JSON.stringify(courses));
})

// Get specific course
app.get("/api/courses/:id", (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send("The course with given ID is not found");
        return;
    } else {
        res.send(course);
    }
})

// POST request ...
app.post("/api/courses", (req, res) => {
    // Validation
    if (!req.body.name || req.body.name.length < 3) {
        res.status(400).send("Bad request! course name doesn't exist or very short.");
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
})

// PUT request ...
app.put("/api/courses/:id", (req, res) => {
    // If course doesn't exist ...
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send("The course with given ID is not found");
        return;
    }

    // If there is some issue with request like name is invalid
    if (!req.body.name || req.body.name.length < 3) {
        res.status(400).send("Bad request! course name doesn't exist or very short.");
        return;
    }

    course.name = req.body.name;
    res.send(course);
})

// DELETE request ...
app.delete("/api/courses/:id", (req, res) => {
    // If course doesn't exist ...
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send("The course with given ID is not found");
        return;
    }

    courses.pop(course);
    res.send(course);
})

// Path and Query string parameters
app.get("/api/courses/:id/:year/:month", (req,res) => {   
    // Read single path parameter
    // res.send(req.params.id);

    // Read multiple path parameter
    // res.send(req.params);

    // Read query parameters
    // res.send(req.query);
})

// Start app ...
app.listen(3000, () => {
    console.log("Listening on port 3000 ...");
});