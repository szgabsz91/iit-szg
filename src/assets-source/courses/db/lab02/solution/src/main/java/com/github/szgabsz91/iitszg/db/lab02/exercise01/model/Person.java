package com.github.szgabsz91.iitszg.db.lab02.exercise01.model;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "People")
@NamedQuery(name = Person.QUERY_GET_PEOPLE_BY_LAST_NAME, query = "select p from Person p where p.lastName = :lastName")
@NoArgsConstructor
@EqualsAndHashCode
@ToString(exclude = "cars")
public class Person {

    public static final String QUERY_GET_PEOPLE_BY_LAST_NAME = "getPeopleByLastName";

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter
    @Setter
    private Integer id;

    @Column(nullable = false)
    @Getter
    @Setter
    private String firstName;

    @Column(nullable = false)
    @Getter
    @Setter
    private String lastName;

    @OneToMany(mappedBy = "owner", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @Getter
    @Setter
    private List<Car> cars = new ArrayList<>();

    public Person(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

}
