package com.ecoconnet.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecoconnet.backend.model.PostRagModel;
@Repository
public interface PostRagRepo extends JpaRepository<PostRagModel,Integer> {
    
}
