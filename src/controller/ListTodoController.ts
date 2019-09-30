import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {ListToDo} from "../entity/ListToDo";

export class ListToDoController {

    private todoRepository = getRepository(ListToDo);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.todoRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        let todos = await this.todoRepository.findOne(request.params.id);
        if( todos ){
            return todos
        } else {
            response.send("No to do list available")
        }
        
        return this.todoRepository.findOne(request.params.id);
    }

    async addNew(request: Request, response: Response, next: NextFunction) {
        return this.todoRepository.save({
            description: request.body.description,
            completed: request.body.completed,
            create_date: new Date(),
            complete_date: new Date(),
            notes: request.body.notes,
            category: request.body.category,
        });
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let taskRemove = await this.todoRepository.findOne(request.params.id);
        await this.todoRepository.remove(taskRemove);
    }

    async markComplete(request: Request, response: Response, next: NextFunction) {
        let taskComplete = await this.todoRepository.findOne(request.params.id);
        
        if (taskComplete.completed === false){
            taskComplete.completed = true;
            taskComplete.complete_date = new Date();
            response.send("Item updated to complete");
            return this.todoRepository.save(taskComplete);
            
        } else {
            response.send("This item is already complete")
        }
    }

    async updateTask(request: Request, response: Response, next: NextFunction) {
        let task = await this.todoRepository.findOne(request.params.id);
        
        task.description = request.body.description;
        task.notes = request.body.notes;
        task.category = request.body.category;
        response.send("Item updated")
        return this.todoRepository.save(task)
    }

    async listAll(request: Request, response: Response, next: NextFunction) {
        return this.todoRepository.createQueryBuilder("Todo").select(["Todo.description"]).getMany();   
    }

    async filterPersonal(request: Request, response: Response, next: NextFunction) {
        let PersonalList = await this.todoRepository.find({category: "Personal"});
        response.send(PersonalList);  
    }
    
    async filterWork(request: Request, response: Response, next: NextFunction) {
        let workList = await this.todoRepository.find({category: "Work"});
        response.send(workList);
    }

    async filterFamily(request: Request, response: Response, next: NextFunction) {
        let familyList = await this.todoRepository.find({category: "Family"});
        response.send(familyList);
    }

}