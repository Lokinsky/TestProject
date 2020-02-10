<template>
  <div class="main-container">
    <h1>To-do-app</h1>
    <div class="status-strip">
      {{this.Get_status}}
    </div>
    <div class="list-to-do" v-if="this.Get_table != undefined">
      <Task v-for="(task,id) in this.Get_table"  :id='"task-"+id' :task="task"></Task>

    </div>

    <a v-if="this.Get_status_Id<=1" font-size="32" v-on:click="AddToDB()">&#10133;</a>
    <AddTask class='AddTask' v-if="this.Get_status_Id==2"></AddTask>
    <button class="AllTask" v-if="this.Get_status_Id>-1" v-on:click="AllTasks(-1)">Показать все задания</button>
    <button class="AllTask" v-if="this.Get_status_Id==-3" v-on:click="AllTasks(3)">Убрать выполненные задания</button>


  </div>
</template>

<script>


import Task from "./task.vue"
import AddTask from "./AddTask.vue"
import Vuex from "vuex";


export default {
    components:{
      Task,
      AddTask
    },
    computed:Vuex.mapGetters(['Get_table','Get_status','Get_status_Id']),
    created(){

    },
    methods:{
      ...Vuex.mapActions(['LoadDB','AddToDB','UpdateDB','AllTasks'])
    },
    mounted(){
      this.LoadDB();
    },
    updated(){


    }
}
</script>
