package com.example.demo;
import org.springframework.data.repository.CrudRepository;



// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

    public interface UserRepository extends CrudRepository<User, Integer> {
        User getById(Integer id );
        User getByEmail(String email);
        // pri login ako suvpadata parolite Respons.ok().build() ako ne new ResponseEntity(HttpStatus.UNAUTHORIZED) vrushtame(401)
        // javata vrushtam obekt v kontroler metoda na front end response.json i vrushta sushtiq obekt obache v javascript

    }

