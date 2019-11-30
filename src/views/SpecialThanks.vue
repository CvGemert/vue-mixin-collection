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
      <h3><a href="https://sarahdrasnerdesign.com/" target="_blank">Sarah Drasner:</a></h3>
      <ul>
        <li><a href="https://github.com/sdras/array-explorer" target="_blank">Array explorer</a> (MIT License)</li>
        <li><a href="https://github.com/sdras/object-explorer" target="_blank">Object explorer</a> (MIT License)</li>
      </ul>
      <b>What was used:</b><br>
      <i>General inspiration for this project</i> | <i>Multiple code snippets</i> | <i>Some of the text content</i>
    </div>

    <div class="thanks-bro-section">
      <h3><a href="https://mockaroo.com/" target="_blank">Mockaroo:</a></h3>
      <b>What was used:</b><br>
      <i>Generating the mock data array used in this project</i>
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

.header {
  text-align: center;
}

.thanks-bro-section {
  padding: 24px 16px;
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
