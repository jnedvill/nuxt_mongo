<template>
  <div>
    <dashboard></dashboard>
    <div class="ui grid">
      <div id="teachersList" class="two wide column">
        <h1 style="width: 100%; margin-left: 20px; margin-bottom: 2px">Thời khóa biểu</h1>
        <div class="grade">
          <div class="ui red five item menu">
            <a id="grade1" class="item classGrade actived" @click="changeGrade(1)">
              K1
            </a>
            <a id="grade2" class="item classGrade" @click="changeGrade(2)">
              K2
            </a>
            <a id="grade3" class="item classGrade" @click="changeGrade(3)">
              K3
            </a>
            <a id="grade4" class="item classGrade" @click="changeGrade(4)">
              K4
            </a>
            <a id="grade5" class="item classGrade" @click="changeGrade(5)">
              K5
            </a>
          </div>
        </div>
        <teachers-list @changed="onChanged" :teachers=teachers :teacherIdFirst=teacherId></teachers-list>
        <button @click="onClickDel" class="ui red button"
                style="width: 100%; margin-left: 15px; margin-top: 5px;">Xóa toàn bộ
        </button>
        <teacher-info :lessionTeached=lessionTeached :teacher=teacher class="ui"
                      style="width: 100%; margin-left: 15px; margin-top: 20px;"></teacher-info>
      </div>
      <div id="scheduleTable" class="fourteen wide column">
        <schedule-table @lessionTeached="setLessionTeached" :teacherId=teacherId :toggleDel=toggleDel
                        :subjects=subjects :teachers=teachers :grade=grade></schedule-table>
      </div>
    </div>
  </div>
</template>
<style>
  .grade {
    width: 100%;
    margin-left: 15px;
    margin-bottom: 10px;
  }

  .actived {
    background-color: #DB2828 !important;
    color: white !important;
  }
</style>
<script>
  import teachersList from '../../../components/TeachersList.vue';
  import scheduleTable from '../../../components/ScheduleTable.vue';
  import teacherInfo from '../../../components/TeacherInfo.vue';
  import dashboard from "../../../components/Dashboard";

  export default {
    name: 'schedule',
    components: {
      'dashboard': dashboard,
      'teachers-list': teachersList,
      'schedule-table': scheduleTable,
      'teacher-info': teacherInfo
    },
    middleware: 'authAdmin',
    data() {
      return {
        teacherId: "",
        toggleDel: true,
        lessionTeached: 0,
        teachers: [],
        teacher: {},
        grade: null,
        subjects: []
      };
    },
    methods: {
      onChanged(value) {
        this.teacherId = value;
        this.teacher = this.teachers.find(element => element._id == value);
      },
      setLessionTeached(value) {
        this.lessionTeached = value;
      },
      onClickDel: async function () {
        this.toggleDel = !this.toggleDel;
      },
      changeGrade: function (value) {
        let x = document.getElementsByClassName("classGrade");
        for (let i = 0; i < x.length; i++) {
          x[i].classList.remove("actived");
        }
        document.getElementById("grade" + value).classList.add("actived");
        this.grade = value;
        this.$store.state.gradeSchedule = value;
      }
    },
    async mounted() {
      let value = this.$store.state.gradeSchedule;
      let x = document.getElementsByClassName("classGrade");
      for (let i = 0; i < x.length; i++) {
        x[i].classList.remove("actived");
      }
      document.getElementById("grade" + value).classList.add("actived");

      // Get toàn bộ danh sách môn học
      this.subjects = await this.$store.dispatch('getSubjects');

      // Get toàn bộ danh sách giáo viên
      this.teachers = await this.$store.dispatch('getTeachers');

      if (this.$store.state.teacherIdSchedule == '' || this.$store.state.teacherIdSchedule == null) {
        // Get id giáo viên đầu danh sách mới load
        this.teacherId = this.teachers[0]._id;
        this.teacher = this.teachers[0];
      } else {
        // Get id giáo viên của session
        this.teacherId = this.$store.state.teacherIdSchedule;
        this.teacher = this.teachers.find(element => element._id == this.$store.state.teacherIdSchedule);
      }
    }
  };
</script>
