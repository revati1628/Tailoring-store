package com.app.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.project.dao.OrdersRepository;
import com.app.project.model.Orders;
import com.app.project.model.Tailor;

@Service
public class OrdersService {

	@Autowired 
	OrdersRepository repo;
	
	public Orders storeOrder(Orders co) {
		repo.save(co);
		return co;
	}
	
	
	public List<Orders> getAll(){
		List<Orders> co=repo.findAll();
		return co;
	}
	
	public Orders getOailorId(int orderid) {
		Orders orders=repo.findById(orderid).orElse(new Orders());
		return orders;
	}

	public List<Orders> getByOrders(int tailorid) {
		// TODO Auto-generated method stub
		List<Orders> o=repo.getById(tailorid);
		return o;
	}
	
	public List ordersByStatus(String approvalstatus,int tailorid) {
		// TODO Auto-generated method stub
		List o=repo.getbyStatus(approvalstatus,tailorid);
		return o;
	}
}

