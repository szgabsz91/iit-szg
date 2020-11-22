package org.iit.xml.sax;

import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

public class XHTMLHandler extends DefaultHandler {
	
	private int result;
	
	@Override
	public void startDocument() throws SAXException {
		this.result = 0;
	}
	
	@Override
	public void endDocument() throws SAXException {
		System.out.printf("The number of paragraphs is %d", result);
	}
	
	@Override
	public void startElement(String uri, String localName, String qName, Attributes attributes) throws SAXException {
		if ("p".equals(localName)) {
			result++;
		}
	}
	
}
