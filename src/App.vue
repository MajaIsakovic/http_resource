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
      }
    }
  },
  methods:{
      submit(){
        this.$http.post('https://jsonplaceholder.typicode.com/posts', this.user)
                .then(res =>{
                  console.log(res)
                }, err =>{
                  console.log(err)
                });
      }
  }

}
</script>

<style>

</style>
