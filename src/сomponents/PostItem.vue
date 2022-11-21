<template>
  <div class="post">
    <div>
      <div><strong>Название</strong> {{ post.title }}</div>
      <div><strong>Описание</strong> {{ post.body }}</div>
    </div>
    <div>
      <my-button
          class="post_btn"
          @click="$emit('remove', post)"
      >удалить</my-button>
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
</style>