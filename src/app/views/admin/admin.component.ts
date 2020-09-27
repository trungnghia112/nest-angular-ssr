import { AfterViewInit, Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { UtilsService } from '@core/services/utils.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss', './admin-core.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit, AfterViewInit, OnDestroy {
  root: any;
  body: any;

  constructor(@Inject(DOCUMENT) private document: Document,
              private utilsService: UtilsService) {
    this.root = this.document.getElementsByTagName('html')[0];
    this.body = this.document.getElementsByTagName('body')[0];
    this.root.classList.add('admin-page');
    this.body.classList.add('c-app');
    this.utilsService.loadStyle('assets/admin/dist/vendors/@coreui/chartjs/css/coreui-chartjs.css', 'admin-coreui-chartjs');
    this.utilsService.loadStyle('assets/admin/dist/css/style.css', 'admin-style');
    this.utilsService.loadStyle('assets/third_party/primeicons/primeicons.css', 'admin-primeicons');
    this.utilsService.loadStyle('assets/third_party/primeng/resources/primeng.min.css', 'admin-primeng');
    this.utilsService.loadStyle('assets/third_party/primeng/resources/themes/bootstrap4-light-blue/theme.css', 'admin-primeng-themes');

    // plugin pages
    this.utilsService.loadStyle('//cdn.quilljs.com/1.3.6/quill.snow.css', 'admin-quill');

    this.document.getElementById('app-style').remove();
    this.document.getElementById('app-style-desktop').remove();
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.loadScripts();
  }

  ngOnDestroy() {
    this.root.classList.remove('admin-page');
    this.body.classList.remove('c-app');
  }

  async loadScripts() {
    const scriptsData = [
      {
        name: 'admin-coreui',
        loaded: false,
        src: 'assets/admin/dist/vendors/@coreui/coreui/js/coreui.bundle.min.js'
      }
    ];

    var promises: any[] = [];
    scriptsData.forEach((script: any) => {
      // console.log(script);
      promises.push(this.utilsService.loadScriptLazy(script));
    });
    await Promise.all(promises);
  }
}
