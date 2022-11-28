/* eslint-disable */
<template>
  <h1>Страница с постами</h1>
  <my-input
      placeholder="Поиск..."
      v-model="searchQuery"
  >
  </my-input>
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
        :posts="sortedAndSearchPosts"
        @remove="removePost"
        v-if="!isPostLoading"
    />
    <div v-else>Идёт загрузка...</div>
    <div ref="observer" class="observer"></div>
<!--    <div class="page__wrapper">-->
<!--      <div v-for="pageNumber in totalPages"-->
<!--           :key="pageNumber"-->
<!--           class="page"-->
<!--           :class="{-->
<!--        'current-page': page === pageNumber-->

<!--      }"-->
<!--           @click="changePage(pageNumber    )"-->
<!--      >{{pageNumber}}</div>-->
<!--    </div>-->
  </div>

</template>

<script>
import postList from "@/сomponents/PostList";
import postForm from "@/сomponents/PostForm";

import axios from 'axios';

export default { // в скрипте по дефолту экспортируется объект
  components: {
    postList, postForm
  },
  data() {   //поле
    return {
      posts: [//модель
      ],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
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
    // changePage(pageNumber){
    //   this.page=pageNumber
    //   this.fetchPosts()
    // },
    async fetchPosts() {
      try {
        this.isPostLoading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
          params:{
            _page: this.page,
            _limit: this.limit
          }
        } );
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data;
        this.isPostLoading = false
      } catch (e) {
        alert("Error")
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        // this.isPostLoading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
          params:{
            _page: this.page,
            _limit: this.limit
          }
        } );
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data]
        // this.isPostLoading = false
      } catch (e) {
        alert("Error")
      }
    },
  },
  mounted() {
    this.fetchPosts();
    console.log(this.$refs.observer);
    const options = {
      // root: document.querySelector('#scrollArea'),
      rootMargin: '0px',
      threshold: 1.0
    }
    //я не понял, почему при теряется контекст, при использовании function declaration
    const callback = (entries, observer) => {
      if(entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts()
        console.log(entries)
      }



    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer)

  },
  computed: {
    //я не понимаю что происходит тут. хелп !
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      )
    },
    sortedAndSearchPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {
    // page(){
    //   this.fetchPosts()
    // }
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

.page__wrapper{
  display: flex;
  margin-top: 15px ;
}

.page{
  border: 1px solid black;
  padding: 15px;
}

.current-page{
  border: 2px solid black;

}

.observer{
  height: 30px;
  background: teal;
}

</style>