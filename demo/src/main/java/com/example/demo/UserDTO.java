package com.example.demo;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private String id;
    private String password;
    private String address;
    private String phoneNumber;
    private String email;
}
