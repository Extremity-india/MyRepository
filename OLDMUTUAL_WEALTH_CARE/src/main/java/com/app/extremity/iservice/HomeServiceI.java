package com.app.extremity.iservice;

import java.util.List;

import com.app.extremity.model.AdvisorManager;
import com.app.extremity.model.Advisors;
import com.app.extremity.model.User;
 
public interface HomeServiceI {
	
	public int registerAdvisor(Advisors advisor);
	public AdvisorManager assignAdvisor(String area);

	public AdvisorManager AdvisorManagerLogin(String uname , String pass);
	
	public List<Advisors> displayAdvisors();
	
	public List<User> displayUsers();
	
	public List<Advisors> showAdviors();
	
	public List<Advisors> getAdvisors(int pin);
	
	public User assignAdvisor(String pid,String uid);
	
}
