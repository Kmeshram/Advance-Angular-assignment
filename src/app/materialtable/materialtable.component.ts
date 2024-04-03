import { Component, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { UserService } from '../user.service';
import { of } from 'rxjs';
export interface UserData {
  id: number;
  first_name: string;
  last_name: string;
  email: string
}

@Component({
  selector: 'app-materialtable',
  templateUrl: './materialtable.component.html',
  styleUrl: './materialtable.component.scss'
})
export class MaterialtableComponent {
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'actions'];
  userId: string | undefined;
  dataSource!: MatTableDataSource<UserData>;
  newEntryForm: boolean = false
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-4',
          key: 'first_name',
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
          key: 'last_name',
          type: 'input',
          props: {
            label: 'Last Name',
            required: true,
            minLength: 10,
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
          key: 'email',
          type: 'input',
          props: {
            label: 'Email',
            type: 'email',
            // addonLeft: {
            //   text: '@',
            // },
            pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$',
            required: true,
          },
          validation: {
            messages: {
              pattern: (error: any, field: FormlyFieldConfig) => `"${field.formControl?.value}" is not a valid email`,
            },
          },
          modelOptions: {
            updateOn: 'blur',
          },
          asyncValidators: {
            uniqueUsername: {
              expression: (control: AbstractControl) => {
                return of(this.dataSource.data.indexOf(control.value) === -1);
              },
              message: 'This username is already taken.',
            },
          },
        },
      ]

    },

  ];
  constructor(private service: UserService) {
    this.getuserData()
  }

  getuserData() {
    this.service.getData().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<UserData>(response.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addneweEntry() {
    this.newEntryForm = !this.newEntryForm;
    this.toUpdate = false;
    this.model = {}
  }
  submit() {

    if (this.model.id) {
      // Update existing row
      const index = this.dataSource.data.findIndex(item => item.id === this.model.id);
      if (index !== -1) {
        this.dataSource.data[index] = { ...this.model };
        this.dataSource._updateChangeSubscription(); // Notify the table of the changes
      }
    } else {
      // Add new row
      const newRow: UserData = {
        id: this.dataSource.data.length + 1, // Generate a new id for the new row
        first_name: this.model.first_name,
        last_name: this.model.last_name,
        email: this.model.email,
      };
      // Add the new row at the beginning of the data source array
      this.dataSource.data.push(newRow);

      // Add the new row at the beginning of the data source array
      // this.dataSource.data.unshift(newRow);

      // Update the paginator's length to reflect the new row
      this.paginator.length++;

      // Reset the paginator to the first page
      this.paginator.firstPage();

      this.dataSource._updateChangeSubscription(); // Notify the table of the changes
    }
 }

  refreshData() {
    this.getuserData()
  }


  deleteUser(row: UserData) {
    this.model.id = row.id;
    let text = "Are you sure to delete the user?"
    if (confirm(text) == true) {
      text = "You pressed OK!";
      this.service.deleteApi(`users/${this.model.id}`).subscribe((response) => {
        let user = this.dataSource.data.filter((x: any) => x.id != this.model.id);
        alert("successfully Deleted")
        this.dataSource.data = user;
        this.newEntryForm=false
      })
    }
    else {
      text = "You canceled!";
    }


  }
  toUpdate: boolean = false
  editRow(row: UserData) {
    this.toUpdate = true
    // Populate the form fields with the existing values of the selected row
    this.model = { ...row };
    this.newEntryForm = true;

  }


}
