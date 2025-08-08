package spring8;

import org.springframework.web.bind.annotation.*;

@RestController
public class WelcomeController {

    @PostMapping("/users")
    public String createUser(@RequestBody User user) {
        return "User created: " + user.getFirstName() + " " + user.getLastName() + " (Age: " + user.getAge() + ")";
    }
}
