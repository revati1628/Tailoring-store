package com.security.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.app.model.AdminModel;
import com.security.app.model.CustomerOrder;
import com.security.app.repo.CustomerOrderRepo;

@Service
public class CustomerOrderService {
	
	@Autowired
	CustomerOrderRepo repo;
	
	public CustomerOrder storeUser(CustomerOrder co) {
		repo.save(co);
		return co;
	}
	
	public List<CustomerOrder> getAll(){
		List<CustomerOrder> co=repo.findAll();
		return co;
	}
}
