import express from "express";

const app = express();
const port = 3000;

/* Testdaten mit GPT generiert */
let tasks = [
    {
      id: "1",
      title: "Einkaufen gehen",
      creationDate: new Date("2023-05-01"),
      completionDate: null
    },
    {
      id: "2",
      title: "Geburtstagsgeschenk für Freund kaufen",
      creationDate: new Date("2023-04-29"),
      completionDate: new Date("2023-05-02")
    },
    {
      id: "3",
      title: "Auto waschen",
      creationDate: new Date("2023-04-30"),
      completionDate: null
    }
  ];
  

app.use(express.json);
app.use(express.urlencoded({ extended: true }));

app.get('/tasks', function (req, res) {
    res.send(tasks);
});


app.listen(port, function () {
    console.log(`Der Serverläuft auf dem port: ${port}`)
});