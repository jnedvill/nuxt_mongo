<template>
  <div>
    <dashboard></dashboard>
    <div class="ui grid centered column">
      <div class="eight wide column">
        <h1 style="float: left;">Danh sách lớp học</h1>
        <router-link to="/admin/classes/new" class="item" style="float: right;margin-top: 10px;font-size: 20px;">
          <i class="plus circle icon"></i> Thêm mới
        </router-link>
        <table id="classes" class="ui celled compact table">
          <thead>
          <tr>
            <th><i class="calendar plus icon"></i>Tên lớp</th>
            <th><i class="info circle icon"></i>Khối</th>
            <th><i class="trash icon"></i></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(classItem, i) in classes" :key="i">
            <td>
              <router-link :to="{ name: 'admin-classes-edit-id', params: { id: classItem._id }}">{{ classItem.name }}</router-link>
            </td>
            <td>{{ classItem.grade }}</td>
            <td width="75" class="center aligned" @click.prevent="onDestroy(classItem._id)">
              <a :href="`/classes/${classItem._id}`">Xóa</a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import {apiClass} from '../../../helpers/Helpers';
  import dashboard from "../../../components/Dashboard";

  export default {
    name: 'classes',
    components: {
      'dashboard': dashboard
    },
    middleware: 'authAdmin',
    data() {
      return {
        classes: []
      };
    },
    methods: {
      async onDestroy(id) {
        const sure = window.confirm('Are you sure?');
        if (!sure) return;
        let schedule = new Object();
        schedule.class_id = id;
        await apiClass.deleteSchedulesOfClass(schedule);
        await apiClass.deleteClass(id);
        const newclasses = this.classes.filter(classItem => classItem._id !== id);
        this.classes = newclasses;
      }
    },
    async mounted() {
      this.classes = await apiClass.getClasses();
    }
  };
</script>
