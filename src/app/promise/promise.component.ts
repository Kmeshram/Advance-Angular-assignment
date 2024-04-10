import { Component } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent {
  constructor() { }
  promiseVal: any
  ngOnInit() {
  
    // console.log(this.getData());
    // this.getData().then(data => console.log(data))
    // this.getData().then(console.log)

  }

  dellAvailable() {
    return true
  }
  hpAvailable() {
    return false
  }


  dell = {
    barnd: 'Dell',
    hardDisk: '2TB',
    color: 'black'
  }
  hp = {
    barnd: 'Hp',
    hardDisk: '1TB',
    color: 'silver'
  }
  notAvailble = {
    barnd: 'Not Availble',
    Status: 'Failed'

  }


//   //async keyword always return the promise 
//   async getData() {
//     let response=await this.asynPromise
//     console.log(response)
//   }


//   asynPromise = new Promise((resolve, reject) => {
// setTimeout(() => {
//   resolve('Data Received')
// }, 2000);
//   })
buyLaptop = new Promise(
  (resolve, reject) => {
    // resolve('Promise Is resolved')
    // reject('Promise Is Reject')

    if (this.dellAvailable()) {
      setTimeout(() => {
        // resolve('Dell is Purchased')
        resolve(this.dell)
      }, 3000);
    }
    else if (this.hpAvailable()) {
      setTimeout(() => {
        // resolve('HP is Purchased')
        resolve(this.hp)

      }, 3000);

    }
    else {
      setTimeout(() => {
        // reject('Laptop is not available in stored')
        reject(this.notAvailble)
      }, 3000);

    }

  })

  // normal promise 
fetchData1(){
  this.buyLaptop.then(res => {
    console.log('then code =>', res)
    this.promiseVal = res
  }).catch(res => {
    this.promiseVal = res

    console.log('catch code =>', res)

  })
}

// async/await 
asyncpromiseVal:any
async fetchData2(){
let data= await this.buyLaptop
  this.asyncpromiseVal=data
}

// fetch api 
fechPromiseRes:any
buyLaptop2=fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())


// fetch api using promise
// fetchData3(){
//   this.buyLaptop2.then(res=>{
//     this.fechPromiseRes=JSON.stringify(res)
//   })
// }

// fetch api using async/await

async fetchData3(){
 
  this.fechPromiseRes=await (this.buyLaptop2)
}

}
