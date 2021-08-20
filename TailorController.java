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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.project.model.Tailor;

import com.app.project.service.TailorService;


@RestController
@CrossOrigin(origins ="http://localhost:3000")
public class TailorController {

	@Autowired
	TailorService tailorservice;
	
	@PostMapping(path="/storetailorDetails",consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Tailor> insertData(@RequestBody Tailor tailor) {

		tailorservice.storedata(tailor);

	return new ResponseEntity<Tailor>( tailor,HttpStatus.OK);
	}

	@GetMapping(path="/gettailorDetails",produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Tailor>> showData() {
	List<Tailor> tailor=tailorservice.getdata();
	return new ResponseEntity<List<Tailor>>(tailor,HttpStatus.OK);
	}
	
	@PutMapping("/updatetailor/{tailorid}")
	public ResponseEntity<Tailor> updateEmployee(@PathVariable int tailorid,
	 @RequestBody Tailor tailor) {
	     
		tailor.setTailorid(tailor.getTailorid());
		tailor.setShopname(tailor.getShopname());
		tailor.setAddress(tailor.getAddress());
		tailor.setContact(tailor.getContact());
		tailor.setWorkinghrs(tailor.getWorkinghrs());
		tailor.setCourieroption(tailor.getCourieroption());
		tailor.setServices(tailor.getServices());
		tailorservice.updateData(tailor);
	     
	     return new ResponseEntity<Tailor>(HttpStatus.OK);
	}
	
}
