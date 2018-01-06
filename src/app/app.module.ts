import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListaDeVideosComponent } from './components/lista-de-videos/lista-de-videos.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';

import { ListaDeVideosService } from './services/lista-de-videos.service';

const rutasApp = [
  { path: 'lista-video', component: ListaDeVideosComponent },
  { path: 'video-player', component: VideoPlayerComponent },
  { path: '', component: ListaDeVideosComponent },
  { path: '**', component: ListaDeVideosComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaDeVideosComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(rutasApp)
  ],
  providers: [ListaDeVideosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
