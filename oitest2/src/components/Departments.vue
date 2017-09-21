<template lang="html">
  <div class="depart-header">
    <nav class="nav">
      <router-link class="nav-link" to="/">
        Главная
      </router-link>
    </nav>
    <div id="exampleAccordion" data-children=".item">
      <div id="depart-desc">
        <div class="item" v-for="department in departments">
          <a class="caption" data-toggle="collapse" data-parent="#exampleAccordion" v-bind:href="'#exampleAccordion' + department.id" aria-expanded="true" v-bind:aria-controls="'exampleAccordion' + department.id">
            {{ department.name }}
          </a>
          <div v-bind:id="'exampleAccordion' + department.id" class="collapse" role="tabpanel">
            <p class="mb-3">
              <div class="row">
                <div class="depart-text col-xl-6">
                  <div >
                    {{ department.desc }}
                  </div> <br><br>
                  <router-link v-bind:to="'/departments/' + department.id + '/employees'">
                    <button type="button" class="btn btn-outline-dark">
                      Подробнее
                    </button>
                  </router-link>
                </div>
                <div class="account-image col-xl-6">
                </div>
              </div>
            </p>
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
      departments: JSON.parse(window.localStorage.getItem('departments'))
    }
  }
}
</script>
<style>
.depart-header {
  min-height: 100vh;
  background-image: url("../assets/departments.jpg");
  background-repeat: no-repeat;
  background-size: cover; }

.depart-text {
  font-family: "RobotoMono-Regular";
  color: #000;
  margin-left: 50px; }

.caption {
  font-family: "RobotoMono-Thin";
  font-size: 36px;
  color: #000;
  padding-left: 50px; }

.deport-btn {
  margin-top: 20px; }
</style>
