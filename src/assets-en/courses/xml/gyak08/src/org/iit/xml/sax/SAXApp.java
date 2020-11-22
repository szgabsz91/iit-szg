package org.iit.xml.sax;

import java.io.File;
import java.io.IOException;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;

import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

public class SAXApp {
	
	public static final String INPUT_FILE_PATH = "src/data/catalog.xml";
	
	public static void main(String[] args) {
		SAXParserFactory saxParserFactory = SAXParserFactory.newInstance();
		saxParserFactory.setNamespaceAware(true);
		
		try {
			SAXParser saxParser = saxParserFactory.newSAXParser();
			DefaultHandler handler = new CatalogHandler();
			saxParser.parse(new File(INPUT_FILE_PATH), handler);
		}
		catch (ParserConfigurationException | SAXException | IOException e) {
			e.printStackTrace();
		}
	}
	
}
