<template>
  <div>
    <div class="header">
      <h1>Special thanks</h1>
      <p>Some parts of this project contain work originally done by other people than me:</p>
      <div class="disclaimer">
        (I'm not affiliated to any of these people / companies.<br>
        They just made some awesome stuff that I <strike>blatantly stole</strike> got inspired by.)
      </div>
    </div>
    
    <div class="thanks-bro-section first-bro">
      <h3>
        <a href="https://sarahdrasnerdesign.com/" target="_blank">Sarah Drasner </a>
        <i class="material-icons link-icon">open_in_new</i>
      </h3>
      <ul>
        <li>
          <a href="https://github.com/sdras/array-explorer" target="_blank">Array explorer </a>
          (MIT License)<i class="material-icons link-icon-s">open_in_new</i>
        </li>
        <li>
          <a href="https://github.com/sdras/object-explorer" target="_blank">Object explorer </a>
          (MIT License)<i class="material-icons link-icon-s">open_in_new</i>
        </li>
      </ul>
      <b>What was used:</b><br>
      <i>General inspiration for this project</i> | <i>Several code fragments</i> | <i>Some of the text content</i>
    </div>

    <div class="thanks-bro-section">
      <h3>
        <a href="https://mockaroo.com/" target="_blank">Mockaroo </a>
        <i class="material-icons link-icon">open_in_new</i>
      </h3>
      <b>What was used:</b><br>
      <i>The mock data array in this project was generated using the free version of their tool.</i>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'thanksBro',
}
</script>

<style lang="scss" scoped>
h3 {
  margin-top: 0;
}

a {
  text-decoration: none;
  color: blue;
}

.link-icon {
  font-size: 18px;
}

.link-icon-s {
  font-size: 14px;
}

.link-icon {
  // position: absolute;
  // top: 22px;
  // left: 0px;
}

.header {
  text-align: center;
}

.thanks-bro-section {
  position: relative;
  padding: 24px;
  margin: 0 64px;
  border-bottom: 2px solid #999;
}

.first-bro {
  margin-top: 48px;
  border-top: 2px solid #999;
}

.disclaimer {
  font-size: 13px;
  font-style: italic;
}
</style>
