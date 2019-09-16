<template>
  <b-button block
            href="#"
            v-b-toggle.accordion="'accordion-' + id"
            variant="success">
    <b-row>
      <b-col cols="1" class="vertical-center">
        <v-icon class="when-opened" name="chevron-up"/>
        <v-icon class="when-closed" name="chevron-down"/>
      </b-col>
      <b-col cols="10" class="text-center">{{ title }}</b-col>
      <b-col cols="1" class="vertical-center">
        <v-icon class="when-opened" name="chevron-up"/>
        <v-icon class="when-closed" name="chevron-down"/>
      </b-col>
    </b-row>
  </b-button>
</template>

<script>
export default {
  name: 'button-form',
  resource: 'ButtonForm',
  props: [ 'id', 'title' ]
}
</script>
