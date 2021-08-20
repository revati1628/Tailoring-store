package com.security.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.app.model.AdminModel;
import com.security.app.repo.AdminRepo;

@Service
public class AdminService {
	@Autowired
	AdminRepo adrepo;
	
	public AdminModel storeUser(AdminModel ad) {
		adrepo.save(ad);
		return ad;
	}
	
	public List<AdminModel> getAll(){
		List<AdminModel> ad=adrepo.findAll();
		return ad;
	}

}
