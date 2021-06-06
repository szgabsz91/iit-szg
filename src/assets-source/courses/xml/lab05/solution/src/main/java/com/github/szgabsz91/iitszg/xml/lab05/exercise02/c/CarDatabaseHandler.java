package com.github.szgabsz91.iitszg.xml.lab05.exercise02.c;

import org.xml.sax.Attributes;
import org.xml.sax.SAXParseException;
import org.xml.sax.ext.DefaultHandler2;

import java.util.Stack;

public class CarDatabaseHandler extends DefaultHandler2 {

    private final Stack<String> elementStack = new Stack<>();
    private double averageAge;
    private int numberOfOwners;

    public double getAverageAge() {
        return this.averageAge;
    }

    @Override
    public void startDocument() {
        this.elementStack.clear();
        this.averageAge = 0;
        this.numberOfOwners = 0;
    }

    @Override
    public void startElement(String uri, String localName, String qName, Attributes attributes) {
        this.elementStack.push(localName);

        if (localName.equals("owner")) {
            this.numberOfOwners++;
        }
    }

    @Override
    public void endElement(String uri, String localName, String qName) {
        if (!localName.equals("owners")) {
            return;
        }

        this.averageAge /= this.numberOfOwners;
    }

    @Override
    public void characters(char[] ch, int start, int length) {
        if (!this.elementStack.peek().equals("age")) {
            return;
        }

        String text = new String(ch, start, length);
        this.averageAge += Integer.parseInt(text);
    }

    @Override
    public void error(SAXParseException e) {
        e.printStackTrace();
    }

}
