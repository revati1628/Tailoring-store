package com.app.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.project.model.QandA;


@Repository
public interface QandARepository extends JpaRepository<QandA, Integer>  {

}
