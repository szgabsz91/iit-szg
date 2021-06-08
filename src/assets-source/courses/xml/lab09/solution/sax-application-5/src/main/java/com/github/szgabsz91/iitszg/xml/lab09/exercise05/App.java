package com.github.szgabsz91.iitszg.xml.lab09.exercise05;

import java.io.IOException;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;

import org.xml.sax.SAXException;

public class App {

    private static final String DOCUMENT_NAME = "/5.xhtml";

    private static final String JAXP_SCHEMA_LANGUAGE = "http://java.sun.com/xml/jaxp/properties/schemaLanguage";
    private static final String W3C_XML_SCHEMA = "http://www.w3.org/2001/XMLSchema";
    private static final String JAXP_SCHEMA_SOURCE = "http://java.sun.com/xml/jaxp/properties/schemaSource";

    public static void main(String[] args) throws ParserConfigurationException, SAXException, IOException {
        SAXParserFactory saxParserFactory = SAXParserFactory.newInstance();
        saxParserFactory.setNamespaceAware(true);
        saxParserFactory.setValidating(true);

        SAXParser saxParser = saxParserFactory.newSAXParser();
        saxParser.setProperty(JAXP_SCHEMA_LANGUAGE, W3C_XML_SCHEMA);
        saxParser.setProperty(JAXP_SCHEMA_SOURCE, App.class.getResourceAsStream(DOCUMENT_NAME + ".xsd"));

        XhtmlHandler handler = new XhtmlHandler();
        saxParser.parse(App.class.getResourceAsStream(DOCUMENT_NAME), handler);
        System.out.printf("The number of paragraphs in the XHTML document: %d%n", handler.getNumberOfParagraphs());
    }

}
