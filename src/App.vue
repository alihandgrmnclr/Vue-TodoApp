<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <aside>
    <div class="navs">
      <nav>
        <RouterLink to="/">Planned</RouterLink>
        <RouterLink to="/important">Important</RouterLink>
        <RouterLink to="/market">Market</RouterLink>
        <RouterLink to="/daily">Daily</RouterLink>
      </nav>
    </div>
  </aside>

  <RouterView />
</template>

<style lang="scss" scoped>
aside {
  .navs {
    @apply flex justify-center items-center w-full h-[10vh];
    @apply min-h-[50px];


    nav{
      @apply flex font-medium text-[14px] gap-4;
      @apply sm:gap-8 sm:text-[18px];
    }
    .router-link-active {
      @apply font-black text-lg;
      @apply sm:text-2xl;
    }
  }
}
</style>
