<template>
  <div>
    <h1>
      总计：{{$store.getters.totalPrice}}
    </h1>
    <h2>
      单价: {{price}}
    </h2>
    <h2>{{msg}}</h2>

  </div>
</template>

<script>
  import { mapState } from 'vuex'
    export default {
    data(){
      return {
        msg:''
      }
    },
      created(){
        this.$bus.$on('toData',(msg) => {
          this.msg = msg
        })
      },
    computed:{
      ...mapState(['price'])
    }
    // computed:mapstate({
    //   count: state => state.count,
    //   price: state => state.price,
    //   countAlias:'count,',
    //   countAlias:'price'
    // })
    //   computed:{
    //     total(){
    //       return this.$store.state.count * this.$store.state.price
    //     }
    //   }
    }
</script>

<style scoped>

</style>
