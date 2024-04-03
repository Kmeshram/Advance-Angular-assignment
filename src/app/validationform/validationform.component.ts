import { Component } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { filter, tap } from 'rxjs/operators';
import { of } from 'rxjs';



@Component({
  selector: 'app-validationform',
  templateUrl: './validationform.component.html',
  styleUrl: './validationform.component.scss'
})
export class ValidationformComponent {
  existingUsers = ['user1', 'user2', 'user3'];

  form = new FormGroup({});
  model: any = {
    birthdate: null
  };

  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [

    {

      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-4',
          key: 'firsstname',
          type: 'input',
          props: {
            label: 'First Name',
            required: true,
          },
          validators: {
            textOnly: {
              expression: (c: any) => /^[a-zA-Z\s]*$/.test(c.value),
              message: (error: any, field: FormlyFieldConfig) => `Only text characters are allowed`,
            },
          },

        },
        {
          className: 'col-4',
          key: 'lastname',
          type: 'input',
          props: {
            label: 'Last Name',
            required: true
          },

        },
        {
          className: 'col-4',
          key: 'age',
          type: 'input',
          props: {
            label: 'Age',
            type: 'number',
            min: 18,
            max: 40,
            required: true,
          }
        },
        {
          className: 'section-label',
          template: '<hr><div><strong>Address</strong></div>'
        },
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col-4',
              type: 'input',
              key: 'country',
              props: {
                label: 'Country',
                required: true

              },
            },
            {
              className: 'col-4',
              type: 'input',
              key: 'cityName',
              props: {
                label: 'City',
                required: true

              },
              expressions: {
                // city field is rendered only when `country` is set
                hide: (field: FormlyFieldConfig) => !field.model?.country,
              },
              hooks: {
                onInit: (field: any) => {
                  return field.options.fieldChanges.pipe(
                    filter((e: any) => {
                      return (
                        e.type === 'expressionChanges' &&
                        e.field === field &&
                        e.property === 'hide' &&
                        e.value === false
                      );
                    }),
                    tap((e: any) => console.warn('City field is shown', e))
                  );
                },
              },
            },
            {
              className: 'col-4',
              type: 'input',
              key: 'zip',
              props: {
                type: 'number',
                label: 'Zip',
                required: true,
                max: 99999,
                min: 0,
                pattern: '\\d{5}',
              },
            },
          ]
        },
        {
          template: '<hr>'
        },
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col-4',
              key: 'email',
              type: 'input',
              props: {
                label: 'Email',
                type: 'email',
                addonLeft: {
                  text: '@',
                },
                pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$',
                required: true,
              },
              validation: {
                messages: {
                  pattern: (error: any, field: FormlyFieldConfig) => `"${field.formControl?.value}" is not a valid email`,
                },
              },
            },
            {
              className: 'col-4',
              key: 'password',
              type: 'input',
              props: {
                label: 'Password',
                type: 'password',
                placeholder: 'Must be at least 6 characters',
                // addonRight: {
                //   text: '$',
                // },
                required: true,
                minLength: 6,
              },
            },
            {
              className: 'col-4',
              key: 'passwordConfirm',
              type: 'input',
              props: {
                label: 'Confirm Password',
                type: 'password',
                placeholder: 'Please re-enter your password',
                // addonRight: {
                //   text: '@',
                // },
                required: true,
                minLength: 6,
              },

            },
          ],
        },
        {
          template: '<hr>'
        },
        {
          fieldGroupClassName: 'row',
          fieldGroup: [

            {
              className: 'col-6',
              key: 'ip',
              type: 'input',
              props: {
                label: 'IP Address',
                pattern: /(\d{1,3}\.){3}\d{1,3}/,
                required: true,
              },
              validation: {
                messages: {
                  pattern: (error: any, field: FormlyFieldConfig) => `"${field.formControl?.value}" is not a valid IP Address`,
                },
              },
            },
            {
              className: 'col-6',
              key: 'comment',
              type: 'textarea',
              props: {
                label: 'Comment',
                required: true,
                maxLength: 100,
                rows: 2,
              },
            },

          ]
        },
        {
          className: 'section-label',
          template: '<hr><div><strong>date Validation</strong></div>'
        },
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'birthdate',
              type: 'input',
              templateOptions: {
                type: 'date',
                label: 'Birthdate',
                required: true,
       
              },
              validators: {
                age: {
                  expression: (control: any) => {
                    if (!control.value) return true; // handle empty value
                    const today = new Date();
                    const birthdate = new Date(control.value);
                    const age = today.getFullYear() - birthdate.getFullYear();
                    const monthDiff = today.getMonth() - birthdate.getMonth();
                    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
                      // Subtract 1 from age if birthdate month/day is after today's month/day
                      return age - 1 >= 18;
                    }
                    return age >= 18;
                  },
                  message: 'You must be at least 18 years old.',
                },
              },
            },
          ]
        },

        {
          className: 'section-label',
          template: '<hr><div><strong>Select filed</strong></div>'
        },
        {
          fieldGroupClassName: 'row',
          fieldGroup: [


            {
              className: 'col-12',
              key: 'marvel2',
              type: 'select',
              props: {
                label: 'Grouped Select',
                options: [
                  { label: 'Iron Man', value: 'iron_man', group: 'Male' },
                  { label: 'Captain America', value: 'captain_america', group: 'Male' },
                  { label: 'Black Widow', value: 'black_widow', group: 'Female' },
                  { label: 'Hulk', value: 'hulk', group: 'Male' },
                  { label: 'Captain Marvel', value: 'captain_marvel', group: 'Female' },
                ],
              },
            },
            {
              className: 'col-12',
              key: 'marvel2',
              type: 'select',
              props: {
                label: 'Grouped Select (as nested options)',
                options: [
                  {
                    label: 'Male',
                    group: [
                      { label: 'Iron Man', value: 'iron_man' },
                      { label: 'Captain America', value: 'captain_america' },
                      { label: 'Hulk', value: 'hulk' },
                    ],
                  },
                  {
                    label: 'Female',
                    group: [
                      { label: 'Black Widow', value: 'black_widow' },
                      { label: 'Captain Marvel', value: 'captain_marvel' },
                    ],
                  },
                ],
              },
            },
            {
              className: 'col-12',
              key: 'marvel3',
              type: 'select',
              props: {
                label: 'Select with custom name/value/group',
                options: [
                  { label: 'Iron Man', id: 'iron_man', gender: 'Male' },
                  { label: 'Captain America', id: 'captain_america', gender: 'Male' },
                  { label: 'Black Widow', id: 'black_widow', gender: 'Female' },
                  { label: 'Hulk', id: 'hulk', gender: 'Male' },
                  { label: 'Captain Marvel', id: 'captain_marvel', gender: 'Female' },
                ],
                groupProp: 'gender',
                valueProp: 'id',
                labelProp: 'label',
              },
            },
            {
              className: 'col-12',
              key: 'multiselect',
              type: 'select',
              props: {
                label: 'Multi-select',
                multiple: true,
                options: [
                  { label: 'Iron Man', value: 'iron_man' },
                  { label: 'Captain America', value: 'captain_america' },
                  { label: 'Black Widow', value: 'black_widow' },
                  { label: 'Hulk', value: 'hulk' },
                  { label: 'Captain Marvel', value: 'captain_marvel' },
                ],
              },
            },
            {
              key: 'username',
              type: 'input',
              props: {
                label: 'Username (validated on `blur`)',
                placeholder: 'Username',
                required: true,
              },
              modelOptions: {
                updateOn: 'blur',
              },
              asyncValidators: {
                uniqueUsername: {
                  expression: (control: AbstractControl) => {
                    return of(this.existingUsers.indexOf(control.value) === -1);
                  },
                  message: 'This username is already taken.',
                },
              },
            },
          ]
        },

      ],
      validators: {
        validation: [{ name: 'fieldMatch', options: { errorPath: 'passwordConfirm' } }],
      },
    },


  ]

  submit() {
    alert(JSON.stringify(this.model));
  }
}
