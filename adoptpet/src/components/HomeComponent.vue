<template>
    <div class="container">
        <h1>{{ msg }}</h1>
        <h2>{{ msg2 }}</h2>
    </div>
</template>

<script>
export default {
    name: 'Adoptpet.app',
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