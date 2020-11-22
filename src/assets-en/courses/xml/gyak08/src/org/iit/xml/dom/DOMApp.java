package org.iit.xml.dom;

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
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

public class DOMApp {
	
	private static final String INPUT_FILE_PATH = "src/data/catalog.xml";
	private static final String NAMESPACE_URI = "http://iit.uni-miskolc.hu/xml/catalog";
	
	public static void main(String[] args) {
		DocumentBuilderFactory documentBuilderFactory = DocumentBuilderFactory.newInstance();
		documentBuilderFactory.setNamespaceAware(true);
		
		try {
			DocumentBuilder documentBuilder = documentBuilderFactory.newDocumentBuilder();
			Document document = documentBuilder.parse(new File(INPUT_FILE_PATH));
			
			printAveragePrice(document);
			removeCd(document);
			addCd(document, new Cd(4, "Master of Puppets", "Metallica", "USA", "Elektra", 26.20, 1986));
		}
		catch (ParserConfigurationException | SAXException | IOException e) {
			e.printStackTrace();
		}
	}
	
	public static void printAveragePrice(Document document) {
		double average = 0;
		int count = 0;
		
		NodeList cdElements = document.getElementsByTagNameNS(NAMESPACE_URI, "cd");
		
		for (int i = 0; i < cdElements.getLength(); i++) {
			Node cdElement = cdElements.item(i);
			int id = Integer.parseInt(cdElement.getAttributes().getNamedItem("id").getTextContent());
			
			if (id > 9) {
				continue;
			}
			
			NodeList cdChildNodes = cdElement.getChildNodes();
			double currentPrice = 0;
			int currentYear = 0;
			
			for (int j = 0; j < cdChildNodes.getLength(); j++) {
				Node cdChildNode = cdChildNodes.item(j);
				
				if (cdChildNode.getNodeName().equals("cd:price")) {
					currentPrice = Double.parseDouble(cdChildNode.getTextContent());
				}
				else if (cdChildNode.getNodeName().equals("cd:year")) {
					currentYear = Integer.parseInt(cdChildNode.getTextContent());
				}
			}
			
			if (currentYear >= 1980 && currentYear < 1990) {
				average += currentPrice;
				count++;
			}
		}
		
		average /= count;
		
		System.out.printf("The average price is %.2f%n%n", average);
	}
	
	public static void removeCd(Document document) {
		NodeList cdElements = document.getElementsByTagNameNS(NAMESPACE_URI, "cd");
		
		for (int i = 0; i < cdElements.getLength(); i++) {
			Node cdElement = cdElements.item(i);
			
			NodeList cdChildNodes = cdElement.getChildNodes();
			
			for (int j = 0; j < cdChildNodes.getLength(); j++) {
				Node cdChildNode = cdChildNodes.item(j);
				
				if (cdChildNode.getNodeName().equals("cd:title")) {
					String title = cdChildNode.getTextContent();
					
					if (title.equals("Hide your heart")) {
						cdElement.getParentNode().removeChild(cdElement);
					}
				}
			}
		}
		
		printDocument(document);
		System.out.printf("%n%n");
	}
	
	public static void addCd(Document document, Cd cd) {
		Element catalogElement = document.getDocumentElement();
		
		// <cd:cd/>
		Element cdElement = document.createElementNS(NAMESPACE_URI, "cd:cd");
		catalogElement.appendChild(cdElement);
		
		// <cd:cd id="27"/>
		Attr idAttribute = document.createAttribute("id");
		idAttribute.setValue("" + cd.getId());
		cdElement.setAttributeNode(idAttribute);
		
		// <cd:cd id="27">
		//   <cd:title>Master of Puppets</cd:title>
		// </cd:cd>
		Element titleElement = document.createElementNS(NAMESPACE_URI, "cd:title");
		titleElement.setTextContent(cd.getTitle());
		cdElement.appendChild(titleElement);
		
		// <cd:cd id="27">
		//   <cd:title>Master of Puppets</cd:title>
		//   <cd:artist>Metallica</cd:artist>
		// </cd:cd>
		Element artistElement = document.createElementNS(NAMESPACE_URI, "cd:artist");
		artistElement.setTextContent(cd.getArtist());
		cdElement.appendChild(artistElement);
		
		// <cd:cd id="27">
		//   <cd:title>Master of Puppets</cd:title>
		//   <cd:artist>Metallica</cd:artist>
		//   <cd:country>USA</cd:country>
		// </cd:cd>
		Element countryElement = document.createElementNS(NAMESPACE_URI, "cd:country");
		countryElement.setTextContent(cd.getCountry());
		cdElement.appendChild(countryElement);
		
		// <cd:cd id="27">
		//   <cd:title>Master of Puppets</cd:title>
		//   <cd:artist>Metallica</cd:artist>
		//   <cd:country>USA</cd:country>
		//   <cd:company>Elektra</cd:company>
		// </cd:cd>
		Element companyElement = document.createElementNS(NAMESPACE_URI, "cd:company");
		countryElement.setTextContent(cd.getCompany());
		cdElement.appendChild(companyElement);
		
		// <cd:cd id="27">
		//   <cd:title>Master of Puppets</cd:title>
		//   <cd:artist>Metallica</cd:artist>
		//   <cd:country>USA</cd:country>
		//   <cd:company>Elektra</cd:company>
		//   <cd:price>26.2</cd:price>
		// </cd:cd>
		Element priceElement = document.createElementNS(NAMESPACE_URI, "cd:price");
		priceElement.setTextContent("" + cd.getPrice());
		cdElement.appendChild(priceElement);
		
		// <cd:cd id="27">
		//   <cd:title>Master of Puppets</cd:title>
		//   <cd:artist>Metallica</cd:artist>
		//   <cd:country>USA</cd:country>
		//   <cd:company>Elektra</cd:company>
		//   <cd:price>26.2</cd:price>
		//   <cd:year>1986</cd:year>
		// </cd:cd>
		Element yearElement = document.createElementNS(NAMESPACE_URI, "cd:year");
		yearElement.setTextContent("" + cd.getYear());
		cdElement.appendChild(yearElement);
		
		printDocument(document);
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
