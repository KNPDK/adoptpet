<template>
    <div class="container">
        <h1>{{ msg }}</h1>
        <h1>{{ msg2 }}</h1>
        <hr>
        <p class="err" v-if="error">{{ error }}</p>
        <div class="api-data">
            <div class="data"
            v-for="(d, index) in api"
            v-bind:item="d"
            v-bind:index="index"
            v-bind:key="d._id"
            >
            {{ d.text }}
            </div>
        </div>
    </div>
</template>

<script>
import ApiService from '../ApiService';

export default {
    name: 'HomeComponent',
    data(){
        return{
            api: [],
            error: '',
            text: ''
        }
    },
    async created() {
        try{
            this.api = await ApiService.getData();
        }catch(err){
            this.error = err;
        }
    },
    props:{
        msg: String,
        msg2: String
    }
}
</script>

<style scoped>
h1, h2{
    text-align: center;
    color: cornflowerblue;
}
</style>