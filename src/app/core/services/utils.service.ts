import { ElementRef, Injectable, Renderer2 } from '@angular/core';
import { ScriptStore } from '@core/store/script.store';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private scripts: any = {};

  constructor(private el: ElementRef,
              private render: Renderer2) {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }

  /**
   * this.loadCSS('./assets/css/style.css');
   */
  loadCSS(styleUrl: string) {
    return new Promise((resolve, reject) => {
      const styleElement = document.createElement('link');
      styleElement.href = styleUrl;
      styleElement.type = 'text/css';
      styleElement.rel = 'stylesheet';
      styleElement.onload = resolve;
      this.render.appendChild(this.el.nativeElement, styleElement);
    });
  }


  /**
   *
   * this.script.load('filepicker', 'rangeSlider').then(data => {console.log('script loaded ', data)}).catch(error => console.log(error));
   */
  load(...scripts: string[]) {
    var promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  private loadScript(name: string) {
    return new Promise((resolve, reject) => {
      //resolve if already loaded
      if (this.scripts[name].loaded) {
        resolve({script: name, loaded: true, status: 'Already Loaded'});
      }
      else {
        //load script
        let script: any = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        if (script.readyState) {  //IE
          script.onreadystatechange = () => {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
              script.onreadystatechange = null;
              this.scripts[name].loaded = true;
              resolve({script: name, loaded: true, status: 'Loaded'});
            }
          };
        } else {  //Others
          script.onload = () => {
            this.scripts[name].loaded = true;
            resolve({script: name, loaded: true, status: 'Loaded'});
          };
        }
        script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    });
  }
}
