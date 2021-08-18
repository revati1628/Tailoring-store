package com.security.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.security.app.model.TailorSelect;
import com.security.app.repo.TailorSelectRepo;

@Service
public class TailorSelectService {
	
	@Autowired
	TailorSelectRepo tailorrepo;
	
	public TailorSelect storeUser(TailorSelect ts) {
		tailorrepo.save(ts);
		return ts;
	}
	
	public List<TailorSelect> getAll(){
		List<TailorSelect> ts=tailorrepo.findAll();
		return ts;
	}

}
