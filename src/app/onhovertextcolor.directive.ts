import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnhovertextcolor]',
  standalone: true
})
export class OnhovertextcolorDirective {

  constructor(private elRef: ElementRef) { 
  }
  @HostListener('mouseover') onMouseOver() {
    this.changeBackgroundColor('yellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('black');
  }
  private changeBackgroundColor(color: string) {
    this.elRef.nativeElement.style.color = color;
  }

}
