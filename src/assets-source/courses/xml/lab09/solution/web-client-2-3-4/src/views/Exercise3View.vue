<template>
  <h2 class="text-h5 mb-6">Exercise 3</h2>

  <v-card v-if="facebookProfileData" class="facebook-profile-card">
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title>{{ facebookProfileData.name }}</v-card-title>
        <v-card-subtitle>{{
          facebookProfileData.emailAddress
        }}</v-card-subtitle>
      </div>

      <v-avatar
        v-if="facebookProfileData.profilePictureUrl"
        class="ma-3"
        size="80"
        rounded="0"
      >
        <v-img
          :src="facebookProfileData.profilePictureUrl"
          :alt="facebookProfileData.name + '\'s profile picture'"
        ></v-img>
      </v-avatar>
    </div>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :href="facebookProfileData.profileUrl" target="_blank"
        >Go to Profile</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.facebook-profile-card {
  max-width: 500px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

declare global {
  interface Window {
    fbAsyncInit: Function;
    FB: {
      init(args: { appId: string; version: string }): void;
      login(cb: Function, args: { scope: string }): void;
      api(url: string, method: string, options: any, callback: Function): void;
    };
  }
}

export interface FacebookConfig {
  readonly appId: string;
  readonly version: string;
  readonly scopes: readonly string[];
}

export interface FacebookProfileData {
  readonly name: string;
  readonly emailAddress: string;
  readonly profileUrl: string;
  readonly profilePictureUrl?: string;
}

export interface MeResponse {
  readonly name: string;
  readonly email: string;
  readonly link: string;
}

export interface MePictureResponse {
  readonly data: {
    readonly url: string;
  };
}

const facebookConfig: FacebookConfig = {
  appId: "509088797192998",
  version: "v11.0",
  scopes: ["public_profile", "email", "user_link"],
};

export default defineComponent({
  name: "Exercise3View",

  data: (): { facebookProfileData: FacebookProfileData | null } => ({
    facebookProfileData: null,
  }),

  async created() {
    await this.loadFacebookSdk();
    await this.loginToFacebook();
    this.facebookProfileData = await this.getFacebookData();
  },

  methods: {
    async loadFacebookSdk() {
      return new Promise((resolve: Function) => {
        window.fbAsyncInit = () => {
          window.FB.init({
            appId: facebookConfig.appId,
            version: facebookConfig.version,
          });
          resolve();
        };

        if (document.querySelector('script[id="facebook-sdk"]')) {
          resolve();
          return;
        }

        const scriptElement = document.createElement("script");
        scriptElement.id = "facebook-sdk";
        scriptElement.async = true;
        scriptElement.defer = true;
        scriptElement.crossOrigin = "anonymous";
        scriptElement.src = "https://connect.facebook.net/en_US/sdk.js";
        document.head.appendChild(scriptElement);
      });
    },

    async loginToFacebook(): Promise<void> {
      return new Promise((resolve: Function) => {
        window.FB.login(() => resolve(), {
          scope: facebookConfig.scopes.join(","),
        });
      });
    },

    async getFacebookData(): Promise<FacebookProfileData> {
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

    async getFacebookProfileInfo(): Promise<FacebookProfileData> {
      return new Promise((resolve) => {
        window.FB.api(
          "/me",
          "GET",
          {
            fields: ["name, email", "link"],
          },
          (response: MeResponse) =>
            resolve({
              name: response.name,
              emailAddress: response.email,
              profileUrl: response.link,
            })
        );
      });
    },

    async getFacebookProfilePictureUrl(): Promise<string> {
      return new Promise((resolve) => {
        window.FB.api(
          "/me/picture",
          "GET",
          {
            redirect: false,
            width: 50,
            height: 50,
          },
          (response: MePictureResponse) => resolve(response.data.url)
        );
      });
    },
  },
});
</script>
