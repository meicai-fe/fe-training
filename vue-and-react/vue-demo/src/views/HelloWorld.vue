<template>
  <div class="hello">
    <div v-for="(item, index) in list" :key="index">
      {{ item.title }}
    </div>
    <input v-model="title" />
    <button @click="submit">提交</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        { title: 'first' },
        { title: 'second' }
      ],
      title: ''
    }
  },
  methods: {
    submit () {
      this.list.push({ title: this.title })
      this.title = ''
    }
  }
}
</script>
