<template>
  <div>
    <HeaderComponent />
    <PPBannerComponent />
    <PPMainComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./../components/HeaderComponent.vue";
import PPBannerComponent from "./../components/ProjectPageComponents/PPBannerComponent.vue";
import PPMainComponent from "./../components/ProjectPageComponents/PPMainComponent.vue";
import FooterComponent from "./../components/FooterComponent.vue";

export default {
  name: "ProjectPage",
  components: {
    HeaderComponent,
    PPBannerComponent,
    PPMainComponent,
    FooterComponent,
  },
};
</script>
