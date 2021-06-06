package com.github.szgabsz91.iitszg.xml.lab05.exercise02.b;

import org.xml.sax.SAXException;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import java.io.IOException;

public class App {

    private static final String DOCUMENT_NAME = "/car-database";

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

        CarDatabaseHandler handler = new CarDatabaseHandler();
        saxParser.parse(App.class.getResourceAsStream(DOCUMENT_NAME + ".xml"), handler);
        System.out.printf("The sum of the owners' ages: %d\n", handler.getSumOfAges());
    }

}
