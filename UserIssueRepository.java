package com.app.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;


import com.app.project.model.UserIssue;

public interface UserIssueRepository extends JpaRepository<UserIssue, Integer> {

}
