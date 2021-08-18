package com.app.project.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.project.model.AdminSorting;

@Repository
public interface AdminSortingRepository extends JpaRepository<AdminSorting,String> {
	
	@Query("select a.dresstype from AdminSorting a where a.category=?1")
	public List getByCategory(String category);
	
	@Query("select distinct a.dresstype from AdminSorting a")
	public List getdressType();
	

}
