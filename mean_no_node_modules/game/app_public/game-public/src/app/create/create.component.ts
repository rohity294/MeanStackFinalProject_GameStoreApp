import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../game';
import { GameDataService } from '../game-service.service';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css'],
    providers: [GameDataService]
})
export class CreateComponent implements OnInit {
    public newGame: Game = {
        _id: '',
        name: '',
        type: '',
        players: 0,
        origin: '',
        stared: false
    };


    constructor(private gameDataService: GameDataService) { }

    ngOnInit(): void {
    }
    public createNewGame(newGame: Game): void {
        this.gameDataService.createGame(newGame);
        window.location.href = '';
    }
}

