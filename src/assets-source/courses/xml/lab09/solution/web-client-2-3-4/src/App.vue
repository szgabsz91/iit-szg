<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <md-button
          class="md-icon-button menu-toggle-button"
          @click="onToggleMenu"
        >
          <md-icon>menu</md-icon>
        </md-button>

        <span class="md-title">Lab 9 Solution</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="clipped" :md-active.sync="isMenuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-toolbar>

        <md-list>
          <md-list-item to="/exercises/1">Exercise 1</md-list-item>
          <md-list-item to="/exercises/2">Exercise 2</md-list-item>
          <md-list-item to="/exercises/3">Exercise 3</md-list-item>
          <md-list-item to="/exercises/4">Exercise 4</md-list-item>
          <md-list-item to="/exercises/5">Exercise 5</md-list-item>
          <md-list-item to="/exercises/6">Exercise 6</md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
.md-app {
  height: 100vh;
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

@media (min-width: 600px) {
  .menu-toggle-button {
    display: none;
  }
}
</style>

<script>
import VueRouter from "vue-router";

import Exercise1 from "./components/Exercise1.vue";
import Exercise2 from "./components/Exercise2.vue";
import Exercise3 from "./components/Exercise3.vue";
import Exercise4 from "./components/Exercise4.vue";
import Exercise5 from "./components/Exercise5.vue";
import Exercise6 from "./components/Exercise6.vue";

const routes = [
  { path: "/exercises/1", component: Exercise1 },
  { path: "/exercises/2", component: Exercise2 },
  { path: "/exercises/3", component: Exercise3 },
  { path: "/exercises/4", component: Exercise4 },
  { path: "/exercises/5", component: Exercise5 },
  { path: "/exercises/6", component: Exercise6 },
  { path: "*", redirect: "/exercises/1" },
];

const router = new VueRouter({
  routes,
});

export default {
  name: "Lab9",
  router,
  data: () => ({
    isMenuVisible: false,
  }),
  methods: {
    onToggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    },
  },
};
</script>
