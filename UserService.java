package com.security.app.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.app.model.User;
import com.security.app.repo.UserRepositry;

@Service
public class UserService {
	
	@Autowired
	UserRepositry userrepo;
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
//	public User getUserEmail(String email) {
//		User user=userrepo.findByEmail(email);
//		return user;
//	}
		
}
