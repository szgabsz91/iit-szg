package com.github.szgabsz91.iitszg.db.lab02.exercise01.steps;

import com.github.szgabsz91.iitszg.db.lab02.exercise01.model.Car;
import com.github.szgabsz91.iitszg.db.lab02.exercise01.model.Person;

import javax.persistence.EntityManager;

public class StepA implements IStep {

    private final EntityManager entityManager;

    public StepA(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public void execute() {
         // Create people
        this.entityManager.getTransaction().begin();
        var johnDoe = new Person("John", "Doe");
        var janeDoe = new Person("Jane", "Doe");
        this.entityManager.persist(johnDoe);
        this.entityManager.persist(janeDoe);
        this.entityManager.getTransaction().commit();

        // Create cars
        this.entityManager.getTransaction().begin();
        var car1 = new Car("AB12 CDE", "Tesla", "Model 3", 13.5, johnDoe);
        var car2 = new Car("AB12 CDF", "Volkswagen", "ID.4", 16.8, johnDoe);
        var car3 = new Car("AB12 CDG", "Kia", "e-Niro", 8.9, janeDoe);
        this.entityManager.persist(car1);
        this.entityManager.persist(car2);
        this.entityManager.persist(car3);
        this.entityManager.getTransaction().commit();
    }

}
