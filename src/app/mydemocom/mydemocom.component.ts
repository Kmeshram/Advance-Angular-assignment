import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ToastService } from '../toast.service';
import { FormsModule } from '@angular/forms';
declare var $: any
@Component({
  selector: 'app-mydemocom',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
  isAlertVisible: boolean = false
  toastClass = ['toast-class'];
  toastMessage = 'This is a toast';
  showsToast = false;
  isLoader: boolean = false;
  commandName!: string;
  constructor(public toast: ToastService, private renderer: Renderer2) { }

  ngOnInit(): void {

  }

  showAlert() {
    this.isAlertVisible = true;
  }

  showToaster() {
    this.showsToast = true;

    setTimeout(() => {
      this.showsToast = false;
    }, 3000);
  }

  showLoader() {
    this.isLoader = true;

    setTimeout(() => {
      this.isLoader = false;
    }, 3000);

  }
  @ViewChild('inputConfirmModal') inputConfirmModal!: ElementRef;

  submit() {
    if (this.commandName != '' && this.commandName != null) {
      this.inputConfirmModal.nativeElement.style.display = 'none';
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        this.renderer.removeChild(document.body, backdrop);
      }
      this.commandName = ''
    }
  }
}
