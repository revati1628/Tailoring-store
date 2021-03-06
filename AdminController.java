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

import com.security.app.model.AdminModel;
import com.security.app.service.AdminService;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000") 
public class AdminController {
	@Autowired
	AdminService adservice;
	
	@PostMapping(path="/review",consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<AdminModel> review(@RequestBody AdminModel ad) {
		adservice.storeUser(ad);
		return new ResponseEntity<AdminModel>(ad,HttpStatus.OK);
	}
	
	@GetMapping(path="/feedback",produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<AdminModel>> feedback(){
		List<AdminModel> ad=adservice.getAll();
		return new ResponseEntity<List<AdminModel>>(ad,HttpStatus.OK);
	}
}
