<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                  <menu-top ></menu-top>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                  <menu-left :menuList='menuList'
                  @on-change="changeMenu"
                  ></menu-left>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <breadcrumb></breadcrumb>
                    <Content :style="{padding: '24px',  background: '#fff'}">
                      <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
import menuTop from '@/component/menuTop.vue'
import menuLeft from '@/component/menuLeft.vue'
import breadcrumb from '@/component/breadcrumb.vue'

export default {
  data(){
    return {
      menuTop: '123'
    }
  },
  computed:{
    menuList: function(){
      return this.$store.state.app.menuList
    }
  },
  components: {
    menuTop,
    menuLeft,
    breadcrumb
  },
  mounted(){
    this.$store.commit('filterRouter')
  },
  methods: {
    changeMenu(name){
      this.$router.push({
        name: name
      })
    }
  }
}
</script>
<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
}
.ivu-layout{
  height: 100%
}
</style>
