package com.app.extremity.idao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.app.extremity.model.Advisors;


@Repository
public interface AdvisorsDAOInt extends CrudRepository<Advisors, String>{

	//public List<Advisors> findAllByAdvisorAddPin(String pin);
	public List<Advisors> findAllByAdvisorAddPin(int pin);       
	public Advisors findAllByAdvisorID(String adid);
}		
