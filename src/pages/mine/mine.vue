<template>
    <div class="container">{{message}}
        <div :class="classStr"></div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      message: '我的页面',
      classObject: {
        active: true,
        'text-danger': false
      }
    }
  },

  computed: {
    classStr () {
      let arr = []
      for (let p in this.classObject) {
        console.log(this.classObject[p])
        if (this.classObject[p]) {
          arr.push(p)
        }
      }
      console.log(arr)
      return arr.join(' ')
    }
  }
}
</script>
<style scoped>
</style>


