package com.security.app.model;

import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name="tailorselect")
public class TailorSelect {
	@Id
	private String sortid;
	private String category;
	private String dresstype;
	private String occassion;
	
	public TailorSelect() {
		super();
	}	

	public TailorSelect(String sortid, String category, String dresstype, String occassion) {
	super();
	this.sortid = sortid;
	this.category = category;
	this.dresstype = dresstype;
	this.occassion = occassion;
}

	public String getOccassion() {
		return occassion;
	}

	public void setOccassion(String occassion) {
		this.occassion = occassion;
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
		return "TailorSelect [sortid=" + sortid + ", category=" + category + ", dresstype=" + dresstype + ", occassion="
				+ occassion + "]";
	}


		

}
