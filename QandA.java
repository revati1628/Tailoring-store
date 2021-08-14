package com.app.project.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class QandA {
	
	@Id
	//@GeneratedValue(strategy = GenerationType.AUTO)
	private int questionId;
	private String question;
	private String answer;
	
	
	
	public QandA() {
		super();
	}

	public QandA(int questionId,String question, String answer) {
		
		super();
		this.questionId = questionId;
		this.question = question;
		this.answer = answer;
	}

	public int getQuestionId() {
		return questionId;
	}

	public void setQuestionId(int questionId) {
		this.questionId = questionId;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	@Override
	public String toString() {
		return "QandA [questionId=" + questionId + ", question=" + question + ", answer=" + answer + "]";
	}
	
	
	
	
	

}
