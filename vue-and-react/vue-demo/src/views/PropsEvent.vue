<template>
  <div class="parent">
   <div v-for="(msg, index) in msgs" :key="index">
      {{ msg.content }}
    </div>
    <child :last="last" @add="add"></child>
  </div>
</template>

<script>
import Child from '@/components/PropsEventChild'

export default {
  components: {
    Child
  },

  data () {
    return {
      name: 'parent',
      msgs: []
    }
  },

  computed: {
    last () {
      const { msgs } = this
      return msgs.length ? msgs[msgs.length - 1] : undefined
    }
  },

  methods: {
    add (msg) {
      this.msgs.push(msg)
    }
  }
}
</script>
