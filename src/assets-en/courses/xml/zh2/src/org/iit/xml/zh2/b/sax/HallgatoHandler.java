package org.iit.xml.zh2.b.sax;

import java.util.Stack;

import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

public class HallgatoHandler extends DefaultHandler {
	
	private Stack<String> elements = new Stack<String>();
	private int korzet;
	private int szuletesiEv;
	private int letszam;
	
	@Override
	public void startDocument() throws SAXException {
		this.elements.clear();
		this.letszam = 0;
	}
	
	@Override
	public void endDocument() throws SAXException {
		System.out.printf("Az 1991-ben szuletett, 47-es korzetszamu hallgatok letszama: %d", letszam);
	}
	
	@Override
	public void startElement(String uri, String localName, String qName, Attributes attributes) throws SAXException {
		elements.push(qName);
		
		switch (qName) {
			case "h:hallgato":
				this.korzet = 46;
				break;
			
			case "h:telefonszam":
				String korzet = attributes.getValue("korzet");
				if (korzet != null) {
					this.korzet = Integer.parseInt(korzet);
				}
				break;
		}
	}
	
	@Override
	public void endElement(String uri, String localName, String qName) throws SAXException {
		String elementName = this.elements.pop();
		
		if ("h:hallgato".equals(elementName) && this.szuletesiEv == 1991 && this.korzet == 47) {
			this.letszam++;
		}
	}
	
	@Override
	public void characters(char[] ch, int start, int length) throws SAXException {
		if ("h:szuletesi-ev".equals(elements.peek())) {
			String content = new String(ch, start, length);
			this.szuletesiEv = Integer.parseInt(content);
		}
	}
	
}
