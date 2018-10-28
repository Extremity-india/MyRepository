package com.app.extremity.iservice;

import com.app.extremity.model.AdvisorManager;
import com.app.extremity.model.ClientManager;

public interface LoginServicei {
	
	public ClientManager clientManagerLogin(String cid);

	public AdvisorManager advisorManagerLogin(String adid);
}
