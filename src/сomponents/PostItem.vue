<template>
  <div class="post">
    <div>
      <div><strong>Название</strong> {{ post.title }}</div>
      <div><strong>Описание</strong> {{ post.body }}</div>
<!--      <div><strong>id=</strong> {{ post.id }}</div>-->
    </div>
    <div class="post__buttons">
      <div>
        <my-button
            class="post_btn"
            @click="$emit('remove', post)"
        >удалить
        </my-button>
      </div>
      <div>
        <my-button
            class="post_btn"
            @click="$router.push(`/posts/${post.id}`)"
        >открыть
        </my-button>
      </div>
    </div>
  </div>

</template>

<script>
import MyButton from "@/сomponents/UI/MyButton";
export default {
  components: {MyButton},
  props:{
    post:{
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post {
  margin-top: 15px;
  padding: 15px;
  border: 2px solid teal;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__buttons{
  text-align: right;
}
.post_btn{
  margin: 5px;
}
</style>