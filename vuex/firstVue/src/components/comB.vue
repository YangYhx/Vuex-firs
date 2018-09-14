<template>
  <div>
    <button @click="reduce">-</button>
    <strong>{{$store.state.count}}</strong>
    <button @click="add">+</button>
    <button @click="hendlebro">兄弟组件传值</button>
  </div>
</template>

<script>
    export default {
      data(){
        return {
          msg:'来自兄弟b的内容'
        }
      },
      methods:{
        reduce(){
          this.$store.commit('REDUCE_COUNT')
        },
        add(){
          this.$store.commit('ADD_COUNT')
        },
        hendlebro(){
          this.$bus.$emit('toData',this.msg)
        },
      },
        name: "comB"
    }
</script>

<style scoped>

</style>
