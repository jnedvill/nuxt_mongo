<template>
    <div class="ui inverted segment navbar">
        <div class="ui center aligned container">
            <div class="ui large secondary inverted pointing menu compact">
                <router-link to="/user/teacher" exact class="item">
                    <i class="user icon"></i> Thông tin
                </router-link>
                <div class="item logout" @click="onSubmit">
                    <i class="power off icon"></i> Thoát
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .logout:hover {
        color: rgba(255, 255, 255, 1) !important;
    }
    .logout {
        color: rgba(255, 255, 255, 0.7) !important;
    }
</style>
<script>
  import {mapActions} from 'vuex';
  import {apiLogout} from '../helpers/Helpers';
  export default {
    name: 'dashboard',
    methods: {
      onSubmit: function() {
        apiLogout.logout();
        this.logout();
        this.$router.push('/');
      },
      ...mapActions(['logout'])
    }
  };
</script>
