import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
  data$ = this.dataService.fetchData();

data:any;
datab$!: Observable<any>;

constructor(private dataService:DataService){

}
ngOnInit(): void {
  // this.dataService.fetchData().subscribe({
  //   next: (response) => {
  //     this.data = response;
  //   },
  //   error: (error) => {
  //     console.error('Error fetching data:', error);
  //   }
  // });


  this.datab$ = this.dataService.getData();
    // this.dataService.fetchData();
}

}
