//package com.oriz.backend_system.controllers;
//
//import com.oriz.backend_system.exception.OrderException;
//import com.oriz.backend_system.model.Order;
//import com.oriz.backend_system.repositories.OrderRepository;
//import com.oriz.backend_system.services.OrderService;
//import com.oriz.backend_system.services.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api")
//public class PaymentController {
//    @Autowired
//    private OrderService orderService;
//    @Autowired
//    private UserService userService;
//    @Autowired
//    private OrderRepository orderRepository;
//
//    @PostMapping("/payments/{orderId}")
//    public ResponseEntity<Order>createPayment(@PathVariable Long orderId,
//                                              @RequestHeader("Authorization")String jwt) throws OrderException {
//        Order  order = orderService.findOrderById(orderId);
//
//    }
//}
