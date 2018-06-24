<template>
  <div class="md-layout">
    <md-table v-model="articles" md-sort="name" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Articles</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-numeric md-sort-by="id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Title" md-sort-by="title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Body">{{ item.body }}</md-table-cell>
        <md-table-cell md-label="Edit">
          <md-button class="md-raised md-primary">Edit</md-button>
        </md-table-cell>
        <md-table-cell md-label="Delete">
          <md-button class="md-raised md-accent">Delete</md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
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
          .then(result => this.articles = result)
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
