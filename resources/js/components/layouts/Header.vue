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
        <ElMenu
            :default-active="active"
            mode="horizontal"
            :router=true
        >
            <ElMenuItem index="/" route="/">Home</ElMenuItem>
            <ElMenuItem index="/about" route="/about">About</ElMenuItem>
            <ElMenuItem index="/login" route="/login">Login</ElMenuItem>
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
            active: this.$route.path,
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
