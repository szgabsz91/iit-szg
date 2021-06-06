package com.github.szgabsz91.iitszg.xml.lab05.exercise01.b;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

import org.xml.sax.Attributes;
import org.xml.sax.SAXParseException;
import org.xml.sax.ext.DefaultHandler2;

public class ReservationSystemHandler extends DefaultHandler2 {

    private final Stack<String> elementStack = new Stack<>();
    private String currentCustomerId;
    private String customerId;
    private final List<String> suiteIds = new ArrayList<>();
    private int count;
    private final String customerName;

    ReservationSystemHandler(String customerName) {
        this.customerName = customerName;
    }

    public int getCount() {
        return this.count;
    }

    @Override
    public void startDocument() {
        this.elementStack.clear();
        this.customerId = "";
        this.suiteIds.clear();
        this.count = 0;
    }

    @Override
    public void startElement(String uri, String localName, String qName, Attributes attributes) {
        this.elementStack.push(localName);

        switch (localName) {
            case "room":
                boolean isSuite = Boolean.parseBoolean(attributes.getValue("suite"));
                if (isSuite) {
                    this.suiteIds.add(attributes.getValue("id"));
                }
                break;

            case "customer":
                this.currentCustomerId = attributes.getValue("id");
                break;

            case "reservation":
                String customerId = attributes.getValue("customer-id");
                String roomId = attributes.getValue("room-id");
                if (customerId.equals(this.customerId) && this.suiteIds.contains(roomId)) {
                    this.count++;
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
        String text = new String(ch, start, length);

        if (this.elementStack.peek().equals("name") && text.equals(this.customerName)) {
            this.customerId = this.currentCustomerId;
        }
    }

    @Override
    public void error(SAXParseException e) {
        e.printStackTrace();
    }

}
