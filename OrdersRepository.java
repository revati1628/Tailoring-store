package com.app.project.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.project.model.Orders;

@Repository
public interface OrdersRepository extends JpaRepository<Orders,Integer> {
	
	@Query("select o from Orders o where o.tailorid=?1")
	public List<Orders> getById(int tailorid);
	
	@Query("select o from Orders o where o.approvalstatus=?1 and o.tailorid=?2")
	public List getbyStatus(String approvalstatus,int tailorid);
	
	@Query("select o from Orders o where o.approvalstatus=?1 order by o.expectedDate asc")
	public List orderByDate(String approvalstatus );

}
