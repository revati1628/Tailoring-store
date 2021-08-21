package com.app.project.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.project.dao.TailorRepository;

import com.app.project.model.Tailor;
import com.app.project.model.User;


@Service
public class TailorService {

	@Autowired
	TailorRepository tailorrepository;
	
	public Tailor storedata(Tailor tailor) {
		tailorrepository.save(tailor);
		
		return tailor;
	}
	
	public List<Tailor> getdata(){
		List< Tailor> tailor=tailorrepository.findAll();
		return tailor;
	}
	
	public void updateData(Tailor tailor) {
		// TODO Auto-generated method stub
		tailorrepository.save(tailor);
		}
	public Tailor getTailorId(int tailorid) {
		Tailor tailor=tailorrepository.findById(tailorid).orElse(new Tailor());
		return tailor;
	}
}
