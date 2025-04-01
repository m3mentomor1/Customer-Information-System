import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [
    MatDialogModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    CommonModule,
    FormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css',
})
export class CustomerFormComponent {
  readonly dialogRef = inject(MatDialogRef<CustomerFormComponent>);

  data = inject<Customer>(MAT_DIALOG_DATA);
  constructor(private customerService: CustomerService) {}

  addOrEditCustomers(customer: Customer) {
    if (customer.id !== 0) {
      //this.customerService.
    } else {
      this.customerService.createCustomer(customer).subscribe({
        next: (data) => {
          console.log('Customer created successfully!');
          window.location.reload();
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
