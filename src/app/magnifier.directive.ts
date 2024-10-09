import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMagnifier]',
  standalone: true
})
export class MagnifierDirective {

  constructor() { }
  @HostBinding('witdh') width = 200;
  @HostListener('mouseenter', ['$event'])
  onHover($event:MouseEvent){
    this.width = 300;
  }
}
