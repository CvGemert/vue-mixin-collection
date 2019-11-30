<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Vanilla JS</router-link> |
      <router-link to="/mixins">Vue mixins</router-link> |
      <router-link to="/thanks">Resources</router-link>
    </div>

    <div id="main-content">
      <router-view/>
    </div>

  </div>
</template>

<style lang="scss">
#app,
html,
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Montserrat', sans-serif;
}

h1,
h2,
#nav a {  
  font-weight: 600;
  font-family: 'Oxygen', sans-serif;
  text-align: center;
  letter-spacing: .4em;
  text-transform: uppercase;
}

#main-content {
  position: absolute;
  bottom: 0;
  height: calc(100vh - 96px);
  width: 100vw;
  overflow-y: auto;
}

#nav {
  height: 96px;
  margin-top: 16px;
  text-align: center;
  z-index: 99;
}

#nav a {
  display: inline-block;
  color: #000;
  text-decoration: none;
  padding: 8px 0;
  margin: 0;
  width: 196px;
  transition-duration: .4s;
}

#nav a:hover {
  background-color: #ddd;
  border-radius: 2px;
  transition-duration: .4s;
}

</style>
