import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-panel-wrapper',
  template: `
  <div class="card">
  <h3 class="card-header">{{ props.label }}</h3>
  <div class="card-body">
    <ng-container #fieldComponent></ng-container>
  </div>
</div>
  `,
  styles: ``
})
export class PanelWrapperComponent extends FieldWrapper {

}
