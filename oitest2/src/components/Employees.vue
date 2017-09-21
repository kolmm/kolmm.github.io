<template lang="html">
  <div class="emplo-header">
    <nav class="nav">
      <router-link class="nav-link" to="/">
        Главная
      </router-link>
      <router-link class="nav-link" to="/departments">
        Отделы
      </router-link>
    </nav>
    <div class="emplo-caption">{{departments.name}}</div>
    <div class="emplo-main">В отделе работает {{persons.length}} человека</div>
    <div class="list-group">
      <div class="container">
        <div id="emplo" class="row justify-content-center">
          <div class="col-xl-6">
            <div class="emplo-item" v-for="person in persons">
              <router-link class="list-group-item list-group-item-action list-group-item-light" v-bind:to="'/employers/' + person.id">
                {{person.lname}} {{person.fname}}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {id: Number},
  data () {
    var id = this.id
    return {
      departments: JSON.parse(window.localStorage.getItem('departments')).filter(function (x) { return x.id == id})[0],
      persons: JSON.parse(window.localStorage.getItem('person')).filter(function (x) {return x.departmentsId == id})
    }
  }
}
</script>
<style>
.emplo-header {
  min-height: 100vh;
  background-image: url("../assets/account.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center; }

.emplo-caption {
  font-family: "RobotoMono-Thin";
  font-size: 50px;
  color: #000;
  padding-top: 10%; }
</style>
