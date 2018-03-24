<template>
    <div id="login">
        <card class="box" :bordered='false' :dis-hover='true' :shadow='true'>
            <Input class="mar" type="text" v-model="name" placeholder="用户名" />
            <Input class="mar" type="password" v-model="pass" placeholder="密码" />
            <div class="mar">
                <Button @click.enter="setCookies" style="width: 100%">登陆</Button>   
            </div>
        </card>
    </div>
</template>
<script>
import Cookies from 'js-cookie'
export default {
    data(){
        return {
            name: '',
            pass: ''
        }
    },
    methods: {
        change (status) {
            this.$Message.info('开关状态：' + status);
        },
        setCookies(){
            if(this.name == ''){
                this.$Message.error('用户名不能为空');
                return
            }
            if(this.pass == ''){
                this.$Message.error('密码不能为空');
                return
            }
            Cookies.set('userName', this.name)
            Cookies.set('password', this.pass)
            Cookies.set('access', 1)
            this.$Message.success({
                content: '登陆成功',
                duratin: 2,
                onClose: () => {
                    this.$router.push({
                        name: 'home-index'
                    })
                }
            });
        }
    }
}
</script>

<style scoped>
    #login{
        width: 100%;
        height: 100%;
        background: url('../assets/logo.png') no-repeat;
        background-position: 200px center;
        background-color: #eeeeee;
        position: relative;
    }
    .box{
        position: absolute;
        width: 350px;
        height: 200px;
        top: 0;
        bottom: 0;
        right: 200px;
        margin: auto 0;
    }
    .mar{
        margin: 10px 0
    }
</style>

