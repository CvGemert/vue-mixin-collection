<template>
  <aside>
    <div class="usage-code usage1">
      <p>
        <span>let arr = [5, 1, 8];</span><br>
        <span v-if="selectedUsage"
          class="exampleoutput"
          ref="ex"
          v-html="selectedUsage.example">
        </span>
      </p>
    </div>
    <div v-if="selectedUsage" class="usage2">
      <h3 style="margin-top: 50px">Output</h3>
      <div class="usage-code">
        <p>
          <span
            class="exampleoutput2"
            ref="ex2"
            v-html="selectedUsage.output">
          </span>
        </p>
      </div><!--usage-code-->
    </div>
  </aside>
</template>

<script>
export default {
  computed: {
    selectedUsage() {
      return this.$store.state.selectedMethod
    }
  },
}
</script>

<style>
.usage-code {
  padding: 0 20px;
  margin: 20px 0;
  background: #333;
  border: 2px solid #f55e41;
  transition: 0.2s all ease;
  display: block;
  border-radius: 5px;
  line-height: 1.8em;
  font-family: monospace;
}

.usage1 {
  color: #aeded4;
}

.usage2 span {
  color: #ecc2a4;
}

.exampleoutput,
.exampleoutput2 {
  display: inline-block;
  opacity: 1;
}

.exampleoutput div,
.exampleoutput2 div {
  opacity: 1;
}
</style>
