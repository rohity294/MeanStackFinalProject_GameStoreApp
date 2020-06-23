import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GameDataService } from '../game-service.service';
import { Game } from '../game';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-details-page',
    templateUrl: './details-page.component.html',
    styleUrls: ['./details-page.component.css'],
    providers: [GameDataService]
})
export class DetailsPageComponent implements OnInit {

    constructor(
        private gameDataService: GameDataService,
        private route: ActivatedRoute) {
    }
    newGame: Game;
    ngOnInit(): void {
        this.route.params.pipe(switchMap((params: Params) => {
                return this.gameDataService.getSingleGame(params['gameid'])
            }))
            .subscribe((newGame: Game) => {
                this.newGame = newGame;
                this.pageContent.header.title = newGame.name;
                this.pageContent.header.body = "Details for selected game";
            });
    }
    pageContent = {
        header: {
            title: '',
            body: ''
        }
    };

    public deleteGame(newGame: Game): void {
        this.gameDataService.deleteGame(newGame._id);
        window.location.href = '';
    }

    public updateGame(newGame: Game): void {
        this.gameDataService.updateGame(newGame);
        window.location.href = '';
    }
}
