<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <button @click="changes">点击</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  methods:{
  	changes:function(){
  		let str = this.msg;
  		str = str.split('').reverse();
  		this.msg = str;
  	}
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
