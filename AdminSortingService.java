package com.app.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.project.dao.AdminSortingRepository;
import com.app.project.model.AdminSorting;

@Service
public class AdminSortingService {
	
	@Autowired
	AdminSortingRepository adminsortrepository;
	
	public AdminSorting setSorting(AdminSorting adminsorting) {
		adminsortrepository.save(adminsorting);
		return adminsorting;
	}
	
	public List<AdminSorting> getSorting(){
		List<AdminSorting> adminsorting=adminsortrepository.findAll();
		return adminsorting;
	}
	
	public List getByCategories(String category)
	{
	
		List adminsorting=adminsortrepository.getByCategory(category);
		return adminsorting; 
	}
	
	public List getDressType()
	{
		List adminsorting=adminsortrepository.getdressType();
		return adminsorting;
	}

}
