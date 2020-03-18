<template>
    <div>
        <table id="scheduleHeader" class="ui celled table noselect">
            <thead>
            <tr>
                <th class="className">Lớp</th>
                <th class="scheduleHeader" colspan="2">Thứ hai</th>
                <th class="scheduleHeader" colspan="2">Thứ ba</th>
                <th class="scheduleHeader" colspan="2">Thứ tư</th>
                <th class="scheduleHeader" colspan="2">Thứ năm</th>
                <th class="scheduleHeader" colspan="2">Thứ sáu</th>
            </tr>
            </thead>
        </table>
        <table id="schedule" class="teachers ui celled table noselect">
            <tbody v-for="(classItem, i) in classesGrade" :key="i">
            <tr>
                <td rowspan="7" class="borderAll className">{{ classItem.name }}</td>
                <td v-bind:id="classItem._id + '_Mon_1'" v-on:click="setting(classItem._id, 'Mon', 1)"
                    class="subjectCell borderTop Mon1">1.
                </td>
                <td rowspan="4" v-bind:id="classItem._id + '_Mon_Morning'"
                    v-on:click="settingMulti(classItem._id, 'Mon', 4)" class="morningTd blueOff borderTop">
                    <button class="fluid ui teal button morningButton" onclick="this.blur();"><i class="sun outline icon morningI"></i>
                    </button>
                </td>
                <td v-bind:id="classItem._id + '_Tue_1'" v-on:click="setting(classItem._id, 'Tue', 1)"
                    class="subjectCell borderTop Tue1">1.
                </td>
                <td rowspan="4" v-bind:id="classItem._id + '_Tue_Morning'"
                    v-on:click="settingMulti(classItem._id, 'Tue', 4)" class="morningTd blueOff borderTop">
                    <button class="fluid ui teal button morningButton" onclick="this.blur();"><i class="sun outline icon morningI"></i>
                    </button>
                </td>
                <td v-bind:id="classItem._id + '_Wed_1'" v-on:click="setting(classItem._id, 'Wed', 1)"
                    class="subjectCell borderTop Wed1">1.
                </td>
                <td rowspan="4" v-bind:id="classItem._id + '_Wed_Morning'"
                    v-on:click="settingMulti(classItem._id, 'Wed', 4)" class="morningTd blueOff borderTop">
                    <button class="fluid ui teal button morningButton" onclick="this.blur();"><i class="sun outline icon morningI"></i>
                    </button>
                </td>
                <td v-bind:id="classItem._id + '_Thu_1'" v-on:click="setting(classItem._id, 'Thu', 1)"
                    class="subjectCell borderTop Thu1">1.
                </td>
                <td rowspan="4" v-bind:id="classItem._id + '_Thu_Morning'"
                    v-on:click="settingMulti(classItem._id, 'Thu', 4)" class="morningTd blueOff borderTop">
                    <button class="fluid ui teal button morningButton" onclick="this.blur();"><i class="sun outline icon morningI"></i>
                    </button>
                </td>
                <td v-bind:id="classItem._id + '_Fri_1'" v-on:click="setting(classItem._id, 'Fri', 1)"
                    class="subjectCell borderTop Fri1">1.
                </td>
                <td rowspan="4" v-bind:id="classItem._id + '_Fri_Morning'"
                    v-on:click="settingMulti(classItem._id, 'Fri', 4)" class="morningTd blueOff borderTop borderRight">
                    <button class="fluid ui teal button morningButton" onclick="this.blur();"><i class="sun outline icon morningI"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td v-bind:id="classItem._id + '_Mon_2'" v-on:click="setting(classItem._id, 'Mon', 2)"
                    class="subjectCell Mon2">2.
                </td>
                <td v-bind:id="classItem._id + '_Tue_2'" v-on:click="setting(classItem._id, 'Tue', 2)"
                    class="subjectCell Tue2">2.
                </td>
                <td v-bind:id="classItem._id + '_Wed_2'" v-on:click="setting(classItem._id, 'Wed', 2)"
                    class="subjectCell Wed2">2.
                </td>
                <td v-bind:id="classItem._id + '_Thu_2'" v-on:click="setting(classItem._id, 'Thu', 2)"
                    class="subjectCell Thu2">2.
                </td>
                <td v-bind:id="classItem._id + '_Fri_2'" v-on:click="setting(classItem._id, 'Fri', 2)"
                    class="subjectCell Fri2">2.
                </td>
            </tr>
            <tr>
                <td v-bind:id="classItem._id + '_Mon_3'" v-on:click="setting(classItem._id, 'Mon', 3)"
                    class="subjectCell Mon3">3.
                </td>
                <td v-bind:id="classItem._id + '_Tue_3'" v-on:click="setting(classItem._id, 'Tue', 3)"
                    class="subjectCell Tue3">3.
                </td>
                <td v-bind:id="classItem._id + '_Wed_3'" v-on:click="setting(classItem._id, 'Wed', 3)"
                    class="subjectCell Wed3">3.
                </td>
                <td v-bind:id="classItem._id + '_Thu_3'" v-on:click="setting(classItem._id, 'Thu', 3)"
                    class="subjectCell Thu3">3.
                </td>
                <td v-bind:id="classItem._id + '_Fri_3'" v-on:click="setting(classItem._id, 'Fri', 3)"
                    class="subjectCell Fri3">3.
                </td>
            </tr>
            <tr>
                <td v-bind:id="classItem._id + '_Mon_4'" v-on:click="setting(classItem._id, 'Mon', 4)"
                    class="subjectCell Mon4">4.
                </td>
                <td v-bind:id="classItem._id + '_Tue_4'" v-on:click="setting(classItem._id, 'Tue', 4)"
                    class="subjectCell Tue4">4.
                </td>
                <td v-bind:id="classItem._id + '_Wed_4'" v-on:click="setting(classItem._id, 'Wed', 4)"
                    class="subjectCell Wed4">4.
                </td>
                <td v-bind:id="classItem._id + '_Thu_4'" v-on:click="setting(classItem._id, 'Thu', 4)"
                    class="subjectCell Thu4">4.
                </td>
                <td v-bind:id="classItem._id + '_Fri_4'" v-on:click="setting(classItem._id, 'Fri', 4)"
                    class="subjectCell Fri4">4.
                </td>
            </tr>
            <tr>
                <td v-bind:id="classItem._id + '_Mon_5'" v-on:click="setting(classItem._id, 'Mon', 5)"
                    class="subjectCell Mon5">5.
                </td>
                <td rowspan="3" v-bind:id="classItem._id + '_Mon_Afternoon'"
                    v-on:click="settingMulti(classItem._id, 'Mon', 3)" class="afternoonTd blueOff borderBottom">
                    <button class="fluid ui teal button afternoonButton" onclick="this.blur();"><i class="moon outline icon afternoonI"></i></button>
                </td>
                <td v-bind:id="classItem._id + '_Tue_5'" v-on:click="setting(classItem._id, 'Tue', 5)"
                    class="subjectCell Tue5">5.
                </td>
                <td rowspan="3" v-bind:id="classItem._id + '_Tue_Afternoon'"
                    v-on:click="settingMulti(classItem._id, 'Tue', 3)" class="afternoonTd blueOff borderBottom">
                    <button class="fluid ui teal button afternoonButton" onclick="this.blur();"><i class="moon outline icon afternoonI"></i></button>
                </td>
                <td v-bind:id="classItem._id + '_Wed_5'" v-on:click="setting(classItem._id, 'Wed', 5)"
                    class="subjectCell Wed5">5.
                </td>
                <td rowspan="3" v-bind:id="classItem._id + '_Wed_Afternoon'"
                    v-on:click="settingMulti(classItem._id, 'Wed', 3)" class="afternoonTd blueOff borderBottom">
                    <button class="fluid ui teal button afternoonButton" onclick="this.blur();"><i class="moon outline icon afternoonI"></i></button>
                </td>
                <td v-bind:id="classItem._id + '_Thu_5'" v-on:click="setting(classItem._id, 'Thu', 5)"
                    class="subjectCell Thu5">5.
                </td>
                <td rowspan="3" v-bind:id="classItem._id + '_Thu_Afternoon'"
                    v-on:click="settingMulti(classItem._id, 'Thu', 3)" class="afternoonTd blueOff borderBottom">
                    <button class="fluid ui teal button afternoonButton" onclick="this.blur();"><i class="moon outline icon afternoonI"></i></button>
                </td>
                <td v-bind:id="classItem._id + '_Fri_5'" v-on:click="setting(classItem._id, 'Fri', 5)"
                    class="subjectCell Fri5">5.
                </td>
                <td rowspan="3" v-bind:id="classItem._id + '_Fri_Afternoon'"
                    v-on:click="settingMulti(classItem._id, 'Fri', 3)" class="afternoonTd blueOff borderBottom borderRight">
                    <button class="fluid ui teal button afternoonButton" onclick="this.blur();"><i class="moon outline icon afternoonI"></i></button>
                </td>
            </tr>
            <tr>
                <td v-bind:id="classItem._id + '_Mon_6'" v-on:click="setting(classItem._id, 'Mon', 6)"
                    class="subjectCell Mon6">6.
                </td>
                <td v-bind:id="classItem._id + '_Tue_6'" v-on:click="setting(classItem._id, 'Tue', 6)"
                    class="subjectCell Tue6">6.
                </td>
                <td v-bind:id="classItem._id + '_Wed_6'" v-on:click="setting(classItem._id, 'Wed', 6)"
                    class="subjectCell Wed6">6.
                </td>
                <td v-bind:id="classItem._id + '_Thu_6'" v-on:click="setting(classItem._id, 'Thu', 6)"
                    class="subjectCell Thu6">6.
                </td>
                <td v-bind:id="classItem._id + '_Fri_6'" v-on:click="setting(classItem._id, 'Fri', 6)"
                    class="subjectCell Fri6">6.
                </td>
            </tr>
            <tr>
                <td v-bind:id="classItem._id + '_Mon_7'" v-on:click="setting(classItem._id, 'Mon', 7)"
                    class="subjectCell borderBottom Mon7">7.
                </td>
                <td v-bind:id="classItem._id + '_Tue_7'" v-on:click="setting(classItem._id, 'Tue', 7)"
                    class="subjectCell borderBottom Tue7">7.
                </td>
                <td v-bind:id="classItem._id + '_Wed_7'" v-on:click="setting(classItem._id, 'Wed', 7)"
                    class="subjectCell borderBottom Wed7">7.
                </td>
                <td v-bind:id="classItem._id + '_Thu_7'" v-on:click="setting(classItem._id, 'Thu', 7)"
                    class="subjectCell borderBottom Thu7">7.
                </td>
                <td v-bind:id="classItem._id + '_Fri_7'" v-on:click="setting(classItem._id, 'Fri', 7)"
                    class="subjectCell borderBottom Fri7">7.
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
  const ON = "rgb(127, 255, 212)";
  const OFF = "rgb(218, 218, 218)";
  const RED = "rgb(255, 159, 159)";

  export default {
    name: 'schedule-table',
    data() {
      return {
        classes: [],
        classesGrade: [],
        classesIdGrade: [],
        subjectSchedules: [],
        subject: {},
        subjectSchedulesClass: [],
      };
    },
    props: {
      subjectId: {
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

      // Biến kiểm tra DOM load id xong chưa
      let isExist = false;

      // Giữ header khi scroll
      let scheduleHeader = document.getElementById("scheduleHeader");
      let subjectsList = document.getElementById("subjectsList");
      let scheduleTable = document.getElementById("scheduleTable");
      window.onscroll = function () {
        if (window.pageYOffset > 87) {
          scheduleHeader.classList.add("sticky");
        } else {
          scheduleHeader.classList.remove("sticky");
        }
        if (window.pageYOffset > 73) {
          subjectsList.classList.add("stickyTeachersList");
          scheduleTable.classList.add("stickyScheduleTable");
        } else {
          subjectsList.classList.remove("stickyTeachersList");
          scheduleTable.classList.remove("stickyScheduleTable");
        }
      };

      // Get toàn bộ danh sách lớp học
      self.classes = await self.$store.dispatch('getClasses');

      // Lọc ra các lớp thuộc khối chỉ định
      for (let i = 0; i < self.classes.length; i++) {
        if (self.classes[i].grade == self.grade) {
          self.classesIdGrade.push(self.classes[i]._id);
          self.classesGrade.push(self.classes[i]);
        }
      }

      // Get toàn bộ danh sách các tiết học đã được đăng kí
      self.subjectSchedules = await self.$store.dispatch('getSubjectSchedules');

      // Lọc ra lịch đăng kí thuộc khối chỉ định
      for (let i = 0; i < self.subjectSchedules.length; i++) {
        if (self.classesIdGrade.includes(self.subjectSchedules[i].class_id)) {
          self.subjectSchedulesClass.push(self.subjectSchedules[i]);
        }
      }

      // Set màu dựa vào tiết học đã đăng kí
      for (let i = 0; i < self.subjectSchedulesClass.length; i++) {
        let checkExist = setInterval(function () {
          // Check DOM đã render xong id hay chưa
          if (document.getElementById(self.subjectSchedulesClass[i].class_id + '_' + self.subjectSchedulesClass[i].date_type + '_' + self.subjectSchedulesClass[i].class_hour)) {
            if (self.subjectSchedulesClass[i].subject_id == self.subjectId) {
              // Set màu xanh cho tiết đăng kí
              document.getElementById(self.subjectSchedulesClass[i].class_id + '_' + self.subjectSchedulesClass[i].date_type + '_' + self.subjectSchedulesClass[i].class_hour).style.backgroundColor = ON;
            } else {
              // Set màu xám cho tiết của giáo viên khác
              document.getElementById(self.subjectSchedulesClass[i].class_id + '_' + self.subjectSchedulesClass[i].date_type + '_' + self.subjectSchedulesClass[i].class_hour).style.backgroundColor = OFF;
            }

            // Set tên giáo viên dạy tiết đó
            document.getElementById(self.subjectSchedulesClass[i].class_id + '_' + self.subjectSchedulesClass[i].date_type + '_' + self.subjectSchedulesClass[i].class_hour).innerHTML = self.subjectSchedulesClass[i].class_hour + '. ' + self.subjects.find(element => element._id == self.subjectSchedulesClass[i].subject_id).name;

            clearInterval(checkExist);
          }
        }, 100);
      }
    },
    watch: {
      subjectId: async function (newVal, oldVal) {
        let self = this;

        // Get lại danh sách schedule
        self.subjectSchedules = await self.$store.dispatch('getSubjectSchedules');

        // Clear toàn bộ lịch theo của khối lớp chỉ định
        self.subjectSchedulesClass = [];

        // Lọc ra các schedule thuộc khối chỉ định
        for (let i = 0; i < self.subjectSchedules.length; i++) {
          if (self.classesIdGrade.includes(self.subjectSchedules[i].class_id)) {
            self.subjectSchedulesClass.push(self.subjectSchedules[i]);
          }
        }

        // Set màu dựa vào tiết học đã đăng kí
        for (let i = 0; i < self.subjectSchedulesClass.length; i++) {
          if (self.subjectSchedulesClass[i].subject_id == newVal) {
            // Set màu xanh cho tiết đã đăng kí
            document.getElementById(self.subjectSchedulesClass[i].class_id + '_' + self.subjectSchedulesClass[i].date_type + '_' + self.subjectSchedulesClass[i].class_hour).style.backgroundColor = ON;
          } else {
            // Set màu xám cho tiết đã đăng kí của giáo viên khác
            document.getElementById(self.subjectSchedulesClass[i].class_id + '_' + self.subjectSchedulesClass[i].date_type + '_' + self.subjectSchedulesClass[i].class_hour).style.backgroundColor = OFF;
          }
        }
      },
      toggleDel: async function (newVal, oldVal) {
        if (confirm("Bạn muốn xóa toàn bộ thời khóa biểu?")) {
          // Xóa toàn bộ các tiết đã được đăng kí
          await self.$store.dispatch('deleteSubjectSchedules');
          await self.$store.dispatch('deleteSchedules');

          // Set lại text hiển thị thứ tự tiết (1. 2. 3. ... 7.)
          let x = document.getElementsByClassName("subjectCell");
          let count = 0;
          for (let i = 0; i < x.length; i++) {
            if (Math.floor(count / 5) + 1 > 7) {
              count = 0
            }
            x[i].style.backgroundColor = null;
            x[i].innerHTML = Math.floor(count / 5) + 1 + '. '
            count = count + 1;
          }
        }
      },
      grade: async function (newVal, oldVal) {
        let self = this;

        // Biến kiểm tra DOM load id xong chưa
        let isExist = false;

        // Clear biến
        self.classesIdGrade = [];
        self.classesGrade = [];
        self.subjectSchedulesClass = [];

        // Lọc các lớp thuộc khối chỉ định
        for (let i = 0; i < self.classes.length; i++) {
          if (self.classes[i].grade == newVal) {
            self.classesIdGrade.push(self.classes[i]._id);
            self.classesGrade.push(self.classes[i]);
          }
        }

        // Get toàn bộ danh sách các tiết học đã được đăng kí
        self.subjectSchedules = await self.$store.dispatch('getSubjectSchedules');

        // Lọc ra lịch đăng kí thuộc khối chỉ định
        for (let i = 0; i < self.subjectSchedules.length; i++) {
          if (self.classesIdGrade.includes(self.subjectSchedules[i].class_id)) {
            self.subjectSchedulesClass.push(self.subjectSchedules[i]);
          }
        }

        // Xóa màu và set lại chữ các tiết dạy của khối trước
        let x = document.getElementsByClassName("subjectCell");
        let count = 0;
        for (let i = 0; i < x.length; i++) {
          if (Math.floor(count / 5) + 1 > 7) {
            count = 0
          }
          x[i].style.backgroundColor = null;
          x[i].innerHTML = Math.floor(count / 5) + 1 + '. '
          count = count + 1;
        }

        // Set màu dựa vào tiết học đã đăng kí
        for (let i = 0; i < self.subjectSchedulesClass.length; i++) {
          if (document.getElementById(self.subjectSchedulesClass[i].class_id + '_' + self.subjectSchedulesClass[i].date_type + '_' + self.subjectSchedulesClass[i].class_hour)) {
            if (self.subjectSchedulesClass[i].subject_id == self.subjectId) {
              // Set màu xanh cho tiết đăng kí
              document.getElementById(self.subjectSchedulesClass[i].class_id + '_' + self.subjectSchedulesClass[i].date_type + '_' + self.subjectSchedulesClass[i].class_hour).style.backgroundColor = ON;
            } else {
              // Set màu xám cho tiết của giáo viên khác
              document.getElementById(self.subjectSchedulesClass[i].class_id + '_' + self.subjectSchedulesClass[i].date_type + '_' + self.subjectSchedulesClass[i].class_hour).style.backgroundColor = OFF;
            }

            // Set tên giáo viên dạy tiết đó
            document.getElementById(self.subjectSchedulesClass[i].class_id + '_' + self.subjectSchedulesClass[i].date_type + '_' + self.subjectSchedulesClass[i].class_hour).innerHTML = self.subjectSchedulesClass[i].class_hour + '. ' + self.subjects.find(element => element._id == self.subjectSchedulesClass[i].subject_id).name;
          }
        }
      }
    },
    methods: {
      setting: async function (classId, dateType, classHour) {
        let self = this;
        let schedule = new Object();
        schedule.subject_id = self.subjectId;
        schedule.date_type = dateType;
        schedule.class_hour = classHour;
        schedule.class_id = classId;
        let scheduleEle = document.getElementById(schedule.class_id + '_' + schedule.date_type + '_' + schedule.class_hour);
        let subject = self.subjects.find(element => element._id == schedule.subject_id);

        // Kiểm tra có giáo viên khác đăng kí chưa
        if (scheduleEle.style.backgroundColor == OFF) {
          if (confirm("Tiết này đã có môn khác, bạn muốn thay thế?")) {
            // Xóa schedule của giáo viên đăng kí trước
            await self.$store.dispatch('deleteSubjectSchedule', schedule);

            // Tạo schedule cho giáo viên mới thay thế
            await self.$store.dispatch('createSubjectSchedule', schedule);

            // Set màu và tên giáo viên
            scheduleEle.style.backgroundColor = ON;
            scheduleEle.innerHTML = classHour + '. ' + subject.name;
          }
        } else if (scheduleEle.style.backgroundColor == ON) {
          // Kiểm tra tiết đã được đăng kí bởi chính giáo viên này thì sẽ remove đi
          await self.$store.dispatch('deleteSubjectSchedule', schedule);
          await self.$store.dispatch('deleteSchedule', schedule);
          scheduleEle.style.backgroundColor = null;
          scheduleEle.innerHTML = classHour + '. ';

        } else if (scheduleEle.style.backgroundColor == RED) {
          // Kiểm tra nếu là tiết bận sẽ ko đăng kí được
          alert(subject.name + " không thể dạy tiết này");
        } else {
          await self.$store.dispatch('createSubjectSchedule', schedule);
          await self.$store.dispatch('deleteSchedule', schedule);
          scheduleEle.style.backgroundColor = ON;
          scheduleEle.innerHTML = classHour + '. ' + subject.name;
        }
      },
      settingMulti: async function (classId, dateType, day) {
        let self = this;
        let scheduleArr = [];
        let status = "ON";
        let count = 0;
        let classHour = 0;
        let classHourStr = "";

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
          schedule.subject_id = self.subjectId;
          schedule.date_type = dateType;
          schedule.class_hour = i + classHour;
          schedule.class_id = classId;
          scheduleArr.push(schedule);
        }

        let subject = self.subjects.find(element => element._id == self.subjectId);

        for (let i = 0; i < scheduleArr.length; i++) {
          let scheduleEle = document.getElementById(scheduleArr[i].class_id + '_' + scheduleArr[i].date_type + '_' + scheduleArr[i].class_hour);
          if (scheduleEle.style.backgroundColor == OFF) {
            status = "OFF";
          }
          if (scheduleEle.style.backgroundColor == ON) {
            count = count + 1;
          }
        }

        if (status == "OFF") {
          if (confirm("Tiết này đã có giáo viên dạy, bạn muốn thay thế?")) {
            for (let i = 0; i < scheduleArr.length; i++) {
              let scheduleEle = document.getElementById(scheduleArr[i].class_id + '_' + scheduleArr[i].date_type + '_' + scheduleArr[i].class_hour);
              await self.$store.dispatch('deleteSubjectSchedule', scheduleArr[i]);
              await self.$store.dispatch('createSubjectSchedule', scheduleArr[i]);
              scheduleEle.style.backgroundColor = ON;
              scheduleEle.innerHTML = scheduleArr[i].class_hour + '. ' + self.subjects.find(element => element._id == scheduleArr[i].subject_id).name;

            }
          }
        } else if (count == scheduleArr.length) {
          for (let i = 0; i < scheduleArr.length; i++) {
            let scheduleEle = document.getElementById(scheduleArr[i].class_id + '_' + scheduleArr[i].date_type + '_' + scheduleArr[i].class_hour);
            await self.$store.dispatch('deleteSubjectSchedule', scheduleArr[i]);
            await self.$store.dispatch('deleteSchedule', scheduleArr[i]);
            scheduleEle.style.backgroundColor = null;
            scheduleEle.innerHTML = scheduleArr[i].class_hour + '. ';
          }
        } else {
          for (let i = 0; i < scheduleArr.length; i++) {
            let scheduleEle = document.getElementById(scheduleArr[i].class_id + '_' + scheduleArr[i].date_type + '_' + scheduleArr[i].class_hour);
            await self.$store.dispatch('deleteSubjectSchedule', scheduleArr[i]);
            await self.$store.dispatch('createSubjectSchedule', scheduleArr[i]);
            await self.$store.dispatch('deleteSchedule', scheduleArr[i]);
            scheduleEle.style.backgroundColor = ON;
            scheduleEle.innerHTML = scheduleArr[i].class_hour + '. ' + self.subjects.find(element => element._id == scheduleArr[i].subject_id).name;
          }
        }
      }
    }
  };
</script>
