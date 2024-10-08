package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/register")
    public void getRegister() {}

    @PostMapping("/register")
    public String postRegister(UserDTO userDTO) {
        userService.createUser(userDTO);

        return "/user/register";
    }

    @GetMapping("/login")
    public void getLogin(){}
}
