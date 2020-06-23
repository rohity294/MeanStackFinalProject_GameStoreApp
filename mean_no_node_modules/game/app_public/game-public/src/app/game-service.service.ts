import { Injectable } from '@angular/core';
import { Game } from './game';
import { Http, Response } from '@angular/http';

@Injectable()
export class GameDataService {

    private gamesUrl = 'http://localhost:3000/api/games';

    constructor(private http: Http) { }

    getGames(): Promise<void | Game[]> {
        return this.http.get(this.gamesUrl)
            .toPromise()
            .then(response => response.json() as Game[])
            .catch(this.handleError);
    }
    getSingleGame(gameId: String): Promise<void | Game> {
        return this.http.get(this.gamesUrl + '/' + gameId)
            .toPromise()
            .then(response => response.json() as Game)
            .catch(this.handleError);
    }
    createGame(newGame: Game): Promise<void | Game> {
        return this.http.post(this.gamesUrl, newGame).toPromise().then(response => response.json() as Game).catch(this.handleError);
    }

    deleteGame(selectedGame: String): Promise<void | Game> {
        return this.http.delete(this.gamesUrl + '/' + selectedGame)
            .toPromise().then(response => response.json() as Game).
            catch(this.handleError);
    }

    updateGame(newGame: Game): Promise<void | Game> {
        return this.http.put(this.gamesUrl + '/' + newGame._id, newGame).toPromise().then(response => response.json() as Game).catch(this.handleError);
    }
    private handleError(error: any) {
        console.log("error");
    }
}


