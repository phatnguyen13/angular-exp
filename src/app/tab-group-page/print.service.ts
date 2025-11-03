import {inject, Injectable, Renderer2, RendererFactory2} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PrintService {
  private render: Renderer2;
  iframe!: HTMLIFrameElement ;

  constructor(renderFactor: RendererFactory2) {
    this.render = renderFactor.createRenderer(null, null);

  }


}
