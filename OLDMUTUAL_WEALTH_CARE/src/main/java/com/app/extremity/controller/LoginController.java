package com.app.extremity.controller;

import org.bouncycastle.ocsp.Req;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.app.extremity.model.AdvisorManager;
import com.app.extremity.model.ClientManager;
import com.app.extremity.model.LoginPojo;
import com.app.extremity.serviceimpl.LoginService;

@Controller
public class LoginController {

	@Autowired
	LoginService service;
	@RequestMapping("/login")
	public String loginUser(@RequestParam(name="ID") String ID ,@RequestParam(name="password") String pass,Model model) {
		
		System.out.println("in Login Controller---------------------");
	//	String id=loginpojo.getID();
		System.out.println(ID+"    "+pass);
		String tid=ID.substring(0, 7);
		System.out.println(tid);
		if(tid.equals("PNCMKAR")) {
		
			service.clientManagerLogin(ID);
			
			return "Dashbord/Manager/ClientManager/clientmanagerHome";
		}
		if(tid.equals("AMPUKAR")) {
			AdvisorManager adv =service.advisorManagerLogin(ID);
			System.out.println(adv.getAdvisormanagerID());
			model.addAttribute("id",adv.getAdvisormanagerID());
			model.addAttribute("advm",adv);
		//	System.out.println("Dashbord/Manager/Advisormanager/advisormanagerHome");
			return "Dashbord/Manager/Advisormanager/advisormanagerHome";
 
		}
		System.out.println(tid );
		//System.out.println(loginpojo.getPassword());
		return "login";
	}

	@RequestMapping(value="/advisor",method=RequestMethod.GET)
	public String advisormanagerdashBoard() {
	System.out.println("---------advisor manager dashboard-----");
		return "Dashbord/Manager/Advisormanager/advisormanagerHome";
	}
	
	@RequestMapping(value="/clientdashboard")
	public String clientmanagerdashBoard() {
	System.out.println("-----Client manager dashboard------");
		return "Dashbord/Manager/ClientManager/clientmanagerHome";
	}
	
}
