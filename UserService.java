package com.app.project.service;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.project.dao.UserRepository;
import com.app.project.model.User;


	

	@Service
	public class UserService {
		
		@Autowired
		UserRepository userrepo;
		
		public User storeUser(User user) {
			userrepo.save(user);
			return user;
		}
		
		public List<User> getUser(){
			List<User> user=userrepo.findAll();
			return user;
		}
		
		public User getUserId(int id) {
			User user=userrepo.findById(id).orElse(new User());
			return user;
		}
		public User getUserPw(String password) {
			User user=userrepo.findByPassword(password);
			return user;
		}

		public String getCategory(int id) {
			// TODO Auto-generated method stub
			String user=userrepo.userCategory(id);
			return user;
		}
		
//		public List getTailorId()
//		{
//			List ids=userrepo.tailorId();
//			return ids;
//		}
//		
		
		
		
		
	}
			
		
		

		



