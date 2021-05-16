import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[outsideClick]'
})
export class OutsideClickDirective {
  @Output() clickOutside = new EventEmitter<MouseEvent>();

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;

      if (targetElement && !this.elementRef.nativeElement.contains(targetElement)) {
         this.clickOutside.emit(event);
      }
  }
}
