<template>
  <h2 class="text-h5 mb-6">Exercise 2</h2>

  <p class="text-body-1 mb-6">
    The below buttons will load the XML file and the JSON file respectively,
    parse them and display the file contents in a table.
  </p>

  <v-btn class="mr-6" @click="loadXml">Load XML</v-btn>

  <v-btn @click="loadJson">Load JSON</v-btn>

  <v-table v-if="cars.length > 0" class="car-table mt-6">
    <thead>
      <tr>
        <th class="text-left">License Plate Number</th>
        <th class="text-left">Manufacturer</th>
        <th class="text-left">Model</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="car in cars"
        :key="car.licensePlateNumber"
        :style="{ color: car.color }"
      >
        <td>{{ car.licensePlateNumber }}</td>
        <td>{{ car.manufacturer }}</td>
        <td>{{ car.model }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<style scoped>
.car-table {
  max-width: 500px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export interface Car {
  readonly licensePlateNumber: string;
  readonly manufacturer: string;
  readonly model: string;
  readonly color: string;
}

export default defineComponent({
  name: "Exercise2View",

  data: (): { cars: readonly Car[] } => ({
    cars: [],
  }),

  methods: {
    async loadXml() {
      this.cars = [];
      const carsResponse = await fetch("/cars.xml");
      const carsText = await carsResponse.text();
      const carsXml = new window.DOMParser().parseFromString(
        carsText,
        "text/xml"
      );
      const carElements = carsXml.getElementsByTagName("ns:car");
      this.cars = [...carElements].map(
        (carElement): Car => ({
          licensePlateNumber:
            carElement.getAttribute("license-plate-number") ?? "",
          manufacturer:
            carElement.getElementsByTagName("ns:manufacturer")[0].textContent ??
            "",
          model:
            carElement.getElementsByTagName("ns:model")[0].textContent ?? "",
          color:
            carElement.getElementsByTagName("ns:color")[0].textContent ?? "",
        })
      );
    },

    async loadJson() {
      this.cars = [];
      const carsResponse = await fetch("/cars.json");
      this.cars = await carsResponse.json();
    },
  },
});
</script>
