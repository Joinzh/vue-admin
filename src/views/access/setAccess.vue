<template>
    <div class="set">
        <card>
            <i-switch v-model="access" @on-change="change"></i-switch>更改权限
        </card>
    </div>
</template>
<script>
import Cookies from 'js-cookie'
export default {
    data(){
        return {
            access: this.$store.state.app.access
        }
    },
    computed: {
    },
    created(){
    },
    mounted(){
    },
    methods:{
        change(e){
            if(e){
                Cookies.set('access', 1)
                this.$store.commit('filterRouter')
            }else{
                Cookies.set('access', 0)
                this.$store.commit('filterRouter')
            }
        }
    }
}
</script>
<style scoped>
</style>


