<template>
  <div>
    <b-navbar toggleable="sm" type="light" variant="light">
     <b-container>
      <b-navbar-brand to="/"><img class="img-fluid" :src="require('./logos/logo.png')"/></b-navbar-brand>
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

<style lang="scss">
  @import "styles";
</style>
