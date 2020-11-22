package org.iit.xml.potzh2.sax;

import java.util.Stack;

import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

public class OrganizationHandler extends DefaultHandler {
	
	private Stack<String> elements = new Stack<String>();
	private String name;
	private String currentEid;
	
	@Override
	public void startDocument() throws SAXException {
		this.elements.clear();
		this.name = null;
	}
	
	@Override
	public void endDocument() throws SAXException {
		System.out.printf("The name of the employee with eid e2 is %s", name);
	}
	
	@Override
	public void startElement(String uri, String localName, String qName, Attributes attributes) throws SAXException {
		this.elements.add(localName);
		
		if ("employee".equals(localName)) {
			this.currentEid = attributes.getValue("eid");
		}
	}
	
	@Override
	public void endElement(String uri, String localName, String qName) throws SAXException {
		this.elements.pop();
	}
	
	@Override
	public void characters(char[] ch, int start, int length) throws SAXException {
		if ("e2".equals(this.currentEid) && this.elements.peek().equals("name")) {
			this.name = new String(ch, start, length);
		}
	}
	
}
