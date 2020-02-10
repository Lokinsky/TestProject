<template>
  <div id="1" :class='"task-"+task.done' >

    <h3><input class='title-task-list' type="text" v-model="task.title"></h3>
      <div id="desc-1" class="description-task-list">
        <strong>Описание:</strong>
        <textarea cols="30" rows="5" type="text" v-model="task.descr"></textarea>
      </div>
      <div class="expires-task-list">
        <h4>Срок выполнения</h4>
        <strong>До: </strong>
        <input type="date" v-model="task.expires">
      </div>
      <div class="status-task-list">Статус<input v-model="task.done"  type="checkbox" :on="UpdateDB()"></div>

  </div>
</template>
<script>

import Vuex from "vuex";



export default {
  props: ['task'],
  computed:{},
  created(){
  },
  methods:{
    ...Vuex.mapActions(['UpdateDB'])
  },
  mounted(){
  },
  updated(){

  }
}
</script>
