package springproducer;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
public class RestaurantController {
	
	@GetMapping("/")
    public String home() {
        return "Restaurant Producer Service is running!";
    }

    @GetMapping("/restaurants")
    public List<Map<String, String>> getRestaurants() {
        List<Map<String, String>> restaurants = new ArrayList<>();

        Map<String, String> r1 = new HashMap<>();
        r1.put("id", "1");
        r1.put("name", "Pizza Palace");
        r1.put("location", "New York");

        Map<String, String> r2 = new HashMap<>();
        r2.put("id", "2");
        r2.put("name", "Burger Barn");
        r2.put("location", "Los Angeles");

        restaurants.add(r1);
        restaurants.add(r2);

        return restaurants;
    }
}
