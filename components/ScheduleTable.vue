<template>
    <div>
        <table id="scheduleHeader" class="ui celled table noselect">
            <thead>
            <tr>
                <th class="className">Lớp</th>
                <th class="scheduleHeader" colspan="3">Thứ hai</th>
                <th class="scheduleHeader" colspan="3">Thứ ba</th>
                <th class="scheduleHeader" colspan="3">Thứ tư</th>
                <th class="scheduleHeader" colspan="3">Thứ năm</th>
                <th class="scheduleHeader" colspan="3">Thứ sáu</th>
            </tr>
            </thead>
        </table>
        <table id="schedule" class="teachers ui celled table noselect">
            <tbody v-for="(classItem, i) in classesGrade" :key="i">
            <tr>
                <td rowspan="7" class="borderAll className">{{ classItem.name }}</td>
                <td v-bind:id="classItem._id + '_Subject_Mon_1'" class="scheduleSubjectCell borderTop">
                </td>
                <td v-bind:id="classItem._id + '_Mon_1'" v-on:click="setting(classItem._id, 'Mon', 1)"
                    class="scheduleCell borderTop Mon1">1.
                </td>
                <td rowspan="4" v-bind:id="classItem._id + '_Mon_Morning'"
                    v-on:click="settingMulti(classItem._id, 'Mon', 4)" class="morningTd borderTop borderRight">
                    <button class="fluid ui teal button morningButton" onclick="this.blur();"><i
                            class="sun outline icon morningI"></i>
                    </button>
                </td>

                <td v-bind:id="classItem._id + '_Subject_Tue_1'" class="scheduleSubjectCell borderTop">
                </td>
                <td v-bind:id="classItem._id + '_Tue_1'" v-on:click="setting(classItem._id, 'Tue', 1)"
                    class="scheduleCell borderTop Tue1">1.
                </td>
                <td rowspan="4" v-bind:id="classItem._id + '_Tue_Morning'"
                    v-on:click="settingMulti(classItem._id, 'Tue', 4)" class="morningTd borderTop borderRight">
                    <button class="fluid ui teal button morningButton" onclick="this.blur();"><i
                            class="sun outline icon morningI"></i>
                    </button>
                </td>

                <td v-bind:id="classItem._id + '_Subject_Wed_1'" class="scheduleSubjectCell borderTop">
                </td>
                <td v-bind:id="classItem._id + '_Wed_1'" v-on:click="setting(classItem._id, 'Wed', 1)"
                    class="scheduleCell borderTop Wed1">1.
                </td>
                <td rowspan="4" v-bind:id="classItem._id + '_Wed_Morning'"
                    v-on:click="settingMulti(classItem._id, 'Wed', 4)" class="morningTd borderTop borderRight">
                    <button class="fluid ui teal button morningButton" onclick="this.blur();"><i
                            class="sun outline icon morningI"></i>
                    </button>
                </td>

                <td v-bind:id="classItem._id + '_Subject_Thu_1'" class="scheduleSubjectCell borderTop">
                </td>
                <td v-bind:id="classItem._id + '_Thu_1'" v-on:click="setting(classItem._id, 'Thu', 1)"
                    class="scheduleCell borderTop Thu1">1.
                </td>
                <td rowspan="4" v-bind:id="classItem._id + '_Thu_Morning'"
                    v-on:click="settingMulti(classItem._id, 'Thu', 4)" class="morningTd borderTop borderRight">
                    <button class="fluid ui teal button morningButton" onclick="this.blur();"><i
                            class="sun outline icon morningI"></i>
                    </button>
                </td>

                <td v-bind:id="classItem._id + '_Subject_Fri_1'" class="scheduleSubjectCell borderTop">
                </td>
                <td v-bind:id="classItem._id + '_Fri_1'" v-on:click="setting(classItem._id, 'Fri', 1)"
                    class="scheduleCell borderTop Fri1">1.
                </td>
                <td rowspan="4" v-bind:id="classItem._id + '_Fri_Morning'"
                    v-on:click="settingMulti(classItem._id, 'Fri', 4)" class="morningTd borderTop borderRight">
                    <button class="fluid ui teal button morningButton" onclick="this.blur();"><i
                            class="sun outline icon morningI"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td v-bind:id="classItem._id + '_Subject_Mon_2'" class="scheduleSubjectCell">
                </td>
                <td v-bind:id="classItem._id + '_Mon_2'" v-on:click="setting(classItem._id, 'Mon', 2)"
                    class="scheduleCell Mon2">2.
                </td>

                <td v-bind:id="classItem._id + '_Subject_Tue_2'" class="scheduleSubjectCell">
                </td>
                <td v-bind:id="classItem._id + '_Tue_2'" v-on:click="setting(classItem._id, 'Tue', 2)"
                    class="scheduleCell Tue2">2.
                </td>

                <td v-bind:id="classItem._id + '_Subject_Wed_2'" class="scheduleSubjectCell">
                </td>
                <td v-bind:id="classItem._id + '_Wed_2'" v-on:click="setting(classItem._id, 'Wed', 2)"
                    class="scheduleCell Wed2">2.
                </td>

                <td v-bind:id="classItem._id + '_Subject_Thu_2'" class="scheduleSubjectCell">
                </td>
                <td v-bind:id="classItem._id + '_Thu_2'" v-on:click="setting(classItem._id, 'Thu', 2)"
                    class="scheduleCell Thu2">2.
                </td>

                <td v-bind:id="classItem._id + '_Subject_Fri_2'" class="scheduleSubjectCell">
                </td>
                <td v-bind:id="classItem._id + '_Fri_2'" v-on:click="setting(classItem._id, 'Fri', 2)"
                    class="scheduleCell Fri2">2.
                </td>
            </tr>
            <tr>
                <td v-bind:id="classItem._id + '_Subject_Mon_3'" class="scheduleSubjectCell">
                </td>
                <td v-bind:id="classItem._id + '_Mon_3'" v-on:click="setting(classItem._id, 'Mon', 3)"
                    class="scheduleCell Mon3">3.
                </td>

                <td v-bind:id="classItem._id + '_Subject_Tue_3'" class="scheduleSubjectCell">
                </td>
                <td v-bind:id="classItem._id + '_Tue_3'" v-on:click="setting(classItem._id, 'Tue', 3)"
                    class="scheduleCell Tue3">3.
                </td>

                <td v-bind:id="classItem._id + '_Subject_Wed_3'" class="scheduleSubjectCell">
                </td>
                <td v-bind:id="classItem._id + '_Wed_3'" v-on:click="setting(classItem._id, 'Wed', 3)"
                    class="scheduleCell Wed3">3.
                </td>

                <td v-bind:id="classItem._id + '_Subject_Thu_3'" class="scheduleSubjectCell">
                </td>
                <td v-bind:id="classItem._id + '_Thu_3'" v-on:click="setting(classItem._id, 'Thu', 3)"
                    class="scheduleCell Thu3">3.
                </td>

                <td v-bind:id="classItem._id + '_Subject_Fri_3'" class="scheduleSubjectCell">
                </td>
                <td v-bind:id="classItem._id + '_Fri_3'" v-on:click="setting(classItem._id, 'Fri', 3)"
                    class="scheduleCell Fri3">3.
                </td>
            </tr>
            <tr>
                <td v-bind:id="classItem._id + '_Subject_Mon_4'" class="scheduleSubjectCell">
                </td>
                <td v-bind:id="classItem._id + '_Mon_4'" v-on:click="setting(classItem._id, 'Mon', 4)"
                    class="scheduleCell Mon4">4.
                </td>

                <td v-bind:id="classItem._id + '_Subject_Tue_4'" class="scheduleSubjectCell">
                </td>
                <td v-bind:id="classItem._id + '_Tue_4'" v-on:click="setting(classItem._id, 'Tue', 4)"
                    class="scheduleCell Tue4">4.
                </td>

                <td v-bind:id="classItem._id + '_Subject_Wed_4'" class="scheduleSubjectCell">
                </td>
                <td v-bind:id="classItem._id + '_Wed_4'" v-on:click="setting(classItem._id, 'Wed', 4)"
                    class="scheduleCell Wed4">4.
                </td>

                <td v-bind:id="classItem._id + '_Subject_Thu_4'" class="scheduleSubjectCell">
                </td>
                <td v-bind:id="classItem._id + '_Thu_4'" v-on:click="setting(classItem._id, 'Thu', 4)"
                    class="scheduleCell Thu4">4.
                </td>

                <td v-bind:id="classItem._id + '_Subject_Fri_4'" class="scheduleSubjectCell">
                </td>
                <td v-bind:id="classItem._id + '_Fri_4'" v-on:click="setting(classItem._id, 'Fri', 4)"
                    class="scheduleCell Fri4">4.
                </td>
            </tr>
            <tr>
                <td v-bind:id="classItem._id + '_Subject_Mon_5'" class="scheduleSubjectCell">
                </td>
                <td v-bind:id="classItem._id + '_Mon_5'" v-on:click="setting(classItem._id, 'Mon', 5)"
                    class="scheduleCell Mon5">5.
                </td>
                <td rowspan="3" v-bind:id="classItem._id + '_Mon_Afternoon'"
                    v-on:click="settingMulti(classItem._id, 'Mon', 3)"
                    class="afternoonTd borderBottom borderRight blueOff">
                    <button class="fluid ui teal button afternoonButton" onclick="this.blur();"><i
                            class="moon outline icon afternoonI"></i></button>
                </td>

                <td v-bind:id="classItem._id + '_Subject_Tue_5'" class="scheduleSubjectCell">
                </td>
                <td v-bind:id="classItem._id + '_Tue_5'" v-on:click="setting(classItem._id, 'Tue', 5)"
                    class="scheduleCell Tue5">5.
                </td>
                <td rowspan="3" v-bind:id="classItem._id + '_Tue_Afternoon'"
                    v-on:click="settingMulti(classItem._id, 'Tue', 3)"
                    class="afternoonTd borderBottom borderRight blueOff">
                    <button class="fluid ui teal button afternoonButton" onclick="this.blur();"><i
                            class="moon outline icon afternoonI"></i></button>
                </td>

                <td v-bind:id="classItem._id + '_Subject_Wed_5'" class="scheduleSubjectCell">
                </td>
                <td v-bind:id="classItem._id + '_Wed_5'" v-on:click="setting(classItem._id, 'Wed', 5)"
                    class="scheduleCell Wed5">5.
                </td>
                <td rowspan="3" v-bind:id="classItem._id + '_Wed_Afternoon'"
                    v-on:click="settingMulti(classItem._id, 'Wed', 3)"
                    class="afternoonTd borderBottom borderRight blueOff">
                    <button class="fluid ui teal button afternoonButton" onclick="this.blur();"><i
                            class="moon outline icon afternoonI"></i></button>
                </td>

                <td v-bind:id="classItem._id + '_Subject_Thu_5'" class="scheduleSubjectCell">
                </td>
                <td v-bind:id="classItem._id + '_Thu_5'" v-on:click="setting(classItem._id, 'Thu', 5)"
                    class="scheduleCell Thu5">5.
                </td>
                <td rowspan="3" v-bind:id="classItem._id + '_Thu_Afternoon'"
                    v-on:click="settingMulti(classItem._id, 'Thu', 3)"
                    class="afternoonTd borderBottom borderRight blueOff">
                    <button class="fluid ui teal button afternoonButton" onclick="this.blur();"><i
                            class="moon outline icon afternoonI"></i></button>
                </td>

                <td v-bind:id="classItem._id + '_Subject_Fri_5'" class="scheduleSubjectCell">
                </td>
                <td v-bind:id="classItem._id + '_Fri_5'" v-on:click="setting(classItem._id, 'Fri', 5)"
                    class="scheduleCell Fri5">5.
                </td>
                <td rowspan="3" v-bind:id="classItem._id + '_Fri_Afternoon'"
                    v-on:click="settingMulti(classItem._id, 'Fri', 3)"
                    class="afternoonTd borderBottom borderRight blueOff">
                    <button class="fluid ui teal button afternoonButton" onclick="this.blur();"><i
                            class="moon outline icon afternoonI"></i></button>
                </td>

            </tr>
            <tr>
                <td v-bind:id="classItem._id + '_Subject_Mon_6'" class="scheduleSubjectCell">
                </td>
                <td v-bind:id="classItem._id + '_Mon_6'" v-on:click="setting(classItem._id, 'Mon', 6)"
                    class="scheduleCell Mon6">6.
                </td>

                <td v-bind:id="classItem._id + '_Subject_Tue_6'" class="scheduleSubjectCell">
                </td>
                <td v-bind:id="classItem._id + '_Tue_6'" v-on:click="setting(classItem._id, 'Tue', 6)"
                    class="scheduleCell Tue6">6.
                </td>

                <td v-bind:id="classItem._id + '_Subject_Wed_6'" class="scheduleSubjectCell">
                </td>
                <td v-bind:id="classItem._id + '_Wed_6'" v-on:click="setting(classItem._id, 'Wed', 6)"
                    class="scheduleCell Wed6">6.
                </td>

                <td v-bind:id="classItem._id + '_Subject_Thu_6'" class="scheduleSubjectCell">
                </td>
                <td v-bind:id="classItem._id + '_Thu_6'" v-on:click="setting(classItem._id, 'Thu', 6)"
                    class="scheduleCell Thu6">6.
                </td>

                <td v-bind:id="classItem._id + '_Subject_Fri_6'" class="scheduleSubjectCell">
                </td>
                <td v-bind:id="classItem._id + '_Fri_6'" v-on:click="setting(classItem._id, 'Fri', 6)"
                    class="scheduleCell Fri6">6.
                </td>
            </tr>
            <tr>
                <td v-bind:id="classItem._id + '_Subject_Mon_7'" class="scheduleSubjectCell borderBottom">
                </td>
                <td v-bind:id="classItem._id + '_Mon_7'" v-on:click="setting(classItem._id, 'Mon', 7)"
                    class="scheduleCell borderBottom Mon7">7.
                </td>

                <td v-bind:id="classItem._id + '_Subject_Tue_7'" class="scheduleSubjectCell borderBottom">
                </td>
                <td v-bind:id="classItem._id + '_Tue_7'" v-on:click="setting(classItem._id, 'Tue', 7)"
                    class="scheduleCell borderBottom Tue7">7.
                </td>

                <td v-bind:id="classItem._id + '_Subject_Wed_7'" class="scheduleSubjectCell borderBottom">
                </td>
                <td v-bind:id="classItem._id + '_Wed_7'" v-on:click="setting(classItem._id, 'Wed', 7)"
                    class="scheduleCell borderBottom Wed7">7.
                </td>

                <td v-bind:id="classItem._id + '_Subject_Thu_7'" class="scheduleSubjectCell borderBottom">
                </td>
                <td v-bind:id="classItem._id + '_Thu_7'" v-on:click="setting(classItem._id, 'Thu', 7)"
                    class="scheduleCell borderBottom Thu7">7.
                </td>

                <td v-bind:id="classItem._id + '_Subject_Fri_7'" class="scheduleSubjectCell borderBottom">
                </td>
                <td v-bind:id="classItem._id + '_Fri_7'" v-on:click="setting(classItem._id, 'Fri', 7)"
                    class="scheduleCell borderBottom Fri7">7.
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
  const ON = "rgb(127, 255, 212)";
  const OFF = "rgb(255, 255, 254)";
  const RED = "rgb(255, 159, 159)";
  const BLUE_ON = "rgb(227, 239, 248)";
  const BLUE_OFF = "rgb(227, 239, 249)";

  export default {
    name: 'schedule-table',
    data() {
      return {
        classes: [],
        classesGrade: [],
        classesIdGrade: [],
        schedules: [],
        countTeached: 0,
        schedulesClass: [],
        subjectSchedulesClass: [],
        position: []
      };
    },
    props: {
      teacherId: {
        type: String,
        default() {
          return ''
        }
      },
      toggleDel: {
        type: Boolean,
        default() {
          return true
        }
      },
      teachers: {
        type: Array,
        default() {
          return []
        }
      },
      subjects: {
        type: Array,
        default() {
          return []
        }
      },
      grade: {
        type: Number,
        default() {
          return 1
        }
      }
    },
    async mounted() {
      let self = this;

      // Thứ trong tuần
      let dateType = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

      // Tiết trong ngày
      let classHour = [1, 2, 3, 4, 5, 6, 7];

      // Biến kiểm tra DOM load id xong chưa
      let isExist = false;

      // Giữ header khi scroll
      let scheduleHeader = document.getElementById("scheduleHeader");
      let teachersList = document.getElementById("teachersList");
      let scheduleTable = document.getElementById("scheduleTable");
      window.onscroll = function () {
        if (window.pageYOffset > 87) {
          scheduleHeader.classList.add("sticky");
        } else {
          scheduleHeader.classList.remove("sticky");
        }
        if (window.pageYOffset > 73) {
          teachersList.classList.add("stickyTeachersList");
          scheduleTable.classList.add("stickyScheduleTable");
        } else {
          teachersList.classList.remove("stickyTeachersList");
          scheduleTable.classList.remove("stickyScheduleTable");
        }
      };

      // Lấy thông tin giáo viên
      let teacher = self.teachers.find(element => element._id == self.teacherId);

      // Get toàn bộ danh sách lớp học
      self.classes = await self.$store.dispatch('getClasses');

      // Lọc ra các lớp thuộc khối chỉ định
      for (let i = 0; i < self.classes.length; i++) {
        if (self.classes[i].grade == self.$store.state.gradeSchedule) {
          self.classesIdGrade.push(self.classes[i]._id);
          self.classesGrade.push(self.classes[i]);
        }

      }

      // Get toàn bộ danh sách các tiết học đã được đăng kí
      self.schedules = await self.$store.dispatch('getSchedules');

      // Lọc ra lịch đăng kí thuộc khối chỉ định
      for (let i = 0; i < self.schedules.length; i++) {
        if (self.classesIdGrade.includes(self.schedules[i].class_id)) {
          self.schedulesClass.push(self.schedules[i]);
        }
      }
      let checkExistTeacherId = setInterval(function () {
        // Check DOM đã render xong id hay chưa
        if (self.teacherId != '') {
          for (let i = 0; i < self.schedules.length; i++) {
            if (self.schedules[i].teacher_id == self.teacherId) {
              if (!self.position.find(element => element.date_type == self.schedules[i].date_type && element.class_hour == self.schedules[i].class_hour)) {
                self.position.push({date_type: self.schedules[i].date_type, class_hour: self.schedules[i].class_hour});
              }
            }
          }
          clearInterval(checkExistTeacherId);
        }
      }, 100);

      // Get toàn bộ danh sách môn học đã được đăng kí
      self.subjectSchedules = await self.$store.dispatch('getSubjectSchedules');

      // Lọc ra lịch đăng kí thuộc khối chỉ định
      for (let i = 0; i < self.subjectSchedules.length; i++) {
        if (self.classesIdGrade.includes(self.subjectSchedules[i].class_id)) {
          self.subjectSchedulesClass.push(self.subjectSchedules[i]);
        }
      }

      // Kiểm tra tồn tại các tiết học đã được đăng kí để biêt DOM đã render xong hay chưa
      if (self.schedulesClass.length == 0) {
        isExist = true;
      }

      // Set màu dựa vào tiết học đã đăng kí
      for (let i = 0; i < self.schedulesClass.length; i++) {
        let checkExist = setInterval(function () {
          // Check DOM đã render xong id hay chưa
          if (document.getElementById(self.schedulesClass[i].class_id + '_' + self.schedulesClass[i].date_type + '_' + self.schedulesClass[i].class_hour) && self.teacherId != '') {
            if (self.schedulesClass[i].teacher_id == self.teacherId) {
              // Set màu xanh cho tiết đăng kí
              document.getElementById(self.schedulesClass[i].class_id + '_' + self.schedulesClass[i].date_type + '_' + self.schedulesClass[i].class_hour).style.backgroundColor = ON;
            } else {
              // Set màu xám cho tiết của giáo viên khác
              document.getElementById(self.schedulesClass[i].class_id + '_' + self.schedulesClass[i].date_type + '_' + self.schedulesClass[i].class_hour).style.backgroundColor = OFF;
            }

            // Set tên giáo viên dạy tiết đó
            document.getElementById(self.schedulesClass[i].class_id + '_' + self.schedulesClass[i].date_type + '_' + self.schedulesClass[i].class_hour).innerHTML = self.schedulesClass[i].class_hour + '. ' + self.teachers.find(element => element._id == self.schedulesClass[i].teacher_id).name;

            // Thông báo DOM đã render xong toàn bộ
            if (i == self.schedulesClass.length - 1) {
              isExist = true;
            }
            clearInterval(checkExist);
          }
        }, 100);
      }

      let isColorSubjectDone = false;
      for (let i = 0; i < self.classesGrade.length; i++) {
        for (let j = 0; j < dateType.length; j++) {
          for (let k = 0; k < classHour.length; k++) {
            let checkExist = setInterval(function () {
              // Check DOM đã render xong id hay chưa
              if (document.getElementById(self.classesGrade[i]._id + '_Subject_' + dateType[j] + '_' + classHour[k])) {
                // Set màu môn học
                document.getElementById(self.classesGrade[i]._id + '_Subject_' + dateType[j] + '_' + classHour[k]).style.backgroundColor = BLUE_OFF;

                if (i == self.classesGrade.length - 1 && j == dateType.length - 1 && k == classHour.length - 1) {
                  isColorSubjectDone = true;
                }
                clearInterval(checkExist);
              }
            }, 100);
          }
        }
      }

      // Set môn học đã đăng kí
      for (let i = 0; i < self.subjectSchedulesClass.length; i++) {
        let checkExist = setInterval(function () {
          // Check DOM đã render xong id hay chưa
          if (isColorSubjectDone) {
            // Set tên môn học
            document.getElementById(self.subjectSchedulesClass[i].class_id + '_Subject_' + self.subjectSchedulesClass[i].date_type + '_' + self.subjectSchedulesClass[i].class_hour).innerHTML = self.subjects.find(element => element._id == self.subjectSchedulesClass[i].subject_id).name;
            document.getElementById(self.subjectSchedulesClass[i].class_id + '_Subject_' + self.subjectSchedulesClass[i].date_type + '_' + self.subjectSchedulesClass[i].class_hour).style.backgroundColor = BLUE_ON;
            clearInterval(checkExist);
          }
        }, 100);
      }

      // DOM đã render xong toàn bộ nên có thể set màu đỏ cho tiết bận
      let checkDoneLoad = setInterval(function () {
        if (isExist) {
          let teacherObj = self.teachers.find(element => element._id == self.teacherId);
          for (let j = 0; j < teacherObj.busy.length; j++) {
            let x = document.getElementsByClassName(teacherObj.busy[j]);
            for (let k = 0; k < x.length; k++) {
              x[k].style.backgroundColor = RED;
            }
          }

          // Lọc ra các lớp thuộc khối chỉ định
          for (let i = 0; i < self.classesGrade.length; i++) {
            for (let j = 0; j < dateType.length; j++) {
              for (let k = 0; k < classHour.length; k++) {
                if ((teacherObj.homeroom_flg && document.getElementById(self.classesGrade[i]._id + '_Subject_' + dateType[j] + '_' + classHour[k]).style.backgroundColor == BLUE_ON)
                  || (!teacherObj.homeroom_flg && document.getElementById(self.classesGrade[i]._id + '_Subject_' + dateType[j] + '_' + classHour[k]).style.backgroundColor == BLUE_OFF)) {
                  document.getElementById(self.classesGrade[i]._id + '_' + dateType[j] + '_' + classHour[k]).style.backgroundColor = RED;
                }
              }
            }
          }

          // Set đỏ cho những tiết trùng dạy lớp khác
          for (let i = 0; i < self.position.length; i++) {
            let x = document.getElementsByClassName(self.position[i].date_type + self.position[i].class_hour);
            for (let k = 0; k < x.length; k++) {
              if (x[k].style.backgroundColor != ON && x[k].style.backgroundColor != RED) {
                x[k].style.backgroundColor = RED;
              }
            }
          }

          clearInterval(checkDoneLoad);
        }
      }, 100);

      // Đếm số lượng tiết đã đăng kí
      for (let i = 0; i < self.schedules.length; i++) {
        if (self.schedules[i].teacher_id == self.teacherId) {
          self.countTeached += 1;
        }
      }

      // Gửi số lượng tiết đã đăng kí ra parrent Schedule.vue
      this.$emit('lessionTeached', self.countTeached)
    },
    watch: {
      teacherId: async function (newVal, oldVal) {
        let self = this;
        self.position = [];

        // Thứ trong tuần
        let dateType = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

        // Tiết trong ngày
        let classHour = [1, 2, 3, 4, 5, 6, 7];

        // Get lại danh sách schedule
        self.schedules = await self.$store.dispatch('getSchedules');

        // Clear toàn bộ lịch theo của khối lớp chỉ định
        self.schedulesClass = [];

        // Lọc ra các schedule thuộc khối chỉ định
        for (let i = 0; i < self.schedules.length; i++) {
          if (self.classesIdGrade.includes(self.schedules[i].class_id)) {
            self.schedulesClass.push(self.schedules[i]);
          }
          if (self.schedules[i].teacher_id == newVal) {
            if (!self.position.find(element => element.date_type == self.schedules[i].date_type && element.class_hour == self.schedules[i].class_hour)) {
              self.position.push({date_type: self.schedules[i].date_type, class_hour: self.schedules[i].class_hour});
            }
          }
        }

        self.countTeached = 0;

        if (oldVal == "") {
          oldVal = self.teachers[0]._id;
        }

        // Xóa màu những tiết bận của giáo viên trước
        let x = document.getElementsByClassName("scheduleCell");
        for (let i = 0; i < x.length; i++) {
          x[i].style.backgroundColor = null;
        }

        // Set màu dựa vào tiết học đã đăng kí
        for (let i = 0; i < self.schedulesClass.length; i++) {
          if (self.schedulesClass[i].teacher_id == newVal) {
            // Set màu xanh cho tiết đã đăng kí
            document.getElementById(self.schedulesClass[i].class_id + '_' + self.schedulesClass[i].date_type + '_' + self.schedulesClass[i].class_hour).style.backgroundColor = ON;
          } else {
            // Set màu xám cho tiết đã đăng kí của giáo viên khác
            document.getElementById(self.schedulesClass[i].class_id + '_' + self.schedulesClass[i].date_type + '_' + self.schedulesClass[i].class_hour).style.backgroundColor = OFF;
          }
        }

        // Set màu đỏ cho những tiết bận việc riêng không thể dạy
        let foundAdd = self.teachers.find(element => element._id == newVal);
        for (let i = 0; i < foundAdd.busy.length; i++) {
          let x = document.getElementsByClassName(foundAdd.busy[i]);
          for (let j = 0; j < x.length; j++) {
            x[j].style.backgroundColor = RED;
          }
        }

        // Lọc ra các lớp thuộc khối chỉ định
        for (let i = 0; i < self.classesGrade.length; i++) {
          for (let j = 0; j < dateType.length; j++) {
            for (let k = 0; k < classHour.length; k++) {
              if ((foundAdd.homeroom_flg && document.getElementById(self.classesGrade[i]._id + '_Subject_' + dateType[j] + '_' + classHour[k]).style.backgroundColor == BLUE_ON)
                || (!foundAdd.homeroom_flg && document.getElementById(self.classesGrade[i]._id + '_Subject_' + dateType[j] + '_' + classHour[k]).style.backgroundColor == BLUE_OFF)) {
                document.getElementById(self.classesGrade[i]._id + '_' + dateType[j] + '_' + classHour[k]).style.backgroundColor = RED;
              }
            }
          }
        }

        // Set đỏ cho những tiết trùng dạy lớp khác
        for (let i = 0; i < self.position.length; i++) {
          let x = document.getElementsByClassName(self.position[i].date_type + self.position[i].class_hour);
          for (let k = 0; k < x.length; k++) {
            if (x[k].style.backgroundColor != ON && x[k].style.backgroundColor != RED) {
              x[k].style.backgroundColor = RED;
            }
          }
        }

        // Đếm số lượng tiết đã đăng kí
        for (let i = 0; i < self.schedules.length; i++) {
          if (self.schedules[i].teacher_id == newVal) {
            self.countTeached += 1;
          }
        }

        // Gửi số lượng tiết đã đăng kí ra parrent Schedule.vue
        this.$emit('lessionTeached', self.countTeached);
      },
      toggleDel: async function (newVal, oldVal) {
        let self = this;
        if (confirm("Bạn muốn xóa toàn bộ thời khóa biểu?")) {
          // Xóa toàn bộ các tiết đã được đăng kí
          await self.$store.dispatch('deleteSchedules');

          // Set lại text hiển thị thứ tự tiết (1. 2. 3. ... 7.)
          let x = document.getElementsByClassName("scheduleCell");
          let count = 0;
          for (let i = 0; i < x.length; i++) {
            if (Math.floor(count / 5) + 1 > 7) {
              count = 0
            }
            if (x[i].style.backgroundColor != RED) {
              x[i].style.backgroundColor = null;
            }
            x[i].innerHTML = Math.floor(count / 5) + 1 + '. '
            count = count + 1;
          }

          // Lấy thông tin giáo viên
          let teacher = self.teachers.find(element => element._id == self.teacherId);

          // Xóa đỏ các tiết dạy trùng
          if (teacher.homeroom_flg) {
            for (let i = 0; i < self.position.length; i++) {
              let duplicateLession = document.getElementsByClassName(self.position[i].date_type + self.position[i].class_hour);
              for (let k = 0; k < duplicateLession.length; k++) {
                if (duplicateLession[k].style.backgroundColor == RED && duplicateLession[k].previousSibling.innerHTML == "") {
                  duplicateLession[k].style.backgroundColor = null;
                }
              }
            }
          } else {
            for (let i = 0; i < self.position.length; i++) {
              let duplicateLession = document.getElementsByClassName(self.position[i].date_type + self.position[i].class_hour);
              for (let k = 0; k < duplicateLession.length; k++) {
                if (duplicateLession[k].style.backgroundColor == RED && duplicateLession[k].previousSibling.innerHTML != "") {
                  duplicateLession[k].style.backgroundColor = null;
                }
              }
            }
          }

          self.position = [];

          // Set lại số lượng tiết đã dạy về 0
          this.countTeached = 0;

          // Gửi số lượng tiết đã đăng kí ra parrent Schedule.vue
          this.$emit('lessionTeached', this.countTeached);
        }
      },
      grade: async function (newVal, oldVal) {
        let self = this;

        // Thứ trong tuần
        let dateType = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

        // Tiết trong ngày
        let classHour = [1, 2, 3, 4, 5, 6, 7];

        // Biến kiểm tra DOM load id xong chưa
        let isExist = false;

        // Clear biến
        self.classesIdGrade = [];
        self.classesGrade = [];
        self.schedulesClass = [];
        self.subjectSchedulesClass = [];

        // Lọc các lớp thuộc khối chỉ định
        for (let i = 0; i < self.classes.length; i++) {
          if (self.classes[i].grade == newVal) {
            self.classesIdGrade.push(self.classes[i]._id);
            self.classesGrade.push(self.classes[i]);
          }
        }

        // Get toàn bộ danh sách các tiết học đã được đăng kí
        self.schedules = await self.$store.dispatch('getSchedules');

        // Lọc ra lịch đăng kí thuộc khối chỉ định
        for (let i = 0; i < self.schedules.length; i++) {
          if (self.classesIdGrade.includes(self.schedules[i].class_id)) {
            self.schedulesClass.push(self.schedules[i]);
          }
        }

        // Xóa màu và set lại chữ các tiết dạy của khối trước
        let x = document.getElementsByClassName("scheduleCell");
        let count = 0;
        for (let i = 0; i < x.length; i++) {
          if (Math.floor(count / 5) + 1 > 7) {
            count = 0
          }
          x[i].style.backgroundColor = null;
          x[i].innerHTML = Math.floor(count / 5) + 1 + '. '
          count = count + 1;
        }

        // Get toàn bộ danh sách môn học đã được đăng kí
        self.subjectSchedules = await self.$store.dispatch('getSubjectSchedules');

        // Lọc ra lịch đăng kí thuộc khối chỉ định
        for (let i = 0; i < self.subjectSchedules.length; i++) {
          if (self.classesIdGrade.includes(self.subjectSchedules[i].class_id)) {
            self.subjectSchedulesClass.push(self.subjectSchedules[i]);
          }
        }

        // Xóa màu và chữ các môn học của khối trước
        let scheduleSubjectCell = document.getElementsByClassName("scheduleSubjectCell");
        for (let i = 0; i < scheduleSubjectCell.length; i++) {
          scheduleSubjectCell[i].style.backgroundColor = BLUE_OFF;
          scheduleSubjectCell[i].innerHTML = "";
        }

        // Set màu dựa vào tiết học đã đăng kí
        for (let i = 0; i < self.schedulesClass.length; i++) {
          if (document.getElementById(self.schedulesClass[i].class_id + '_' + self.schedulesClass[i].date_type + '_' + self.schedulesClass[i].class_hour)) {
            if (self.schedulesClass[i].teacher_id == self.teacherId) {
              // Set màu xanh cho tiết đăng kí
              document.getElementById(self.schedulesClass[i].class_id + '_' + self.schedulesClass[i].date_type + '_' + self.schedulesClass[i].class_hour).style.backgroundColor = ON;
            } else {
              // Set màu xám cho tiết của giáo viên khác
              document.getElementById(self.schedulesClass[i].class_id + '_' + self.schedulesClass[i].date_type + '_' + self.schedulesClass[i].class_hour).style.backgroundColor = OFF;
            }

            // Set tên giáo viên dạy tiết đó
            document.getElementById(self.schedulesClass[i].class_id + '_' + self.schedulesClass[i].date_type + '_' + self.schedulesClass[i].class_hour).innerHTML = self.schedulesClass[i].class_hour + '. ' + self.teachers.find(element => element._id == self.schedulesClass[i].teacher_id).name;
          }
        }

        // Set môn học đã đăng kí
        for (let i = 0; i < self.subjectSchedulesClass.length; i++) {
          // Check DOM đã render xong id hay chưa
          if (document.getElementById(self.subjectSchedulesClass[i].class_id + '_Subject_' + self.subjectSchedulesClass[i].date_type + '_' + self.subjectSchedulesClass[i].class_hour)) {
            // Set tên giáo viên dạy tiết đó
            document.getElementById(self.subjectSchedulesClass[i].class_id + '_Subject_' + self.subjectSchedulesClass[i].date_type + '_' + self.subjectSchedulesClass[i].class_hour).style.backgroundColor = BLUE_ON;
            document.getElementById(self.subjectSchedulesClass[i].class_id + '_Subject_' + self.subjectSchedulesClass[i].date_type + '_' + self.subjectSchedulesClass[i].class_hour).innerHTML = self.subjects.find(element => element._id == self.subjectSchedulesClass[i].subject_id).name;
          }
        }

        // Set màu đỏ cho những tiết bận việc riêng không thể dạy
        let foundAdd = self.teachers.find(element => element._id == self.teacherId);
        for (let i = 0; i < foundAdd.busy.length; i++) {
          let x = document.getElementsByClassName(foundAdd.busy[i]);
          for (let j = 0; j < x.length; j++) {
            x[j].style.backgroundColor = RED;
          }
        }

        // Lọc ra các lớp thuộc khối chỉ định
        for (let i = 0; i < self.classesGrade.length; i++) {
          for (let j = 0; j < dateType.length; j++) {
            for (let k = 0; k < classHour.length; k++) {
              if ((foundAdd.homeroom_flg && document.getElementById(self.classesGrade[i]._id + '_Subject_' + dateType[j] + '_' + classHour[k]).style.backgroundColor == BLUE_ON)
                || (!foundAdd.homeroom_flg && document.getElementById(self.classesGrade[i]._id + '_Subject_' + dateType[j] + '_' + classHour[k]).style.backgroundColor == BLUE_OFF)) {
                document.getElementById(self.classesGrade[i]._id + '_' + dateType[j] + '_' + classHour[k]).style.backgroundColor = RED;
              }
            }
          }
        }

        // Set đỏ cho những tiết trùng dạy lớp khác
        for (let i = 0; i < self.position.length; i++) {
          let x = document.getElementsByClassName(self.position[i].date_type + self.position[i].class_hour);
          for (let k = 0; k < x.length; k++) {
            if (x[k].style.backgroundColor != ON && x[k].style.backgroundColor != RED) {
              x[k].style.backgroundColor = RED;
            }
          }
        }
      }
    },
    methods: {
      setting: async function (classId, dateType, classHour) {
        let self = this;
        let schedule = new Object();
        schedule.teacher_id = self.teacherId;
        schedule.date_type = dateType;
        schedule.class_hour = classHour;
        schedule.class_id = classId;
        let scheduleEle = document.getElementById(schedule.class_id + '_' + schedule.date_type + '_' + schedule.class_hour);
        let teacher = self.teachers.find(element => element._id == schedule.teacher_id);

        // Kiểm tra có giáo viên khác đăng kí chưa
        if (scheduleEle.style.backgroundColor == OFF) {
          // Kiểm tra đã đủ số tiết dạy chưa
          if (self.countTeached >= teacher.lessons_quantity) {
            alert("Đã đủ số lượng tiết dạy của giáo viên " + teacher.name);
          } else {
            if (confirm("Tiết này đã có giáo viên dạy, bạn muốn thay thế?")) {
              // Xóa schedule của giáo viên đăng kí trước
              await self.$store.dispatch('deleteSchedule', schedule);

              // Tạo schedule cho giáo viên mới thay thế
              await self.$store.dispatch('createSchedule', schedule);

              // Set màu và tên giáo viên
              scheduleEle.style.backgroundColor = ON;
              scheduleEle.innerHTML = classHour + '. ' + teacher.name;

              // Set đỏ cho những tiết trùng dạy lớp khác
              self.position.push({date_type: dateType, class_hour: classHour});
              let x = document.getElementsByClassName(dateType + classHour);
              for (let k = 0; k < x.length; k++) {
                if (x[k].style.backgroundColor != ON && x[k].style.backgroundColor != RED) {
                  x[k].style.backgroundColor = RED;
                }
              }

              // Tăng số lượng tiết học đã chọn
              self.countTeached += 1;
            }
          }
        } else if (scheduleEle.style.backgroundColor == ON) {
          // Kiểm tra tiết đã được đăng kí bởi chính giáo viên này thì sẽ remove đi
          await self.$store.dispatch('deleteSchedule', schedule);
          scheduleEle.style.backgroundColor = null;
          scheduleEle.innerHTML = classHour + '. ';

          // Xóa đỏ cho những tiết trùng dạy lớp khác
          if (teacher.homeroom_flg) {
            let filtered = self.position.filter(function (item) {
              return item.date_type != dateType || item.class_hour != classHour;
            });
            self.position = filtered;
            let x = document.getElementsByClassName(dateType + classHour);
            for (let k = 0; k < x.length; k++) {
              if (x[k].style.backgroundColor == RED && x[k].previousSibling.innerHTML == "") {
                x[k].style.backgroundColor = null;
              }
            }
          } else {
            let filtered = self.position.filter(function (item) {
              return item.date_type != dateType || item.class_hour != classHour;
            });
            self.position = filtered;
            let x = document.getElementsByClassName(dateType + classHour);
            for (let k = 0; k < x.length; k++) {
              if (x[k].style.backgroundColor == RED && x[k].previousSibling.innerHTML != "") {
                x[k].style.backgroundColor = null;
              }
            }
          }

          // Giảm số lượng tiết học đã chọn
          self.countTeached -= 1;
        } else if (scheduleEle.style.backgroundColor == RED) {
          // Kiểm tra nếu là tiết bận sẽ ko đăng kí được
          alert(teacher.name + " không thể dạy tiết này");
        } else {
          // Kiểm tra đủ số tiết dạy sẽ alert msg
          if (self.countTeached >= teacher.lessons_quantity) {
            alert("Đã đủ số lượng tiết dạy của giáo viên " + teacher.name);
          } else {
            await self.$store.dispatch('createSchedule', schedule);
            scheduleEle.style.backgroundColor = ON;
            scheduleEle.innerHTML = classHour + '. ' + teacher.name;

            // Set đỏ cho những tiết trùng dạy lớp khác
            self.position.push({date_type: dateType, class_hour: classHour});
            let x = document.getElementsByClassName(dateType + classHour);
            for (let k = 0; k < x.length; k++) {
              if (x[k].style.backgroundColor != ON && x[k].style.backgroundColor != RED) {
                x[k].style.backgroundColor = RED;
              }
            }

            // Tăng số lượng tiết học đã chọn
            self.countTeached += 1;
          }
        }

        // Gửi số lượng tiết đã chọn ra parrent Schedule.vue
        this.$emit('lessionTeached', self.countTeached)
      },
      settingMulti: async function (classId, dateType, day) {
        let self = this;
        let scheduleArr = [];
        let status = "ON";
        let count = 0;
        let classHour = 0;
        let classHourStr = "";
        let countAvailable = 0;

        // Kiểm tra đầu vào là sáng hay chiều hay cả ngày
        if (day == 4) {
          classHour = 1;
          classHourStr = "Morning";
        } else if (day == 3) {
          classHour = 5;
          classHourStr = "Afternoon";
        } else if (day == 7) {
          classHour = 1;
          classHourStr = "Day";
        }

        // Tạo mảng đối tượng xử lí schedule
        for (let i = 0; i < day; i++) {
          let schedule = new Object();
          schedule.teacher_id = self.teacherId;
          schedule.date_type = dateType;
          schedule.class_hour = i + classHour;
          schedule.class_id = classId;
          scheduleArr.push(schedule);

          // Tăng biến đếm số lượng tiết có khả năng đăng kí dạy
          if (document.getElementById(classId + '_' + dateType + '_' + (i + classHour)).style.backgroundColor != ON
            && document.getElementById(classId + '_' + dateType + '_' + (i + classHour)).style.backgroundColor != RED) {
            countAvailable += 1;
          }
        }

        let teacher = self.teachers.find(element => element._id == self.teacherId);

        for (let i = 0; i < scheduleArr.length; i++) {
          let scheduleEle = document.getElementById(scheduleArr[i].class_id + '_' + scheduleArr[i].date_type + '_' + scheduleArr[i].class_hour);
          if (status != "RED" && scheduleEle.style.backgroundColor == OFF) {
            status = "OFF";
          }
          if (scheduleEle.style.backgroundColor == ON) {
            count = count + 1;
          }
          if (scheduleEle.style.backgroundColor == RED) {
            status = "RED";
          }
        }

        if (status == "OFF") {
          if (self.countTeached + countAvailable > teacher.lessons_quantity) {
            alert("Đã đủ số lượng tiết dạy của giáo viên " + teacher.name);
          } else {
            if (confirm("Tiết này đã có giáo viên dạy, bạn muốn thay thế?")) {
              for (let i = 0; i < scheduleArr.length; i++) {
                let scheduleEle = document.getElementById(scheduleArr[i].class_id + '_' + scheduleArr[i].date_type + '_' + scheduleArr[i].class_hour);
                await self.$store.dispatch('deleteSchedule', scheduleArr[i]);
                await self.$store.dispatch('createSchedule', scheduleArr[i]);
                scheduleEle.style.backgroundColor = ON;
                scheduleEle.innerHTML = scheduleArr[i].class_hour + '. ' + self.teachers.find(element => element._id == scheduleArr[i].teacher_id).name;

                // Set đỏ cho những tiết trùng dạy lớp khác
                self.position.push({date_type: scheduleArr[i].date_type, class_hour: scheduleArr[i].class_hour});
                let x = document.getElementsByClassName(scheduleArr[i].date_type + scheduleArr[i].class_hour);
                for (let k = 0; k < x.length; k++) {
                  if (x[k].style.backgroundColor != ON && x[k].style.backgroundColor != RED) {
                    x[k].style.backgroundColor = RED;
                  }
                }
              }
              // Tăng số lượng tiết học đã chọn
              self.countTeached += countAvailable;
            }
          }
        } else if (status == "RED") {
          alert("Không thể dạy tiết này!");
        } else if (count == scheduleArr.length) {
          for (let i = 0; i < scheduleArr.length; i++) {
            let scheduleEle = document.getElementById(scheduleArr[i].class_id + '_' + scheduleArr[i].date_type + '_' + scheduleArr[i].class_hour);
            await self.$store.dispatch('deleteSchedule', scheduleArr[i]);
            scheduleEle.style.backgroundColor = null;
            scheduleEle.innerHTML = scheduleArr[i].class_hour + '. ';

            // Xóa đỏ cho những tiết trùng dạy lớp khác
            if (teacher.homeroom_flg) {
              let filtered = self.position.filter(function (item) {
                return item.date_type != scheduleArr[i].date_type || item.class_hour != scheduleArr[i].class_hour;
              });
              self.position = filtered;
              let x = document.getElementsByClassName(scheduleArr[i].date_type + scheduleArr[i].class_hour);
              for (let k = 0; k < x.length; k++) {
                if (x[k].style.backgroundColor == RED && x[k].previousSibling.innerHTML == "") {
                  x[k].style.backgroundColor = null;
                }
              }
            } else {
              let filtered = self.position.filter(function (item) {
                return item.date_type != scheduleArr[i].date_type || item.class_hour != scheduleArr[i].class_hour;
              });
              self.position = filtered;
              let x = document.getElementsByClassName(scheduleArr[i].date_type + scheduleArr[i].class_hour);
              for (let k = 0; k < x.length; k++) {
                if (x[k].style.backgroundColor == RED && x[k].previousSibling.innerHTML != "") {
                  x[k].style.backgroundColor = null;
                }
              }
            }


            // Giảm số lượng tiết học đã chọn
            self.countTeached -= 1;
          }
        } else {
          if (self.countTeached + countAvailable > teacher.lessons_quantity) {
            alert("Đã đủ số lượng tiết dạy của giáo viên " + teacher.name);
          } else {
            for (let i = 0; i < scheduleArr.length; i++) {
              let scheduleEle = document.getElementById(scheduleArr[i].class_id + '_' + scheduleArr[i].date_type + '_' + scheduleArr[i].class_hour);
              await self.$store.dispatch('deleteSchedule', scheduleArr[i]);
              await self.$store.dispatch('createSchedule', scheduleArr[i]);

              if (scheduleEle.style.backgroundColor != ON) {
                scheduleEle.style.backgroundColor = ON;
                scheduleEle.innerHTML = scheduleArr[i].class_hour + '. ' + self.teachers.find(element => element._id == scheduleArr[i].teacher_id).name;

                // Set đỏ cho những tiết trùng dạy lớp khác
                self.position.push({date_type: scheduleArr[i].date_type, class_hour: scheduleArr[i].class_hour});
                let x = document.getElementsByClassName(scheduleArr[i].date_type + scheduleArr[i].class_hour);
                for (let k = 0; k < x.length; k++) {
                  if (x[k].style.backgroundColor != ON && x[k].style.backgroundColor != RED) {
                    x[k].style.backgroundColor = RED;
                  }
                }
              }
            }

            // Tăng số lượng tiết học đã chọn
            self.countTeached += countAvailable;
          }
        }

        // Gửi số lượng tiết đã chọn ra parrent Schedule.vue
        this.$emit('lessionTeached', self.countTeached)
      }
    }
  };
</script>
