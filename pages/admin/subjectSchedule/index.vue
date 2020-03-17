<template>
    <div>
        <dashboard></dashboard>
        <div class="ui grid">
            <div id="subjectsList" class="two wide column">
                <h1 style="width: 100%; margin-left: 20px; margin-bottom: 2px">Lịch bộ môn</h1>
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
                <subjects-list @changed="onChanged" :subjects=subjects :subjectIdFirst=subjectId></subjects-list>
                <button @click="onClickDel" class="ui red button"
                        style="width: 100%; margin-left: 15px; margin-top: 5px;">Xóa toàn bộ
                </button>
            </div>
            <div id="scheduleTable" class="fourteen wide column">
                <subject-schedule-table :subjectId=subjectId :toggleDel="toggleDel"
                                :subjects=subjects :grade=grade></subject-schedule-table>
            </div>
        </div>
    </div>
</template>
<script>
  import subjectsList from '../../../components/SubjectsList.vue';
  import subjectScheduleTable from '../../../components/SubjectScheduleTable.vue';
  import {apiSubject} from '../../../helpers/Helpers';
  import dashboard from "../../../components/Dashboard";

  export default {
    name: 'subject-schedule',
    components: {
      'dashboard': dashboard,
      'subjects-list': subjectsList,
      'subject-schedule-table': subjectScheduleTable
    },
    middleware: 'authAdmin',
    data() {
      return {
        subjectId: "",
        toggleDel: true,
        lessionTeached: 0,
        subjects: [],
        subject: {},
        grade: 1,
      };
    },
    methods: {
      onChanged(value) {
        this.subjectId = value;
        this.subject = this.subjects.find(element => element._id == value);
      },
      onClickDel: async function () {
        this.toggleDel = !this.toggleDel;
      },
      changeGrade: function (value) {
        var x = document.getElementsByClassName("classGrade");
        for (let i = 0; i < x.length; i++) {
          x[i].classList.remove("actived");
        }
        document.getElementById("grade" + value).classList.add("actived");
        this.grade = value;
      }
    },
    async mounted() {
        // Get toàn bộ danh sách môn học
        this.subjects = await apiSubject.getSubjects();

        // Get id môn học đầu danh sách mới load
        this.subjectId = this.subjects[0]._id;

        this.subject = this.subjects[0];
    }
  };
</script>
