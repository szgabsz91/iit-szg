package com.github.szgabsz91.iitszg.db.lab02.exercise01;

import com.github.szgabsz91.iitszg.db.lab02.exercise01.steps.StepA;
import com.github.szgabsz91.iitszg.db.lab02.exercise01.steps.StepB;

public class App {

    private static final String PERSISTENCE_UNIT_NAME = "cars";

    public static void main(String[] args) {
        try (var connection = new Connection(PERSISTENCE_UNIT_NAME)) {
            new StepA(connection.getEntityManager()).execute();
            new StepB(connection.getEntityManager()).execute();
        }
    }

}
