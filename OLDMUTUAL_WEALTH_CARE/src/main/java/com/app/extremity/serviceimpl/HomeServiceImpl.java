package com.app.extremity.serviceimpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.extremity.idao.AdvisorManagerDAOI;
import com.app.extremity.idao.AdvisorsDAOInt;
import com.app.extremity.idao.UserDAOI;
import com.app.extremity.iservice.HomeServiceI;
import com.app.extremity.model.AdvisorManager;
import com.app.extremity.model.Advisors;
import com.app.extremity.model.User;

@Service
public class HomeServiceImpl implements HomeServiceI{

	@Autowired
	AdvisorsDAOInt advisordao;
	  
	@Autowired
	AdvisorManagerDAOI admdao;
	
	@Autowired
	UserDAOI udao;
	
	public int registerAdvisor(Advisors advisor) {
		// TODO Auto-generated method stub
		System.out.println("In registerAdvisor of HomeServiceImpl");
		advisordao.save(advisor);
		
		
		return 0;
	}

	@Override
	public AdvisorManager assignAdvisor(String area) {
		// TODO Auto-generated method stub
		AdvisorManager adm =admdao.findAllByAdvisormanagerAddress(area);
		System.out.println(adm.getAdvisormanagerName()+"     "+adm.getAdvisormanagerArea()+"     "+adm.getAdvisormanagerID());
		
		return adm;
	}

	@Override
	public AdvisorManager AdvisorManagerLogin(String uname, String pass) {
		// TODO Auto-generated method stub
	AdvisorManager adm=	admdao.findAllByAdvisormanagerUserNameAndAdvisormanagerPassword(uname, pass);
		
		return adm;
	}

	@Override
	public List<Advisors> displayAdvisors() {
		// TODO Auto-generated method stub
		System.out.println("In display Advisor manager method");
		List<Advisors> adm = (List<Advisors>) advisordao.findAll();
		return adm;
	}

	@Override
	public List<User> displayUsers() {
		// TODO Auto-generated method stub
		List<User> users=(List<User>) udao.findAll();
		return users;
	}
 
	@Override
	public List<Advisors> showAdviors() {
		// TODO Auto-generated method stub
		return null;
	}
  
	@Override
	public List<Advisors> getAdvisors(int pin) {
		// TODO Auto-generated method stub
		System.out.println("In serveice method---1"+pin);
		//List<Advisors> advs1=new ArrayList<Advisors>();
		List<Advisors> advs= (List<Advisors>) advisordao.findAllByAdvisorAddPin(pin);
		System.out.println("In serveice method----2");
		System.out.println(advs.get(1));
		for(Advisors ads : advs) {
			//if(ads.getAdvisorAddPin()==pin) {}
			System.out.println(ads.getAdvisorName());
		}
		return advs;
	}

	@Override
	public User assignAdvisor(String adid, String uid) {
		// TODO Auto-generated method stub
		User user=udao.findAllByUserID(uid);
		System.out.println(user.getUserName()+"    "+user.getUserArea());
		Advisors adv=advisordao.findAllByAdvisorID(adid);
		System.out.println(adv.getAdvisorName()+"    "+adv.getAdvisorArea());
		user.setAdvisor(adv);
		udao.save(user);
		return null;
	}

	

}
