package com.app.extremity.idao;

import org.springframework.data.repository.CrudRepository;

import com.app.extremity.model.ClientManager;

public interface ClientManagerDAO extends CrudRepository<ClientManager, String>{

	
	public ClientManager findAllByClientmanagerID(String id);
	
}
