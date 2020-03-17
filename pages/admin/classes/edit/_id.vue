<template>
  <div>
    <dashboard></dashboard>
    <div class="ui grid centered column">
      <div class="eight wide column">
        <h1>Chỉnh sửa lớp học</h1>
        <class-form @createOrUpdate="createOrUpdate" :classModel=this.classModel></class-form>
      </div>
    </div>
  </div>
</template>

<script>
  import classForm from '../../../../components/ClassForm.vue';
  import {apiClass} from '../../../../helpers/Helpers';
  import dashboard from "../../../../components/Dashboard";

  export default {
    name: 'edit-class',
    components: {
      'dashboard': dashboard,
      'class-form': classForm
    },
    middleware: 'authAdmin',
    data: function () {
      return {
        classModel: {}
      };
    },
    methods: {
      createOrUpdate: async function (classModel) {
        await apiClass.updateClass(classModel);
        this.$router.push(`/admin/classes/`);
      }
    },
    async mounted() {
      this.classModel = await apiClass.getClass(this.$route.params.id);
    }
  };
</script>
