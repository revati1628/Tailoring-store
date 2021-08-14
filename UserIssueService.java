package com.app.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.project.dao.UserIssueRepository;
import com.app.project.model.UserIssue;


@Service
public class UserIssueService {

		@Autowired
		UserIssueRepository issuerepository;
		
		public UserIssue storeUserissue(UserIssue userissue) {
			issuerepository.save(userissue);
			return userissue;
		}
		
		public List<UserIssue> getUserissue(){
			List<UserIssue> userissue=issuerepository.findAll();
			return userissue;
		}
}
