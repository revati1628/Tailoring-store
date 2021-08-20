package com.app.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.project.model.Tailor;

@Repository
public interface TailorRepository extends JpaRepository<Tailor,Integer> {

}
