<template>
    <div>
        <select size="20" class="ui dropdown" style="width: 213.38px; margin-left: 15px; height: 100%" @change="onChangeTeacher(teacherId)" v-model="teacherId">
            <option v-for="teacher in teachers" v-bind:value="teacher._id" v-bind:key="teacher._id">{{teacher.name}} {{ teacher.homeroom_flg ? "(CN)" : "" }}</option>
        </select>
    </div>
</template>

<script>
  export default {
    name: 'teachers-list',
    data() {
      return {
        teacherId: ""
      }
    },
    props: {
      teachers: {
        type: Array,
        default() {
          return []
        }
      },
      teacherIdFirst: {
        type: String,
        default() {
          return ''
        }
      }
    },
    methods: {
      onChangeTeacher (teacherId) {
        this.$store.state.teacherIdSchedule =  teacherId;
        this.$emit('changed', teacherId)
      }
    },
    mounted() {
      let self = this;
      let checkExist = setInterval(function () {
        // Check DOM đã render xong id hay chưa
        if (self.teacherIdFirst != "" && self.teacherIdFirst != null) {
          self.teacherId = self.teacherIdFirst;
          clearInterval(checkExist);
        }
      }, 100);
    }
  };
</script>
