<template>
  <div id="app">

    <input type="checkbox" id="menu-checkbox">
    <label for="menu-checkbox" id="main-menu-toggle">
      <i class="material-icons">menu</i>
    </label>

    <div id="nav">
      <h1 class="app-title">Vue mixin<br>explorer</h1>
      <router-link to="/">Vanilla JS</router-link>
      <router-link to="/mixins">Vue mixins</router-link>
      <router-link to="/thanks">Resources</router-link>
    </div>

    <div id="main-content">
      <router-view/>
    </div>

  </div>
</template>

<style lang="scss">
* { box-sizing: border-box; }

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

.app-title {
  font-size: 12px;
  // font-weight: 600;
  font-family: 'Oxygen', sans-serif;
  // text-align: center;
  position: fixed;
  left: 16px;
  top: 8px;
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 96px;
  padding-top: 32px;
  text-align: center;
  background: #222;
  color: #fff;
  overflow: hidden;
  z-index: 99;
}

#nav a {
  display: inline-block;
  color: #fff;
  text-decoration: none;
  padding: 8px 0;
  margin: 0 16px;
  width: 196px;
  transition-duration: .3s;
}

#nav a:hover {
  background-color: #ddd;
  color: #222;
  border-radius: 1px;
  transition-duration: .3s;
}

#menu-checkbox {
  display: none;
}

@media screen and (min-width: 992px) {
  #main-menu-toggle {
    display: none;
  }
}

@media screen and (max-width: 991px) {
  #main-content {
    transition-duration: .3s;
  }

  #menu-checkbox:checked ~ #main-content {
    height: calc(100vh - 256px);
    transition-duration: .3s;
  }

  #nav { 
    height: 64px;
    padding-top: 64px;
    transition-duration: .3s;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #menu-checkbox:checked ~ #nav { 
    height: 256px;
    transition-duration: .3s;
  }

  #nav a { 
    margin: 8px 0;
  }

  #main-menu-toggle {
    z-index: 100;
    position: fixed;
    top: 12px;
    right: 12px;
    background: #fff;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  #main-menu-toggle .material-icons {
    font-size: 28px;
  }
}
</style>
