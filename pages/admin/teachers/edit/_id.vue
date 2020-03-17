<template>
    <div>
        <dashboard></dashboard>
        <div class="ui grid centered column">
            <div class="eight wide column">
                <h1>Chỉnh sửa thông tin giáo viên</h1>
                <teacher-form @createOrUpdate="createOrUpdate" :teacher=this.teacher :isSchedule=this.$route.params.isSchedule></teacher-form>
            </div>
        </div>
    </div>
</template>

<script>
  import teacherForm from '../../../../components/TeacherForm.vue';
  import {apiTeacher, apiSchedule} from '../../../../helpers/Helpers';
  import dashboard from "../../../../components/Dashboard";

  export default {
    name: 'edit-teacher',
    components: {
      'dashboard': dashboard,
      'teacher-form': teacherForm
    },
    middleware: 'authAdmin',
    data: function () {
      return {
        teacher: {},
        schedules: []
      };
    },
    methods: {
      createOrUpdate: async function (teacherUpdate) {
        if (teacherUpdate.lessons_quantity < this.schedules.length) {
          alert("Số tiết đang thấp hơn tiết dạy đã đăng ký bên bảng Lịch dạy giáo viên")
        } else {
          let teacherDB = await apiTeacher.getTeacher(this.$route.params.id);
          if (teacherUpdate.homeroom_flg != teacherDB.homeroom_flg) {
            let schedule = new Object();
            schedule.teacher_id = this.$route.params.id;
            await apiTeacher.deleteSchedulesOfTeacher(schedule);
          }
          await apiTeacher.updateTeacher(teacherUpdate);
          await apiTeacher.deleteSchedulesOfTeacherBusy(teacherUpdate);
          if (this.$route.params.isSchedule) {
            this.$router.push(`/admin/schedule/`);
          } else {
            this.$router.push(`/admin/teachers/`);
          }
        }
      }
    },
    async mounted() {
        this.schedules = await apiSchedule.getSchedulesOfTeacher(this.$route.params.id);
        this.teacher = await apiTeacher.getTeacher(this.$route.params.id);
    }
  };
</script>
