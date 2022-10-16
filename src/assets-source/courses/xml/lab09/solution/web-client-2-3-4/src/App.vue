<template>
  <v-app>
    <v-card>
      <v-layout>
        <v-app-bar color="primary" prominent>
          <v-app-bar-nav-icon
            variant="text"
            @click.stop="isNavigationDrawerOpen = !isNavigationDrawerOpen"
          ></v-app-bar-nav-icon>

          <v-toolbar-title tag="h1">Lab 9 Solution</v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer v-model="isNavigationDrawerOpen" bottom temporary>
          <v-list nav>
            <v-list-item
              v-for="page in pages"
              :to="page.url"
              :key="page.url"
              link
            >
              <v-list-item-content>{{ page.title }}</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-main class="main">
          <div class="content-container">
            <router-view />
          </div>
        </v-main>
      </v-layout>
    </v-card>
  </v-app>
</template>

<style scoped>
.main {
  min-height: 100vh;
}

.content-container {
  width: 80%;
  margin: 0 auto;
  padding-top: 24px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  data: () => ({
    isNavigationDrawerOpen: false,
    pages: [
      {
        title: "Exercise 1",
        url: "/exercises/1",
      },
      {
        title: "Exercise 2",
        url: "/exercises/2",
      },
      {
        title: "Exercise 3",
        url: "/exercises/3",
      },
      {
        title: "Exercise 4",
        url: "/exercises/4",
      },
      {
        title: "Exercise 5",
        url: "/exercises/5",
      },
      {
        title: "Exercise 6",
        url: "/exercises/6",
      },
    ],
  }),
});
</script>
