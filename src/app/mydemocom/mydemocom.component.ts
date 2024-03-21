import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToastService } from '../toast.service';
@Component({
  selector: 'app-mydemocom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mydemocom.component.html',
  styleUrl: './mydemocom.component.scss',
  animations: [    
    trigger('toastTrigger', [ // This refers to the @trigger we created in the template      
      state('open', style({ transform: 'translateY(0%)' })), // This is how the 'open' state is styled      
      state('close', style({ transform: 'translateY(-200%)' })), // This is how the 'close' state is styled      
      transition('open <=> close', [ // This is how they're expected to transition from one to the other         
        animate('300ms ease-in-out')
      ])    
    ])  
  ]
})
export class MydemocomComponent {
  isAlertVisible:boolean=false
  toastClass = ['toast-class'];  
  toastMessage = 'This is a toast';  
  showsToast = false;  

  constructor( public toast:ToastService) { }  

  ngOnInit(): void {    
 
  }

showAlert(){
this.isAlertVisible = true;
}

showToaster(){
  this.showsToast = true;    

 setTimeout(() => {      
      this.showsToast = false;    
    }, 3000); 
}
}
