<template>
  <div>
    <HeaderComponent />
    <ProjectDetailsBanner />
    <ProjectDetailsContent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import ProjectDetailsBanner from "../components/ProjectDetailsPageComp/ProjectDetailsBanner.vue";
import ProjectDetailsContent from "../components/ProjectDetailsPageComp/ProjectDetailsContent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    ProjectDetailsBanner,
    ProjectDetailsContent,
  },
  name: "ProjectDetailsPage",
};
</script>

<style lang="scss" scoped></style>
