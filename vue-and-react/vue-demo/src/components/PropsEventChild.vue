<template>
  <div class="child">
    <input v-model="content" placeholder="请输入" />
    <button @click="submit">提交</button>
    <!-- <descendant></descendant> -->
  </div>
</template>

<script>
// import Descendant from './Descendant'
export default {
  // components: { Descendant },

  props: ['last'],

  data () {
    return {
      content: ''
    }
  },

  methods: {
    submit () {
      const time = new Date().getTime()
      const { last } = this
      if (last && (time - last.time < 10 * 1000)) {
        alert('你发言太快了')
        return
      }
      this.$emit('add', { content: this.content, time })
      this.content = ''
    }
  }
}
</script>
