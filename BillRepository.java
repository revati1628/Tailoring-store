package com.app.project.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.project.model.Bill;


@Repository
public interface BillRepository extends JpaRepository<Bill,Integer> {
	@Query("select b from Bill b where b.paymentstatus=?1")
	public List<Bill> status(String paymentstatus);

}
