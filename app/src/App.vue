<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <main>
    <header class="header">
      <div class="header__container">
        <h1 class="header__h1">Hello Developer!</h1>
        <p class="header__p">Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
      </div>
      <div class="header__mask"></div>
    </header>

    <section class="cards">
      <div class="card">
        <img src="https://via.placeholder.com/400x300" class="card__img" />
        <p class="card__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button class="card__btn">READ MORE</button>
      </div>
      <div class="card">
        <img src="https://via.placeholder.com/400x300" class="card__img" />
        <p class="card__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button class="card__btn">READ MORE</button>
      </div>
      <div class="card">
        <img src="https://via.placeholder.com/400x300" class="card__img" />
        <p class="card__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button class="card__btn">READ MORE</button>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.header {
  background-image: url('https://via.placeholder.com/1920x650');
  background-size: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: relative;

  &__mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    position: absolute;
  }

  &__container {
    width: 50%;
    color: #FFF;
    z-index: 5;
    position: relative;
  }

  &__h1 {
    font-size: 3rem;
    font-weight: 700;
  }

  &__p {
    font-size: 1.5rem;
  }
}

.cards {
  display: flex;
  gap: 2;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0;

  .card {
    width: 300px;

    &__img {
      width: 100%;
    }

    &__p {
      text-align: center;
    }
  }
}
</style>
