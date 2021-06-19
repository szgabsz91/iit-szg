package com.github.szgabsz91.iitszg.db.lab02.exercise01.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "Cars")
@NoArgsConstructor
@EqualsAndHashCode(exclude = "owner")
@ToString(exclude = "owner")
public class Car {

    @Id
    @Getter
    @Setter
    private String licensePlateNumber;

    @Column(nullable = false)
    @Getter
    @Setter
    private String manufacturer;

    @Column(nullable = false)
    @Getter
    @Setter
    private String model;

    @Column(nullable = false)
    @Getter
    @Setter
    private double price;

    @ManyToOne(optional = false)
    @Getter
    @Setter
    private Person owner;

    public Car(String licensePlateNumber, String manufacturer, String model, double price, Person owner) {
        this.licensePlateNumber = licensePlateNumber;
        this.manufacturer = manufacturer;
        this.model = model;
        this.price = price;
        this.owner = owner;

        if (!this.owner.getCars().contains(this)) {
            this.owner.getCars().add(this);
        }
    }

}
