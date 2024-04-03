import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-json-powered',
  template: `
  <form [formGroup]="form" (ngSubmit)="submit()">
  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>
  <button type="submit" class="btn btn-primary submit-button">Submit</button>
</form> `,
  styles: ``
})
export class JsonPoweredComponent {
  private destroy$: Subject<any> = new Subject<any>();
  form = new FormGroup({});
  options: FormlyFormOptions = {};
  model: any;
  fields!: FormlyFieldConfig[];

  constructor(private userService: UserService) {
    this.userService
      .getUserData()
      .pipe(takeUntil(this.destroy$))
      .subscribe(([model, fields]) => {
        this.model = model;
        this.fields = this.mapFields(fields);
      });
  }

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }

  /**
   * Adjust the JSON fields loaded from the server.
   */
  mapFields(fields: FormlyFieldConfig[]) {
    return fields.map((f) => {
      // Bind an observable to `color` field.
      if (f.key === 'color') {
        f.type = 'radio';
        f.props!.options = this.userService.getColors();
      }

      return f;
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
