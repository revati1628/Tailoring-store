package com.security.app.repo;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.security.app.model.User;

@Service
@Repository
public interface UserRepositry extends JpaRepository<User, Integer> {

	User findByPassword(String password);

//	User findById(long id);

}
