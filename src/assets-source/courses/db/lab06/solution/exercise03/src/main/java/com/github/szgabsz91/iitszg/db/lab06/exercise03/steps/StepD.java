package com.github.szgabsz91.iitszg.db.lab06.exercise03.steps;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class StepD implements IStep {

    private final Connection connection;

    public StepD(Connection connection) {
        this.connection = connection;
    }

    @Override
    public void execute() throws SQLException {
        String manufacturer = this.getManufacturerWithHighestAveragePrice();
        System.out.printf("Manufacturer with the highest average price: %s\n", manufacturer);
    }

    private String getManufacturerWithHighestAveragePrice() throws SQLException {
        try (PreparedStatement preparedStatement = this.connection.prepareStatement("MATCH (m:MANUFACTURER)-[:MANUFACTURES]->(t:TELEPHONE) WITH m AS manufacturer, AVG(t.price) AS averagePrice RETURN manufacturer.name AS manufacturer ORDER BY averagePrice DESC LIMIT 1");
             ResultSet resultSet = preparedStatement.executeQuery()) {
            if (resultSet.next()) {
                return resultSet.getString("manufacturer");
            }
        }

        return null;
    }

}
