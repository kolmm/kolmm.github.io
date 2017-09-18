<template lang="html">
  <div class="depart-header">
    <nav class="nav">
      <router-link to="/">
      <a class="nav-link active" href="#">Главная</a>
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
var departments = [
  {id: 1, name: 'Бухалтерия', desc: 'Штатно-структурное подразделение хозяйствующего субъекта, предназначенное для аккумулирования данных о его имуществе и обязательствах. Бухгалтерия является источником документально обоснованной и структурированной экономической информации, необходимой для принятия управленческих решений в целях обеспечения эффективного хозяйствования'},
  {id: 2, name: 'Отдел технического контроля', desc: 'Самостоятельное подразделение производственной организации (предприятия), которое осуществляет независимый контроль соответствия продукции установленным требованиям и гарантирует это соответствие потребителю. Отдел технического контроля подчиняется высшему руководству организации (предприятия), что обеспечивает независимость контроля.'},
  {id: 3, name: 'Отдел кадров', desc: 'Совокупность специализированных подразделений в структуре предприятия (с занятыми в них должностными лицами — руководителями, специалистами, техническим персоналом), призванных управлять персоналом предприятия.'}
]
var serialObj = JSON.stringify(departments)
window.localStorage.setItem('departments', serialObj)
export default {
  data () {
    return {
      departments: [
        {id: 1, name: 'Бухалтерия', desc: 'Штатно-структурное подразделение хозяйствующего субъекта, предназначенное для аккумулирования данных о его имуществе и обязательствах. Бухгалтерия является источником документально обоснованной и структурированной экономической информации, необходимой для принятия управленческих решений в целях обеспечения эффективного хозяйствования'},
        {id: 2, name: 'Отдел технического контроля', desc: 'Самостоятельное подразделение производственной организации (предприятия), которое осуществляет независимый контроль соответствия продукции установленным требованиям и гарантирует это соответствие потребителю. Отдел технического контроля подчиняется высшему руководству организации (предприятия), что обеспечивает независимость контроля.'},
        {id: 3, name: 'Отдел кадров', desc: 'Совокупность специализированных подразделений в структуре предприятия (с занятыми в них должностными лицами — руководителями, специалистами, техническим персоналом), призванных управлять персоналом предприятия.'}
      ]
    }
  }
}
</script>
<style>
@font-face {
  font-family: "RobotoMono-Thin";
  src: url(/src/assets/fonts/RobotoMono-Thin.ttf); }
body {
  overflow-x: hidden; }

header {
  min-height: 100vh;
  background-image: url("../assets/112.jpg");
  background-repeat: no-repeat;
  background-size: cover; }

.about-image {
  background-image: url("../assets/about2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center; }

.caption {
  font-family: "RobotoMono-Thin";
  font-size: 36px;
  color: #000;
  padding-left: 50px; }

.main-text {
  font-family: "RobotoMono-Light";
  padding-left: 50px; }

.main-text a {
  color: #959595;
  text-decoration: none;
  margin-left: 0; }

.deport-btn {
  margin-top: 20px; }

.deport-btn:hover {
  border: 1px solid #fff;
  color: #fff;
  background-color: #959595; }

.contact-form textarea,
.contact-form input {
  background-color: #040302;
  color: #fff;
  border: 1px solid #959595;
  border-radius: 4px; }

.contact-form input::-webkit-input-placeholder {
  color: #959595; }

.contact-form input::-moz-placeholder {
  color: #959595; }

.contact-form input:-moz-placeholder {
  color: #959595; }

.contact-form input:-ms-input-placeholder {
  color: #959595; }

.depart-header {
  min-height: 100vh;
  background-image: url("../assets/departments.jpg");
  background-repeat: no-repeat;
  background-size: cover; }

.depart-text {
  font-family: "RobotoMono-Regular";
  color: #000;
  margin-left: 50px; }

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
