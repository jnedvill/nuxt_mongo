<template>
  <div>
    <dashboard></dashboard>
    <div class="ui grid centered column">
      <div class="eight wide column">
        <h1>Thêm mới môn học</h1>
        <subject-form @createOrUpdate="createOrUpdate" :toggleSuccess=toggleSuccess></subject-form>
      </div>
    </div>
  </div>
</template>

<script>
  import subjectForm from '../../../../components/SubjectForm.vue';
  import {apiSubject} from '../../../../helpers/Helpers';
  import dashboard from "../../../../components/Dashboard";

  export default {
    name: 'new-subject',
    components: {
      'dashboard': dashboard,
      'subject-form': subjectForm
    },
    middleware: 'authAdmin',
    data() {
      return {
        toggleSuccess: true
      };
    },
    methods: {
      createOrUpdate: async function (subject) {
        await apiSubject.createSubject(subject);
        this.toggleSuccess = !this.toggleSuccess;
      }
    }
  };
</script>
