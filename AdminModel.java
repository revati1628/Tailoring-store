package com.security.app.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="createfeedback")
public class AdminModel {
	@Id
	private int orderid;
	private int tailorid;
	private int rate;
	private String likes;
	private String improve;
	
	public AdminModel() {
		super();
	}

	public AdminModel(int orderid, int tailorid, int rate, String likes, String improve) {
		super();
		this.orderid = orderid;
		this.tailorid = tailorid;
		this.rate = rate;
		this.likes = likes;
		this.improve = improve;
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

	public int getRate() {
		return rate;
	}

	public void setRate(int rate) {
		this.rate = rate;
	}

	public String getLikes() {
		return likes;
	}

	public void setLikes(String likes) {
		this.likes = likes;
	}

	public String getImprove() {
		return improve;
	}

	public void setImprove(String improve) {
		this.improve = improve;
	}

	@Override
	public String toString() {
		return "AdminModel [orderid=" + orderid + ", tailorid=" + tailorid + ", rate=" + rate + ", likes=" + likes
				+ ", improve=" + improve + "]";
	}

	
	
}
