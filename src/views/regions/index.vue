<template>
  <div>
    <b-jumbotron class="default-banner">
      <b-container>
        <h1><span>{{ $constants.regions.name }}</span></h1>
      </b-container>
    </b-jumbotron>
    <div class="box shdw">
      <b-container>
        <h2>{{ $contents.regions.title }}</h2>
        <p>{{ $contents.regions.text }}</p>
        <b-row>
          <b-col>
            <ul class="region-list">
              <li v-for="region in regions" :key="region">
                <v-icon name="caret-right"></v-icon>
                {{ region.name }}
              </li>
            </ul>
          </b-col>
          <b-col>
            <RegionsNav/>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'regions',
  resource: 'Regions',
  data: () => ({
    regions: [],
    isLoading: false
  }),
  mounted () {
    this.getRegions(this.$configs.regions.regions_resource)
  },
  methods: {
    async getRegions (url) {
      this.isLoading = true
      const { data } = await this.$axios(url)
      this.isLoading = false
      this.regions = data
    }
  }
}
</script>

<style lang="scss">
  @import "styles";
</style>
