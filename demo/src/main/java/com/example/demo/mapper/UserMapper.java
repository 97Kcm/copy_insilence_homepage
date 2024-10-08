package com.example.demo.mapper;

import com.example.demo.UserDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {

    void insertUser(UserDTO userDTO);

    UserDTO findUserId(String id);
}
