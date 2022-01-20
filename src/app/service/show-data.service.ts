import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Show } from '../model/show';
@Injectable()
export class ShowDataService {
  shows: Show[] = [];
  detailShow: Show;
  constructor(private httpClient: HttpClient) {
    this.shows.push(new Show(1, 'Paw Patrol'));
    this.shows.push(new Show(2, 'Navy Cis'));
    this.shows.push(new Show(3, 'Naruto'));
    this.shows.push(new Show(4, 'Hinata'));
  }

  saveShow(show: Show) {
    this.shows.push(show);
    this.transform(this.shows);
  }

  saveEditShow(){
    this.transform(this.shows);
  }

  deleteShow(show: Show) {
    this.shows = this.shows.filter(s => s !== show);
    this.transform(this.shows);
  }

  transform(shows: Show[]): Show[] { 
    shows.sort((a: Show, b: Show) => { 
      if (a.id < b.id) { 
        return -1; 
      } else if (a.id > b.id) {
        return 1; 
      } else { 
        return 0; 
      } 
    }); 
      return shows; 
  }
  
  async showShowDetails(show: Show): Promise<void> {
    try{
      const data: any = await lastValueFrom(this.httpClient.get('https://api.tvmaze.com/singlesearch/shows?q=' + show.titel));
    show.summary = data.summary;
    show.image = data.image.original;
    this.detailShow = show;
    } catch (e) {
      alert('Es wurde leider keine passende Show gefunden!');
    }
  }
  
}
