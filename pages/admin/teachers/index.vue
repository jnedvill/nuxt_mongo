<template>
  <div>
    <dashboard></dashboard>
    <div class="ui grid centered column">
      <div class="eight wide column">
        <h1 style="float: left;">Danh sách giáo viên</h1>
        <nuxt-link to="/admin/teachers/new" class="item" style="float: right;margin-top: 10px;font-size: 20px;">
          <i class="plus circle icon"></i> Thêm mới
        </nuxt-link>
        <table id="teachers" class="ui celled compact table">
          <thead>
          <tr>
            <th><i class="calendar plus icon"></i>Tên</th>
            <th><i class="info circle icon"></i>Thông tin</th>
            <th><i class="trash icon"></i></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(teacher, i) in getTeachers" :key="i">
            <td>
              <nuxt-link :to="{ name: 'admin-teachers-edit-id', params: { id: teacher._id }}">{{ teacher.name }}
              </nuxt-link>
            </td>
            <td>{{ teacher.homeroom_flg ? "GVCN" : "Bộ môn" }}</td>
            <td width="75" class="center aligned" @click.prevent="onDestroy(teacher._id)">
              <a :href="`/teachers/${teacher._id}`">Xóa</a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import {apiTeacher} from '../../../helpers/Helpers';
  import {mapGetters} from 'vuex';
  import dashboard from "../../../components/Dashboard";

  export default {
    name: 'teachers',
    components: {
      'dashboard': dashboard
    },
    middleware: 'authAdmin',
    computed: {
      ...mapGetters(['getTeachers'])
    },
    methods: {
      async onDestroy(id) {
        let sure = window.confirm('Are you sure?');
        if (!sure) return;
        let schedule = new Object();
        schedule.teacher_id = id;
        await apiTeacher.deleteSchedulesOfTeacher(schedule);
        await apiTeacher.deleteTeacher(id);
        this.$store.state.teachers = this.$store.state.teachers.filter(teacher => teacher._id !== id);
      }
    },
    async fetch({store, params}) {
      await store.dispatch('setTeachers');
    }
  };
</script>
