package com.github.szgabsz91.iitszg.xml.lab06.exercise03.steps;

import com.github.szgabsz91.iitszg.xml.lab06.interfaces.IStep;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import java.util.ArrayList;
import java.util.List;

public class StepA implements IStep {

    private final int minimumYear;
    private final int maximumYear;
    private final int maximumId;

    public StepA(int minimumYear, int maximumYear, int maximumId) {
        this.minimumYear = minimumYear;
        this.maximumYear = maximumYear;
        this.maximumId = maximumId;
    }

    @Override
    public void execute(Document document) {
        List<Double> prices = this.getPrices(document, this.minimumYear, this.maximumYear, this.maximumId);
        double averagePrice = prices
                .stream()
                .mapToDouble(price -> price)
                .average()
                .orElse(0.0);
        System.out.printf("The average price of those albums from the '80s whose identifier has only one digit: %.2f\n", averagePrice);
    }

    private List<Double> getPrices(Document document, int minimumYear, int maximumYear, int maximumId) {
        List<Double> prices = new ArrayList<>();

        NodeList cdElements = document.getElementsByTagName("ns:cd");

        for (int i = 0; i < cdElements.getLength(); i++) {
            Element cdElement = (Element) cdElements.item(i);
            int id = Integer.parseInt(cdElement.getAttribute("id"));

            Element yearElement = (Element) cdElement.getElementsByTagName("ns:year").item(0);
            int year = Integer.parseInt(yearElement.getTextContent());

            if (id <= maximumId && year >= minimumYear && year <= maximumYear) {
                Element priceElement = (Element) cdElement.getElementsByTagName("ns:price").item(0);
                double price = Double.parseDouble(priceElement.getTextContent());
                prices.add(price);
            }
        }

        return prices;
    }

}
