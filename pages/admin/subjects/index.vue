<template>
  <div>
    <dashboard></dashboard>
    <div class="ui grid centered column">
      <div class="eight wide column">
        <h1 style="float: left;">Danh sách môn học</h1>
        <router-link to="/admin/subjects/new" class="item" style="float: right;margin-top: 10px;font-size: 20px;">
          <i class="plus circle icon"></i> Thêm mới
        </router-link>
        <table id="subjects" class="ui celled compact table">
          <thead>
          <tr>
            <th><i class="calendar plus icon"></i>Tên môn học</th>
            <th><i class="trash icon"></i></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(subject, i) in subjects" :key="i">
            <td>
              <nuxt-link :to="{ name: 'admin-subjects-edit-id', params: { id: subject._id }}">{{ subject.name }}</nuxt-link>
            </td>
            <td width="75" class="center aligned" @click.prevent="onDestroy(subject._id)">
              <a :href="`/subjects/${subject._id}`">Xóa</a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
  import dashboard from "../../../components/Dashboard";

  export default {
    name: 'subjects',
    components: {
      'dashboard': dashboard
    },
    middleware: 'authAdmin',
    data() {
      return {
        subjects: []
      };
    },
    methods: {
      async onDestroy(id) {
        const sure = window.confirm('Are you sure?');
        if (!sure) return;
        let schedule = new Object();
        schedule.subject_id = id;
        await this.$store.dispatch('deleteSubject', id);
        await this.$store.dispatch('deleteSchedulesOfSubject', schedule);
        const newSubject = this.subjects.filter(subject => subject._id !== id);
        this.subjects = newSubject;
      }
    },
    async mounted() {
      this.subjects = await this.$store.dispatch('getSubjects');
    }
  };
</script>
