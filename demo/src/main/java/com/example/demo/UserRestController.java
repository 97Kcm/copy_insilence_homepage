package com.example.demo;

import jakarta.servlet.http.HttpSession;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@Log4j2
public class UserRestController {
    @Autowired
    private UserService userService;

    @GetMapping("/searchId")
    public ResponseEntity<Boolean> searchId(
            @RequestParam("id") String id,
            HttpSession session
    ) {
        boolean result = userService.findUserId(id);
        if(result) {
            session.setAttribute("idCheck", true);
        }else{
            session.setAttribute("idCheck", false);
        }
        return  ResponseEntity.ok(result);
    }
}
