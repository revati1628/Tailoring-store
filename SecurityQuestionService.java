package com.app.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.project.dao.SecurityQuestionRepository;
import com.app.project.model.SecurityQuestion;
import com.app.project.model.User;



@Service
public class SecurityQuestionService {
	
	@Autowired
	SecurityQuestionRepository securityquestionrepository;
	
	public SecurityQuestion storeSecurityQuestion(SecurityQuestion securityquestion) {
		securityquestionrepository.save(securityquestion);
		return securityquestion ;
	}
	
	public List<SecurityQuestion> getSecurityQuestion(){
		List< SecurityQuestion> securityquestion=securityquestionrepository.findAll();
		return securityquestion;
	}
	
	public SecurityQuestion getByContact(String contact)
	{
		SecurityQuestion securityquestion=securityquestionrepository.getByContact(contact);
		return securityquestion;
		
	}

	public SecurityQuestion getByUserId(int userId) {
		// TODO Auto-generated method stub
		SecurityQuestion securityquestion=securityquestionrepository.findById(userId).orElse(new SecurityQuestion());
		return securityquestion;
		
		
	}

}
