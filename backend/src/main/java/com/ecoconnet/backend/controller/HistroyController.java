package com.ecoconnet.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecoconnet.backend.model.Histroy;
import com.ecoconnet.backend.service.HistoryService;

@CrossOrigin("http://localhost:5173/")
@RestController
public class HistroyController {
    
    @Autowired
    private HistoryService historyService;

    @PostMapping("/order/post")
    private boolean postOrder(@RequestBody Histroy order) {
        return historyService.postHistory(order);
    }
}
