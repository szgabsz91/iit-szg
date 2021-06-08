<template>
  <div>
    <h1 class="md-display-1">Exercise 4</h1>

    <div v-if="feed">
      <h2 class="md-display-1">
        <a :href="feed.url" target="_blank">{{ feed.title }}</a>
      </h2>

      <md-card
        v-for="item in feed.items"
        :key="item.url"
        class="feed-item-card"
      >
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">
              <a :href="item.url" target="_blank">{{ item.title }}</a>
            </div>
          </md-card-header-text>
        </md-card-header>

        <md-card-content>
          <div v-html="item.content"></div>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.feed-item-card {
  margin: 0 auto 64px;
  max-width: 90%;
}
</style>

<script>
export default {
  name: "Exercise4",
  data: () => ({
    feed: null,
  }),
  async created() {
    const feedResponse = await fetch(
      "http://feeds.hanselman.com/ScottHanselman"
    );
    const feedText = await feedResponse.text();
    const feedXml = new window.DOMParser().parseFromString(
      feedText,
      "text/xml"
    );
    this.feed = {
      title: feedXml.getElementsByTagName("title")[0].textContent,
      url: feedXml.getElementsByTagName("link")[0].textContent,
      items: [...feedXml.getElementsByTagName("item")].map((item) => ({
        title: item.getElementsByTagName("title")[0].textContent,
        url: item.getElementsByTagName("link")[0].textContent,
        content: item.getElementsByTagName("description")[0].textContent,
      })),
    };
  },
};
</script>
