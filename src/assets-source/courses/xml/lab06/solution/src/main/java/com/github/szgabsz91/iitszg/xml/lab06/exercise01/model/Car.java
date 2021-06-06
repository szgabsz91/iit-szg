package com.github.szgabsz91.iitszg.xml.lab06.exercise01.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Car {

    private int id;
    private Manufacturer manufacturer;
    private String model;
    private double price;

}
