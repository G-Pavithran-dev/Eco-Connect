package com.ecoconnet.backend.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.ecoconnet.backend.model.PostRagModel;
import com.ecoconnet.backend.repository.PostRagRepo;
public class PostRagService{
    @Autowired
    PostRagRepo repo;

    
    PostRagModel postragservice(PostRagModel p)
    {
        return repo.save(p);
    }
}