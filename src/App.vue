<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h2>Http</h2>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model="user.username">
        </div>
        <div class="form-group">
          <label>email</label>
          <input type="text" class="form-control" v-model="user.email">
        </div>
        <button class="btn btn-secondary" @click="submit">Submit</button>
        <br><br>
        <button class="btn btn-success" @click="getData">Submit</button>
        <ul class="list-group">
          <!-- <li class="list-group-item" v-bind:key="item" v-for="item  in users">
            {{ item.id }} / {{ item.title }}
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      user:{
        username: '',
        email: ''
      },
      users: []
    }
  },
  methods:{
      submit(){
        this.$http.post('1', this.user)
                .then(res =>{
                  console.log(res)
                }, err =>{
                  console.log(err)
                });
      },
      getData(){
        this.$http.get('1')
            .then(res => {
              return res.json();
            })
            .then(data => {
              const resultArray = [];
              for(let k in data){
                resultArray.push(data[k]);
              }
              this.users = resultArray;
              console.log(this.users)
            });
      }
  }

}
</script>

<style>

</style>
