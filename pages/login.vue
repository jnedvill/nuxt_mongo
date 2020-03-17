<template>
  <div>
    <dashboard-login></dashboard-login>
    <div class="ui grid centered column">
      <div class="eight wide column">
        <h2>Login</h2>
        <form action="#" @submit.prevent="onSubmit">
          <div class="ui labeled input fluid mb10">
            <div class="ui label w180">
              <i class="address card icon"></i>Tên
            </div>
            <input type="text" name="username" placeholder="Enter username..." v-model="user.username"/>
          </div>
          <div class="ui labeled input fluid mb10">
            <div class="ui label w180">
              <i class="address card icon"></i>Tên
            </div>
            <input type="password" name="password" placeholder="Enter password..." v-model="user.password"/>
          </div>
          <button class="positive ui button">Xác nhận</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  import dashboardLogin from "../components/DashboardLogin";
  import {apiLogin} from '../helpers/Helpers';

  export default {
    components: {
      'dashboard-login': dashboardLogin
    },
    data() {
      return {
        user: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit: function () {
        let self = this;
        apiLogin.login(this.user).then(function (value) {
          if (value.account == 'admin') {
            self.login(value);
            self.$router.push('/admin/teachers');
          } else if (value.account == 'user') {
            self.login(value);
            self.$router.push('/user/teacher');
          } else {
            alert("Sai tài khoản hoặc mật khẩu");
          }
        })
      },
      ...mapActions(['login'])
    }
  }
</script>
