package com.github.szgabsz91.iitszg.xml.lab06.exercise03;

import com.github.szgabsz91.iitszg.xml.lab06.exercise03.model.Cd;
import com.github.szgabsz91.iitszg.xml.lab06.exercise03.steps.StepA;
import com.github.szgabsz91.iitszg.xml.lab06.exercise03.steps.StepB;
import com.github.szgabsz91.iitszg.xml.lab06.exercise03.steps.StepC;
import com.github.szgabsz91.iitszg.xml.lab06.exercise03.steps.StepD;
import org.w3c.dom.Document;
import org.xml.sax.SAXException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;

public class App {

    private static final String DOCUMENT_NAME = "/catalog";
    private static final int MINIMUM_YEAR = 1980;
    private static final int MAXIMUM_YEAR = 1989;
    private static final int MAXIMUM_ID = 9;
    private static final String ALBUM_TITLE_TO_REMOVE = "Hide your heart";
    private static final Cd NEW_CD = new Cd(27, "AB III", "Alter Bridge", "USA", "EMI", 18.98, 2010);

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
        new StepA(MINIMUM_YEAR, MAXIMUM_YEAR, MAXIMUM_ID).execute(document);
        new StepB(ALBUM_TITLE_TO_REMOVE).execute(document);
        new StepC(NEW_CD).execute(document);
        new StepD().execute(document);
    }

}
