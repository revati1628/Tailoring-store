package com.security.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.security.app.model.CustomerOrder;
import com.security.app.service.CustomerOrderService;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerOrderController {
	
	@Autowired
	CustomerOrderService service;
	
	@PostMapping(path="/giveorder",consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<CustomerOrder> Order(@RequestBody CustomerOrder co){ 
		service.storeUser(co);
		return new ResponseEntity<CustomerOrder>(co,HttpStatus.OK);
	}
	
	@GetMapping(path="/getorder",produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<CustomerOrder>> getOrder(){
		List<CustomerOrder> co=service.getAll();
		return new ResponseEntity<List<CustomerOrder>>(co,HttpStatus.OK);
	}
	
	
}
