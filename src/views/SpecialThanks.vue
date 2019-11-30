<template>
  <div>
    <div class="header">
      <h1>Special thanks</h1>
      <p>Some parts of this project contain work originally done by other people than me:</p>
      <div class="disclaimer">
        ( I'm not affiliated to any of these people / companies.<br>
        They just made some awesome stuff that I <strike>blatantly stole</strike> got inspired by. )
      </div>
    </div>
    
    <div class="thanks-bro-section">

      <h3>Sarah Drasner</h3>
      <div class="thanks-bro-details">        
        <a href="https://sarahdrasnerdesign.com/" target="_blank">
          <b>Homepage <i class="material-icons link-icon">open_in_new</i></b>
        </a><br><br>
        <b>Relevant repositories:</b>
        <ul>
          <li>
            <a href="https://github.com/sdras/array-explorer" target="_blank">Array explorer <i class="material-icons link-icon-s">open_in_new</i></a>
            (MIT License)
          </li>
          <li>
            <a href="https://github.com/sdras/object-explorer" target="_blank">Object explorer <i class="material-icons link-icon-s">open_in_new</i></a>
            (MIT License)
          </li>
        </ul>
        <b>What was used:</b>
        <ul>
          <li><i>General inspiration for this project</i></li>
          <li><i>Significant portions of the 'Vanilla JS' section are adaptations of Drasner's work</i></li>
        </ul>
      </div>
    </div>

    <div class="thanks-bro-section">
      <h3>Mockaroo</h3>
      <div class="thanks-bro-details">
        <a href="https://mockaroo.com/" target="_blank">
          <b>Homepage <i class="material-icons link-icon">open_in_new</i></b>
        </a><br><br>
        <b>What was used:</b>
        <ul>
          <li><i>The mock data array in this project was generated using the free version of their tool</i></li>
        </ul>
      </div>
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
  background: #222;
  width: fit-content;
  padding: 8px 16px;
  color: #fff;
  border-radius: 2px;
}

a { 
  text-decoration: none;
  color: #47a3da;
}

.link-icon {
  font-size: 18px;
}

.link-icon-s {
  font-size: 14px;
}

.header {
  text-align: center;
  margin-bottom: 48px;
}

.thanks-bro-section {
  position: relative;
  padding: 24px;
  margin: 0 64px;
  // border-bottom: 2px solid #999;
}

.thanks-bro-details {
  margin-left: 16px;
}

.disclaimer {
  font-size: 14px;
  font-style: italic;
}
</style>
