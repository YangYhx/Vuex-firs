<template>
  <div>
    <input type="text" v-model="count">
    <button @click="CHANGE_COUNT(count)">批量</button>
    <button @click="handleChange">异步+10操作</button>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    data(){
      return{
        count:0
      }
    },
    methods:{
      ...mapMutations(['CHANGE_COUNT']),
      handleChange(){
        console.log(this.$store.state.count);
        // const coun = this.$store.state.count + 10
        // this.$store.dispatch('handleChangecount',coun)

        this.$store.dispatch('handleChangecount',888)
      }
    }
  }
</script>

<style scoped>

</style>
