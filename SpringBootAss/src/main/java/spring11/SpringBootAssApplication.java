package spring11;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootAssApplication {
    public static void main(String[] args) {
        SpringApplication.run(SpringBootAssApplication.class, args);
    }
}


//GET
//http://localhost:8083/springrest/customers
//no needed headers and body


/*
[
 {
     "id": 101,
     "firstName": "John",
     "lastName": "Doe",
     "email": "djohn@gmail.com",
     "mobile": "121-232-3435",
     "dateOfBirth": 1467240235069
 },
 {
     "id": 201,
     "firstName": "Russ",
     "lastName": "Smith",
     "email": "sruss@gmail.com",
     "mobile": "343-545-2345",
     "dateOfBirth": 1467240235069
 },
 {
     "id": 301,
     "firstName": "Kate",
     "lastName": "Williams",
     "email": "kwilliams@gmail.com",
     "mobile": "876-237-2987",
     "dateOfBirth": 1467240235069
 }
]
*/