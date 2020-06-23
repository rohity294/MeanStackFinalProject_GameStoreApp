import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { Component, OnInit } from '@angular/core';

import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { GameListComponent } from './game-list/game-list.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FrameworkComponent } from './framework/framework.component';
import { CreateComponent } from './create/create.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { IndoorComponent } from './indoor/indoor.component';
import { OutdoorComponent } from './outdoor/outdoor.component';


//export class TimeAgoExtendsPipe extends TimeAgoPipe { }
@NgModule({
    declarations: [
    
        GameListComponent,
    
        AboutComponent,
    
        HomepageComponent,
    
        HeaderComponent,
    
        FrameworkComponent,
    
        CreateComponent,
    
        DetailsPageComponent,
    
        IndoorComponent,
    
        OutdoorComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: '',
                component: HomepageComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'create',
                component: CreateComponent
            },
            {
                path: 'game/:gameid',
                component: DetailsPageComponent
            },
            {
                path: 'indoor',
                component: IndoorComponent
            },
            {
                path: 'outdoor',
                component: OutdoorComponent
            }
        ])
    ],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    bootstrap: [FrameworkComponent]

})
export class AppModule { }

export class Game {
    _id: String;
    name: String;
    type: String;
    players: Number;
    origin: String;
    stared: Boolean;
}
