package org.iit.xml.zh2.a.sax;

import java.util.Stack;

import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

public class AutoHandler extends DefaultHandler {
	
	private Stack<String> elements = new Stack<String>();
	private boolean metalozott;
	private int gyartasiEv;
	private int darabszam;
	
	@Override
	public void startDocument() throws SAXException {
		this.elements.clear();
		this.darabszam = 0;
	}
	
	@Override
	public void endDocument() throws SAXException {
		System.out.printf("A 2014-es metalozott autok darabszama: %d", darabszam);
	}
	
	@Override
	public void startElement(String uri, String localName, String qName, Attributes attributes) throws SAXException {
		elements.push(qName);
		
		switch (qName) {
			case "a:auto":
				this.metalozott = false;
				break;
			
			case "a:szin":
				String metalozott = attributes.getValue("metalozott");
				this.metalozott = Boolean.parseBoolean(metalozott);
				break;
		}
	}
	
	@Override
	public void endElement(String uri, String localName, String qName) throws SAXException {
		String elementName = this.elements.pop();
		
		if ("a:auto".equals(elementName) && this.gyartasiEv == 2014 && this.metalozott) {
			this.darabszam++;
		}
	}
	
	@Override
	public void characters(char[] ch, int start, int length) throws SAXException {
		if ("a:gyartasi-ev".equals(elements.peek())) {
			String content = new String(ch, start, length);
			this.gyartasiEv = Integer.parseInt(content);
		}
	}
	
}
