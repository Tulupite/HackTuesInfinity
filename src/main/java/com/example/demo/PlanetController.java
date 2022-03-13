package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class PlanetController {
    @Autowired
    private PlanetRepository planetRepository;

    @GetMapping(path="/all")
    public @ResponseBody
    List<PlanetDTO> getAllPlanets(){
        Iterable<Planet> dbPlanets = planetRepository.findAll();
        List<PlanetDTO> dtoPlanets = new ArrayList<>();
        for(Planet planet : dbPlanets){
            PlanetDTO dto = new PlanetDTO();
            dto.setDescrption(planet.getDescription());
            dto.setName(planet.getName());
            dtoPlanets.add(dto);
        };
        return dtoPlanets;
    }

    @GetMapping(path="/test")
    public String Test() {
        return "Planet successful";
    }
}
