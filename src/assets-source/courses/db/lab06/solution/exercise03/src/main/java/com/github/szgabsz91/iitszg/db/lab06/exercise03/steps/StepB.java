package com.github.szgabsz91.iitszg.db.lab06.exercise03.steps;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class StepB implements IStep {

    private final Connection connection;
    private final String manufacturer;

    public StepB(Connection connection, String manufacturer) {
        this.connection = connection;
        this.manufacturer = manufacturer;
    }

    @Override
    public void execute() throws SQLException {
        System.out.printf("People who own phones manufactured by %s, in alphabetical order:\n", this.manufacturer);
        this.getPeopleWithPhonesManufacturedBy().forEach(name -> System.out.printf("  - %s\n", name));
    }

    private List<String> getPeopleWithPhonesManufacturedBy() throws SQLException {
        List<String> result = new ArrayList<>();

        try (PreparedStatement preparedStatement = this.connection.prepareStatement("MATCH (m:MANUFACTURER { name: ? })-[:MANUFACTURES]->(t:TELEPHONE)<-[:OWNS]-(p:PERSON) RETURN p.name AS name ORDER BY name")) {
            preparedStatement.setString(1, this.manufacturer);

            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                while (resultSet.next()) {
                    result.add(resultSet.getString("name"));
                }
            }
        }

        return result;
    }

}
