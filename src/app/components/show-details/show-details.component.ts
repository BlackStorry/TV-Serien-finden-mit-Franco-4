import { Component, OnInit } from '@angular/core';
import { ShowDataService } from '../../service/show-data.service';
import { Show } from '../../model/show';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  constructor(private showDataService: ShowDataService) { }

  ngOnInit() {
  }

  get show(): Show {
    return this.showDataService.detailShow;
  }

}