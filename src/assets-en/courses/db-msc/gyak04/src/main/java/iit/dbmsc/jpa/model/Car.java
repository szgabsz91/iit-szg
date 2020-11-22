package iit.dbmsc.jpa.model;

import javax.persistence.*;

@Entity
@Table(name = "Cars")
public class Car {

    @Id
    private String plateNumber;

    @Column(nullable = false)
    private String manufacturer;

    @Column(nullable = false)
    private String type;

    @Column(nullable = false)
    private int age;

    @ManyToOne(optional = false)
    private Person owner;

    public Car(String plateNumber, String manufacturer, String type, int age, Person owner) {
        this.plateNumber = plateNumber;
        this.manufacturer = manufacturer;
        this.type = type;
        this.age = age;
        setOwner(owner);
    }

    public Car(String plateNumber, String manufacturer, String type, int age) {
        this.plateNumber = plateNumber;
        this.manufacturer = manufacturer;
        this.type = type;
        this.age = age;
    }

    public Car() {
        this(null, null, null, 0);
    }

    public String getPlateNumber() {
        return plateNumber;
    }

    public void setPlateNumber(String plateNumber) {
        this.plateNumber = plateNumber;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Person getOwner() {
        return owner;
    }

    public void setOwner(Person owner) {
        if (owner != null && !owner.equals(this.owner)) {
            this.owner = owner;
            this.owner.addCar(this);
        }
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Car car = (Car) o;

        if (age != car.age) return false;
        if (plateNumber != null ? !plateNumber.equals(car.plateNumber) : car.plateNumber != null) return false;
        if (manufacturer != null ? !manufacturer.equals(car.manufacturer) : car.manufacturer != null) return false;
        return !(type != null ? !type.equals(car.type) : car.type != null);

    }

    @Override
    public int hashCode() {
        int result = plateNumber != null ? plateNumber.hashCode() : 0;
        result = 31 * result + (manufacturer != null ? manufacturer.hashCode() : 0);
        result = 31 * result + (type != null ? type.hashCode() : 0);
        result = 31 * result + age;
        return result;
    }

    @Override
    public String toString() {
        return String.format("Car[plateNumber=%s, manufacturer=%s, type=%s, age=%d]", plateNumber, manufacturer, type, age);
    }

}
