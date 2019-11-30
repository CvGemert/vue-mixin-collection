<template>
  <div id="home">

    <main>
      <section>
        <h2 class="usage">Controls</h2>
        <app-method-primary />
      </section>
      <section>
        <h2 class="usage">Usage</h2>
        <app-code />
      </section>
    </main>
  </div>
</template>

<script>
import AppMethodPrimary from '@/components/AppMethodPrimary'
import AppCode from '@/components/AppCode'

export default {
  name: 'home',
  components: {
    AppMethodPrimary,
    AppCode,
  }
}
</script>

<style scoped>
#home {
  height: 100vh;
  margin: 0;
  padding: 0;
  font-size: 19px;
}

/* -- grid -- */
main {
  margin-top: 16px;
  width: 95%;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: minmax(500px, auto);
}

@media screen and (max-width: 850px) {
  main {
    grid-template-columns: 1fr;
  }
}

</style>
