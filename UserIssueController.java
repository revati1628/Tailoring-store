package com.app.project.controller;

import java.util.List;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.app.project.model.User;
import com.app.project.service.UserService;
import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.databind.util.JSONPObject;


@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000") 
public class UserController {

	@Autowired
	UserService userservice;
	

	
	@PostMapping(path="/insert",consumes=MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<User> inserts(@RequestBody User user) {

		userservice.storeUser(user);

		return new ResponseEntity<User>( user,HttpStatus.OK);
	}
	
	@GetMapping(path="/get",produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<User>> showEmp() {
		List<User> user=userservice.getUser();
		return new ResponseEntity<List<User>>(user,HttpStatus.OK);
	}
	
	@RequestMapping(path="/insert/{id}/{password}",produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> getById(@PathVariable int id,@PathVariable String password) {
		@SuppressWarnings("unused")
		HttpServletRequest request;
		String s=null,p;
		int a;
		boolean state = false;
		long x,b;
		ResponseEntity<String> r = null;

		User em= userservice.getUserId(id);
		User pw=userservice.getUserPw(password);
		if(em==null || pw==null) {
			s="User doesn't exist";
			state=false;
			r= new ResponseEntity<String>(s,HttpStatus.NOT_FOUND);
			
		}
		else {
			a=(int) em.getId();
			p=pw.getPassword();
			x=em.getId();
			b=pw.getId();

			if(x==b) {
				if(a==0 || p==null) {
					s="User doesn't exist";
					state=false;
					r= new ResponseEntity<String>(s,HttpStatus.NOT_FOUND);

				}
				
				else if(a==id && p.equals(password)) {
					s="Login successful";
					 state=true;
					  r= new ResponseEntity<String>(s,HttpStatus.OK);
					
				}		
			}
			else {
				s="Registered details doesn't match";
				state=false;
				r= new ResponseEntity<String>(s,HttpStatus.NOT_FOUND);
				
			}
		}
		return r;
}
	@GetMapping(path="/get/{id}",produces=MediaType.APPLICATION_JSON_VALUE)
	public User getByid(@PathVariable int id)
	{
		User u=userservice.getUserId(id);
		return u;
	}
	
	@PatchMapping("/updatePassword/{id}/{password}")
	public ResponseEntity<User> updateEmployeePartially(@PathVariable int id, @PathVariable String password) {
		try {
			User user = userservice.getUserId(id);
			user.setPassword(password);
			return new ResponseEntity<User>(userservice.storeUser(user), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
