<template>
  <div>
    <b-navbar toggleable="sm" type="light" variant="light">
     <b-container>
      <b-navbar-brand to="/"><img class="img-fluid" :src="require('@/assets/logo.png')"/></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"/>
      <div class="flex-column">
        <b-navbar-nav class="nav-upper">
          <b-nav-item :href="'callto:' + $constants.contact_info.telephone_merged"><v-icon name="phone-alt"/> {{ $constants.contact_info.telephone }}</b-nav-item>
          <b-nav-item :href="'mailto:' + $constants.contact_info.email"><v-icon name="envelope"/> {{ $constants.contact_info.email }}</b-nav-item>
        </b-navbar-nav>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mr-auto nav-lower">
            <b-nav-item to="/about">{{ $constants.about.name }}</b-nav-item>
            <b-nav-item to="/services">{{ $constants.services.name }}</b-nav-item>
            <b-nav-item to="/documents">{{ $constants.documents.name }}</b-nav-item>
            <b-nav-item to="/regions">{{ $constants.regions.name }}</b-nav-item>
            <b-nav-item to="/news">{{ $constants.news.name }}</b-nav-item>
            <b-nav-item to="/answers">{{ $constants.answers.name }}</b-nav-item>
            <b-nav-item to="/vacancies">{{ $constants.vacancies.name }}</b-nav-item>
            <b-nav-item to="/contacts">{{ $constants.contacts.name }}</b-nav-item>
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
  resource: 'Navigation'
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
  color: rgb(29,78,154)!important;
}
.navbar-nav li a:hover {
  color: rgb(0,151,70)!important;
  transition: .4s ease;
}
</style>
