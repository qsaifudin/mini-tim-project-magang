<template>
  <div id="wrapper">
    <app-sidebar></app-sidebar>
      <div id="content-wrapper" class="d-flex flex-column">
		    <div id="content">
          <app-header></app-header>
          <Nuxt />
        </div>
      </div>
  </div>
  
</template>

<script>
import sidebar from '@/components/layouts/sidebar.vue';
import header from '@/components/layouts/header.vue';
  
  export default {
    components: {
        'app-sidebar': sidebar,
        'app-header': header
    }
}
</script>
