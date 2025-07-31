package com.shopeasy.shopeasybackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    @GetMapping
    public String getProducts() {
        return "Welcome to ShopEasy! Product list coming soon.";
    }
}