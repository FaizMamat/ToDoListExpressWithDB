import {UserController} from "./controller/UserController";
import {ListToDoController} from "./controller/ListTodoController";

export const Routes = [
{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, 
{
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, 
{
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, 
{
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},

{   
    method: "get",
    route: "/todos",
    controller: ListToDoController,
    action: "all"
}, 
{
    method: "get",
    route: "/todos/:id",
    controller: ListToDoController,
    action: "one"
}, 
{
    method: "post",
    route: "/todos",
    controller: ListToDoController,
    action: "addNew"
}, 
{
    method: "delete",
    route: "/todos/:id",
    controller: ListToDoController,
    action: "remove"
}, {
    method: "put",
    route: "/todos/:id",
    controller: ListToDoController,
    action: "markComplete"
}, {
    method: "post",
    route: "/todos/updatetask/:id",
    controller: ListToDoController,
    action: "updateTask"
}, {
    method: "get",
    route: "/listall",
    controller: ListToDoController,
    action: "listAll"
},
{
    method: "get",
    route: "/todos/",
    controller: ListToDoController,
    action: "filterPersonal"
},
{
    method: "get",
    route: "/todos",
    controller: ListToDoController,
    action: "filterWork"
},
{
    method: "get",
    route: "/todosFamily",
    controller: ListToDoController,
    action: "filterFamily"
}

];