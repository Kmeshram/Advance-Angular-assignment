import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbstractControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FORMLY_CONFIG, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { ValidationformComponent } from './validationform/validationform.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FileValueAccessorDirective } from './file-value-accessor.directive';
import { FiletypeComponent } from './filetype/filetype.component';
import { SearchableSelectComponent } from './searchable-select/searchable-select.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { UserService } from './user.service';
import { JsonPoweredComponent } from './json-powered/json-powered.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OnchangSelectComponent } from './onchang-select/onchang-select.component';
import { StepvizardFormComponent } from './stepvizard-form/stepvizard-form.component';
import { PanelWrapperComponent } from './panel-wrapper/panel-wrapper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ForminTabComponent } from './formin-tab/formin-tab.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { registerTranslateExtension } from './translate.extension';
import { AgGridModule } from 'ag-grid-angular';
import { GridTypeComponent } from './grid-type/grid-type.component';
import { GridFormlyCellComponent } from './grid-formly-cell/grid-formly-cell.component';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MaterialtableComponent } from './materialtable/materialtable.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';

export function minLengthValidationMessage(error: any, field: FormlyFieldConfig) {
  return `Should have atleast ${field.props?.minLength} characters`;
}

export function maxLengthValidationMessage(error: any, field: FormlyFieldConfig) {
  return `This value should be less than ${field.props?.maxLength} characters`;
}

export function minValidationMessage(error: any, field: FormlyFieldConfig) {
  return `This value should be more than ${field.props?.min}`;
}

export function maxValidationMessage(error: any, field: FormlyFieldConfig) {
  return `This value should be less than ${field.props?.max}`;
}
export function fieldMatchValidator(control: AbstractControl) {
  const { password, passwordConfirm } = control.value;

  // avoid displaying the message error when values are empty
  if (!passwordConfirm || !password) {
    return null;
  }

  if (passwordConfirm === password) {
    return null;
  }

  return { fieldMatch: { message: 'Password Not Matching' } };
}


// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ValidationformComponent,
    FileValueAccessorDirective,
    FiletypeComponent,
    SearchableSelectComponent,
    JsonPoweredComponent,
    OnchangSelectComponent,
    StepvizardFormComponent,
    ForminTabComponent,
    GridTypeComponent,
    GridFormlyCellComponent,
    MaterialtableComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    FormlyBootstrapModule,
    NgSelectModule,
    BsDropdownModule.forRoot(),
    MatStepperModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    FormlyMaterialModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    // AgGridModule.withComponents([/*optional Angular Components to be used in the grid*/]),
    AgGridModule,
    FormlyModule.forRoot({
      wrappers: [{ name: 'panel', component: PanelWrapperComponent }],
      types: [
        { name: 'file', component: FiletypeComponent, wrappers: ['form-field'] },
        { name: 'autocomplete', component: SearchableSelectComponent },
        { name: 'stepper', component: StepvizardFormComponent, wrappers: [] },
        { name: 'tabs', component: ForminTabComponent },

        { name: 'grid', component: GridTypeComponent, defaultOptions: { props: { width: '100%', height: '400px', }, }, },
      ],
      validators: [{ name: 'fieldMatch', validation: fieldMatchValidator },],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'minLength', message: minLengthValidationMessage },
        { name: 'maxLength', message: maxLengthValidationMessage },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
      ],
    }),

    HttpClientModule,
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient],
    //   },
    // }),

  ],
  providers: [
    { provide: UserService
      // FORMLY_CONFIG,
      //  multi: true, 
      // useFactory: registerTranslateExtension, 
      // deps: [
      //   // TranslateService,
      //    UserService]
     },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
