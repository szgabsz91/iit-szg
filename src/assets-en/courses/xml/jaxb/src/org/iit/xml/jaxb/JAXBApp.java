package org.iit.xml.jaxb;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;

public class JAXBApp {
	
	public static void main(String[] args) {
		Person person = new Person(3, "John", "Doe");
		
		try {
			JAXBContext jaxbContext = JAXBContext.newInstance(Person.class);
			Marshaller jaxbMarshaller = jaxbContext.createMarshaller();
			jaxbMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
			
			jaxbMarshaller.marshal(person, System.out);
		}
		catch (JAXBException e) {
			e.printStackTrace();
		}
	}
	
}