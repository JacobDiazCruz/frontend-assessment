<script setup lang="ts">
import sections from "../../data.json";
import { ref } from 'vue'

const activeSection = ref(sections[0]);

const setActiveSection = (section) => {
  activeSection.value = section;
};
</script>

<template>
  <main>
    <!-- tabs for desktop -->
    <section class="desktop_container">
      <div class="tabs">
        <ul class="tabs__ul">
          <li 
            v-for="section in sections" 
            @click="setActiveSection(section)" 
            :class="{ 'active': section.title === activeSection.title }"
            class="tabs__li"
          >
            {{ section.title }}
          </li>
        </ul>
      </div>
      <div class="content" v-html="activeSection.content"></div>
    </section>

    <!-- accordion for mobile -->
    <div v-for="(section, index) in sections" :key="index" class="accordion" :id="'accordion-' + index">
      <div class="accordion-item">
        <h2 class="accordion-header" :id="'heading-' + index">
          <button 
            class="accordion-button" 
            type="button" 
            data-bs-toggle="collapse" 
            :data-bs-target="'#collapse-' + index" 
            :aria-expanded="section.title === activeSection.title ? 'true' : 'false'" 
            :aria-controls="'collapse-' + index"
          >
            {{ section.title }}
          </button>
        </h2>
        <div 
          :id="'collapse-' + index" 
          class="accordion-collapse collapse" 
          :aria-labelledby="'heading-' + index" 
          :data-bs-parent="'#accordion-' + index" 
          :class="{ 'show': section.title === activeSection.title }"
        >
          <div class="accordion-body" v-html="section.content"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.tabs {
  width: 100%;
  border-bottom: 1px solid #c9c9c9;
  padding: 1rem 1rem 0 1rem;

  &__ul {
    display: flex;
    gap: 2.5rem;
    list-style-type: none;
    margin: auto;
  }

  &__li {
    cursor: pointer;
    color: #474747;
    padding-bottom: 1rem;

    &:hover {
      color: black;
    }
  }

  .active {
    border-bottom: 2px solid black;
  }
}

.content {
  padding: 2rem 3rem;
}

@media screen and (max-width: 768px) {
  .accordion {
    display: block;
  }

  .desktop_container {
    display: none;
  }
}

@media screen and (min-width: 769px) {
  .accordion {
    display: none;
  }

  .desktop_container {
    display: block;
  }
}
</style>
