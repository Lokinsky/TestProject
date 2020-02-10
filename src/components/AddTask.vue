<template>
  <div id="Add-task-panel" class="adding-panel">

      <h3>Добавление новой задачи</h3>
        <div class="title-add">
          <h4>Заголовок</h4>
          <input id='title-task' type='text' required>
        </div>
        <div id="desc-1" class="description-add">
          <h4>Описание:</h4>
          <textarea id='desc-task' cols="30" rows="5" required></textarea>
        </div>
        <div class='expires-add'>
          <h4>Срок выполнения</h4>
          <strong>
            До:
          </strong>
          <input id="expires-task" type='date' required>
        </div>
        <button type='submit' v-on:click="AddToDB(true)" >Добавить</button>

  </div>
</template>

<script>

import Vuex from "vuex";

export default {
  props: [],
  computed:{},
  created(){
  },
  methods:{
    ...Vuex.mapActions(['AddToDB'])
  },
  mounted(){
  },
  updated(){

  }
}
</script>
