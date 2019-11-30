<template>
  <div id="home">

    <details class="details-section">
      <summary><b style="cursor: pointer;">Show / hide the mock data structure</b></summary>
      <p>The mock data array consists of 1000 objects with the following structure:</p>
      <mock-data-section />
    </details>

    <main>
      <section>
        <h3 class="usage">Controls</h3>
        <app-method-primary />
      </section>
      <section>
        <h3 class="usage">Usage</h3>
        <app-code />
      </section>
    </main>
  </div>
</template>

<script>
import AppMethodPrimary from '@/components/AppMethodPrimary'
import AppCode from '@/components/AppCode'
import MockDataSection from '@/components/MockDataSection'

export default {
  name: 'home',
  components: {
    AppMethodPrimary,
    AppCode,
    MockDataSection
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

.details-section {
  padding: 16px;
  border-bottom: 2px solid #999;
}

@media screen and (max-width: 850px) {
  main {
    grid-template-columns: 1fr;
  }
}

</style>
