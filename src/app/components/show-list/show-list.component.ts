import { Component, OnInit } from '@angular/core';
import { Show } from '../../model/show';
import { ShowDataService} from '../../service/show-data.service';
@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  editShow: Show;
  constructor(private showDataService: ShowDataService) { 
    
  }

  get shows(): Show[ ] {
    return this.showDataService.shows;
  }

  edit(show: Show){
    this.editShow = show;
  }

  saveEdit(){
    this.showDataService.saveEditShow();
    this.editShow = null;
  }

  toEdit(show: Show): boolean{
    if (!this.editShow) {
      return false;
    } else if (this.editShow!== show) {
      return false;
    } else {
      return true;
    }
  }
  delete(show: Show){
    this.showDataService.deleteShow(show);
  }

  showDetails(show: Show){
    this.showDataService.showShowDetails(show);
  }

  ngOnInit() {
  }

}