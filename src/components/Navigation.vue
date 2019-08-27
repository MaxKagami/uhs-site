<template>
  <div>
    <b-navbar toggleable="sm" type="light" variant="light">
     <b-container>
      <b-navbar-brand to="/"><img class="img-fluid" :src="logo"/></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"/>
      <div class="flex-column">
        <b-navbar-nav class="nav-upper">
          <b-nav-item :href="'callto:' + $contacts.main.telephone_raw">{{ $contacts.main.telephone }}</b-nav-item>
          <b-nav-item :href="'mailto:' + $contacts.main.email">{{ $contacts.main.email }}</b-nav-item>
        </b-navbar-nav>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mr-auto nav-lower">
            <b-nav-item to="/about">{{ $about.name }}</b-nav-item>
            <b-nav-item to="/services">{{ $services.main.name }}</b-nav-item>
            <b-nav-item to="/documents">{{ $documents.name }}</b-nav-item>
            <b-nav-item to="/regions">{{ $regions.name }}</b-nav-item>
            <b-nav-item to="/news">{{ $news.name }}</b-nav-item>
            <b-nav-item to="/answers">{{ $answers.name }}</b-nav-item>
            <b-nav-item to="/vacancies">{{ $vacancies.name }}</b-nav-item>
            <b-nav-item to="/contacts">{{ $contacts.name }}</b-nav-item>
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
  data: () => ({
    logo: require('../assets/logo.png')
  })
}
</script>

<style>
.navbar {
  -webkit-box-shadow: 0 8px 6px -6px #999;
  -moz-box-shadow: 0 8px 6px -6px #999;
  box-shadow: 0 4px 20px -6px black;
}
.nav-upper a {
  font-weight: bold;
  font-size: 22px;
}
.nav-lower a {
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
}
</style>
