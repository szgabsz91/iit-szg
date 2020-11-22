package iit.dbmsc.jpa;

import iit.dbmsc.jpa.model.Car;
import iit.dbmsc.jpa.model.Person;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;
import java.util.List;

public class App {

    private static final String PERSISTENCE_UNIT_NAME = "cars";

    public static void main(String[] args) {
        EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory(PERSISTENCE_UNIT_NAME);
        EntityManager entityManager = entityManagerFactory.createEntityManager();

        // Create people
        entityManager.getTransaction().begin();
        Person john = new Person("John", "Doe");
        Person jane = new Person("Jane", "Doe");
        entityManager.persist(john);
        entityManager.persist(jane);
        entityManager.getTransaction().commit();

        // Create cars
        entityManager.getTransaction().begin();
        Car car1 = new Car("ABC-123", "Honda", "Civic", 1, john);
        Car car2 = new Car("ABC-124", "Mercedes", "AMG", 2, john);
        Car car3 = new Car("ABC-125", "Opel", "Astra", 5, jane);
        entityManager.persist(car1);
        entityManager.persist(car2);
        entityManager.persist(car3);
        entityManager.getTransaction().commit();

        // Select people with cars
        TypedQuery<Person> query = entityManager.createNamedQuery(Person.QUERY_GET_PEOPLE_BY_LAST_NAME, Person.class);
        query.setParameter("lastName", "Doe");
        List<Person> people = query.getResultList();
        for (Person person : people) {
            System.out.println(person);
        }

        entityManager.close();
        entityManagerFactory.close();
    }

}
