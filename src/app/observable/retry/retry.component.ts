import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent {
  person: any;
  fetching: boolean = false;
  Status: string = 'No Data'
  constructor(private http: HttpClient) { }
  ngOnInit() {
    // this.fetchDeail();
  }
  fetchDeail() {
    this.fetching = true
    this.http.get("https://jsonplaceholder.typicode.com/users/1").pipe(
      // retry(2)
      retryWhen(err => err.pipe(
        delay(3000), scan((retryCount) => {
          if (retryCount >= 5) {
            throw err;
          }
          else {
            retryCount = retryCount + 1;
            console.log('retryCount=>' + retryCount)
            this.Status = 'Retrying Attempt #' + retryCount
            return retryCount
          }
        }, 0)
      ))
    )
      .subscribe(res => {
        this.person = res;
        this.fetching = false;
        this.Status = 'Data Fetched'
        console.log(this.person)
      }, (err) => {
        console.log(err);
        this.fetching = false
        this.Status = 'Problem Fetcheing Data'

      }
      )
  }
}
