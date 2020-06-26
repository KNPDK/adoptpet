<template>
  <mdb-card class="card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)">
    <div class="text-white text-center py-5 px-4 my-5">
      <div>
    <h1>{{ msg = "Welcome to Adopt a PET" }}</h1>
    <h3>{{ msg2 = "Adoptpet.App" }}</h3>
        <h2 class="card-title h1-responsive pt-3 mb-5 font-bold"><strong>Adopt a Pet dolor sit amet, consectetur adipisicing elit.</strong></h2>
        <p class="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
          optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
        </p>
        <mdb-btn outline="white" size="md" icon="clone">View project</mdb-btn>
      </div>
    </div>
  </mdb-card>
</template>
<script>
  import { mdbCard, mdbBtn } from 'mdbvue';
  export default {
    name: 'JumbotronPage',
    components: {
      mdbCard,
      mdbBtn
    }
  }
</script>
<style scoped>
</style>