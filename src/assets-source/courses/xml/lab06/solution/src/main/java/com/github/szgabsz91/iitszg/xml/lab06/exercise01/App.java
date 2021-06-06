package com.github.szgabsz91.iitszg.xml.lab06.exercise01;

import java.io.IOException;
import java.nio.file.Paths;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import com.github.szgabsz91.iitszg.xml.lab06.exercise01.model.Car;
import com.github.szgabsz91.iitszg.xml.lab06.exercise01.model.Manufacturer;
import com.github.szgabsz91.iitszg.xml.lab06.exercise01.steps.StepA;
import com.github.szgabsz91.iitszg.xml.lab06.exercise01.steps.StepB;
import com.github.szgabsz91.iitszg.xml.lab06.exercise01.steps.StepC;
import com.github.szgabsz91.iitszg.xml.lab06.exercise01.steps.StepD;
import org.w3c.dom.Document;
import org.xml.sax.SAXException;

public class App {

    private static final String DOCUMENT_NAME = "/cars";
    private static final String AVERAGE_PRICE_MANUFACTURER = "Kia";
    private static final String GROUP_NAME_TO_REMOVE = "PSA";
    private static final Car CAR_TO_ADD = new Car(15, new Manufacturer("Audi", "Volkswagen"), "Q4 e-tron", 14.0);

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
        new StepA(AVERAGE_PRICE_MANUFACTURER).execute(document);
        new StepB(GROUP_NAME_TO_REMOVE).execute(document);
        new StepC(CAR_TO_ADD).execute(document);
        new StepD(Paths.get("build" + DOCUMENT_NAME + ".xml")).execute(document);
    }

}
