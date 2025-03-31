package com.customer.service;

import java.util.List;

import com.customer.entity.Customer;

public interface CustService {
	
	List<Customer> fetchAllCustomers();
	Customer fetchById(Long id);
	Customer createCustomer(Customer customer);
	Customer updateCustomer(Customer customer);
	String deleteCustomer(Customer customer);

}
