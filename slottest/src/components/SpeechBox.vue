<template>
  <div class="container">
    <div class="header">{{headerText}}</div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="footer">{{footerText}}</div>
  </div>
</template>

<script>
  export default {
    name: "SpeechBox",
    props: [ 'headerText', 'footerText' ]
  }
</script>

<style scoped>
  .container {
    width: 300px;
    margin: 10px;
    padding: 2px;
    border: solid 1px gray;
    float: left;
  }

  .header {

  }
</style>
