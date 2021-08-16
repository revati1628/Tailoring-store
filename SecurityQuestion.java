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
	private String securityquestion1;
	private String securityanswer1;
	private String securityquestion2;
	private String securityanswer2;
	private String securityquestion3;
	private String securityanswer3;
	private String contact;
	
	public SecurityQuestion() {
		super();
	}

	public SecurityQuestion(int userId, String securityquestion1, String securityanswer1, String securityquestion2,
			String securityanswer2, String securityquestion3, String securityanswer3, String contact) {
		super();
		this.userId = userId;
		this.securityquestion1 = securityquestion1;
		this.securityanswer1 = securityanswer1;
		this.securityquestion2 = securityquestion2;
		this.securityanswer2 = securityanswer2;
		this.securityquestion3 = securityquestion3;
		this.securityanswer3 = securityanswer3;
		this.contact = contact;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getSecurityquestion1() {
		return securityquestion1;
	}

	public void setSecurityquestion1(String securityquestion1) {
		this.securityquestion1 = securityquestion1;
	}

	public String getSecurityanswer1() {
		return securityanswer1;
	}

	public void setSecurityanswer1(String securityanswer1) {
		this.securityanswer1 = securityanswer1;
	}

	public String getSecurityquestion2() {
		return securityquestion2;
	}

	public void setSecurityquestion2(String securityquestion2) {
		this.securityquestion2 = securityquestion2;
	}

	public String getSecurityanswer2() {
		return securityanswer2;
	}

	public void setSecurityanswer2(String securityanswer2) {
		this.securityanswer2 = securityanswer2;
	}

	public String getSecurityquestion3() {
		return securityquestion3;
	}

	public void setSecurityquestion3(String securityquestion3) {
		this.securityquestion3 = securityquestion3;
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
		return "SecurityQuestion [userId=" + userId + ", securityquestion1=" + securityquestion1 + ", securityanswer1="
				+ securityanswer1 + ", securityquestion2=" + securityquestion2 + ", securityanswer2=" + securityanswer2
				+ ", securityquestion3=" + securityquestion3 + ", securityanswer3=" + securityanswer3 + ", contact="
				+ contact + "]";
	}
	
	

	
	
	

}
