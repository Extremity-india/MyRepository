package com.app.extremity.idao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.app.extremity.model.AdvisorManager;


@Repository
public interface AdvisorManagerDAOI extends CrudRepository<AdvisorManager, String>{

	
	public AdvisorManager findAllByAdvisormanagerAddress(String area);
	public AdvisorManager findAllByAdvisormanagerArea(String area);
	public AdvisorManager findAllByAdvisormanagerUserNameAndAdvisormanagerPassword(String uname, String pass);
	public AdvisorManager findAllByAdvisormanagerID(String adid);
}
