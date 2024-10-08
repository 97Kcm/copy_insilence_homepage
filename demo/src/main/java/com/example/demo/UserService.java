package com.example.demo;

import com.example.demo.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class UserService {
    @Autowired
    private UserMapper userMapper;

    public void createUser(UserDTO userDTO) {
        userMapper.insertUser(userDTO);
    }

    public boolean findUserId(String id){
        UserDTO findUser = userMapper.findUserId(id);
        return Objects.isNull(findUser);
    }
}
