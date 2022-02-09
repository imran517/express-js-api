const model = require('./model');
const db = require('./database');

class Service {
    constructor () { }

    getTasks () {
        return db.tasks;
    }

    getTask (id) {
        let task = db.tasks.find( e=> e.id === id);
        if (task){
            return task;
        } else {
            return { message: `task ${id} not found`}
        }
    }

    addTask (task) {
        try{
            db.maxId++;
            task.id = db.maxId;
            db.tasks.push(task);
            return { message: "success" };
        } catch (error) {
            console.log(error);
            return { message: "failure" };
        }
    }

    updateTask (task) {
        try{
            let taskIndex = db.tasks.findIndex((e => e.id == task.id));
            if(taskIndex > -1)
            {
                db.tasks[taskIndex] = task;
                return { message: "success" };
            }
            return { message: `task ${task.id} not found`}
        } catch (error) {
            console.log(error);
            return { message: "failure" };
        }
    }
    
    deleteTask (task) {
        try{
            let taskIndex = db.tasks.findIndex((e => e.id == task.id));
            if(taskIndex > -1)
            {
                db.tasks.splice(taskIndex, 1);
                return { message: "success" };
            }
            return { message: `task ${task.id} not found`}
        } catch (error) {
            console.log(error);
            return { message: "failure" };
        }
    }
}

module.exports = Service;
