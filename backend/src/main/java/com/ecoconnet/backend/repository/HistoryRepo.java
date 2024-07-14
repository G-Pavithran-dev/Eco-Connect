package com.ecoconnet.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecoconnet.backend.model.Histroy;

@Repository
public interface HistoryRepo extends JpaRepository<Histroy, Integer> {
    
}
