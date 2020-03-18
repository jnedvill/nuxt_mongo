<template>
    <div>
        <dashboard-user></dashboard-user>
        <div class="ui grid centered column">
            <div class="eight wide column">
                <h1>Chỉnh sửa thông tin giáo viên</h1>
              <teacher-form-user @createOrUpdate="createOrUpdate"></teacher-form-user>
            </div>
        </div>
    </div>
</template>

<script>
  import teacherFormUser from '../../components/TeacherFormUser.vue';
  import dashboardUser from "../../components/DashboardUser";

  export default {
    name: 'teacher',
    components: {
      'dashboard-user': dashboardUser,
      'teacher-form-user': teacherFormUser
    },
    middleware: 'auth',
    methods: {
      createOrUpdate: async function (teacher) {
        await this.$store.dispatch('updateTeacher', teacher);
        await this.$store.dispatch('deleteSchedulesOfTeacherBusy', teacher);
        alert("Đã lưu");
      }
    },
    fetch({store, params}) {
      // console.log("fetch");
      // await store.dispatch('setTeachers');
    },
    asyncData({store, params}) {
      // console.log("asyncData");
      // await store.dispatch('setTeachers');
    }
  };
</script>
