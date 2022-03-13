package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MainController {
    @Autowired // This means to get the bean called userRepository
    // Which is auto-generated by Spring, we will use it to handle the data
    private UserRepository userRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    @CrossOrigin(origins = "http://localhost:3000/", methods = {RequestMethod.OPTIONS, RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE}, allowedHeaders = "*", allowCredentials = "true")
    @PostMapping(path="/add") //tova otiva na:localhost/demo/add?email=...&passwor = ...  . front enda trqbva da vika tozi url za da suzdade user
    public @ResponseBody ResponseEntity addNewUser (@RequestBody User newUser) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request

        newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
        userRepository.save(newUser);
        return ResponseEntity.ok().build();

    }

    @GetMapping(path="/all")
    public @ResponseBody
    List<UserDTO> getAllUsers() {
        // This returns a JSON or XML with the users
        Iterable<User> dbUsers = userRepository.findAll();
        List<UserDTO> dtoUsres = new ArrayList<>();
        for(User user:dbUsers){
            UserDTO dto = new UserDTO();
            dto.setEmail(user.getEmail());
            dto.setId(user.getId());
            dtoUsres.add(dto);

        };
        return dtoUsres;
    }

    @GetMapping(path="/test")
    public
    String Test() {
        return "Text successful";
    }
}