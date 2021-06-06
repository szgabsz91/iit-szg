package com.github.szgabsz91.iitszg.xml.lab05.exercise02.a;

import org.xml.sax.Attributes;
import org.xml.sax.SAXParseException;
import org.xml.sax.ext.DefaultHandler2;

public class CarDatabaseHandler extends DefaultHandler2 {

    private int numberOfCars;

    public int getNumberOfCars() {
        return this.numberOfCars;
    }

    @Override
    public void startDocument() {
        this.numberOfCars = 0;
    }

    @Override
    public void startElement(String uri, String localName, String qName, Attributes attributes) {
        if (!localName.equals("car")) {
            return;
        }

        this.numberOfCars++;
    }

    @Override
    public void error(SAXParseException e) {
        e.printStackTrace();
    }

}
