package com.app.extremity.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Advisors {

	@Id
	private String advisorID;
	
	private String advisorName;
	
	private String advisorEmail;
	
	private String advisorContactno;
	
	private String advisorAddress;
	
	private String advisorDOB;
	
	private int advisorAddPin;
	 
	private String addvisorExperince;
	
	private String advisorArea;
	
	private String advisorUserName;
	
	private String advisorPassword;
	@JoinColumn(name="advisormanagerID")
	@OneToOne(cascade=CascadeType.ALL)
	private AdvisorManager advisormanager;
	
	
	
	public String getAdvisorDOB() {
		return advisorDOB;
	}

	public void setAdvisorDOB(String advisorDOB) {
		this.advisorDOB = advisorDOB;
	}

	public AdvisorManager getAdvisormanager() {
		return advisormanager;
	}

	public void setAdvisormanager(AdvisorManager advisormanager) {
		this.advisormanager = advisormanager;
	}

	public String getAdvisorUserName() {
		return advisorUserName;
	}

	public void setAdvisorUserName(String advisorUserName) {
		this.advisorUserName = advisorUserName;
	}

	public String getAdvisorPassword() {
		return advisorPassword;
	}

	public void setAdvisorPassword(String advisorPassword) {
		this.advisorPassword = advisorPassword;
	}

	public String getAdvisorID() {
		return advisorID;
	}

	public void setAdvisorID(String advisorID) {
		this.advisorID = advisorID;
	}

	public String getAdvisorName() {
		return advisorName;
	}

	public void setAdvisorName(String advisorName) {
		this.advisorName = advisorName;
	}

	public String getAdvisorEmail() {
		return advisorEmail;
	}

	public void setAdvisorEmail(String advisorEmail) {
		this.advisorEmail = advisorEmail;
	}

	public String getAdvisorContactno() {
		return advisorContactno;
	}

	public void setAdvisorContactno(String advisorContactno) {
		this.advisorContactno = advisorContactno;
	}

	public String getAdvisorAddress() {
		return advisorAddress;
	}

	public void setAdvisorAddress(String advisorAddress) {
		this.advisorAddress = advisorAddress;
	}

	public int getAdvisorAddPin() {
		return advisorAddPin;
	}

	public void setAdvisorAddPin(int advisorAddPin) {
		this.advisorAddPin = advisorAddPin;
	}

	public String getAddvisorExperince() {
		return addvisorExperince;
	}

	public void setAddvisorExperince(String addvisorExperince) {
		this.addvisorExperince = addvisorExperince;
	}

	public String getAdvisorArea() {
		return advisorArea;
	}

	public void setAdvisorArea(String advisorArea) {
		this.advisorArea = advisorArea;
	}
	
	
}
