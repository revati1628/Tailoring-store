package com.security.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.security.app.model.CustomerOrder;

@Service
@Repository
public interface CustomerOrderRepo extends JpaRepository<CustomerOrder, Integer> {

}
