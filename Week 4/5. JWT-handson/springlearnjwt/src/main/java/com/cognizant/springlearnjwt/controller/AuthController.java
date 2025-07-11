package com.cognizant.springlearnjwt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthController {

    @Autowired
    private AuthenticationManager authManager;

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Basic ")) {
            throw new RuntimeException("Missing or invalid Authorization header.");
        }

        // Decode base64 username:password
        String base64Credentials = authHeader.substring("Basic ".length());
        byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
        String credentials = new String(credDecoded);
        String[] values = credentials.split(":", 2);

        try {
            Authentication auth = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(values[0], values[1])
            );

            if (auth.isAuthenticated()) {
                Map<String, String> response = new HashMap<>();
                response.put("token", "dummy-jwt-token-for-user-" + values[0]); 
                return response;
            } else {
                throw new RuntimeException("Authentication failed.");
            }
        } catch (AuthenticationException e) {
            throw new RuntimeException("Authentication failed.");
        }
    }
}
