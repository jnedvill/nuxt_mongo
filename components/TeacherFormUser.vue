<template>
    <form action="#" @submit.prevent="onSubmit">
        <p v-if="errorsPresent" class="error">Vui lòng điền đầy đủ thông tin bắc buộc!</p>
        <div class="ui labeled input fluid mb10">
            <div class="ui label w180">
                <i class="address card icon"></i>Tên
            </div>
            <input type="text" placeholder="Enter name..." v-model="teacher.name"/>
        </div>
        <div class="ui labeled input fluid mb10">
            <div class="ui label w180">
                <i class="address card icon"></i>Mật khẩu
            </div>
            <input type="text" placeholder="Enter password..." v-model="teacher.password"/>
        </div>
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
        <button class="positive ui button">Xác nhận</button>
    </form>
</template>
<script>

  export default {
    name: 'teacher-form-user',
    data: function () {
      return {
        errorsPresent: false,
        classes: [],
        schedules: [],
        teacher: {},
        subjectSchedules: [],
        subjects: []
      };
    },
    methods: {
      onSubmit: function () {
        if (this.teacher.name === '' || this.teacher.password === '') {
          this.errorsPresent = true;
        } else {
          this.errorsPresent = false;
          this.$emit('createOrUpdate', this.teacher);
        }
      },
    },
    async mounted() {
      let self = this;
      self.classes = await self.$store.dispatch('getClasses');
      self.schedules = await self.$store.dispatch('getSchedulesOfTeacher', self.$store.state.teacherId);
      self.teacher = await self.$store.dispatch('getTeacher', self.$store.state.teacherId);
      self.subjectSchedules = await self.$store.dispatch('getSubjectSchedules');
      self.subjects = await self.$store.dispatch('getSubjects');
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

          for (let j = 0; j < self.subjectSchedules.length; j++) {
            if (self.schedules[i].date_type == self.subjectSchedules[j].date_type && self.schedules[i].class_hour == self.subjectSchedules[j].class_hour
            && self.schedules[i].class_id == self.subjectSchedules[j].class_id) {
              let subjectId = self.subjectSchedules[j].subject_id;
              document.getElementById(self.schedules[i].date_type + self.schedules[i].class_hour).innerHTML =
                self.schedules[i].class_hour
                + ", Lớp: "
                + self.classes.find(element => element._id == self.schedules[i].class_id).name
                + " - "
                + self.subjects.find(element => element._id == subjectId).name;
            }
          }
          // let subjectId = self.subjectSchedules.find(
          //   element => element.date_type == self.schedules[i].date_type
          //     && element.class_hour == self.schedules[i].class_hour
          //     && element.class_id == self.schedules[i].class_id
          // );
          // console.log(subjectId);
          // document.getElementById(self.schedules[i].date_type + self.schedules[i].class_hour).innerHTML =
          //   self.schedules[i].class_hour
          //   + ", Lớp: "
          //   + self.classes.find(element => element._id == self.schedules[i].class_id).name
          //   + " - "
          //   + self.subjects.find(element => element._id == subjectId).name;
        }
      }
    }
  };
</script>

<style scoped>
    .error {
        color: red;
    }
</style>
