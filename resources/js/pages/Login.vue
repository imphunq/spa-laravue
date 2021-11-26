<template>
    <div class="flex login justify-center items-center">
        <ElCard class="shadow login--card pb-6">
            <div slot="header">
                <i class="el-icon-lock"></i>
                <span>Please enter your login details.</span>
            </div>
            <div class="flex items-center">
                <span class="w-1/3">Name</span>
                <ElInput
                    placeholder="Enter username or email..."
                    v-model="username"
                    clearable
                    class="w-2/3"
                />
            </div>
            <div class="flex items-center pt-6">
                <span class="w-1/3">Password</span>
                <ElInput
                    v-model="password"
                    placeholder="Enter your password"
                    show-password
                    clearable
                    class="w-2/3"
                />
            </div>
            <div class="pt-6 pb-6">
                <ElButton
                    type="primary"
                    class="float-right"
                    :loading="loading"
                >
                    <i class="el-icon-unlock"></i>
                    <span>Login</span>
                </ElButton>
            </div>
        </ElCard>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                username: '',
                password: '',
                loading: false,
            }
        }
    }
</script>

<style lang="scss">
    .login {
        min-height: calc(100vh - 60px);

        &--card {
            width: 400px;
        }
    }
</style>
