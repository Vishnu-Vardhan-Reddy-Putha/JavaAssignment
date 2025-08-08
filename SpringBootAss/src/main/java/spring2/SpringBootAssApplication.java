package spring2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootAssApplication implements CommandLineRunner {

    @Autowired
    private PropertyReader propertyReader;

    public static void main(String[] args) {
        SpringApplication.run(SpringBootAssApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        propertyReader.printValues();
    }
}
