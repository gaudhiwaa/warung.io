package com.reactsb.reactsb.controller;

import com.reactsb.reactsb.model.Employee;
import com.reactsb.reactsb.model.Review;
import com.reactsb.reactsb.repository.EmployeeRepository;
import com.reactsb.reactsb.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private ReviewRepository reviewRepository;


//    @Autowired
//    private ReviewRepository reviewRepository;

    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

    @GetMapping("/reviews")
    public List<Review> getAllReviews(){
        return reviewRepository.findAll();
    }

    @PostMapping("/reviews")
    public Review createReviews(@RequestBody Review review){
        return reviewRepository.save(review);
    }



//    @GetMapping("/review")
//    public List<Review> getAllReview(){
//        return reviewRepository.findAll();
//    }
//
//    @PostMapping("/review")
//    public Review createReview(@RequestBody Review review){
//        return reviewRepository.save(review);
//    }
}
