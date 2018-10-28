package com.app.extremity.idao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.app.extremity.model.User;

@Repository
public interface UserDAOI extends CrudRepository<User, String> {

	public User findAllByUserID(String uid);
	
}
