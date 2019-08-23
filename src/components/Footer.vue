<template>
  <footer>
    <b-container>
      <b-row>
        <b-col cols="6">
          <div>
            {{ $about.name }}
            <p>{{ $about.info }}</p>
          </div>
        </b-col>
        <b-col>
          {{ $contacts.name }}
          <p>{{ $contacts.main.address }}</p>
          <p></p>
          <p>{{ $contacts.main.email }}</p>
        </b-col>
        <b-col>
          {{ $contacts.social.subhead }}
        </b-col>
      </b-row>
      <hr>
      <b-row>
        <b-col>{{ $site_info.rights }}</b-col>
        <b-col>{{ $site_info.attention }}</b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: 'footer',
  resource: 'Footer',
  data () {
    return {
    }
  }
}
</script>
