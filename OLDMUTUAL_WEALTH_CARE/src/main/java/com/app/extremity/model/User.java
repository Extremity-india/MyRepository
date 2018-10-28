package com.app.extremity.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class User {
	
	@Id
	private String userID;
	
	private String UserName;
	
	private String userAddress;
	
	private String userDOB;
	
	private String userArea;
	
	private String userPin;
	
	private String userdocstatus;

	private String userEmail;
	
	private String usercontact;
	
	@JoinColumn(name="advisorID")
	@OneToOne(cascade=CascadeType.ALL)
	private Advisors advisor;
	
	

	public String getUserID() {
		return userID;
	}

	public void setUserID(String userID) {
		this.userID = userID;
	}

	public String getUserName() {
		return UserName;
	}

	public void setUserName(String userName) {
		UserName = userName;
	}

	public String getUserArea() {
		return userArea;
	}

	public void setUserArea(String userArea) {
		this.userArea = userArea;
	}

	public String getUserPin() {
		return userPin;
	}

	public void setUserPin(String userPin) {
		this.userPin = userPin;
	}

	
	public String getUserDOB() {
		return userDOB;
	}

	public void setUserDOB(String userDOB) {
		this.userDOB = userDOB;
	}

	public String getUserdocstatus() {
		return userdocstatus;
	}

	public void setUserdocstatus(String userdocstatus) {
		this.userdocstatus = userdocstatus;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUsercontact() {
		return usercontact;
	}

	public void setUsercontact(String usercontact) {
		this.usercontact = usercontact;
	}

	public Advisors getAdvisor() {
		return advisor;
	}

	public void setAdvisor(Advisors advisor) {
		this.advisor = advisor;
	}
	
	public String getUserAddress() {
		return userAddress;
	}

	public void setUserAddress(String userAddress) {
		this.userAddress = userAddress;
	}

}
