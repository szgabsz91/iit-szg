package org.iit.xml.feladat2;

import java.io.File;
import java.io.IOException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.w3c.dom.Document;
import org.xml.sax.SAXException;

public class DOMApp {
	
	private static final String INPUT_FILE_PATH = "src/data/cars.xml";
	private static final String NAMESPACE_URI = "http://iit.uni-miskolc.hu/xml/cars";
	private static final String MANUFACTURER_HONDA = "Honda";
	private static final String MANUFACTURER_MERCEDES = "Mercedes";
	
	public static void main(String[] args) {
		DocumentBuilderFactory documentBuilderFactory = DocumentBuilderFactory.newInstance();
		documentBuilderFactory.setNamespaceAware(true);
		
		try {
			DocumentBuilder documentBuilder = documentBuilderFactory.newDocumentBuilder();
			Document document = documentBuilder.parse(new File(INPUT_FILE_PATH));
			
			printAveragePriceOfManufacturer(document, MANUFACTURER_HONDA);
			removeManufacturer(document, MANUFACTURER_MERCEDES);
			addCar(document, new Car("Ferrari", "red", 120));
		}
		catch (ParserConfigurationException | SAXException | IOException e) {
			e.printStackTrace();
		}
	}
	
	public static void printAveragePriceOfManufacturer(Document document, String manufacturer) {
		throw new UnsupportedOperationException("Method not implemented yet!");
	}
	
	public static void removeManufacturer(Document document, String manufacturer) {
		throw new UnsupportedOperationException("Method not implemented yet!");
	}
	
	public static void addCar(Document document, Car car) {
		throw new UnsupportedOperationException("Method not implemented yet!");
	}
	
	private static void printDocument(Document document) {
		try {
			TransformerFactory transformerFactory = TransformerFactory.newInstance();
			Transformer transformer = transformerFactory.newTransformer();
			transformer.setOutputProperty(OutputKeys.INDENT, "yes");
			transformer.setOutputProperty("{http://xml.apache.org/xslt}indent-amount", "2");
			
			DOMSource source = new DOMSource(document);
			StreamResult result = new StreamResult(System.out);
			
			transformer.transform(source, result);
		}
		catch (TransformerException e) {
			e.printStackTrace();
		}
	}
	
}
