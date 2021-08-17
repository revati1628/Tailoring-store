package com.app.project.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class SecurityQuestion {
	
	@Id
	//@GeneratedValue(strategy = GenerationType.AUTO)
	private int userId;
	
	private String securityanswer1;
	
	private String securityanswer2;
	
	private String securityanswer3;
	private String contact;
	
	public SecurityQuestion() {
		super();
	}

	public SecurityQuestion(int userId, String securityanswer1,
			String securityanswer2,  String securityanswer3, String contact) {
		super();
		this.userId = userId;
		
		this.securityanswer1 = securityanswer1;
		
		this.securityanswer2 = securityanswer2;
		
		this.securityanswer3 = securityanswer3;
		this.contact = contact;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	

	public String getSecurityanswer1() {
		return securityanswer1;
	}

	public void setSecurityanswer1(String securityanswer1) {
		this.securityanswer1 = securityanswer1;
	}

	

	public String getSecurityanswer2() {
		return securityanswer2;
	}

	public void setSecurityanswer2(String securityanswer2) {
		this.securityanswer2 = securityanswer2;
	}

	

	public String getSecurityanswer3() {
		return securityanswer3;
	}

	public void setSecurityanswer3(String securityanswer3) {
		this.securityanswer3 = securityanswer3;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	@Override
	public String toString() {
		return "SecurityQuestion [userId=" + userId + ", securityanswer1=" + securityanswer1 + ", securityanswer2="
				+ securityanswer2 + ", securityanswer3=" + securityanswer3 + ", contact=" + contact + "]";
	}

	
	
	

	
	
	

}
