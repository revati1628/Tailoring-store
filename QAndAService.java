package com.app.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.project.dao.QandARepository;
import com.app.project.model.QandA;


@Service
public class QandAService {
	
	@Autowired
	QandARepository qAndaepository;
	
	public QandA storeQA(QandA qa) {
		qAndaepository.save(qa);
		return qa;
	}
	
	public List<QandA> getQA(){
		List< QandA> qa=qAndaepository.findAll();
		return qa;
	}

}
