import {Component, ViewEncapsulation} from '@angular/core';

import {AppState} from '../../../app.state';

@Component({
    selector:'navbar',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./navbar.scss'],
    templateUrl: './navbar.html'
})

export class Navbar{
    public isMenuCollapsed:boolean = false;

    constructor(private _state:AppState) {
        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });
    }

    public toggleMenu() {
        this.isMenuCollapsed = !this.isMenuCollapsed; 
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);   
    }
}