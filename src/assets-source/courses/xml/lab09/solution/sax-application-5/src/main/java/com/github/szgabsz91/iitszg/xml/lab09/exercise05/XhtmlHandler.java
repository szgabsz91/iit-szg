package com.github.szgabsz91.iitszg.xml.lab09.exercise05;

import org.xml.sax.Attributes;
import org.xml.sax.ext.DefaultHandler2;

public class XhtmlHandler extends DefaultHandler2 {

    private int numberOfParagraphs;

    public int getNumberOfParagraphs() {
        return this.numberOfParagraphs;
    }

    @Override
    public void startDocument() {
        this.numberOfParagraphs = 0;
    }

    @Override
    public void startElement(String uri, String localName, String qName, Attributes attributes) {
        if (localName.equals("p")) {
            this.numberOfParagraphs++;
        }
    }

}
