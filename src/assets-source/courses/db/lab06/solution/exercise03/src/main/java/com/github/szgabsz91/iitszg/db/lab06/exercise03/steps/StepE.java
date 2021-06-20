package com.github.szgabsz91.iitszg.db.lab06.exercise03.steps;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class StepE implements IStep {

    private final Connection connection;
    private final String manufacturer;

    public StepE(Connection connection, String manufacturer) {
        this.connection = connection;
        this.manufacturer = manufacturer;
    }

    @Override
    public void execute() throws SQLException {
        String name = this.getFirstPersonWithoutPhoneManufacturedBy();
        System.out.printf("First person in the list who does not own a phone manufactured by %s: %s\n", this.manufacturer, name);
    }

    private String getFirstPersonWithoutPhoneManufacturedBy() throws SQLException {
        try (PreparedStatement preparedStatement = connection.prepareStatement("MATCH (p:PERSON)-[:OWNS]->(t:TELEPHONE)<-[:MANUFACTURES]-(m:MANUFACTURER { name: ? }) MATCH (people:PEOPLE)-[:LIST*1..]->(p2:PERSON) WHERE p.name <> p2.name RETURN p2.name AS name LIMIT 1")) {
            preparedStatement.setString(1, this.manufacturer);

            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                if (resultSet.next()) {
                    return resultSet.getString("name");
                }
            }
        }

        return null;
    }

}
