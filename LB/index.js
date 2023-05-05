import express from "express";

const app = express();
const port = 3000;

/* Testdaten mit GPT generiert */
let tasks = [
    {
      id: "1",
      title: "Einkaufen gehen",
      creationDate: "2023-05-01",
      completionDate: null
    },
    {
      id: "2",
      title: "Geburtstagsgeschenk für Freund kaufen",
      creationDate: "2023-04-29",
      completionDate: "2023-05-02"
    },
    {
      id: "3",
      title: "Auto waschen",
      creationDate: "2023-04-30",
      completionDate: null
    }
  ];
  

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/tasks', function (req, res) {
    res.status(200).send(tasks);
});

/* Inspiriert von von eigenen Unterlagen */
app.post('/tasks', function (req, res) {
    const id = tasks.length + 1;
    const title = req.query.title;
    const newTask = {
        id: id,
        title: title,
        creationDate: new Date().toISOString().slice(0, 10),
        completionDate: null
    };
    tasks.push(newTask);
    res.status(201).send(newTask);
});

app.get('/tasks/:id', function (req, res) {  
    const id = req.params.id;
    
    /* Inspiriert von Input*/
    const task = tasks.find(task => task.id === id);
    if (task) {
        res.status(200).send(task);
    } else {
        res.sendStatus(404);
    }
});

/* Teilweise inspiriert von function Input*/
app.put('/tasks/:id', function (req, res) {
    const id = req.params.id;
    const task = tasks.find(task => task.id === id);
    if (task) {
        const updatedTask = {
            id: task.id,
            titel: req.query.title,
            creationDate: req.query.creationDate,
            completionDate: req.query.completionDate
        };
        tasks = tasks.map(task => task.id === id ? updatedTask : task);
        res.status(200).send(updatedTask);
    } else {
        res.sendStatus(404);
    }
});

/* von Unterlagen inspiriert */
function remove(id) {
    tasks = tasks.filter(task => task.id !== id);
}

app.delete('/tasks/:id', function (req, res) {
    const id = req.params.id;
    const task = tasks.find(task => task.id === id);
    if (task) {
        const deletedfile = task
        remove(task.id)
        res.status(200).send(deletedfile)
    } else {
        res.status(404)
    }
});

app.listen(port, function () {
    console.log(`Der Serverläuft auf dem port: ${port}`)
});