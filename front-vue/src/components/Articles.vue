<template>
  <div class="Articles">

  </div>
</template>

<script>
  export default {
    data() {
      return {
        articles: []
      }
    },
    methods: {
      fetchArticles() {
        this.$http.get('http://127.0.0.1:8000/api/articles')
          .then(response => response.json())
          .then(result => console.log = result)
      }
    },
    created: function () {
      this.fetchArticles();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
