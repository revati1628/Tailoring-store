package com.app.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.project.model.QandA;
import com.app.project.service.QandAService;


@RestController
@CrossOrigin(origins = "http://localhost:3000") 
public class QandAController {
	
	@Autowired
	QandAService qAndaservice;
	
	@PostMapping(path="/insertQA",consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<QandA> insertQA(@RequestBody QandA qa) {

		qAndaservice.storeQA(qa);

	return new ResponseEntity<QandA>( qa,HttpStatus.OK);
	}

	@GetMapping(path="/getQA",produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<QandA>> showQA() {
		List<QandA> qa=qAndaservice.getQA();
		return new ResponseEntity<List<QandA>>(qa,HttpStatus.OK);
	}

}
