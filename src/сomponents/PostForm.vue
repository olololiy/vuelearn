<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <my-input
        v-model="post.title"
        type="text"
        placeholder="Название"/>

    <my-input
        v-model="post.body"
        type="text"
        placeholder="описание"/>
    <my-button
        style="align-self: flex-end;   margin-top: 15px;"
        class="btn"
        @click="createPost"
    >
      Создать
    </my-button>
  </form>
</template>

<script>

export default {
  data() { //поле
    return {
      post: {//модел. v-model="post.title"
        title: '',
        body: '',
      },
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
        body: "",
        title: ""
      }
    },
  },
  watch: {
    post: {
      handler(){

      }
    }
  }
}

</script>

<style scoped>

form {
  display: flex;
  flex-direction: column;
}


</style>