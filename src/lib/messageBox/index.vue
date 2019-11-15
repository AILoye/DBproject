<template>

    <div class="messageboxContainer">
        <div class="messageBox_title">
            <div>{{title}}</div>
        </div>
        <div class="messageBox_concent">{{content}}</div>
        <div class="messageBox_btn">
                <v-touch tag="div" @tap="handleDel()">取消</v-touch>
                <v-touch tag="div" @tap="handleOk()">确定</v-touch> 
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.messageboxContainer{
    width:3.12rem;
    height:2.18rem;
    box-shadow:1px 1px 50px rgba(0,0,0,.4);
    position:absolute;
    left:0.35rem;
    top:3rem;
    margin:auto;
    z-index:20;
    background:#fff;
}
.messageBox_title{
    width:100%;
    height:0.36rem;
    background:#f8f8f8;
    padding:0.2rem 0;
    line-height:0.1rem;
    display: flex;
    justify-content:space-between;
}

.messageBox_concent{
    padding:0.2rem;
    font-size:0.15rem;
}

.messageBox_btn{
    display:flex;
    width:50%;
    height:1.14rem;
    background:#fff;
    margin:0 0.9rem ;
    float:left;
    font-size:0.15rem;
    text-align: center;
    justify-content: space-between;
    align-items:center;
}

</style>