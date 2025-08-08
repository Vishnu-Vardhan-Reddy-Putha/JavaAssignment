package springconsumer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/consumer")
public class ConsumerController {

    @Autowired
    private RestaurantClient restaurantClient;
    
    @GetMapping("/")
    public String home() {
        return "Restaurant Producer Service is running!";
    }

    @GetMapping("/restaurants")
    public List<Map<String, String>> getRestaurantsFromProducer() {
        return restaurantClient.getRestaurants();
    }
}
