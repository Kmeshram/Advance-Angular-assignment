import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit, OnDestroy {
  techStatus: any;
  techStatus2: any
  subs2!: Subscription;
  names:any;
  nameStatus!: any;
  constructor(private designUtility: DesignUtilityService) { }
  ngOnInit() {
    // Ex:01 -Maanual 
    const cusObs1 = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next('Angular');

      }, 1000);
      setTimeout(() => {
        observer.next('TypeScript');

      }, 2000);
      setTimeout(() => {
        observer.next('JavaScript');
        // observer.error(new Error('Limit Extended'));
        // this.techStatus='error'
      }, 3000);
      setTimeout(() => {
        observer.next('HTML CSS');

      }, 4000); setTimeout(() => {
        observer.next('JQuery');
        observer.complete();
        // this.techStatus='completed'
      }, 5000);
    })


    //subscribe:data, error, completed
    cusObs1.subscribe((res: any) => {
      // console.log(res);
      this.designUtility.print(res, 'elContainer')
    },
      (err: any) => {
        this.techStatus = 'error'
      },
      () => {
        this.techStatus = 'completed'
      }

    )


    // ex-02: custom Observable  
    const Arr2 = ['Angular', 'JavaScript', 'TypeScript', 'HTML And CSS', 'JQuery']
    const custObs2 = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(Arr2[count]);
        count++;
        if (count >= 3) {
          observer.error('data emit')
        }
        if (count >= 5) {
          observer.complete()
        }
      }, 1000)
    })

    this.subs2 = custObs2.subscribe((res: any) => {
      // console.log(res)
      this.designUtility.print(res, 'elContainer2');
    }, (err: any) => {
      this.techStatus2 = 'error'
    },
      () => {
        this.techStatus2 = 'completed'
      } )



    // Ex:03-Random names 
    const Arr3 = ['Ram', 'Josan', 'Alexa', 'Anup', 'Shekhar' , 'Sharma']

    const custObs3 = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(Arr3[count]);
        count++;
        if (count >= 3) {
          // observer.error('data emit')
        }
        if (count >= 6) {
          observer.complete()
        }
      }, 1000)

    })

    custObs3.subscribe((res: any) => {

      this.names=res;

},
     (err: any) => {
      this.nameStatus = 'error'
    },
      () => {
        this.nameStatus = 'completed'
      }
       )

  }
  ngOnDestroy() {
    this.subs2.unsubscribe()
  }
}
