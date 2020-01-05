import { Directive, HostListener, ElementRef, Renderer, HostBinding} from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = 'yellow';
    // this._renderer.setElementStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'white';
    // this._renderer.setElementStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'white'
    // );
  }

  // @HostBinding('style.backgroundColor') backgroundColor: string
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  private backgroundColor: string;

  constructor(//private _elementRef: ElementRef,
              //private _renderer: Renderer
              ) { }


  

}
