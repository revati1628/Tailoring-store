package com.app.project.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class UserIssue {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int requestId;
	private String issue;
	private String description;
	private String date;
	
	public UserIssue() {
		super();
	}

	public UserIssue(int requestId, String issue, String description, String date) {
		super();
		this.requestId = requestId;
		this.issue = issue;
		this.description = description;
		this.date = date;
	}

	public int getRequestId() {
		return requestId;
	}

	public void setRequestId(int requestId) {
		this.requestId = requestId;
	}

	public String getIssue() {
		return issue;
	}

	public void setIssue(String issue) {
		this.issue = issue;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "UserIssue [requestId=" + requestId + ", issue=" + issue + ", description=" + description + ", date="
				+ date + "]";
	}
	
	
	
	
	
	

}
