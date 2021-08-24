package com.app.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.project.model.AdminFeedback;
import com.app.project.model.Bill;
import com.app.project.service.BillService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BillController {

	@Autowired
	BillService service;
	
	@PostMapping(path="/createbill",consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Bill> review(@RequestBody Bill ad) {
		service.createbill(ad);
		return new ResponseEntity<Bill>(ad,HttpStatus.OK);
	}
	
	@GetMapping(path="/getBill",produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Bill>> feedback(){
		List<Bill> ad=service.getbill();
		return new ResponseEntity<List<Bill>>(ad,HttpStatus.OK);
	}
	
	@GetMapping(path="/getbypaymentstatus/{paymentstatus}",produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Bill>> payment(@PathVariable String paymentstatus){
		List<Bill> ad=service.getpaymentStatus(paymentstatus);
		return new ResponseEntity<List<Bill>>(ad,HttpStatus.OK);
	}
	
}
