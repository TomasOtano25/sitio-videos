import { Component, OnInit } from '@angular/core';
import { ListaDeVideosService } from '../../services/lista-de-videos.service';

@Component({
  selector: 'app-lista-de-videos',
  templateUrl: './lista-de-videos.component.html',
  styleUrls: ['./lista-de-videos.component.scss'],
  providers: [ListaDeVideosService]
})
export class ListaDeVideosComponent implements OnInit {

  videos: Array<Object>;
  rutaServer: string;

  constructor(private listaDeVideos: ListaDeVideosService) { }

  ngOnInit() {
    this.videos = [];
    this.rutaServer = 'http://localhost/API/uploads/';
    this.peticionExterna();
  }

  peticionExterna(): void {
    this.listaDeVideos.getListaDeVideos().subscribe((videos) => {
      this.videos.map((res)=>{
        console.log(res)
      })
      console.log(videos);
    });
  }
}
