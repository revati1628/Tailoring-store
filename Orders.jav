package com.app.project.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Orders {
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private int orderid;
		private int tailorid;
		private int customerid;
		private String dresstype;
		private String topfabric;
		//private String expectedDateT;
		private String topwaist;
		private String toplength;
		private String chest;
		private String shoulderlength;
		private int topamount;
		private String neck;
		private String bottomfabric;
		private String expectedDate;
		private int bottomamount;
		private String kneelength;
		private String hip;
		private String comments;
		private String modelid;
		private String approvalstatus;
		
		public Orders() {
			super();
		}

		public Orders(int orderid, int tailorid, int customerid, String dresstype, String topfabric, String topwaist,
				String toplength, String chest, String shoulderlength, int topamount, String neck, String bottomfabric,
				String expectedDate, int bottomamount, String kneelength, String hip, String comments, String modelid,
				String approvalstatus) {
			super();
			this.orderid = orderid;
			this.tailorid = tailorid;
			this.customerid = customerid;
			this.dresstype = dresstype;
			this.topfabric = topfabric;
			this.topwaist = topwaist;
			this.toplength = toplength;
			this.chest = chest;
			this.shoulderlength = shoulderlength;
			this.topamount = topamount;
			this.neck = neck;
			this.bottomfabric = bottomfabric;
			this.expectedDate = expectedDate;
			this.bottomamount = bottomamount;
			this.kneelength = kneelength;
			this.hip = hip;
			this.comments = comments;
			this.modelid = modelid;
			this.approvalstatus = approvalstatus;
		}

		public int getOrderid() {
			return orderid;
		}

		public void setOrderid(int orderid) {
			this.orderid = orderid;
		}

		public int getTailorid() {
			return tailorid;
		}

		public void setTailorid(int tailorid) {
			this.tailorid = tailorid;
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

		public String getTopfabric() {
			return topfabric;
		}

		public void setTopfabric(String topfabric) {
			this.topfabric = topfabric;
		}

		public String getTopwaist() {
			return topwaist;
		}

		public void setTopwaist(String topwaist) {
			this.topwaist = topwaist;
		}

		public String getToplength() {
			return toplength;
		}

		public void setToplength(String toplength) {
			this.toplength = toplength;
		}

		public String getChest() {
			return chest;
		}

		public void setChest(String chest) {
			this.chest = chest;
		}

		public String getShoulderlength() {
			return shoulderlength;
		}

		public void setShoulderlength(String shoulderlength) {
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

		public String getExpectedDate() {
			return expectedDate;
		}

		public void setExpectedDate(String expectedDate) {
			this.expectedDate = expectedDate;
		}

		public int getBottomamount() {
			return bottomamount;
		}

		public void setBottomamount(int bottomamount) {
			this.bottomamount = bottomamount;
		}

		public String getKneelength() {
			return kneelength;
		}

		public void setKneelength(String kneelength) {
			this.kneelength = kneelength;
		}

		public String getHip() {
			return hip;
		}

		public void setHip(String hip) {
			this.hip = hip;
		}

		public String getComments() {
			return comments;
		}

		public void setComments(String comments) {
			this.comments = comments;
		}

		public String getModelid() {
			return modelid;
		}

		public void setModelid(String modelid) {
			this.modelid = modelid;
		}

		public String getApprovalstatus() {
			return approvalstatus;
		}

		public void setApprovalstatus(String approvalstatus) {
			this.approvalstatus = approvalstatus;
		}

		@Override
		public String toString() {
			return "Orders [orderid=" + orderid + ", tailorid=" + tailorid + ", customerid=" + customerid
					+ ", dresstype=" + dresstype + ", topfabric=" + topfabric + ", topwaist=" + topwaist
					+ ", toplength=" + toplength + ", chest=" + chest + ", shoulderlength=" + shoulderlength
					+ ", topamount=" + topamount + ", neck=" + neck + ", bottomfabric=" + bottomfabric
					+ ", expectedDate=" + expectedDate + ", bottomamount=" + bottomamount + ", kneelength=" + kneelength
					+ ", hip=" + hip + ", comments=" + comments + ", modelid=" + modelid + ", approvalstatus="
					+ approvalstatus + "]";
		}

		
		
	}

