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

import com.app.project.model.AdminSorting;
import com.app.project.service.AdminSortingService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AdminSortingController {
	
	@Autowired
	AdminSortingService adminsortingservice;
	
	
	@PostMapping(path="/setSorting",consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<AdminSorting> insertsorting(@RequestBody AdminSorting adminsorting) {

		adminsortingservice.setSorting(adminsorting);

	return new ResponseEntity<AdminSorting>( adminsorting,HttpStatus.OK);
	}

	@GetMapping(path="/getSorting",produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<AdminSorting>> showsorting() {
		List<AdminSorting> adminsorting=adminsortingservice.getSorting();
		return new ResponseEntity<List<AdminSorting>>(adminsorting,HttpStatus.OK);
	}
	
	@GetMapping(path="/getByCategories/{category}",produces=MediaType.APPLICATION_JSON_VALUE)
	public List showByCategories(@PathVariable String category) {
		List adminsorting=adminsortingservice.getByCategories(category);
		return adminsorting;
	}
	
	@GetMapping(path="/getDressType",produces=MediaType.APPLICATION_JSON_VALUE)
	public List showDressType() {
		List adminsorting=adminsortingservice.getDressType();
		return adminsorting;
	}


}
