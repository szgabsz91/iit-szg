<template>
  <h2 class="text-h5 mb-6">Exercise 4</h2>

  <div v-if="feed">
    <h3 class="text-h6">
      <a :href="feed.url" target="_blank">{{ feed.title }}</a>
    </h3>

    <v-card v-for="item in feed.items" :key="item.url" class="feed-item-card">
      <v-card-title>
        <h4>
          <a :href="item.url" target="_blank">{{ item.title }}</a>
        </h4>
      </v-card-title>

      <v-card-text>
        <div v-html="item.content"></div>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
.feed-item-card {
  margin: 64px auto 0;
  max-width: 90%;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export interface FeedItem {
  readonly title: string;
  readonly url: string;
  readonly content: string;
}

export interface Feed {
  readonly title: string;
  readonly url: string;
  readonly items: readonly FeedItem[];
}

export default defineComponent({
  name: "Exercise4View",

  data: (): { feed: Feed | null } => ({
    feed: null,
  }),

  async created() {
    const feedResponse = await fetch(
      "https://feeds.hanselman.com/ScottHanselman"
    );
    const feedText = await feedResponse.text();
    const feedXml = new window.DOMParser().parseFromString(
      feedText,
      "text/xml"
    );
    this.feed = {
      title: feedXml.getElementsByTagName("title")[0].textContent ?? "",
      url: feedXml.getElementsByTagName("link")[0].textContent ?? "",
      items: [...feedXml.getElementsByTagName("item")].map((item) => ({
        title: item.getElementsByTagName("title")[0].textContent ?? "",
        url: item.getElementsByTagName("link")[0].textContent ?? "",
        content: item.getElementsByTagName("description")[0].textContent ?? "",
      })),
    };
  },
});
</script>
