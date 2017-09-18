<template lang="html">
  <div class="emplo-header">
    <nav class="nav">
      <router-link to="/">
        <a class="nav-link active" href="#">Главная</a>
      </router-link>
      <router-link to="/departments">
        <a class="nav-link" href="#">Отделы</a>
      </router-link>
    </nav>
    <div class="emplo-caption">Бухгалтерия</div>
    <div class="emplo-man">В отделе работает 6 человек</div>
    <div class="list-group">
      <div class="container">
        <div id="emplo" class="row justify-content-center">
          <div class="col-xl-6">
            <div class="emplo-item" v-for="employee in employees">
              <router-link v-bind:to="'/employees/' + employees.id">
                <a href="" class="list-group-item list-group-item-action list-group-item-light">
                  {{employee.fullname}}
                </a>
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
  data () {
    return {
      employees: [
        {id: 1, fullname: 'Максим Колмогоров'},
        {id: 2, fullname: 'Максим asdasd'},
        {id: 3, fullname: 'asdasd Колмогоров'},
        {id: 4, fullname: 'asdasd Колмоssssров'}
      ]
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

.area {
  background-color: rgba(255, 255, 255, 0.9);
  width: 600px;
  height: 300px;
  margin-top: 15%;
  border-radius: 4px;
  box-shadow: 11px 14px 96px -23px rgba(0, 0, 0, 0.5); }

.id-image {
  background-image: url("../assets/face.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 45px;
  margin-left: 20px;
  width: 200px;
  height: 200px; }

.id-main-text {
  font-family: "RobotoMono-Thin";
  color: #000;
  text-align: left;
  margin-top: 25px; }

.id-main-text ul {
  list-style: none; }

.id-main-text ul li {
  margin-top: 30px; }
</style>
