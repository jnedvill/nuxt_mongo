<template>
  <div>
    <dashboard></dashboard>
    <div class="ui grid centered column">
      <div class="eight wide column">
        <h1>Chỉnh sửa môn học</h1>
        <subject-form @createOrUpdate="createOrUpdate" :subject=this.subject></subject-form>
      </div>
    </div>
  </div>
</template>

<script>
  import subjectForm from '../../../../components/SubjectForm.vue';
  import dashboard from "../../../../components/Dashboard";

  export default {
    name: 'edit-subject',
    components: {
      'dashboard': dashboard,
      'subject-form': subjectForm,
    },
    middleware: 'authAdmin',
    data: function () {
      return {
        subject: {}
      };
    },
    methods: {
      createOrUpdate: async function (subject) {
        await this.$store.dispatch('updateSubject', subject);
        this.$router.push(`/admin/subjects/`);
      }
    },
    async mounted() {
      this.subject = await this.$store.dispatch('getSubject', this.$route.params.id);
    }
  };
</script>
