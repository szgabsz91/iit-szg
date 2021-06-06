package com.github.szgabsz91.iitszg.xml.lab06.exercise03.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Cd {

    private int id;
    private String title;
    private String artist;
    private String country;
    private String company;
    private double price;
    private int year;

}
