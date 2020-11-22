package org.iit.xml.zh2.b.dom;

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
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

public class DOMApp {
	
	private static final String INPUT_FILE_PATH = "src/data/hallgatok.xml";
	private static final String NAMESPACE_URI = "http://iit.uni-miskolc.hu/xml/hallgatok";
	
	public static void main(String[] args) {
		DocumentBuilderFactory documentBuilderFactory = DocumentBuilderFactory.newInstance();
		documentBuilderFactory.setNamespaceAware(true);
		
		try {
			DocumentBuilder documentBuilder = documentBuilderFactory.newDocumentBuilder();
			Document document = documentBuilder.parse(new File(INPUT_FILE_PATH));
			
			modifyDocument(document);
			printDocument(document);
		}
		catch (ParserConfigurationException | SAXException | IOException e) {
			e.printStackTrace();
		}
	}
	
	public static void modifyDocument(Document document) {
		NodeList elements = document.getElementsByTagNameNS(NAMESPACE_URI, "hallgato");
		
		for (int i = 0; i < elements.getLength(); i++) {
			Node hallgatoElement = elements.item(i);
			Node neptunAttribute = hallgatoElement.getAttributes().getNamedItem("neptun");
			String neptun = neptunAttribute.getTextContent();
			
			if ("ABCD15".equals(neptun)) {
				NodeList hallgatoChildNodes = hallgatoElement.getChildNodes();
				
				for (int j = 0; j < hallgatoChildNodes.getLength(); j++) {
					Node hallgatoChildNode = hallgatoChildNodes.item(j);
					
					if (hallgatoChildNode.getNodeType() != Node.ELEMENT_NODE) {
						continue;
					}
					
					if ("h:nev".equals(hallgatoChildNode.getNodeName())) {
						hallgatoChildNode.setTextContent("New Name");
					}
				}
			}
		}
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
