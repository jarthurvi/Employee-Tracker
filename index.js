const inquirer = require("inquirer")
const db = require("./db")

init()

function init() {
    console.log('Welcome To Your Employee Management System')
    mainMenu()


}

function mainMenu() {

    inquirer.prompt([

        {
            type: "list",
            name: "mainMenuchoice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View All Employees",
                    value: "view_employees"
                },
                {
                    name: "View All Departments",
                    value: "view_departments"
                }
            ]
        }
    ]).then(response => {
        let userChoice = response.mainMenuchoice;
        console.log(userChoice)

        switch(userChoice){
            case "view_employees":
                viewEmployees();
                break;
            case "view_departments":
                viewDepartments();
                break;
        }
    })
}

function viewEmployees(){
    db.getAllEmployees()
    .then(([rows])=>{
        let employees = rows;
        console.table(employees)
    })
    .then(()=> mainMenu())
}