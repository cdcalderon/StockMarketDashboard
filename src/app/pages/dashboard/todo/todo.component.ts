import { Component, ViewEncapsulation } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
    selector: 'todo',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./todo.scss'],
    templateUrl: './todo.html',
    providers: [TodoService]
})

export class TodoComponent {
    public todoList:Array<any>;
    public newTodoText:string = '';

    constructor( private _todoService:TodoService) {
        this.todoList = this._todoService.getTodoList();
    }

    public  getNotDeleted() {
        return this.todoList.filter((item:any) => {
            return !item.deleted
        })
    }


    public addToDoItem($event) {
        if (($event.which === 1 || $event.which === 13) && this.newTodoText.trim() != '') {
            this.todoList.unshift({
                text: this.newTodoText
            });
            this.newTodoText = '';
        }
    }

}