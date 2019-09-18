<template>
  <footer>
    <b-container class="front">
      <b-row class="info">
        <b-col cols="6">
          <h6>{{ $constants.about.name }}</h6>
          <p>{{ $constants.about.info }}</p>
        </b-col>
        <b-col>
          <h6>{{ $constants.contacts.name }}</h6>
          <p>{{ $constants.contact_info.address }}</p>
          <p></p>
          <p>{{ $constants.contact_info.email }}</p>
        </b-col>
        <b-col>
          <h6>{{ $constants.contacts.social.subhead }}</h6>
        </b-col>
      </b-row>
      <b-row class="copyright">
        <b-col>{{ $constants.site_info.rights }}</b-col>
        <b-col>{{ $constants.site_info.attention }}</b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: 'footer',
  resource: 'Footer'
}
</script>

<style lang="scss">
  @import "styles";
</style>
