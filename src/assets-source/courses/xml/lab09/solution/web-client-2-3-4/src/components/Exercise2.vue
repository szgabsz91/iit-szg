<template>
  <div>
    <h1 class="md-display-1">Exercise 2</h1>

    <p>
      The below buttons will load the XML file and the JSON file respectively,
      parse them and display the file contents in a table.
    </p>

    <md-button class="md-raised md-primary" @click="loadXml"
      >Load XML</md-button
    >
    <md-button class="md-raised md-primary" @click="loadJson"
      >Load JSON</md-button
    >

    <md-table v-if="cars.length > 0" class="car-table">
      <md-table-row>
        <md-table-head>License Plate Number</md-table-head>
        <md-table-head>Manufacturer</md-table-head>
        <md-table-head>Model</md-table-head>
      </md-table-row>

      <md-table-row
        v-for="car in cars"
        :key="car.licensePlateNumber"
        v-bind:style="{ color: car.color }"
      >
        <md-table-cell>{{ car.licensePlateNumber }}</md-table-cell>
        <md-table-cell>{{ car.manufacturer }}</md-table-cell>
        <md-table-cell>{{ car.model }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<style lang="scss" scoped>
.car-table {
  max-width: 500px;
}
</style>

<script>
export default {
  name: "Exercise2",
  data: () => ({
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
      this.cars = [...carElements].map((carElement) => ({
        licensePlateNumber: carElement.getAttribute("license-plate-number"),
        manufacturer:
          carElement.getElementsByTagName("ns:manufacturer")[0].textContent,
        model: carElement.getElementsByTagName("ns:model")[0].textContent,
        color: carElement.getElementsByTagName("ns:color")[0].textContent,
      }));
    },

    async loadJson() {
      this.cars = [];
      const carsResponse = await fetch("/cars.json");
      this.cars = await carsResponse.json();
    },
  },
};
</script>
