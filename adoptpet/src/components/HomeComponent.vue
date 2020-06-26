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
            <ul>
            <li>{{ d.text }}</li>
            </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

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
        await axios
        .get("http://localhost:3000/api")
        .then(res => {
          this.loading = false;
          this.api = res.data;
        })
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