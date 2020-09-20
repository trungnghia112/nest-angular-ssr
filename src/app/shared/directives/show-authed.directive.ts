import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { AuthService } from '@core/services/auth.service';


@Directive({ selector: '[appShowAuthed]' })
export class ShowAuthedDirective implements OnInit {
  condition: boolean;

  @Input() set appShowAuthed(condition: boolean) {
    this.condition = condition;
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private auth: AuthService,
    private viewContainer: ViewContainerRef
  ) {
  }

  ngOnInit() {
    this.auth.currentUser.subscribe(
      (user) => {
        this.viewContainer.remove();
        if (user && this.condition || !user && !this.condition) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        }
      }
    );
  }
}
