package com.github.szgabsz91.iitszg.db.lab02.exercise01.steps;

import com.github.szgabsz91.iitszg.db.lab02.exercise01.model.Car;
import com.github.szgabsz91.iitszg.db.lab02.exercise01.model.Person;

import javax.persistence.EntityManager;

public class StepB implements IStep {

    private final EntityManager entityManager;

    public StepB(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public void execute() {
        var query = this.entityManager.createNamedQuery(Person.QUERY_GET_PEOPLE_BY_LAST_NAME, Person.class);
        query.setParameter("lastName", "Doe");

        var people = query.getResultList();

        for (Person person : people) {
            System.out.println(person);

            for (Car car : person.getCars()) {
                System.out.println("  - " + car);
            }
        }
    }

}
