package com.app.project.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.project.model.Orders;

import com.app.project.service.OrdersService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class OrdersController {

	@Autowired 
	OrdersService service;
	
	@PostMapping(path="/giveorder",consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Orders> Order(@RequestBody Orders co){ 
		service.storeOrder(co);
		return new ResponseEntity<Orders>(co,HttpStatus.OK);
	}
	
	@GetMapping(path="/vieworder",produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Orders>> getOrder(){
		List<Orders> co=service.getAll();
		return new ResponseEntity<List<Orders>>(co,HttpStatus.OK);
	}
	
	@GetMapping(path="/vieworders/{tailorid}",produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Orders>> getOrderById(@PathVariable int tailorid){
		List<Orders> co=service.getByOrders(tailorid);
		return new ResponseEntity<List<Orders>>(co,HttpStatus.OK);
	}
	@PatchMapping("/updateStatus/{orderid}/{approvalstatus}")
	public ResponseEntity<Orders> updateUserPartially(@PathVariable String approvalstatus,@PathVariable int orderid)
			 {
		try {
			 Orders order=service.getOailorId(orderid);
			 order.setApprovalstatus(approvalstatus);
			
			
			return new ResponseEntity<Orders>(service.storeOrder(order), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping(path="/getByStatus/{tailorid}/{approvalstatus}",produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Orders>> getOrderById(@PathVariable String approvalstatus,@PathVariable int tailorid){
		List<Orders> co=service.ordersByStatus(approvalstatus,tailorid);
		return new ResponseEntity<List<Orders>>(co,HttpStatus.OK);
	}
	
	@GetMapping(path="/viewbyOrder/{approvalstatus}",produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Orders>> getbyorder(@PathVariable String approvalstatus){
		List<Orders> co=service.getByOrder(approvalstatus);
		return new ResponseEntity<List<Orders>>(co,HttpStatus.OK);
	}
	
	
	
}
