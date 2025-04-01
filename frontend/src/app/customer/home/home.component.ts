import { AfterViewInit, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'address'];
  customers: Customer[] = [];
  dataSource = new MatTableDataSource<Customer>();
  customer: Customer = {
    id: 0,
    name: '',
    email: '',
    address: '',
  };

  constructor(private customerService: CustomerService) {}

  ngAfterViewInit(): void {
    this.customerService.fetchAllCustomers().subscribe((data) => {
      this.customers = data;
      this.dataSource = new MatTableDataSource<Customer>(data);
    });
  }
}
