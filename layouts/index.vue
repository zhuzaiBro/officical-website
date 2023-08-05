<template>
    <slot name="top"></slot>
    <div class="main">
      <slot name="main"></slot>
    </div>
    <slot name="mobile"></slot>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .main {
    width: 100%;
    height: 100%;
  }
  </style>