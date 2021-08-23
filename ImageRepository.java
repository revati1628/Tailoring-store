package com.app.project.dao;


import java.util.stream.Stream;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.project.model.Image;




@Repository
public interface ImageRepository extends JpaRepository<Image, String> {
	
	@Transactional
	@Query("select i from Image i where i.tailorid=?1")
	public Stream<Image> getbyTailorId(int tailorid);

}
