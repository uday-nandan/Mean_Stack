import { Component } from '@angular/core';
import {GameService} from "./game.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  constructor( public gameService: GameService){
  
  }

  resetGame(){
    this.gameService.newGame()
  }
}
