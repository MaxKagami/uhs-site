<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ data }}</p>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'news-post',
  resource: 'NewsPost',
  props: ['id', 'title', 'text', 'data', 'image']
}
</script>
