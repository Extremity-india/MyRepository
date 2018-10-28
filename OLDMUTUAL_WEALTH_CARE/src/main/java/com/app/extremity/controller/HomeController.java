package com.app.extremity.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
  
@Controller    
public class HomeController {
	    
	// All site actions are go through this method
	//This is our landing page
	@RequestMapping(value="/")
	public String homePage()
	{ 
		System.out.println("In home controller");
		return "index";
	}  
	 
	@RequestMapping(value="/loginPage")
	public String loginPage()
	{ 
		System.out.println("In login page");
		return "login";
	} 
	@RequestMapping(value="/loginDashbord")
	public String login()
	{ 
		System.out.println("In login controller");
		return "Dashbord/Manager/Advisormanager/advisormanagerHome";
	}
	@RequestMapping(value="/click")
	public String click()
	{ 
		System.out.println("In click controller");
		return "Dashbord/admin/adminHome";
	}
}
