package com.task.gettask.model.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@TOSl
public class Client {
    private Integer idCliente;
    private String name;
    private String lastName;
    private String email;
    private String registerDate;
}
