package com.github.szgabsz91.iitszg.xml.lab06.exercise02;

import com.github.szgabsz91.iitszg.xml.lab06.exercise02.steps.StepA;
import com.github.szgabsz91.iitszg.xml.lab06.exercise02.steps.StepB;
import com.github.szgabsz91.iitszg.xml.lab06.exercise02.steps.StepC;
import com.github.szgabsz91.iitszg.xml.lab06.exercise02.steps.StepD;
import org.w3c.dom.Document;
import org.xml.sax.SAXException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;

public class App {

    private static final String DOCUMENT_NAME = "/car-database";
    private static final String CAR_COLOR = "silver";

    private static final String JAXP_SCHEMA_LANGUAGE = "http://java.sun.com/xml/jaxp/properties/schemaLanguage";
    static final String W3C_XML_SCHEMA = "http://www.w3.org/2001/XMLSchema";
    private static final String JAXP_SCHEMA_SOURCE = "http://java.sun.com/xml/jaxp/properties/schemaSource";

    public static void main(String[] args) throws ParserConfigurationException, IOException, SAXException {
        DocumentBuilderFactory documentBuilderFactory = DocumentBuilderFactory.newInstance();
        documentBuilderFactory.setNamespaceAware(true);
        documentBuilderFactory.setValidating(true);
        documentBuilderFactory.setAttribute(JAXP_SCHEMA_LANGUAGE, W3C_XML_SCHEMA);
        documentBuilderFactory.setAttribute(JAXP_SCHEMA_SOURCE, App.class.getResourceAsStream(DOCUMENT_NAME + ".xsd"));

        DocumentBuilder documentBuilder = documentBuilderFactory.newDocumentBuilder();
        Document document = documentBuilder.parse(App.class.getResourceAsStream(DOCUMENT_NAME + ".xml"));
        new StepA().execute(document);
        new StepB().execute(document);
        new StepC().execute(document);
        new StepD(CAR_COLOR).execute(document);
    }

}
