<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
</script>

<template>
  <nav class="nav">
    <ul class="nav__ul">
      <li class="nav__li">
        <router-link to="/exercise-one" class="nav__link" active-class="active">
          Exercise One
        </router-link>
      </li>
      <li class="nav__li">
        <router-link to="/exercise-two" class="nav__link" active-class="active">
          Exercise Two
        </router-link>
      </li>
    </ul>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<style lang="scss">
.nav {
  width: 100%;
  padding: 0.7rem;
  background-color: #222;

  &__ul {
    display: flex;
    gap: 2rem;
    color: #FFF;
    list-style-type: none;
    margin: auto 0;
  }

  &__link {
    text-decoration: none;
    color: #FFF;
    padding-bottom: 0.7rem;
  }
}

.active {
  border-bottom: 4px solid #FFF;
}
</style>