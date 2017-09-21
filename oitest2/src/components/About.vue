<template lang="html">
  <header>
    <div id="exampleAccordion" data-children=".item">
      <div class="item">
        <a class="caption" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion1" aria-expanded="true" aria-controls="exampleAccordion1">
          О нас
        </a>
        <div id="exampleAccordion1" class="collapse" role="tabpanel">
          <p class="mb-3">
              <div class="row">
                <div class="col-xl-6">
                  <div class="main-text">
                    Основана 10 декабря 1997 года.
                    За короткий период времени компания заняла
                    одно из передовых мест на рынке<br><br>

                    Базовая специализация компании — строительство и
                    реализация жилья улучшенного типа в
                    монолитно-кирпичном исполнении и по технологии
                    объемно-блочного домостроения.
                    Важное направление — организация работ на социально
                    значимых объектах города и области. <br><br>

                    Многолетний опыт работы, отслеживание передовых
                    направлений в строительстве, постоянное изучение
                    потребностей и предпочтений покупателей – позволяет
                    компании идти в ногу со временем и занимать
                    лидирующие позиции в данной сфере. <br><br>
                  </div>
                </div>
                <div class="about-image col-xl-6"></div>
              </div>
          </p>
        </div>
      </div>
      <div class="item">
        <a class="caption" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion2" aria-expanded="false" aria-controls="exampleAccordion2">
          Отделы
        </a>
        <div id="exampleAccordion2" class="collapse" role="tabpanel">
          <p class="mb-3">
            <div class="row">
              <div class="col-xl-6">
                <div class="main-text">
                  <span>В структуре нашей организации имеются неслколько
                    отделов.</span> <br>
                  <router-link to="/departments">
                    <button type="button" class="deport-btn btn btn-outline-dark">Подробнее</button>
                  </router-link>
                </div>
              </div>
            </div>
          </p>
        </div>
      </div>
      <div class="item">
        <a class="caption" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion4" aria-expanded="false" aria-controls="exampleAccordion4">
          Контакты
        </a>
        <div id="exampleAccordion4" class="collapse" role="tabpanel">
          <p class="mb-3">
            <div class="col-xl-4">
              <form class="contact-form">
                <input type="text" placeholder="Имя"><br>
                <input type="text" placeholder="Email"><br>
                <textarea placeholder="Ваше сообщение"></textarea><br>
                <button type="button" class="deport-btn btn btn-outline-dark float-right">Отправить</button>
              </form>
            </div>
            <div class="col-xl-6">

            </div>
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
}
</script>

<style>

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

.deport-btn {
  margin-top: 20px; }

.contact-form {
  padding-left: 40px;
}

.contact-form textarea,
.contact-form input {
  margin-top: 25px;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  resize: none;
  width: 100%;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  font-family: "RobotoMono-Light";
  font-size: 14px;
  padding-left: 10px;
  color: #000;
}
</style>
