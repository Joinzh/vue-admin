<template>
    <div class="user">
        <Row :gutter="16">
            
            <Col class="item" :xs="24" :sm="12" :md="8" :lg="6" v-for="(item, index) in userList" :key='index'>
                <Card>
                    <div class="head"></div>
                    <ul class="oul">
                        <li>
                            <span>姓名：{{item.name}}</span>
                        </li>
                        <li>
                            <span>年龄：{{item.age}}</span>
                        </li>
                        <li>
                            <span>性别：{{item.sex}}</span>
                        </li>
                        <li>
                            <span>体重：{{item.weight}}</span>
                        </li>
                    </ul>
                    <Button style="display:block; margin: 0 auto" @click="onShow(index)">按钮</Button>
                    <div class="shade" v-if="show == index" @click="delShow">
                        <ul>
                            <li>文字</li>
                            <li>文字</li>
                            <li>文字</li>
                            <li>文字</li>
                            <li>文字</li>
                            <li>文字</li>
                            <li>文字</li>
                            <li>文字</li>
                            <li>文字</li>
                        </ul>
                    </div>
                </Card>
            </Col>
        </Row> 
    </div>
</template>
<script>
export default {
    data(){
        return{
            show: null,
            userList: [
                {
                    name: '张三',
                    age: 12,
                    sex: '男',
                    weight: '70kg'
                },
                {
                    name: '李四',
                    age: 12,
                    sex: '男',
                    weight: '70kg'
                },
                {
                    name: '王五',
                    age: 12,
                    sex: '男',
                    weight: '70kg'
                },
                {
                    name: '赵六',
                    age: 12,
                    sex: '男',
                    weight: '70kg'
                },
                {
                    name: '张三',
                    age: 12,
                    sex: '男',
                    weight: '70kg'
                },
                {
                    name: '李四',
                    age: 12,
                    sex: '男',
                    weight: '70kg'
                },
                {
                    name: '王五',
                    age: 12,
                    sex: '男',
                    weight: '70kg'
                },
                {
                    name: '赵六',
                    age: 12,
                    sex: '男',
                    weight: '70kg'
                }
            ]
        }
    },
    methods: {
        onShow: function(index){
            if(this.show == index){
                this.show = null
            }else{
                this.show = index
            }
        },
       delShow: function(){
           this.show = null
       }
    }
}
</script>
<style scoped>
.item{
    position: relative;
    margin: 20px 0;
}
.shade{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    border-radius: 4px;
    top: 0;
    left: 0;
    position: absolute;
    text-align: center;
    color: #ffffff;
    padding: 20px;
}
.shade li{
    list-style: none;
}
.head{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #eeeeee;
    margin: 10px auto;
}
.oul{
    margin: 10px auto;
    padding: 10px 20px;
    background: #eeefff;
    border-radius: 5px;
}
.oul li{
    list-style: none;
}
</style>


