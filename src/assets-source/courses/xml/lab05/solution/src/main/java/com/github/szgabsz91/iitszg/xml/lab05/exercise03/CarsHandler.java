package com.github.szgabsz91.iitszg.xml.lab05.exercise03;

import java.util.Stack;

import org.xml.sax.Attributes;
import org.xml.sax.SAXParseException;
import org.xml.sax.ext.DefaultHandler2;

public class CarsHandler extends DefaultHandler2 {

    private final Stack<String> elementStack = new Stack<>();
    private boolean isCarInGroup;
    private double averagePrice;
    private int numberOfCars;
    private final String groupName;

    CarsHandler(String groupName) {
        this.groupName = groupName;
    }

    public double getAveragePrice() {
        return this.averagePrice;
    }

    @Override
    public void startDocument() {
        this.elementStack.clear();
        this.isCarInGroup = false;
        this.averagePrice = 0.0;
        this.numberOfCars = 0;
    }

    @Override
    public void endDocument() {
        this.averagePrice /= this.numberOfCars;
    }

    @Override
    public void startElement(String uri, String localName, String qName, Attributes attributes) {
        this.elementStack.push(localName);

        switch (localName) {
            case "car":
                this.isCarInGroup = false;
                break;

            case "manufacturer":
                String group = attributes.getValue("group");
                this.isCarInGroup = group.equals(this.groupName);
                if (this.isCarInGroup) {
                    this.numberOfCars++;
                }
            break;
        }
    }

    @Override
    public void endElement(String uri, String localName, String qName) {
        this.elementStack.pop();
    }

    @Override
    public void characters(char[] ch, int start, int length) {
        if (this.elementStack.peek().equals("price") && this.isCarInGroup) {
            String text = new String(ch, start, length);
            this.averagePrice += Double.parseDouble(text);
        }
    }

    @Override
    public void error(SAXParseException e) {
        e.printStackTrace();
    }

}
