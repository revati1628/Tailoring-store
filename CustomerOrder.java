package com.security.app.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="placeorder")
public class CustomerOrder {
	
	@Id
	private int tailorid;
	private String dresstype;
	private String topfabric;
	private String topduration;
	private int topwaist;
	private String toplength;
	private int chest;
	private int shoulderlength;
	private int topamount;
	private String neck;
	private String bottomfabric;
	private String bottomduration;
	private int bottomamount;
	private int kneelength;
	private int hip;
	private String comments;
	
	public CustomerOrder() {
		super();
	}

	public CustomerOrder(int tailorid, String dresstype, String topfabric, String topduration, int topwaist,
			String toplength, int chest, int shoulderlength, int topamount, String neck, String bottomfabric,
			String bottomduration, int bottomamount, int kneelength, int hip, String comments) {
		super();
		this.tailorid = tailorid;
		this.dresstype = dresstype;
		this.topfabric = topfabric;
		this.topduration = topduration;
		this.topwaist = topwaist;
		this.toplength = toplength;
		this.chest = chest;
		this.shoulderlength = shoulderlength;
		this.topamount = topamount;
		this.neck = neck;
		this.bottomfabric = bottomfabric;
		this.bottomduration = bottomduration;
		this.bottomamount = bottomamount;
		this.kneelength = kneelength;
		this.hip = hip;
		this.comments = comments;
	}

	public int getTailorid() {
		return tailorid;
	}

	public void setTailorid(int tailorid) {
		this.tailorid = tailorid;
	}

	public String getDresstype() {
		return dresstype;
	}

	public void setDresstype(String dresstype) {
		this.dresstype = dresstype;
	}

	public String getTopfabric() {
		return topfabric;
	}

	public void setTopfabric(String topfabric) {
		this.topfabric = topfabric;
	}

	public String getTopduration() {
		return topduration;
	}

	public void setTopduration(String topduration) {
		this.topduration = topduration;
	}

	public int getTopwaist() {
		return topwaist;
	}

	public void setTopwaist(int topwaist) {
		this.topwaist = topwaist;
	}

	public String getToplength() {
		return toplength;
	}

	public void setToplength(String toplength) {
		this.toplength = toplength;
	}

	public int getChest() {
		return chest;
	}

	public void setChest(int chest) {
		this.chest = chest;
	}

	public int getShoulderlength() {
		return shoulderlength;
	}

	public void setShoulderlength(int shoulderlength) {
		this.shoulderlength = shoulderlength;
	}

	public int getTopamount() {
		return topamount;
	}

	public void setTopamount(int topamount) {
		this.topamount = topamount;
	}

	public String getNeck() {
		return neck;
	}

	public void setNeck(String neck) {
		this.neck = neck;
	}

	public String getBottomfabric() {
		return bottomfabric;
	}

	public void setBottomfabric(String bottomfabric) {
		this.bottomfabric = bottomfabric;
	}

	public String getBottomduration() {
		return bottomduration;
	}

	public void setBottomduration(String bottomduration) {
		this.bottomduration = bottomduration;
	}

	public int getBottomamount() {
		return bottomamount;
	}

	public void setBottomamount(int bottomamount) {
		this.bottomamount = bottomamount;
	}

	public int getKneelength() {
		return kneelength;
	}

	public void setKneelength(int kneelength) {
		this.kneelength = kneelength;
	}

	public int getHip() {
		return hip;
	}

	public void setHip(int hip) {
		this.hip = hip;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	@Override
	public String toString() {
		return "CustomerOrder [tailorid=" + tailorid + ", dresstype=" + dresstype + ", topfabric=" + topfabric
				+ ", topduration=" + topduration + ", topwaist=" + topwaist + ", toplength=" + toplength + ", chest="
				+ chest + ", shoulderlength=" + shoulderlength + ", topamount=" + topamount + ", neck=" + neck
				+ ", bottomfabric=" + bottomfabric + ", bottomduration=" + bottomduration + ", bottomamount="
				+ bottomamount + ", kneelength=" + kneelength + ", hip=" + hip + ", comments=" + comments + "]";
	}
	
	
}
