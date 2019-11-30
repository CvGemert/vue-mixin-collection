<template>
  <div>
    <div class="header">
      <h1>Special thanks</h1>
      <p>Some parts of this project use content originally created by other people:</p>
      <div class="disclaimer">
        Note: I'm not affiliated in any way with these people / organizations.<br>
        They just made some awesome stuff that I <strike>blatantly stole</strike> got inspired by.
      </div>
    </div>
    
    <div class="thanks-bro-wrapper">
      <div class="thanks-bro-section">
        <h3>Sarah Drasner</h3>     
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

      <div class="thanks-bro-section">
        <h3>Mockaroo</h3>
        <a href="https://mockaroo.com/" target="_blank">
          <b>Homepage <i class="material-icons link-icon">open_in_new</i></b>
        </a><br><br>
        <b>What was used:</b>
        <ul>
          <li><i>The mock data array in this project was generated using their tool</i></li>
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

.thanks-bro-wrapper {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.thanks-bro-section {
  position: relative;
  padding: 24px;
  width: 480px;
  border-bottom: 2px solid #999;
}

.disclaimer {
  font-size: 14px;
  font-style: italic;
}
</style>
