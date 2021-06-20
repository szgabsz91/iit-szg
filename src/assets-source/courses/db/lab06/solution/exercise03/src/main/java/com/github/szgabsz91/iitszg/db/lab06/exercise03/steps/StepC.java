package com.github.szgabsz91.iitszg.db.lab06.exercise03.steps;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class StepC implements IStep {

    private final Connection connection;
    private final String manufacturer;

    public StepC(Connection connection, String manufacturer) {
        this.connection = connection;
        this.manufacturer = manufacturer;
    }

    @Override
    public void execute() throws SQLException {
        String name = this.getFirstPersonWithPhoneManufacturedBy();
        System.out.printf("First person in the list who owns a phone manufactured by %s: %s\n", this.manufacturer, name);
    }

    private String getFirstPersonWithPhoneManufacturedBy() throws SQLException {
        try (PreparedStatement preparedStatement = this.connection.prepareStatement("MATCH (p:PERSON)-[:OWNS]->(t:TELEPHONE)<-[:MANUFACTURES]-(m:MANUFACTURER { name: ? }) MATCH (people:PEOPLE)-[:LIST*1..]->(p2:PERSON) WHERE p2.name = p.name RETURN p2.name AS name LIMIT 1")) {
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
