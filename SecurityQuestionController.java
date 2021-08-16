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

import com.app.project.model.SecurityQuestion;
import com.app.project.service.SecurityQuestionService;

@RestController
@CrossOrigin(origins ="http://localhost:3000") 
public class SecurityQuestionController {
	
	@Autowired
	SecurityQuestionService securityquestionservice;
	
	@PostMapping(path="/insertSecurityQuestions",consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<SecurityQuestion> insertSecurityQuestion(@RequestBody SecurityQuestion securityquestion) {

		securityquestionservice.storeSecurityQuestion(securityquestion);

	return new ResponseEntity<SecurityQuestion>( securityquestion,HttpStatus.OK);
	}

	@GetMapping(path="/getSecurityQuestions",produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<SecurityQuestion>> showSecurityQuestion() {
		List<SecurityQuestion> securityquestion=securityquestionservice.getSecurityQuestion();
		return new ResponseEntity<List<SecurityQuestion>>(securityquestion,HttpStatus.OK);
	}
	
	@GetMapping(path="/getQuestionsByContact/{contact}",produces=MediaType.APPLICATION_JSON_VALUE)
	public SecurityQuestion showByContact(@PathVariable String contact) {
		SecurityQuestion securityquestion=securityquestionservice.getByContact(contact);
		return securityquestion;
	}
	
	@GetMapping(path="/getQuestionsById/{userId}",produces=MediaType.APPLICATION_JSON_VALUE)
	public SecurityQuestion showByUserId(@PathVariable int userId) {
		SecurityQuestion securityquestion=securityquestionservice.getByUserId(userId);
		return securityquestion;
	}


}
