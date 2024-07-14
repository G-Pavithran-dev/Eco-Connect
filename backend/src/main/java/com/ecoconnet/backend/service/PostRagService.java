package com.ecoconnet.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecoconnet.backend.model.PostRagModel;
import com.ecoconnet.backend.repository.PostRagRepo;

@Service
public class PostRagService{
    @Autowired
    PostRagRepo repo;

    
    public PostRagModel postragservice(PostRagModel p)
    {
        return repo.save(p);
    }

    public List<PostRagModel> getRags() {
        
        return repo.findAll();
    }
}