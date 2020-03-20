<template>
  <div class="ui inverted segment navbar">
    <div class="ui center aligned container">
      <div class="ui large secondary inverted pointing menu compact">
        <nuxt-link to="/admin/teachers" exact class="item">
          <i class="user icon"></i> Giáo viên
        </nuxt-link>
        <router-link to="/admin/subjects" exact class="item">
          <i class="book icon"></i> Môn học
        </router-link>
        <router-link to="/admin/classes" exact class="item">
          <i class="home icon"></i> Lớp học
        </router-link>
        <router-link to="/admin/subjectSchedule" class="item">
          <i class="calendar alternate icon"></i> Lịch bộ môn
        </router-link>
        <router-link to="/admin/schedule" class="item">
          <i class="calendar alternate icon"></i> Lịch dạy giáo viên
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

  .w180 {
    width: 180px;
  }

  .mb10 {
    margin-bottom: 10px;
  }

  .mt7 {
    margin-top: 7px;
  }

  .ml10 {
    margin-left: 10px;
  }

  .grade {
    width: 100%;
    margin-left: 15px;
    margin-bottom: 10px;
  }

  .actived {
    background-color: #DB2828 !important;
    color: white !important;
  }

  .morningI {
    padding: unset !important;
    margin: unset !important;
  }

  .morningButton {
    padding: unset !important;
    margin: unset !important;
    height: 163px !important;
  }

  .morningTd {
    padding: unset !important;
    margin: unset !important;
    padding: 2px !important;
    width: 25px !important;
    max-width: 25px !important;
  }

  .afternoonI {
    padding: unset !important;
    margin: unset !important;
  }

  .afternoonButton {
    padding: unset !important;
    margin: unset !important;
    height: 121px !important;
  }

  .afternoonTd {
    padding: unset !important;
    margin: unset !important;
    padding: 2px !important;
    width: 25px !important;
    max-width: 25px !important;
  }

  .dayI {
    padding: unset !important;
    margin: unset !important;
  }

  .dayButton {
    padding: unset !important;
    margin: unset !important;
    height: 289px !important;
  }

  .dayTd {
    padding: unset !important;
    margin: unset !important;
    padding: 2px !important;
    width: 25px !important;
    max-width: 25px !important;
  }

  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
    /* Non-prefixed version, currently supported by Chrome and Opera */
  }

  .scheduleCell:hover {
    opacity: 0.7;
    transition: 0.3s;
  }

  .subjectCell:hover {
    opacity: 0.7;
    transition: 0.3s;
  }

  #schedule th {
    border-style: solid !important;
    border-width: 1px !important;
  }

  #schedule {
    display: block;
    width: 1647px !important;
    max-width: 1647px !important;
    padding-top: unset !important;
    margin-top: unset !important;
  }

  .borderAll {
    border-style: solid !important;
    border-width: 1px !important;
  }

  .borderTop {
    border-top-style: solid !important;
    border-top-width: 1px !important;
  }

  .borderRight {
    border-right-style: solid !important;
    border-right-width: 1px !important;
  }

  .borderLeft {
    border-left-style: solid !important;
    border-left-width: 1px !important;
  }

  .borderBottom {
    border-bottom-style: solid !important;
    border-bottom-width: 1px !important;
  }

  .className {
    width: 50px !important;
    max-width: 50px !important;
  }

  .scheduleCell {
    width: 194px !important;
    max-width: 194px !important;
  }

  .scheduleSubjectCell {
    width: 100px !important;
    max-width: 100px !important;
  }

  .subjectCell {
    width: 294px !important;
    max-width: 294px !important;
  }

  .scheduleHeader {
    width: 319px !important;
    max-width: 319px !important;
  }

  #scheduleHeader {
    display: block;
    width: 1646px !important;
    max-width: 1646px !important;
    padding-bottom: unset !important;
    margin-bottom: unset !important;
  }

  .sticky {
    position: fixed !important;
    top: 0px !important;
  }

  .sticky + #schedule {
    padding-top: 46px !important;
  }

  .stickyScheduleTable {
    margin-left: 241.38px;
  }

  .stickyTeachersList {
    position: fixed !important;
    top: 0px !important;
  }


</style>
<script>
  import {mapActions} from 'vuex';
  import {apiLogout} from '../helpers/Helpers';

  export default {
    name: 'dashboard',
    methods: {
      onSubmit: function () {
        apiLogout.logout();
        this.logout();
        this.$router.push('/');
      },
      ...mapActions(['logout'])
    }
  };
</script>
