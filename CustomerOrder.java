package com.app.project.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Orders {
		@Id
		private int tailorid;
		private String dresstype;
		private String topfabric;
		private String expectedDateT;
		private String topwaist;
		private String toplength;
		private String chest;
		private String shoulderlength;
		private String topamount;
		private String neck;
		private String bottomfabric;
		private String expectedDateB;
		private String bottomamount;
		private String kneelength;
		private String hip;
		private String comments;
		
		public Orders() {
			super();
		}

		public Orders(int tailorid, String dresstype, String topfabric, String expectedDateT, String topwaist,
				String toplength, String chest, String shoulderlength, String topamount, String neck,
				String bottomfabric, String expectedDateB, String bottomamount, String kneelength, String hip,
				String comments) {
			super();
			this.tailorid = tailorid;
			this.dresstype = dresstype;
			this.topfabric = topfabric;
			this.expectedDateT = expectedDateT;
			this.topwaist = topwaist;
			this.toplength = toplength;
			this.chest = chest;
			this.shoulderlength = shoulderlength;
			this.topamount = topamount;
			this.neck = neck;
			this.bottomfabric = bottomfabric;
			this.expectedDateB = expectedDateB;
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

		public String getExpectedDateT() {
			return expectedDateT;
		}

		public void setExpectedDateT(String expectedDateT) {
			this.expectedDateT = expectedDateT;
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

		public String getTopamount() {
			return topamount;
		}

		public void setTopamount(String topamount) {
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

		public String getExpectedDateB() {
			return expectedDateB;
		}

		public void setExpectedDateB(String expectedDateB) {
			this.expectedDateB = expectedDateB;
		}

		public String getBottomamount() {
			return bottomamount;
		}

		public void setBottomamount(String bottomamount) {
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

		@Override
		public String toString() {
			return "Orders [tailorid=" + tailorid + ", dresstype=" + dresstype + ", topfabric=" + topfabric
					+ ", expectedDateT=" + expectedDateT + ", topwaist=" + topwaist + ", toplength=" + toplength
					+ ", chest=" + chest + ", shoulderlength=" + shoulderlength + ", topamount=" + topamount + ", neck="
					+ neck + ", bottomfabric=" + bottomfabric + ", expectedDateB=" + expectedDateB + ", bottomamount="
					+ bottomamount + ", kneelength=" + kneelength + ", hip=" + hip + ", comments=" + comments + "]";
		}
		
		

		
		
		
	}


