package com.github.szgabsz91.iitszg.xml.lab05.exercise04;

import org.xml.sax.SAXException;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import java.io.IOException;

public class App {

    private static final String DOCUMENT_NAME = "/catalog";
    private static final int MINIMUM_YEAR = 1980;
    private static final int MAXIMUM_YEAR = 1989;
    private static final int MAXIMUM_ID = 9;

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

        CatalogHandler handler = new CatalogHandler(MINIMUM_YEAR, MAXIMUM_YEAR, MAXIMUM_ID);
        saxParser.parse(App.class.getResourceAsStream(DOCUMENT_NAME + ".xml"), handler);
        System.out.printf("The average price of those albums from the '80s whose identifier has only one digit: %.2f\n", handler.getAveragePrice());
    }

}
