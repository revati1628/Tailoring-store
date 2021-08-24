package com.app.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.project.dao.BillRepository;
import com.app.project.model.AdminFeedback;
import com.app.project.model.Bill;

@Service
public class BillService {

	@Autowired
	BillRepository repository;
	
	public Bill createbill(Bill ad) {
		repository.save(ad);
		return ad;
	}
	
	public List<Bill> getbill(){
		List<Bill> ad=repository.findAll();
		return ad;
	}
	public List<Bill> getpaymentStatus(String paymentstatus){
		List<Bill> ad=repository.status(paymentstatus);
		return ad;
	}
}
