package com.customer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.customer.entity.Customer;
import com.customer.service.CustService;

@CrossOrigin(maxAge = 3360)
@RestController
public class CustomerController {
	
	@Autowired
	private CustService custService;
	
	@GetMapping("/api/v1/customers")
	public ResponseEntity<List<Customer>> fetchAllCustomers() {
		return ResponseEntity.ok(custService.fetchAllCustomers());
	}
	
	@GetMapping("/api/v1/customers/{id}")
	public ResponseEntity<Customer> fetchById(@PathVariable("id") Long id) {
		return ResponseEntity.ok(custService.fetchById(id));
	}

	@PostMapping("/api/v1/customers")
	public ResponseEntity<Customer> createCustomer(@RequestBody Customer customer) {
		return ResponseEntity.ok(custService.createCustomer(customer));
	}

	@PutMapping("/api/v1/customers/{id}")
	public ResponseEntity<Customer> updateCustomer(@PathVariable("id") Long id, @RequestBody Customer customer) {
		Customer custObj = custService.fetchById(id);
		if(custObj != null) {
			custObj.setAddress(customer.getAddress());
			custObj.setEmail(customer.getEmail());
			custObj.setName(customer.getName());
		}
		return ResponseEntity.ok(custService.updateCustomer(custObj));
	}

	@DeleteMapping("/api/v1/customers/{id}")
	public ResponseEntity<String> deleteCustomer(@PathVariable("id") Long id) {
		Customer custObj = custService.fetchById(id);
		String deleteMsg=null;
		if(custObj != null) {
			deleteMsg=custService.deleteCustomer(custObj);
		}
		return ResponseEntity.ok(deleteMsg);
	}
	
}
