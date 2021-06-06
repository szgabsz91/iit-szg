package com.github.szgabsz91.iitszg.xml.lab06.exercise01.steps;

import com.github.szgabsz91.iitszg.xml.lab06.interfaces.IStep;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

public class StepA implements IStep {

    private final String manufacturer;

    public StepA(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    @Override
    public void execute(Document document) {
        double averagePrice = 0;
        int count = 0;

        NodeList carElements = document.getElementsByTagName("car");

        for (int i = 0; i < carElements.getLength(); i++) {
            Node carElement = carElements.item(i);

            String currentManufacturer = null;
            double currentPrice = 0;
            NodeList carChildren = carElement.getChildNodes();

            for (int j = 0; j < carChildren.getLength(); j++) {
                Node carChild = carChildren.item(j);

                if (carChild.getNodeType() != Node.ELEMENT_NODE) {
                    continue;
                }

                String elementName = carChild.getNodeName();

                switch (elementName) {
                    case "manufacturer":
                        currentManufacturer = carChild.getTextContent();
                        break;

                    case "price":
                        currentPrice = Double.parseDouble(carChild.getTextContent());
                        break;
                }
            }

            if (currentManufacturer.equals(this.manufacturer)) {
                averagePrice += currentPrice;
                count++;
            }
        }

        averagePrice /= count;
        System.out.printf("The average price of %s cars is %.2f%n%n", this.manufacturer, averagePrice);
    }

}
