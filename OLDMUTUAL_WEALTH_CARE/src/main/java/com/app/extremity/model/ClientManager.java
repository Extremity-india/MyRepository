package com.app.extremity.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ClientManager {

	@Id
	private String clientmanagerID;
	
	private String clientmanagerName;
	
	private String clientmanagerEmail;
	
	private String clientmanagerContactno;
	
	private String clientmanagerAddress;
	
	private String clientmanagerDOB;
	
	private int clientmanagerAddPin;
	 
	private String clientmanagerExperince;
	
	private String clientmanagerArea;
	
	private String clientmanagerUserName;
	
	private String clientmanagerPassword;

	public String getClientmanagerID() {
		return clientmanagerID;
	}

	public void setClientmanagerID(String clientmanagerID) {
		this.clientmanagerID = clientmanagerID;
	}

	public String getClientmanagerName() {
		return clientmanagerName;
	}

	public void setClientmanagerName(String clientmanagerName) {
		this.clientmanagerName = clientmanagerName;
	}

	public String getClientmanagerEmail() {
		return clientmanagerEmail;
	}

	public void setClientmanagerEmail(String clientmanagerEmail) {
		this.clientmanagerEmail = clientmanagerEmail;
	}

	public String getClientmanagerContactno() {
		return clientmanagerContactno;
	}

	public void setClientmanagerContactno(String clientmanagerContactno) {
		this.clientmanagerContactno = clientmanagerContactno;
	}

	public String getClientmanagerAddress() {
		return clientmanagerAddress;
	}

	public void setClientmanagerAddress(String clientmanagerAddress) {
		this.clientmanagerAddress = clientmanagerAddress;
	}

	public String getClientmanagerDOB() {
		return clientmanagerDOB;
	}

	public void setClientmanagerDOB(String clientmanagerDOB) {
		this.clientmanagerDOB = clientmanagerDOB;
	}

	public int getClientmanagerAddPin() {
		return clientmanagerAddPin;
	}

	public void setClientmanagerAddPin(int clientmanagerAddPin) {
		this.clientmanagerAddPin = clientmanagerAddPin;
	}

	public String getClientmanagerExperince() {
		return clientmanagerExperince;
	}

	public void setClientmanagerExperince(String clientmanagerExperince) {
		this.clientmanagerExperince = clientmanagerExperince;
	}

	public String getClientmanagerArea() {
		return clientmanagerArea;
	}

	public void setClientmanagerArea(String clientmanagerArea) {
		this.clientmanagerArea = clientmanagerArea;
	}

	public String getClientmanagerUserName() {
		return clientmanagerUserName;
	}

	public void setClientmanagerUserName(String clientmanagerUserName) {
		this.clientmanagerUserName = clientmanagerUserName;
	}

	public String getClientmanagerPassword() {
		return clientmanagerPassword;
	}

	public void setClientmanagerPassword(String clientmanagerPassword) {
		this.clientmanagerPassword = clientmanagerPassword;
	}
	
	

}
