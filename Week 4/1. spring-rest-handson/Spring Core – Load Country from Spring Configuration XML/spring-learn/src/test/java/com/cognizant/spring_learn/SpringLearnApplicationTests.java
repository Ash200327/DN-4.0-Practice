package com.cognizant.spring_learn;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(classes = SpringLearnApplication.class) // ✅ explicitly define config
public class SpringLearnApplicationTests {

    @Test
    void contextLoads() {
    }
}
