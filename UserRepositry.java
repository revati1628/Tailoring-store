package com.app.project.dao;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.app.project.model.User;


//@Service
@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

	@Transactional
	@Modifying
	@Query("update User u set u.password=:password where u.id=:id")
    public void updatePassword(int id,String password);
	
	User findByPassword(String password);
	
	@Query("select u.usercategory from User u where u.id=?1")
	public String userCategory(int id);
	
	

//		User findById(long id);

	
}

