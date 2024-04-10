import { Component } from '@angular/core';
import { Subscription, interval, map, tap } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent {

  constructor(private du: DesignUtilityService) { }
  myColor:string=''

  ngOnInit() {
    const Arr = ['Anup', 'Ram', 'Shyam', 'John', 'Alexa', 'Nikita', 'Anupama']
    const source = interval(1500);
    // Ex:01 
    let obsSub!: Subscription;
    obsSub = source.pipe(
      tap(res => {
        console.log('tap before', res)
        if (res === 4) {
          obsSub.unsubscribe()
        }
      }
      ),
      map(res => Arr[res]),
      tap(res => console.log('tap after', res))

    ).subscribe(res => {
      // console.log(res);
      this.du.print(res, 'elContainer')
    })


    // Ex-02 
    const colors = ['Red', 'Green', 'Yellow', 'Pink', 'orangered', 'blue', 'Orange']
    let obsSub2!: Subscription;
    obsSub2 = source.pipe(
      tap(res => {
        this.myColor=colors[res],

        console.log('tap before', res)
        if (res === 7) {
          obsSub2.unsubscribe()
        }
      }
      ),
      map(res => colors[res]),
      tap(res => console.log('tap after', res))

    ).subscribe(res => {
      // console.log(res);
      this.du.print(res, 'elContainer2')
    })
  }
}
