package com.github.szgabsz91.iitszg.db.lab06.exercise03;

import com.github.szgabsz91.iitszg.db.lab06.exercise03.steps.*;

import java.sql.*;

public class App {

    private static final String MANUFACTURER_APPLE = "Apple";
    private static final String MANUFACTURER_GOOGLE = "Google";
    private static final String MANUFACTURER_MICROSOFT = "Microsoft";

    public static void main(String[] args) throws ClassNotFoundException, SQLException {
        Class.forName("org.neo4j.jdbc.Driver");

        try (Connection connection = DriverManager.getConnection("jdbc:neo4j:http://localhost", "neo4j", "password")) {
            new StepA(connection).execute();
            new StepB(connection, MANUFACTURER_GOOGLE).execute();
            new StepC(connection, MANUFACTURER_APPLE).execute();
            new StepD(connection).execute();
            new StepE(connection, MANUFACTURER_MICROSOFT).execute();
        }
    }

}
