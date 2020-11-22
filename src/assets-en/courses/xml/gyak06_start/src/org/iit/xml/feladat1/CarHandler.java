package org.iit.xml.feladat1;

import org.xml.sax.helpers.DefaultHandler;

public class CarHandler extends DefaultHandler {
	
	private String requiredManufacturer;
	
	public CarHandler(String requiredManufacturer) {
		this.requiredManufacturer = requiredManufacturer;
	}
	
}
