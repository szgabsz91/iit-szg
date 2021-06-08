<template>
  <div>
    <h1 class="md-display-1">Exercise 3</h1>

    <md-card v-if="facebookProfileData" class="facebook-profile-card">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{ facebookProfileData.name }}</div>
          <div class="md-subhead">{{ facebookProfileData.emailAddress }}</div>
        </md-card-header-text>

        <md-card-media>
          <img
            :src="facebookProfileData.profilePictureUrl"
            :alt="facebookProfileData.name + '\'s profile picture'"
            width="50"
            height="50"
          />
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button :href="facebookProfileData.profileUrl" target="_blank"
          >Go to Profile</md-button
        >
      </md-card-actions>
    </md-card>
  </div>
</template>

<style lang="scss" scoped>
.facebook-profile-card {
  max-width: 500px;
}
</style>

<script>
const FacebookConfig = {
  appId: "509088797192998",
  version: "v11.0",
  scopes: ["public_profile", "email", "user_link"],
};

export default {
  name: "Exercise3",
  data: () => ({
    facebookProfileData: null,
  }),
  async created() {
    await this.loadFacebookSdk();
    await this.loginToFacebook();
    this.facebookProfileData = await this.getFacebookData();
  },
  methods: {
    async loadFacebookSdk() {
      return new Promise((resolve) => {
        window.fbAsyncInit = () => {
          window.FB.init({
            appId: FacebookConfig.appId,
            version: FacebookConfig.version,
          });
          resolve();
        };

        const scriptElement = document.createElement("script");
        scriptElement.async = true;
        scriptElement.defer = true;
        scriptElement.crossorigin = "anonymous";
        scriptElement.src = "https://connect.facebook.net/en_US/sdk.js";
        document.head.appendChild(scriptElement);
      });
    },
    async loginToFacebook() {
      return new Promise((resolve) => {
        window.FB.login(() => resolve(), {
          scope: FacebookConfig.scopes.join(","),
        });
      });
    },
    async getFacebookData() {
      const facebookProfileInfoPromise = this.getFacebookProfileInfo();
      const facebookProfilePictureUrlPromise =
        this.getFacebookProfilePictureUrl();
      const [facebookProfileInfo, facebookProfilePictureUrl] =
        await Promise.all([
          facebookProfileInfoPromise,
          facebookProfilePictureUrlPromise,
        ]);
      return {
        ...facebookProfileInfo,
        profilePictureUrl: facebookProfilePictureUrl,
      };
    },
    async getFacebookProfileInfo() {
      return new Promise((resolve) => {
        window.FB.api(
          "/me",
          "GET",
          {
            fields: ["name, email", "link"],
          },
          (response) =>
            resolve({
              name: response.name,
              emailAddress: response.email,
              profileUrl: response.link,
            })
        );
      });
    },
    async getFacebookProfilePictureUrl() {
      return new Promise((resolve) => {
        window.FB.api(
          "/me/picture",
          "GET",
          {
            redirect: false,
            width: 50,
            height: 50,
          },
          (response) => resolve(response.data.url)
        );
      });
    },
  },
};
</script>
