export default {
    mutations:{
      TryDB(state){

        if(localStorage.getItem("LocalDB")!=null){
          state.table = [];
          JSON.parse(localStorage.getItem("LocalDB")).forEach(task => {
            if(!task.done&&state.statusId==-2){

              state.table.push(task);
            }else if(state.statusId==-1){
              state.table.push(task);
            }
          })

          state.statusId = 1;
        }else{
          state.status = "Список дел пуст (Вы можете добавить задание кликнув на плюсик).";
          state.table = []
          state.statusId = 0;
        }
      },
      EditDB(state,task){
        var db = [];
        if(task!=null&&!task.done){
          state.table.push(task);

        }
        state.table.forEach(task=>{
            db.push(task);
        })
        if(localStorage.getItem("LocalDB")!=null)
          JSON.parse(localStorage.getItem("LocalDB")).forEach(task=>{
            if(task.done && !db.find(el=>el.id == task.id )){
              db.push(task)
            }
          })
        if(state.statusId==-1){
          state.table = db;
          state.statusId = -3;
        }else if(state.statusId==3){
          var dbu = [];
          state.table.forEach(task=>{
            if(!task.done){
              dbu.push(task)
            }
          })
          state.table = dbu;
          state.statusId = 1;
        }



        localStorage.setItem('LocalDB',JSON.stringify(db));

      },
      ChangeStatus(state,status){
        state.status = status.status;
        state.statusId = status.statusId;

      }

    },
    actions:{
      LoadDB(context){
        context.commit('TryDB');
      },
      AddToDB(context,isTask){
        if(isTask){
          context.commit('ChangeStatus',{status:'Задание добавлено.',statusId:1})
          var task = {
            id:Math.random(),
            title: document.getElementById('title-task').value,
            descr:document.getElementById('desc-task').value,
            expires:document.getElementById('expires-task').value,
            done: false
          }
          context.commit('EditDB',task)
        }else{
          context.commit('ChangeStatus',{status:'Редактирование списка заданий.',statusId:2})
        }
      },
      UpdateDB(context){

        context.commit('EditDB',null);
      },
      AllTasks(context,statusId){
        context.commit('ChangeStatus',{status:'Вывод всех задний.',statusId:statusId})
        context.commit('EditDB');
      }

    },
    state:{
        table:undefined,
        status:undefined,
        statusId:-2

    },
    getters:{
      Get_table(state){
        return state.table;
      },
      Get_status(state){
        return state.status;
      },
      Get_status_Id(state){
        return state.statusId;
      }
    }
}
