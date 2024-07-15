package com.ecoconnet.backend.controller;

import java.util.List;
import java.util.Scanner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.ecoconnet.backend.service.PostRagService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ecoconnet.backend.model.PostRagModel;
import com.ecoconnet.backend.repository.PostRagRepo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/ecoconnect")
public class PostRagController {
    @Autowired
    PostRagRepo repo;
    
    @Autowired
    private PostRagService ragService;

    @PostMapping("/postragger/post")
    public PostRagModel postMethodName(@RequestBody PostRagModel entity) {
        System.out.println();
        System.out.println();
        System.out.println(entity.getAddress());

        return repo.save(entity);
    }

    @GetMapping("/getRags")
    public List<PostRagModel> getRagsDetails() {
        return ragService.getRags();
    }   
    
}
