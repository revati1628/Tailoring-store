package com.app.project.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Tailor {
	
	@Id
	private int tailorid;
	private String shopname;
	private String address;
	private long contact;
	private String workinghrs;
	private String services;
	private String courieroption;
	
	
	
	public Tailor() {
		super();
	}

	public Tailor(int tailorid, String shopname, String address, long contact, String workinghrs, String services,
			String courieroption) {
		super();
		this.tailorid = tailorid;
		this.shopname = shopname;
		this.address = address;
		this.contact = contact;
		this.workinghrs = workinghrs;
		this.services = services;
		this.courieroption = courieroption;
	}

	public int getTailorid() {
		return tailorid;
	}

	public void setTailorid(int tailorid) {
		this.tailorid = tailorid;
	}

	public String getShopname() {
		return shopname;
	}

	public void setShopname(String shopname) {
		this.shopname = shopname;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public long getContact() {
		return contact;
	}

	public void setContact(long contact) {
		this.contact = contact;
	}

	public String getWorkinghrs() {
		return workinghrs;
	}

	public void setWorkinghrs(String workinghrs) {
		this.workinghrs = workinghrs;
	}

	public String getServices() {
		return services;
	}

	public void setServices(String services) {
		this.services = services;
	}

	public String getCourieroption() {
		return courieroption;
	}

	public void setCourieroption(String courieroption) {
		this.courieroption = courieroption;
	}

	@Override
	public String toString() {
		return "Tailor [tailorid=" + tailorid + ", shopname=" + shopname + ", address=" + address + ", contact="
				+ contact + ", workinghrs=" + workinghrs + ", services=" + services + ", courieroption=" + courieroption
				+ "]";
	}
	
	
	
	
	
	
	

}
