<template>
    <div class="project-details__content center">
      <h2 class="project-details__header">Minimal Look Bedrooms</h2>
      <p class="project-details__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis
        dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim.
        Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.
        <br><br>
        In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis
        nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in
        viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
      </p>
      <ProjectDetailsSlider />
    </div>
  </template>
  
  <script>
  import ProjectDetailsSlider from './ProjectDetailsSlider.vue'
  export default {
    components: { ProjectDetailsSlider },
    name: 'ProjectDetailsContent'
  }
  </script>
  
  <style lang="scss" scoped>
  $fontMain: "DM Serif Display";

  .project-details {
    &__content {
      margin-top: 200px;
      margin-bottom: 200px;
    }
  
    &__header {
      text-align: center;
      color: #292F36;
      font-family: $fontMain;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 1px;
    }
  
    &__text {
      margin-top: 11px;
      text-align: justify;
      margin-bottom: 100px;
      color: #4D5053;
      font-family: 'Jost';
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.22px;
    }
  }
  </style>