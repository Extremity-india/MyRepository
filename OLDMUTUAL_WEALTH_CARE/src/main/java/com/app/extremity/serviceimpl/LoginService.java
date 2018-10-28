package com.app.extremity.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.extremity.idao.AdvisorManagerDAOI;
import com.app.extremity.idao.ClientManagerDAO;
import com.app.extremity.iservice.LoginServicei;
import com.app.extremity.model.AdvisorManager;
import com.app.extremity.model.ClientManager;

@Service
public class LoginService implements LoginServicei {

	@Autowired
	ClientManagerDAO clientDao;
	@Autowired
	AdvisorManagerDAOI amdao1;
	@Override
	public ClientManager clientManagerLogin(String cid) {
		// TODO Auto-generated method stub
		ClientManager cm=clientDao.findAllByClientmanagerID(cid);
		System.out.println(cm.getClientmanagerName()+"    "+cm.getClientmanagerArea());
		return cm;
	}
	@Override
	public AdvisorManager advisorManagerLogin(String adid) {
		// TODO Auto-generated method stub
		AdvisorManager adm= amdao1.findAllByAdvisormanagerID(adid);
	System.out.println(adm.getAdvisormanagerName()+"     "+adm.getAdvisormanagerArea());
		return adm;
	}
	
	

}
