package com.ecoconnet.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecoconnet.backend.model.Histroy;
import com.ecoconnet.backend.repository.HistoryRepo;

@Service
public class HistoryService {
    @Autowired
    private HistoryRepo historyRepo;
    
    public boolean postHistory(Histroy order) {
        try {
            historyRepo.save(order);
            return true;
        }
        catch(Exception e) {
            return false;
        }
    }
}