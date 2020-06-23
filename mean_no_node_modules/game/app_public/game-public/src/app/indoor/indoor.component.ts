import { Component, OnInit, Injectable } from '@angular/core';
import {  GameDataService } from '../game-service.service';
import {Game} from '../game';


@Component({
  selector: 'app-indoor',
  templateUrl: './indoor.component.html',
  styleUrls: ['./indoor.component.css'],
  providers:[GameDataService]
})
export class IndoorComponent implements OnInit {

  constructor(private gameDataService : GameDataService) { }
  
  games : Game[];
  newGame : Game;

  ngOnInit(): void {

    this.gameDataService
    .getGames()
    .then((games : Game[])=>{
           this.games = games.map(game=>{
             if(game.type=="indoors")
             {
              console.log("check:"+game.type);
              game.type.fontcolor("orange");
             }
             else{
               console.log("check:"+game.type);
             }

            //  coding logic for filtering gamees of type = indoors
             
             if (game.type=="indoors"){
               game.type = game.name;
               game.type = game.type.toUpperCase();
             }

             else
             {
              game.type = ""; // preventing display of non-indoor games
             }

             return game;

           });
    });

  }

}
