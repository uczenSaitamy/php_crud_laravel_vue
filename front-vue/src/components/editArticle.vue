<template>
  <div class="md-card md-layout">
    <div class="md-layout-item md-size-20"></div>

    <div class="md-layout-item">
      <span class="md-display-2">Edit an article</span>
      <md-field>
        <label>Title</label>
        <md-input v-model="article.title"></md-input>
        <span class="md-helper-text">Edit title here</span>
      </md-field>

      <md-field>
        <label>Text</label>
        <md-textarea v-model="article.body" md-autogrow></md-textarea>
        <span class="md-helper-text">Edit body here</span>
      </md-field>
      <div class="md-alignment-center-right">
        <md-button @click="saveArticle()" class="md-dense md-primary">Edit</md-button>
      </div>

    </div>
    <div class="md-layout-item md-size-20"></div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        article: {
          title:'',
          body:''
        }
      }
    },
    methods: {
      saveArticle() {
        this.$http.put('http://127.0.0.1:8000/api/articles/'+this.article.id, this.article)
          .then(()=>{
            this.$router.push({path: '/articles'});
          });
      },
      getArticle(id){
        this.$http.get('http://127.0.0.1:8000/api/articles/'+id)
          .then(response => response.json())
          .then(result => this.article = result)
      }
    },
    created: function () {
      this.getArticle(this.$route.params.id);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
