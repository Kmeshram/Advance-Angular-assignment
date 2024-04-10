import { Component } from '@angular/core';
import { Subscription, from, interval, map } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  sub1!: Subscription;
  sub2!: Subscription;
  msg1: any;
  msg2: any

  constructor(private designUtility:DesignUtilityService) { }
  ngOnInit() {
    const broadCastVideos = interval(1000);
    // Ex-01 
    this.sub1 = broadCastVideos.pipe(
      map(data => 'Video' + ' ' + data)
    )
      .subscribe(res => {
        this.msg1 = res
      })

    setTimeout(() => {
      this.sub1.unsubscribe()
    }, 10000);



    // Ex-02 
    this.sub2 = broadCastVideos.pipe(
      map(data => data * 3)
    )
      .subscribe(res => {
        this.msg2 = res
      })

    setTimeout(() => {
      this.sub2.unsubscribe()
    }, 10000);


    // Ex-03 

    const member = from([
      { id: 1, name: 'Anup' },
      { id: 2, name: 'Rajesh' }, 
      { id: 3, name: 'Komal' }, 
      { id: 4, name: 'Trupti' }, 
      { id: 5, name: 'Dipali' }, 
      { id: 6, name: 'Nikhil' }, 
      { id: 7, name: 'Anupama' }, 
      { id: 8, name: 'Vivek' },
      { id: 9, name: 'Jitesh' },
      { id: 10, name: 'Nalini' }

    ])
member.pipe(
  map(data=>data.name)
)
.subscribe(res=>{
  this.designUtility.print(res, 'elContainer')
})
  }
}
