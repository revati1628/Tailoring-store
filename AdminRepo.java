package com.security.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.security.app.model.AdminModel;

@Service
@Repository
public interface AdminRepo extends JpaRepository<AdminModel, Integer> {

}
