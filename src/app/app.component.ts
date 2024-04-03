import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngxformly';
  form = new FormGroup({});
  // -----------------------------------fictionality ffor language change  start-----------------------------------------------//

  // constructor(public translate: TranslateService) {
  //   translate.addLangs(['en', 'fr']);
  //   translate.setDefaultLang('en');

  //   const browserLang = translate.getBrowserLang();

  //   translate.use(browserLang!.match(/en|mr/) ? browserLang! : 'en');
  //   this.model.lang = translate.currentLang;
  // }
  // model: any = {};
  // options: FormlyFormOptions = {};

  // -----------------------------------fictionality ffor language change  end-----------------------------------------------//


  // -----------------------------------fictionality for nested panel stepwizard and form in tab  start-----------------------------------------------//


  // model: { file?: File } = {} // Define the type of the model explicitly

  // options: FormlyFormOptions = {
  //   formState: {
  //     disabled: true,
  //   },
  // };
  // fields: FormlyFieldConfig[] = [

  //   {
  //     fieldGroupClassName: 'row',
  //     wrappers: ['panel'],
  //     props: { label: 'File Upload' },
  //     fieldGroup: [{
  //       className: 'col-12',
  //       key: 'file',
  //       type: 'file',
  //     }]
  //   },
  //   {
  //     template: '<hr>'
  //   },
  //  {
  //     wrappers: ['panel'],
  //     props: { label: 'Searching Select Filed' },
  //     key: 'autocomplete',
  //     type: 'autocomplete',
  //     templateOptions: {
  //       label: 'Select Item',
  //       options: ['Option 1', 'Option 2', 'Option 3']
  //     }
  //   },
  //   {
  //     template: '<hr>'
  //   },
  //   {
  //     type: 'stepper',
  //     wrappers: ['panel'],
  //     props: { label: 'stepper' },
  //     fieldGroup: [
  //       {
  //         props: { label: 'Personal data' },
  //         fieldGroup: [
  //           {
  //             key: 'firstname',
  //             type: 'input',
  //             props: {
  //               label: 'First name',
  //               required: true,
  //             },
  //           },
  //           {
  //             key: 'age',
  //             type: 'input',
  //             props: {
  //               type: 'number',
  //               label: 'Age',
  //               required: true,
  //             },
  //           },
  //         ],
  //       },
  //       {
  //         props: { label: 'Destination' },
  //         fieldGroup: [
  //           {
  //             key: 'country',
  //             type: 'input',
  //             props: {
  //               label: 'Country',
  //               required: true,
  //             },
  //           },
  //         ],
  //       },
  //       {
  //         props: { label: 'Day of the trip' },
  //         fieldGroup: [
  //           {
  //             key: 'day',
  //             type: 'input',
  //             props: {
  //               type: 'date',
  //               label: 'Day of the trip',
  //               required: true,
  //             },
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     template: '<hr>'
  //   },
  //   {
  //     wrappers: ['panel'],
  //     props: { label: 'Tab' },
  //     type: 'tabs',
  //     fieldGroup: [
  //       {
  //         props: { label: 'Personal data' },
  //         fieldGroup: [
  //           {
  //             key: 'firstname',
  //             type: 'input',
  //             props: {
  //               label: 'First name',
  //               required: true,
  //             },
  //           },
  //           {
  //             key: 'age',
  //             type: 'input',
  //             props: {
  //               type: 'number',
  //               label: 'Age',
  //               required: true,
  //             },
  //           },
  //         ],
  //       },
  //       {
  //         props: { label: 'Destination' },
  //         fieldGroup: [
  //           {
  //             key: 'country',
  //             type: 'input',
  //             props: {
  //               label: 'Country',
  //               required: true,
  //             },
  //           },
  //         ],
  //       },
  //       {
  //         props: { label: 'Day of the trip' },
  //         fieldGroup: [
  //           {
  //             key: 'day',
  //             type: 'input',
  //             props: {
  //               type: 'date',
  //               label: 'Day of the trip',
  //               required: true,
  //             },
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];

  // -----------------------------------fictionality for nested panel stepwizard and form in tab end-----------------------------------------------//





  // -----------------------------------basic functinality code For language start--------------------------------------------------//


  // fields: FormlyFieldConfig[] = [
  //   {
  //     key: 'lang',
  //     type: 'select',
  //     props: {
  //       required: true,
  //       translate: true,
  //       label: 'FORM.LANG',
  //       change: (field) => this.translate.use(field.formControl!.value),
  //       options: [
  //         { label: 'mr', value: 'mr' },
  //         { label: 'en', value: 'en' },
  //       ],
  //     },
  //   },
  //   {
  //     key: 'name',
  //     type: 'input',
  //     props: {
  //       translate: true,
  //       label: 'FORM.NAME',
  //       required: true,
  //     },
  //   },
  // ];

  // submit() {
  //   if (this.form.valid) {
  //     console.log('Form submitted with file:', this.model['file']);
  //   }
  // }

  // -----------------------------------basic functinality code language end--------------------------------------------------//

  // -----------------------------------basic functinality code  reset submit and updatefor disbaled  start--------------------------------------------------//

  // fields: FormlyFieldConfig[] = [
  //   {
  //     key: 'firstName',
  //     type: 'input',
  //     defaultValue: 'This is a default value',
  //     props: {
  //       label: 'First Name (initialized via default value)',
  //     },
  //   },
  //   {
  //     key: 'lastName',
  //     type: 'input',
  //     defaultValue: 'This is a default value',
  //     props: {
  //       label: 'Last Name (initialized via the model)',
  //     },
  //     // expressions:{
  //     //   'props.disabled':'!model.text' //for disabled
  //     // }
  //   },
  //   {
  //     key: 'candy',
  //     type: 'select',
  //     defaultValue: 'milky_way', //for defualtvalue
  //     props: {
  //       label: 'Favorite Candy (initialized via default value',
  //       options: [
  //         { label: 'Snickers', value: 'snickers' },
  //         { label: 'Baby Ruth', value: 'baby_ruth' },
  //         { label: 'Milky Way', value: 'milky_way' },
  //       ],
  //     },
  //     // expressions:{
  //     //   'props.disabled':'!model.select'  //for disabled
  //     // }
  //   },
  //   {
  //     key: 'agree',
  //     type: 'checkbox',
  //     props: {
  //       label: 'Agree? (not initialized at all)',
  //       required: true,
  //     },
  //   },
  //   {
  //     key: 'name',
  //     type: 'input',
  //     props: {
  //       label: 'Name',
  //       placeholder: 'Type in here to display the hidden field',
  //     },
  //   },
  //   {
  //     key: 'iLikeTwix',
  //     type: 'checkbox',
  //     props: {
  //       label: 'I like twix',
  //     },
  //     expressions: {
  //       hide: '!model.name', // this use for hide show when model.keyvalue 
  //     },
  //   },

  //   {
  //     key: 'text',
  //     type: 'input',
  //     modelOptions: {
  //       debounce: {
  //         default: 2000,
  //       },
  //     },
  //     props: {
  //       label: 'Debounce',
  //     },
  //   },
  //   {
  //     key: 'updateOnBlur',
  //     type: 'input',
  //     modelOptions: {
  //       updateOn: 'blur',
  //     },
  //     props: {
  //       label: '`updateOn` on Blur', // this  is modelOption use  for for update on blur
  //       required: true,
  //     },
  //   },
  //   {
  //     key: 'updateOnSubmit',
  //     type: 'input',
  //     modelOptions: {
  //       updateOn: 'submit',  // this  is modelOption use  for for update on submit
  //     },
  //     props: {
  //       label: '`updateOn` on Submit',
  //       required: true,
  //     },
  //   },
  //   {
  //     key: 'text',
  //     type: 'input',
  //     props: {
  //       label: 'Some awesome text',
  //       placeholder: 'Some sweet text',
  //       required: true,
  //     },
  //     expressions: {
  //       // apply expressionProperty for disabled based on formState
  //       'props.disabled': 'formState.disabled',
  //     },
  //   },
  //   {
  //     key: 'candy',
  //     type: 'select',
  //     props: {
  //       label: 'Multiple Options',
  //       options: [
  //         { label: 'Snickers', value: 'snickers' },
  //         { label: 'Baby Ruth', value: 'baby_ruth' },
  //         { label: 'Milky Way', value: 'milky_way' },
  //       ],
  //     },
  //   },
  // ];

  submit() {
    alert(JSON.stringify(this.model));
  }
  // toggleDisabled() {
  //   this.options.formState.disabled = !this.options.formState.disabled;
  // }

  // -----------------------------------basic functinality code  reset submit and updatefor disbaled  end--------------------------------------------------//

  //----------------------------------------------------------ag-grid start--------------------------//////////////////////
  
  
  
  model: any = {
    name: 'name1',
    surname: 'surname1',
    investments: [
      {
        investmentName: 'project1',
        investmentDate: '',
        stockIdentifier: 1,
      },
      {
        investmentName: 'project2',
        investmentDate: '2004-06-20',
        stockIdentifier: 2,
      },
      {
        investmentName: 'project3',
        investmentDate: '',
        stockIdentifier: 3,
      },
      {
        investmentName: 'project4',
        investmentDate: '',
        stockIdentifier: 4,
      },
      {
        investmentName: 'project5',
        investmentDate: '',
        stockIdentifier: 5,
      },
      {
        investmentName: 'project6',
        investmentDate: '',
        stockIdentifier: 6,
      },
    ],
  };

  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      className: 'section-label',
      template: '<h5>Personal data</h5>',
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'name',
          type: 'input',
          className: 'col-md-6',
          props: {
            label: 'Name',
            required: true,
          },
        },
        {
          key: 'surname',
          type: 'input',
          className: 'col-md-6',
          props: {
            label: 'Surname',
            required: true,
          },
        },
      ],
    },
    {
      key: 'investments',
      type: 'grid',
      className: 'ag-theme-balham',
      props: {
        height: '210px',
        gridOptions: {
          rowHeight: 42,
          columnDefs: [
            {
              headerName: 'Name of Investment',
              field: 'investmentName',
              sortable: true,
              filter: true,
              width: 350,
            },
            {
              headerName: 'Date of Investment',
              field: 'investmentDate',
              sortable: true,
              width: 350,
            },
            {
              headerName: 'Stock Identifier',
              field: 'stockIdentifier',
              // width: 330,
            },
          ],
          pagination: true,
          // rowModelType: 'infinite',
          cacheBlockSize: 3,
          paginationPageSize: 3,
          paginationPageSizeSelector: [3, 10, 20, 50, 100]
        }
      },
      fieldArray: {
        fieldGroup: [
          {
            type: 'input',
            key: 'investmentName',
            props: {
              required: true,
            },
          },
          {
            type: 'input',
            key: 'investmentDate',
            props: {
              type: 'date',
            },
          },
          {
            type: 'input',
            key: 'stockIdentifier',
          },
        ],
      },
    },
  ];

  
 
  
  //----------------------------------------------------------ag-grid end--------------------------//////////////////////

}


