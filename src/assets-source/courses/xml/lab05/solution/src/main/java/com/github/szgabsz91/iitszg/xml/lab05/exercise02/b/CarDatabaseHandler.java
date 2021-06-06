package com.github.szgabsz91.iitszg.xml.lab05.exercise02.b;

import org.xml.sax.Attributes;
import org.xml.sax.SAXParseException;
import org.xml.sax.ext.DefaultHandler2;

import java.util.Stack;

public class CarDatabaseHandler extends DefaultHandler2 {

    private final Stack<String> elementStack = new Stack<>();
    private int sumOfAges;

    public int getSumOfAges() {
        return this.sumOfAges;
    }

    @Override
    public void startDocument() {
        this.elementStack.clear();
        this.sumOfAges = 0;
    }

    @Override
    public void startElement(String uri, String localName, String qName, Attributes attributes) {
        this.elementStack.push(localName);
    }

    @Override
    public void characters(char[] ch, int start, int length) {
        if (!this.elementStack.peek().equals("age")) {
            return;
        }

        String text = new String(ch, start, length);
        this.sumOfAges += Integer.parseInt(text);
    }

    @Override
    public void error(SAXParseException e) {
        e.printStackTrace();
    }

}
