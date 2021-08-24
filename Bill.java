package com.app.project.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Bill {
	
	@Id
	private int orderid;
	private int amount;
	private int tailorid;
	private int customerid;
	private String dresstype;
	private String deliverydate;
	private String email;
	private String modeofdelivery;
	private String paymentstatus;
	public Bill() {
		super();
	}
	public Bill(int amount, int tailorid, int orderid, int customerid, String dresstype, String deliverydate,
			String email, String modeofdelivery, String paymentstatus) {
		super();
		this.amount = amount;
		this.tailorid = tailorid;
		this.orderid = orderid;
		this.customerid = customerid;
		this.dresstype = dresstype;
		this.deliverydate = deliverydate;
		this.email = email;
		this.modeofdelivery = modeofdelivery;
		this.paymentstatus = paymentstatus;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public int getTailorid() {
		return tailorid;
	}
	public void setTailorid(int tailorid) {
		this.tailorid = tailorid;
	}
	public int getOrderid() {
		return orderid;
	}
	public void setOrderid(int orderid) {
		this.orderid = orderid;
	}
	public int getCustomerid() {
		return customerid;
	}
	public void setCustomerid(int customerid) {
		this.customerid = customerid;
	}
	public String getDresstype() {
		return dresstype;
	}
	public void setDresstype(String dresstype) {
		this.dresstype = dresstype;
	}
	public String getDeliverydate() {
		return deliverydate;
	}
	public void setDeliverydate(String deliverydate) {
		this.deliverydate = deliverydate;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getModeofdelivery() {
		return modeofdelivery;
	}
	public void setModeofdelivery(String modeofdelivery) {
		this.modeofdelivery = modeofdelivery;
	}
	public String getPaymentstatus() {
		return paymentstatus;
	}
	public void setPaymentstatus(String paymentstatus) {
		this.paymentstatus = paymentstatus;
	}
	@Override
	public String toString() {
		return "Bill [amount=" + amount + ", tailorid=" + tailorid + ", orderid=" + orderid + ", customerid="
				+ customerid + ", dresstype=" + dresstype + ", deliverydate=" + deliverydate + ", email=" + email
				+ ", modeofdelivery=" + modeofdelivery + ", paymentstatus=" + paymentstatus + "]";
	}
	
	
	
	

}
