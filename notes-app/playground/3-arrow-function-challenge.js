const tasks = {
    tasks: [{
        text: 'Grocery Shopping',
        completed: false
    },{
        text: 'Clean Yard',
        completed: true
    },{
        text: 'Film Course',
        completed: false
    }],
    getTasksToDo(){
         return (this.tasks).filter((task) =>task.completed === false)
             //return filteredtasks;
    }
}

console.log(tasks.getTasksToDo())