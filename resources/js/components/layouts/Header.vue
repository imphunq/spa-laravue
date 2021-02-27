<template>
  <ElHeader class="bg-white shadow border-b flex items-center">
    <nav class="container mx-auto flex items-center justify-between">
      <span class="flex items-center">
        <img src="../../dist/img/logo1.png" />
      </span>
      <span class="flex items-center">
        <ElInput
          v-model="keyword"
          placeholder="Search by title"
          suffix-icon="el-icon-search"
          clearable
          class="search-input mr-8"
        />
<!--         <ul class="flex ml-8">
          <li class="mr-4 item-menu">
            <router-link to="/" class="text-gray-400 font-semibold">Home</router-link>
          </li>
          <li class="mr-4 item-menu">
            <router-link to="/about" class="text-gray-400 font-semibold">About</router-link>
          </li>
        </ul> -->
        <ElMenu :deafult-active="1" mode="horizontal">
          <ElMenuItem index="1">Home</ElMenuItem>
          <ElMenuItem index="2">About</ElMenuItem>
        </ElMenu>
      </span>
    </nav>
  </ElHeader>
</template>

<script>
  export default {
    data() {
      return {
        keyword: '',
      }
    },
  }
</script>

<style lang="scss" scoped>
  .router-link-exact-active {
    color: #343a40;
  }

  .item-menu:hover a{
    color: #343a40;
  }

  .search-input {
    width: 300px;
  }
</style>
