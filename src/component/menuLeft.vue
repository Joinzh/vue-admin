<template>
    <div class="menuLeft">
        <Menu :active-name='this.$route.name' theme="light" width="auto" :open-names="['page1']" @on-select="changeMenu">
            <template v-for='(item, index) in menuList' >
                <MenuItem v-if="item.children.length <= 1" :key='index'  :name="item.children[0].name">
                    <Icon :type="item.children[0].icon" :key="index"></Icon>
                    {{item.children[0].name}}
                </MenuItem>
                <Submenu v-if='item.children.length > 1' :name="item.name" :key="index">
                    <template slot="title">
                        <Icon :type="item.icon"></Icon>
                        {{item.name}}
                    </template>
                    <template v-for="(child, index) in item.children">
                        <MenuItem :key='index' :name="child.name">
                            <Icon :type="child.icon" :key="index"></Icon>
                            {{child.name}}
                        </MenuItem>
                    </template>
                </Submenu>
            </template>
        </Menu>
    </div>
</template>
<script>
export default {
    props: {
        menuList: Array
    },
    mounted(){
    },
    methods: {
        changeMenu(e){
            this.$emit('on-change', e)
        }
    }
}
</script>
<style scoped>
</style>


