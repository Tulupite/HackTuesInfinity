package com.example.demo;
import org.springframework.data.repository.CrudRepository;

import javax.print.DocFlavor;


// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface PlanetRepository extends CrudRepository<Planet, String>{
    Planet getByName(String name);
}
