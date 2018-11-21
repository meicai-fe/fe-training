<template>
  <div>
    共有 {{ count }} 个事项
    <div v-for="item in todoList" :key="item.time.getTime()">
      {{ item.time }} {{ item.content }}
    </div>
    <input v-model="content">
    <button @click='add'>新增</button>
    <button @click='addCommit'>commit 新增</button>
    <!--{{ todayItems }}-->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      content: ''
    }
  },

  computed: {
    todoList () {
      return this.$store.state.todoList
    },

    count () {
      return this.$store.getters.todoCount
    },

    ...mapState({
      todayItems: state => state.todoList.filter(todo => {
        const todoTime = todo.time.getTime()
        const today = new Date()
        today.setHours(0)
        today.setMinutes(0)
        today.setSeconds(0)
        return todoTime - today.getTime() > 0
      })
    })
  },

  methods: {
    add () {
      this.$store.dispatch('addTodo', { content: this.content })
    },

    addCommit () {
      this.$store.commit('addTodo', { content: this.content })
    }
  }
}
</script>
