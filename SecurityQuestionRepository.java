package com.app.project.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.project.model.SecurityQuestion;


@Repository
public interface SecurityQuestionRepository extends JpaRepository<SecurityQuestion,Integer> {

	@Query("select sq from SecurityQuestion sq where sq.contact=?1")
	public SecurityQuestion getByContact(String contact);
}
