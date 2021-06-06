package com.github.szgabsz91.iitszg.xml.lab06.exercise02.steps;

import com.github.szgabsz91.iitszg.xml.lab06.interfaces.IStep;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import java.util.HashSet;
import java.util.Set;

public class StepD implements IStep {

    private final String color;

    public StepD(String color) {
        this.color = color;
    }

    @Override
    public void execute(Document document) {
        Set<String> licensePlateNumbers = this.getLicensePlateNumbers(document, this.color);
        Set<Integer> ages = this.getAges(document, licensePlateNumbers);
        double averageAge = ages
                .stream()
                .mapToInt(age -> age)
                .average()
                .orElse(0.0);
        System.out.printf("The average age of owners owning a %s car: %.2f\n", this.color, averageAge);
    }

    private Set<String> getLicensePlateNumbers(Document document, String color) {
        Set<String> licensePlateNumbers = new HashSet<>();

        NodeList carElements = document.getElementsByTagName("ns:car");

        for (int i = 0; i < carElements.getLength(); i++) {
            Element carElement = (Element) carElements.item(i);

            NodeList colorElements = carElement.getElementsByTagName("ns:color");
            Element colorElement = (Element) colorElements.item(0);

            if (colorElement.getTextContent().equals(color)) {
                String licensePlateNumber = carElement.getAttribute("license-plate-number");
                licensePlateNumbers.add(licensePlateNumber);
            }
        }

        return licensePlateNumbers;
    }

    private Set<Integer> getAges(Document document, Set<String> licensePlateNumbers) {
        Set<Integer> ages = new HashSet<>();

        NodeList ownerElements = document.getElementsByTagName("ns:owner");

        for (int i = 0; i < ownerElements.getLength(); i++) {
            Element ownerElement = (Element) ownerElements.item(i);
            Set<String> ownedLicensePlateNumbers = this.getOwnedLicensePlateNumbers(ownerElement);
            Set<String> commonLicensePlateNumbers = new HashSet<>(licensePlateNumbers);
            commonLicensePlateNumbers.retainAll(ownedLicensePlateNumbers);

            if (!commonLicensePlateNumbers.isEmpty()) {
                NodeList ageElements = ownerElement.getElementsByTagName("ns:age");
                Element ageElement = (Element) ageElements.item(0);
                int age = Integer.parseInt(ageElement.getTextContent());
                ages.add(age);
            }
        }

        return ages;
    }

    private Set<String> getOwnedLicensePlateNumbers(Element ownerElement) {
        Set<String> ownedLicensePlateNumbers = new HashSet<>();

        NodeList ownedCarElements = ownerElement.getElementsByTagName("ns:owned-car");

        for (int i = 0; i < ownedCarElements.getLength(); i++) {
            Element ownedCarElement = (Element) ownedCarElements.item(i);
            String licensePlateNumber = ownedCarElement.getTextContent();
            ownedLicensePlateNumbers.add(licensePlateNumber);
        }

        return ownedLicensePlateNumbers;
    }

}
