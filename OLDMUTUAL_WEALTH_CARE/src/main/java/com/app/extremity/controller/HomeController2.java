package com.app.extremity.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.app.extremity.model.AdvisorManager;
import com.app.extremity.model.Advisors;
import com.app.extremity.model.ClientManager;
import com.app.extremity.model.User;
import com.app.extremity.serviceimpl.HomeServiceImpl;

@Controller
public class HomeController2 {
	
	@Autowired
	HomeServiceImpl service;
	
	//Welcome page
	//@RequestMapping("/")
	public String welcome() {
		System.out.println("In Welcome");
		return "index";
	}
	
	
	//redirect to advisor registration form
	@RequestMapping("/addAdvisor")
	public String addAdvisor() {
		System.out.println("In addAdvisor method");
		return "Dashbord/Manager/Advisormanager/addnewAdvisor";
		//return "advisorRegister";

	}
	
	
	//fto register Advisor in database
	@RequestMapping("/register")
	public String registerAdvisor(@ModelAttribute Advisors advisor) {
		System.out.println("In registerAdvisor");
		AdvisorManager advisormanager=service.assignAdvisor(advisor.getAdvisorAddress());
		advisor.setAdvisormanager(advisormanager);
		service.registerAdvisor(advisor);
		
		return "Dashbord/Manager/Advisormanager/advisormanagerHome";
	}

	//@RequestMapping("/loginredirect")
	public String loginredirect() {
	System.out.println("in loginredirect method");
	
		return "login";
	
	} 
	//@RequestMapping("/login")
	public String loginAdvisor(@ModelAttribute AdvisorManager advisorManager,@ModelAttribute
			ClientManager clientmanager, Model model,ModelAndView mav) {
		System.out.println("login controller");
		System.out.println(advisorManager.getAdvisormanagerUserName());
		System.out.println(advisorManager.getAdvisormanagerPassword());
		
	AdvisorManager adm=	service.AdvisorManagerLogin(advisorManager.getAdvisormanagerUserName(), advisorManager.getAdvisormanagerPassword());
		model.addAttribute("data",adm);
		model.addAttribute("name",adm.getAdvisormanagerName());
		return "Dashbord/Manager/Advisormanager/advisormanagerHome";
	}
	//Display Advisor 
	//@RequestMapping("/displayAdvisor")
	public String displayADvisor(Model model) {
		
		List<Advisors> advs = service.displayAdvisors();
		for(Advisors advi : advs) {
			
			System.out.println(advi.getAdvisorName());
			System.out.println(advi.getAdvisorArea());

		}
		model.addAttribute("advs",advs);
		return "Dashbord/Manager/Advisormanager/advisorDisplay";
	}
	//Display Users
	@RequestMapping("/userdisplay")
	public String usersList(Model model) {
		List<User> user = service.displayUsers();
		for(User us:user) {
			System.out.println(us.getUserName());
				}
		model.addAttribute("user",user);
		return "Dashbord/Manager/Advisormanager/UserDisplay";
	}
	//Assign Advisor
	@RequestMapping("/assignAdvisor")
	public String displayUser(Model model) {
		List<User> us= new ArrayList<>();
		System.out.println("In Assign Advisor");
		List<User>ulist=service.displayUsers();
		for(User u :ulist) {
			if(u.getAdvisor().getAdvisorID().equals("0")) {
				us.add(u);
				
				 
			}
		}
		model.addAttribute("user",us);
		List<Advisors> advs=service.displayAdvisors();
		//model.addAttribute("advs",advs);
		return "Dashbord/Manager/Advisormanager/assignAdvisortoUser";
		
		
	}
	
		

}
