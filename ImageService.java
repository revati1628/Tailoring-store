package com.app.project.service;

import java.io.IOException;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.app.project.dao.ImageRepository;
import com.app.project.model.Image;



@Service
public class ImageService {

  @Autowired
  private ImageRepository fileDBRepository;

  public Image store(MultipartFile file,Image img) throws IOException {
    String fileName = StringUtils.cleanPath(file.getOriginalFilename());
    Image FileDB = new Image(fileName,fileName,img.getTailorid(),img.getCost(), file.getContentType(),file.getBytes());

    return fileDBRepository.save(FileDB);
  }
  
  public Image getFile(String id) {
	    return fileDBRepository.findById(id).get();
	  }
	  
	  public Stream<Image> getAllFiles() {
	    return fileDBRepository.findAll().stream();
	  }

	public Stream<Image> getByTailoid(int tailorid) {
		// TODO Auto-generated method stub
		Stream<Image> img=fileDBRepository.getbyTailorId(tailorid);
		return img;
	}
	}
