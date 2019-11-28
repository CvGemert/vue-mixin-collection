<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
.general-wrap {
  padding: 64px;
}

.section-wrap {
  border: 2px solid #999;
  padding: 0 16px 16px;
  margin-bottom: 16px;
}
</style>
