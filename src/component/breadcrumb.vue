<template>
    <div class="breadcrumb">
        <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
            <Button @click="outLogin">退出登陆</Button>
        </Breadcrumb>
    </div>
</template>
<script>
import Cookies from 'js-cookie'
export default {
    methods:{
        outLogin(){
            Cookies.remove('userName')
            this.$Message.success({
                content: '退出登陆成功',
                duratin: 2,
                onClose: () => {
                    this.$router.push({
                        name: 'login'
                    })
                }
            })
        }
    }
}
</script>
<style>

</style>

