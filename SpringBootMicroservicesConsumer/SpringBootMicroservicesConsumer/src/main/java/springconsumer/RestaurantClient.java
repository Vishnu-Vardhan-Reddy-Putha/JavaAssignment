package springconsumer;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.List;
import java.util.Map;

@FeignClient(name = "SpringBootMicroservicesProducer")
public interface RestaurantClient {
    @GetMapping("/restaurants")
    List<Map<String, String>> getRestaurants();
}
