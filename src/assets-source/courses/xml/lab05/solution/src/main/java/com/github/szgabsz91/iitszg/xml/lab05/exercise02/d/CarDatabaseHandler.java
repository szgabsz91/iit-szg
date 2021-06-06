package com.github.szgabsz91.iitszg.xml.lab05.exercise02.d;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

import org.xml.sax.Attributes;
import org.xml.sax.SAXParseException;
import org.xml.sax.ext.DefaultHandler2;

public class CarDatabaseHandler extends DefaultHandler2 {

    private final Stack<String> elementStack = new Stack<>();
    private String currentLicensePlateNumber;
    private final List<String> licensePlateNumbers = new ArrayList<>();
    private int currentAge;
    private double averageAge;
    private int numberOfOwners;
    private final String carColor;

    CarDatabaseHandler(String carColor) {
        this.carColor = carColor;
    }

    public double getAverageAge() {
        return this.averageAge;
    }

    @Override
    public void startDocument() {
        this.elementStack.clear();
        this.licensePlateNumbers.clear();
        this.averageAge = 0;
        this.numberOfOwners = 0;
    }

    @Override
    public void startElement(String uri, String localName, String qName, Attributes attributes) {
        this.elementStack.push(localName);

        if (localName.equals("car")) {
            this.currentLicensePlateNumber = attributes.getValue("license-plate-number");
        }
    }

    @Override
    public void endElement(String uri, String localName, String qName) {
        this.elementStack.pop();

        if (localName.equals("owners")) {
            this.averageAge /= this.numberOfOwners;
        }
    }

    @Override
    public void characters(char[] ch, int start, int length) {
        switch (this.elementStack.peek()) {
            case "color":
                String color = new String(ch, start, length);
                if (color.equals(this.carColor)) {
                    this.licensePlateNumbers.add(this.currentLicensePlateNumber);
                }
                break;

            case "age":
                this.currentAge = Integer.parseInt(new String(ch, start, length));
                break;

            case "owned-car":
                String licensePlateNumber = new String(ch, start, length);
                if (this.licensePlateNumbers.contains(licensePlateNumber)) {
                    this.averageAge += this.currentAge;
                    this.numberOfOwners++;
                }
                break;
        }
    }

    @Override
    public void error(SAXParseException e) {
        e.printStackTrace();
    }

}
