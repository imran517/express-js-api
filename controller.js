
const Service = require('./service');

function getTasks (req, res) {
    let tasks = new Service().getTasks();
    res.json(tasks);
}

function getTask (req, res) {
    let task = new Service().getTask(Number(req.params.id));
    res.json(task);
}

function addTask(req, res) {
    let result = new Service().addTask(req.body);
    res.json(result);
}

function updateTask(req, res) {
    let result = new Service().updateTask(req.body);
    res.json(result);
}

function deleteTask(req, res) {
    let result = new Service().deleteTask(req.body);
    res.json(result);
}

module.exports =  { getTasks, getTask, addTask, updateTask, deleteTask }