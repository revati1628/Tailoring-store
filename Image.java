package com.app.project.model;


import java.util.stream.Stream;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "files")
public class Image {
  @Id
  @GeneratedValue(generator = "uuid")
  @GenericGenerator(name = "uuid", strategy = "uuid2")
  private String id;

  private String name;
  private int tailorid;
  private int cost;

  private String type;

  @Lob
  private byte[] data;

  public Image() {
	  
  }

  public Image(String id, String name, int tailorid, int cost, String type, byte[] data) {
	super();
	this.id = id;
	this.name = name;
	this.tailorid = tailorid;
	this.cost = cost;
	this.type = type;
	this.data = data;
  }

public String getId() {
	return id;
}

public void setId(String id) {
	this.id = id;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public int getTailorid() {
	return tailorid;
}

public void setTailorid(int tailorid) {
	this.tailorid = tailorid;
}

public int getCost() {
	return cost;
}

public void setCost(int cost) {
	this.cost = cost;
}

public String getType() {
	return type;
}

public void setType(String type) {
	this.type = type;
}

public byte[] getData() {
	return data;
}

public void setData(byte[] data) {
	this.data = data;
}
  
  

	
  
}
