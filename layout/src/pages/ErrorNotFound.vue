<template>
  <div class="error404">
    <HeaderComponent />
    <div class="error">
      <h1>...There is no such page</h1>
    </div>
    <FooterComponent />
  </div>
</template>
<script>
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  name: "ErrorNotFound",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>
<style lang="scss" scoped>
.error {
  margin-top: 200px;
  margin-bottom: 300px;
  font-family: "DM Serif Display";
  font-size: 30px;
  text-align: center;
}
</style>
