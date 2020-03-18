<template>
    <div>
        <dashboard></dashboard>
        <div class="ui grid centered column">
            <div class="eight wide column">
                <h1>Thêm mới giáo viên</h1>
                <teacher-form @createOrUpdate="createOrUpdate" :toggleSuccess=toggleSuccess></teacher-form>
            </div>
        </div>
    </div>
</template>

<script>
  import teacherForm from '../../../../components/TeacherForm.vue';
  import dashboard from "../../../../components/Dashboard";
  export default {
    name: 'new-teacher',
    components: {
      'dashboard': dashboard,
      'teacher-form': teacherForm,
    },
    middleware: 'authAdmin',
    data() {
      return {
        toggleSuccess: true
      };
    },
    methods: {
      createOrUpdate: async function(teacher) {
        await this.$store.dispatch('createTeacher', teacher);
        this.toggleSuccess = !this.toggleSuccess;
      }
    }
  };
</script>
