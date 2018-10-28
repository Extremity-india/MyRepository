package com.app.extremity.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class AdvisorManager {
	
	@Id
	private String advisormanagerID;
	
	private String advisormanagerName;
	
	private String advisormanagerEmail;
	
	private String advisormanagerContactno;
	
	private String advisormanagerAddress;
	
	private String advisormanagerDOB;
	
	private int advisormanagerAddPin;
	 
	private String addvisormanagerExperince;
	
	private String advisormanagerArea;
	
	private String advisormanagerUserName;
	
	private String advisormanagerPassword;

	public String getAdvisormanagerDOB() {
		return advisormanagerDOB;
	}

	public void setAdvisormanagerDOB(String advisormanagerDOB) {
		this.advisormanagerDOB = advisormanagerDOB;
	}

	public String getAdvisormanagerID() {
		return advisormanagerID;
	}

	public void setAdvisormanagerID(String advisormanagerID) {
		this.advisormanagerID = advisormanagerID;
	}

	public String getAdvisormanagerName() {
		return advisormanagerName;
	}

	public void setAdvisormanagerName(String advisormanagerName) {
		this.advisormanagerName = advisormanagerName;
	}

	public String getAdvisormanagerEmail() {
		return advisormanagerEmail;
	}

	public void setAdvisormanagerEmail(String advisormanagerEmail) {
		this.advisormanagerEmail = advisormanagerEmail;
	}

	public String getAdvisormanagerContactno() {
		return advisormanagerContactno;
	}

	public void setAdvisormanagerContactno(String advisormanagerContactno) {
		this.advisormanagerContactno = advisormanagerContactno;
	}

	public String getAdvisormanagerAddress() {
		return advisormanagerAddress;
	}

	public void setAdvisormanagerAddress(String advisormanagerAddress) {
		this.advisormanagerAddress = advisormanagerAddress;
	}

	public int getAdvisormanagerAddPin() {
		return advisormanagerAddPin;
	}

	public void setAdvisormanagerAddPin(int advisormanagerAddPin) {
		this.advisormanagerAddPin = advisormanagerAddPin;
	}

	public String getAddvisormanagerExperince() {
		return addvisormanagerExperince;
	}

	public void setAddvisormanagerExperince(String addvisormanagerExperince) {
		this.addvisormanagerExperince = addvisormanagerExperince;
	}

	public String getAdvisormanagerArea() {
		return advisormanagerArea;
	}

	public void setAdvisormanagerArea(String advisormanagerArea) {
		this.advisormanagerArea = advisormanagerArea;
	}

	public String getAdvisormanagerUserName() {
		return advisormanagerUserName;
	}

	public void setAdvisormanagerUserName(String advisormanagerUserName) {
		this.advisormanagerUserName = advisormanagerUserName;
	}

	public String getAdvisormanagerPassword() {
		return advisormanagerPassword;
	}

	public void setAdvisormanagerPassword(String advisormanagerPassword) {
		this.advisormanagerPassword = advisormanagerPassword;
	}
	
	
	

}
