<template>
  <footer>
    <b-container class="front">
      <b-row>
        <b-col cols="6">
          <div>
            {{ $constants.about.name }}
            <p>{{ $constants.about.info }}</p>
          </div>
        </b-col>
        <b-col>
          {{ $constants.contacts.name }}
          <p>{{ $constants.contact_info.address }}</p>
          <p></p>
          <p>{{ $constants.contact_info.email }}</p>
        </b-col>
        <b-col>
          {{ $constants.contacts.social.subhead }}
        </b-col>
      </b-row>
      <hr>
      <b-row>
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
