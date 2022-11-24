/* eslint-disable */
<template>
  <h1>Страница с постами</h1>
  <div class="app_btns">
    <my-button
        @click="showDialog"

    >Создать пост
    </my-button>
    <my-select
        v-model="selectedSort"
        :options="sortOptions"
    />
  </div>

  <my-dialog v-model:show="dialogVisible">
    <post-form @create="createPost"/>
  </my-dialog>
  <div class="app">
    <post-list
        :posts="posts"
        @remove="removePost"
        v-if="!isPostLoading"
    />
    <div v-else>Идёт загрузка...</div>
  </div>

</template>

<script>
import postList from "@/сomponents/PostList";
import postForm from "@/сomponents/PostForm";

import axios from 'axios';

export default { // в скрипте по дефолту экспортируется объект
  components: {
    postList, postForm,
  },
  data() {   //поле
    return {
      posts: [//модель
      ],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'},
        {value: 'id', name: 'По ID'}
      ]
    }
  },
  methods: { //поле
    createPost(post) { //брал экземпляр из текущей модели
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        this.isPostLoading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        this.posts = response.data;
        this.isPostLoading = false
      } catch (e) {
        alert("Error")
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  watch: {
    selectedSort(newValue) {
      console.log(newValue)
    },
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

.app_btns {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}

</style>