package com.app.project.model;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class AdminSorting {

	@Id
	//@GeneratedValue(strategy = GenerationType.AUTO)
	private String sortid;
	
	
	private String category;
	
	
	private String dresstype;
	
	public AdminSorting() {
		super();
	}

	public AdminSorting(String sortid, String category, String dresstype) {
		super();
		this.sortid = sortid;
		this.category = category;
		this.dresstype = dresstype;
	}

	public String getSortid() {
		return sortid;
	}

	public void setSortid(String sortid) {
		this.sortid = sortid;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getDresstype() {
		return dresstype;
	}

	public void setDresstype(String dresstype) {
		this.dresstype = dresstype;
	}

	@Override
	public String toString() {
		return "AdminSorting [sortid=" + sortid + ", category=" + category + ", dresstype=" + dresstype + "]";
	}
	
	
	
	
}
