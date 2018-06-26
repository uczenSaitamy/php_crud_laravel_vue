<template>
  <div>
    <md-table v-model="articles" md-sort="name" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Articles</h1>
        <router-link to="articles/add">
          <md-button class="md-fab md-mini md-primary">
            <md-icon>add</md-icon>
          </md-button>
        </router-link>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-numeric md-sort-by="id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Title" md-sort-by="title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Body">{{ item.body }}</md-table-cell>
        <md-table-cell md-label="Edit">
          <router-link v-bind:to="'articles/'+item.id+'/edit'">
            <md-button class="md-raised md-primary">Edit</md-button>
          </router-link>
        </md-table-cell>
        <md-table-cell md-label="Delete">
          <md-button @click="deleteArticle(item.id)" class="md-raised md-accent">Delete</md-button>
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
      },
      deleteArticle(id) {
        this.$http.delete('http://127.0.0.1:8000/api/articles/'+id)
          .then(()=>{
            this.fetchArticles();
          });
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
