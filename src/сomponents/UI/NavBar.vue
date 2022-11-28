<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <MyButton @click="$router.push('/posts')">Посты</MyButton>
      <MyButton style="margin-left: 20px" @click="$router.push('/about')">About</MyButton>
    </div>
  </div>
</template>

<script>
import MyButton from "@/сomponents/UI/MyButton";
export default {
  name: "NavBar",
  components: {MyButton}

}
</script>

<style scoped>
.navbar {
  height: 50px;
  background: lightgray;
  box-shadow: 2px 2px 4px green;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar__btns {
  margin-left: auto;
}
</style>