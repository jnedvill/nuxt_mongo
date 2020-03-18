<template>
    <div>
        <dashboard></dashboard>
        <div class="ui grid centered column">
            <div class="eight wide column">
                <h1>Thêm mới lớp học</h1>
                <class-form @createOrUpdate="createOrUpdate" :toggleSuccess=toggleSuccess></class-form>
            </div>
        </div>
    </div>
</template>

<script>
  import classForm from '../../../../components/ClassForm.vue';
  import dashboard from "../../../../components/Dashboard";
  export default {
    name: 'new-class',
    components: {
      'dashboard': dashboard,
      'class-form': classForm
    },
    middleware: 'authAdmin',
    data() {
      return {
        toggleSuccess: true
      };
    },
    methods: {
      createOrUpdate: async function(classModel) {
        await this.$store.dispatch('createClass', classModel);
        this.toggleSuccess = !this.toggleSuccess;
      }
    }
  };
</script>
