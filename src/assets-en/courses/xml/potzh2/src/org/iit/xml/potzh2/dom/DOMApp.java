package org.iit.xml.potzh2.dom;

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

import org.w3c.dom.Attr;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.xml.sax.SAXException;

public class DOMApp {
	
	private static final String INPUT_FILE_PATH = "src/data/organization.xml";
	private static final String NAMESPACE_URI = "http://iit.uni-miskolc.hu/xml/organization";
	
	public static void main(String[] args) {
		DocumentBuilderFactory documentBuilderFactory = DocumentBuilderFactory.newInstance();
		documentBuilderFactory.setNamespaceAware(true);
		
		try {
			DocumentBuilder documentBuilder = documentBuilderFactory.newDocumentBuilder();
			Document document = documentBuilder.parse(new File(INPUT_FILE_PATH));
			
			addEmployee(document, "e4", "Employee 4");
			printDocument(document);
		}
		catch (ParserConfigurationException | SAXException | IOException e) {
			e.printStackTrace();
		}
	}
	
	public static void addEmployee(Document document, String eid, String name) {
		Element organizationElement = document.getDocumentElement();
		
		// <o:employee/>
		Element employeeElement = document.createElementNS(NAMESPACE_URI, "o:employee");
		organizationElement.appendChild(employeeElement);
		
		// <o:employee eid="${eid}"/>
		Attr eidAttribute = document.createAttribute("eid");
		eidAttribute.setValue(eid);
		employeeElement.setAttributeNode(eidAttribute);
		
		// <o:employee eid="${eid}">
		//   <o:name>${name}</o:name}
		// </o:employee>
		Element nameElement = document.createElementNS(NAMESPACE_URI, "o:name");
		nameElement.setTextContent(name);
		employeeElement.appendChild(nameElement);
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
