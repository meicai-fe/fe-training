import Vue from 'vue'
import Vuex from 'vuex'

import _ from 'lodash'
import * as types from './types'

Vue.use(Vuex)

const setMonth = (year, month) => {
  const map = []
  const days = 35 // 显示35天
  const firstDay = new Date(year, month - 1, 1) // 当月第一天

  _.times(days, index => {
    if (index % 7 === 0) map.push([])
    const weekIndex = Math.floor(index / 7)
    map[weekIndex].push({
      time: new Date(year, month - 1, index + 2 - firstDay.getDay()),
      events: [],
      edit: false
    })
  })
  return map
}

const store = new Vuex.Store({
  state: {
    todoList: [{ time: new Date(), content: '初始数据' }],
    // calendar 数据
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    weeks: setMonth(new Date().getFullYear(), new Date().getMonth() + 1),

    drag: {
      start: { weekIndex: -1, dayIndex: -1, eventIndex: -1 },
      over: { weekIndex: -1, dayIndex: -1 }
    }
  },

  actions: {
    addTodo ({ commit }, data) {
      commit('addTodo', data)
    }
  },

  mutations: {
    addTodo (state, data) {
      state.todoList.push({ time: new Date(), content: data.content })
    },

    [types.ADD_CAL_EVENT] (state, { event, weekIndex, dayIndex }) {
      state.weeks[weekIndex][dayIndex].events.push(event)
    },

    [types.UPDATE_CAL_EVENT] (state, { weekIndex, dayIndex, eventIndex, event }) {
      const origin = state.weeks[weekIndex][dayIndex].events[eventIndex]
      state.weeks[weekIndex][dayIndex].events.splice(eventIndex, 1, Object.assign({}, origin, event))
    },

    [types.DELETE_EVENT] (state, { weekIndex, dayIndex, eventIndex }) {
      state.weeks[weekIndex][dayIndex].events.splice(eventIndex, 1)
    },

    [types.NEXT_MONTH] (state) {
      const date = new Date(state.year, state.month, 1)
      state.year = date.getFullYear()
      state.month = date.getMonth() + 1
      state.weeks = setMonth(state.year, state.month)
    },

    [types.PREV_MONTH] (state) {
      const date = new Date(state.year, state.month - 2, 1)
      state.year = date.getFullYear()
      state.month = date.getMonth() + 1
      state.weeks = setMonth(state.year, state.month)
    },

    [types.START_EVENT_DRAG] (state, { weekIndex, dayIndex, eventIndex }) {
      state.drag.start = { weekIndex, dayIndex, eventIndex }
    },

    [types.DRAG_OVER_DAY] (state, { weekIndex, dayIndex }) {
      state.drag.over = { weekIndex, dayIndex }
    },

    [types.DROP_EVENT] (state) {
      const { start, over } = state.drag
      const event = state.weeks[start.weekIndex][start.dayIndex].events.splice(start.eventIndex, 1)[0]
      state.weeks[over.weekIndex][over.dayIndex].events.push(event)
    }
  },

  getters: {
    todoCount: state => state.todoList.length,
    date: state => { return { year: state.year, month: state.month } },
    weeks: state => state.weeks
  }
})

export default store
