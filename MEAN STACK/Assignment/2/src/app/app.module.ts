import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { BoardComponent } from './board/board.component';
import { AppRoutingModule } from './app-routing.module';

import { SquareComponent } from './square/square.component';
import { GameService } from './game.service';

@NgModule({
  declarations: [
    AppComponent, 
    BoardComponent, 
    SquareComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
