<template>
  <div>
    <dashboard></dashboard>
    <div class="ui grid centered column">
      <div class="eight wide column">
        <h1>Thời khóa biểu của giáo viên {{ this.teacher.name }}</h1>
        <table class="ui celled table noselect">
          <thead>
          <tr>
            <th style="width: 20%">Thứ hai</th>
            <th style="width: 20%">Thứ ba</th>
            <th style="width: 20%">Thứ tư</th>
            <th style="width: 20%">Thứ năm</th>
            <th style="width: 20%">Thứ sáu</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td id="Mon1" class="renew" style="width: 20%">1.</td>
            <td id="Tue1" class="renew" style="width: 20%">1.</td>
            <td id="Wed1" class="renew" style="width: 20%">1.</td>
            <td id="Thu1" class="renew" style="width: 20%">1.</td>
            <td id="Fri1" class="renew" style="width: 20%">1.</td>
          </tr>
          <tr>
            <td id="Mon2" class="renew" style="width: 20%">2.</td>
            <td id="Tue2" class="renew" style="width: 20%">2.</td>
            <td id="Wed2" class="renew" style="width: 20%">2.</td>
            <td id="Thu2" class="renew" style="width: 20%">2.</td>
            <td id="Fri2" class="renew" style="width: 20%">2.</td>
          </tr>
          <tr>
            <td id="Mon3" class="renew" style="width: 20%">3.</td>
            <td id="Tue3" class="renew" style="width: 20%">3.</td>
            <td id="Wed3" class="renew" style="width: 20%">3.</td>
            <td id="Thu3" class="renew" style="width: 20%">3.</td>
            <td id="Fri3" class="renew" style="width: 20%">3.</td>
          </tr>
          <tr>
            <td id="Mon4" class="renew" style="width: 20%">4.</td>
            <td id="Tue4" class="renew" style="width: 20%">4.</td>
            <td id="Wed4" class="renew" style="width: 20%">4.</td>
            <td id="Thu4" class="renew" style="width: 20%">4.</td>
            <td id="Fri4" class="renew" style="width: 20%">4.</td>
          </tr>
          <tr>
            <td id="Mon5" class="renew" style="width: 20%">5.</td>
            <td id="Tue5" class="renew" style="width: 20%">5.</td>
            <td id="Wed5" class="renew" style="width: 20%">5.</td>
            <td id="Thu5" class="renew" style="width: 20%">5.</td>
            <td id="Fri5" class="renew" style="width: 20%">5.</td>
          </tr>
          <tr>
            <td id="Mon6" class="renew" style="width: 20%">6.</td>
            <td id="Tue6" class="renew" style="width: 20%">6.</td>
            <td id="Wed6" class="renew" style="width: 20%">6.</td>
            <td id="Thu6" class="renew" style="width: 20%">6.</td>
            <td id="Fri6" class="renew" style="width: 20%">6.</td>
          </tr>
          <tr>
            <td id="Mon7" class="renew" style="width: 20%">7.</td>
            <td id="Tue7" class="renew" style="width: 20%">7.</td>
            <td id="Wed7" class="renew" style="width: 20%">7.</td>
            <td id="Thu7" class="renew" style="width: 20%">7.</td>
            <td id="Fri7" class="renew" style="width: 20%">7.</td>
          </tr>
          </tbody>
        </table>
        <router-link to="/admin/schedule" class="ui button">
          Quay lại
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import {apiClass, apiSchedule, apiTeacher, apiSubjectSchedule, apiSubject} from '../../../../helpers/Helpers';
  import dashboard from "../../../../components/Dashboard";

  export default {
    name: 'view-schedule-teacher',
    components: {
      'dashboard': dashboard,
    },
    middleware: 'authAdmin',
    data: function () {
      return {
        classes: [],
        schedules: [],
        teacher: {},
        subjectSchedules: [],
        subjects: []
      };
    },
    async mounted() {
      let self = this;
      self.classes = await apiClass.getClasses();
      self.schedules = await apiSchedule.getSchedulesOfTeacher(self.$route.params.id);
      self.teacher = await apiTeacher.getTeacher(self.$route.params.id);
      self.subjectSchedules = await apiSubjectSchedule.getSubjectSchedules();
      self.subjects = await apiSubject.getSubjects();

      if (self.teacher.homeroom_flg) {
        for (let i = 0; i < self.schedules.length; i++) {
          document.getElementById(self.schedules[i].date_type + self.schedules[i].class_hour).innerHTML =
            self.schedules[i].class_hour
            + ", Lớp: "
            + self.classes.find(element => element._id == self.schedules[i].class_id).name
            + ", Môn: Tự chọn";
        }
      } else {
        for (let i = 0; i < self.schedules.length; i++) {
          let subjectId = self.subjectSchedules.find(
            element => element.date_type == self.schedules[i].date_type
              && element.class_hour == self.schedules[i].class_hour
              && element.class_id == self.schedules[i].class_id
          ).subject_id;
          document.getElementById(self.schedules[i].date_type + self.schedules[i].class_hour).innerHTML =
            self.schedules[i].class_hour
            + ", Lớp: "
            + self.classes.find(element => element._id == self.schedules[i].class_id).name
            + " - "
            + self.subjects.find(element => element._id == subjectId).name;
        }
      }
    }
  };
</script>
