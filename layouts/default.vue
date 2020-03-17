<template>
  <div>
    <div class="ui text">
      <nuxt/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters(['isAuth'])
    },
    methods: {
      async doLogout() {
        await axios.post('/api/logout')
        this.logout()
        this.$router.push('/')
      },
      ...mapActions(['logout'])
    }

  }

</script>
