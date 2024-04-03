<template>
  <div>
    <HeaderComponent />
    <PromoComponent />
    <ProjectsComponent />
    <AchievementsComp />
    <HomeBlogComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./../components/HeaderComponent.vue";
import PromoComponent from "./../components/HomePageComponents/PromoComponent.vue";
import ProjectsComponent from "./../components/HomePageComponents/ProjectsComponent.vue";
import AchievementsComp from "./../components/HomePageComponents/AchievementsComp.vue";
import HomeBlogComponent from "@/components/HomePageComponents/HomeBlogComponent.vue";
import FooterComponent from "./../components/FooterComponent.vue";

export default {
  name: "HomePage",
  components: {
    HeaderComponent,
    PromoComponent,
    ProjectsComponent,
    AchievementsComp,
    HomeBlogComponent,
    FooterComponent,
  },
};
</script>
