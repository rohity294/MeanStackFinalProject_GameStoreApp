import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameDataService } from '../game-service.service';


@Component({
    selector: 'app-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css'],
    providers: [GameDataService]
})
export class GameListComponent implements OnInit {

    games: Game[]
    constructor(private gameService: GameDataService) { }
    ngOnInit(): void {
        this.gameService
            .getGames()
            .then((games: Game[]) => {
                this.games = games.map(game => {
                    return game;
                });
            });
    }
}

