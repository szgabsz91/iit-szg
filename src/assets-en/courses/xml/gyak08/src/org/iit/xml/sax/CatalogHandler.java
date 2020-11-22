package org.iit.xml.sax;

import java.util.Stack;

import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

public class CatalogHandler extends DefaultHandler {
	
	private Stack<String> elements = new Stack<>();
	private boolean processCurrentCD;
	private double currentPrice;
	private double average;
	private int count;
	
	@Override
	public void startDocument() throws SAXException {
		this.elements.clear();
		this.average = 0;
		this.count = 0;
	}
	
	@Override
	public void endDocument() throws SAXException {
		this.average /= this.count;
		
		System.out.printf("The average price is %.2f", this.average);
	}
	
	@Override
	public void startElement(String uri, String localName, String qName, Attributes attributes) throws SAXException {
		this.elements.push(localName);
		
		String idString = attributes.getValue("id");
		if (idString != null) {
			int id = Integer.parseInt(idString);
			this.processCurrentCD = id < 10;
		}
	}
	
	@Override
	public void endElement(String uri, String localName, String qName) throws SAXException {
		this.elements.pop();
	}
	
	@Override
	public void characters(char[] ch, int start, int length) throws SAXException {
		if (this.processCurrentCD) {
			if (this.elements.peek().equals("price")) {
				this.currentPrice = Double.parseDouble(new String(ch, start, length));
			}
			else if (this.elements.peek().equals("year")) {
				int year = Integer.parseInt(new String(ch, start, length));
				
				if (year >= 1980 && year < 1990) {
					this.average += this.currentPrice;
					this.count++;
				}
			}
		}
	}
	
}
