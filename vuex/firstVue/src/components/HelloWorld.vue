<template>
  <div>
    <comA></comA>
    <comB></comB>
    <counter></counter>

  </div>
</template>

<script>

  import comA from "./comA";
  import comB from "./comB";
  import counter from './counter'

  export default {
  name: 'HelloWorld',
    components: {
      comA,
      comB,
      counter
    }
}
</script>

<!-- Add "scoped" attribute omponent to limit CSS to this conly -->
<style scoped>


</style>
