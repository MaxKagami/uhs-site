<template>
  <div>
    <b-navbar toggleable="sm" type="light" variant="light">
     <b-container>
      <b-navbar-brand to="/"><img class="img-fluid" :src="logo"/></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"/>
      <div class="flex-column">
        <b-navbar-nav>
          <b-nav-item>{{ telephone }}</b-nav-item>
          <b-nav-item>{{ email }}</b-nav-item>
        </b-navbar-nav>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mr-auto">
            <b-nav-item to="/about">О компании</b-nav-item>
            <b-nav-item-dropdown  to="/services" text="Услуги" right>
              <b-dropdown-item>Для физических лиц</b-dropdown-item>
              <b-dropdown-item>Для юридических лиц и ИП</b-dropdown-item>
              <b-dropdown-item>Для управляющих компаний и ТСЖ</b-dropdown-item>
            </b-nav-item-dropdown >
            <b-nav-item to="/documents">Документы</b-nav-item>
            <b-nav-item>Районы</b-nav-item>
            <b-nav-item to="/news">Новости</b-nav-item>
            <b-nav-item to="/answers">Вопрос-ответ</b-nav-item>
            <b-nav-item to="/vacancies">Вакансии</b-nav-item>
            <b-nav-item to="/contacts">Контакты</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
     </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  resource: 'Navigation',
  data () {
    return {
      logo: require('../assets/logo.png'),
      telephone: '8 800 350 39 62',
      email: 'mail@regop-komi.ru'
    }
  }
}
</script>

<style>
  .navbar {
    -webkit-box-shadow: 0 8px 6px -6px #999;
    -moz-box-shadow: 0 8px 6px -6px #999;
    box-shadow: 0 8px 6px -6px #999;
  }
</style>
