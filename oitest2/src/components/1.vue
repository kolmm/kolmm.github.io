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
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-8 area">
          <div class="id-image rounded float-left"></div>
          <div class="id-main-text float-left">
            <ul id="v-for-object">
              <li v-for="(value, key) in person">
                {{ key }}: {{ value }}
              </li>
            </ul>
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
      person: JSON.parse(window.localStorage.getItem('person'))
    }
  }
}
</script>

<style lang="css">
.emplo-header {
  min-height: 100vh;
  background-image: url("../assets/account.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center; }

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
