package com.github.szgabsz91.iitszg.xml.lab05.exercise04;

import org.xml.sax.Attributes;
import org.xml.sax.ext.DefaultHandler2;

import java.util.Stack;

public class CatalogHandler extends DefaultHandler2 {

    private final int minimumYear;
    private final int maximumYear;
    private final int maximumId;
    private final Stack<String> elementStack = new Stack<>();
    private int currentId;
    private double currentPrice;
    private int currentYear;
    private double averagePrice;
    private int numberOfAlbums;

    public CatalogHandler(int minimumYear, int maximumYear, int maximumId) {
      this.minimumYear = minimumYear;
      this.maximumYear = maximumYear;
      this.maximumId = maximumId;
    }

    public double getAveragePrice() {
        return averagePrice;
    }

    @Override
    public void startDocument() {
        this.elementStack.clear();
        this.currentId = 0;
        this.currentPrice = 0.0;
        this.currentYear = 0;
        this.averagePrice = 0.0;
        this.numberOfAlbums = 0;
    }

    @Override
    public void endDocument() {
        this.averagePrice /= this.numberOfAlbums;
    }

    @Override
    public void startElement(String uri, String localName, String qName, Attributes attributes) {
        this.elementStack.push(qName);

        if (qName.equals("ns:cd")) {
            this.currentId = Integer.parseInt(attributes.getValue("id"));
        }
    }

    @Override
    public void endElement(String uri, String localName, String qName) {
        this.elementStack.pop();

        if (!qName.equals("ns:cd")) {
            return;
        }

        if (this.currentYear >= this.minimumYear && this.currentYear <= this.maximumYear && this.currentId <= this.maximumId) {
            this.averagePrice += this.currentPrice;
            this.numberOfAlbums++;
        }
    }

    @Override
    public void characters(char[] ch, int start, int length) {
        String text = new String(ch, start, length);

        switch (this.elementStack.peek()) {
            case "ns:price":
                this.currentPrice = Double.parseDouble(text);
                break;

            case "ns:year":
                this.currentYear = Integer.parseInt(text);
                break;
        }
    }

}
