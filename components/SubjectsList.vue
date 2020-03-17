<template>
    <div>
        <select size="20" class="ui dropdown" style="width: 213.38px; margin-left: 15px; height: 100%" @change="onChangeSubject(subjectId)" v-model="subjectId">
            <option v-for="subject in subjects" v-bind:value="subject._id" v-bind:key="subject._id">{{subject.name}}</option>
        </select>
    </div>
</template>

<script>
  export default {
    name: 'subjects-list',
    data() {
      return {
        subjectId: ""
      }
    },
    props: {
      subjects: {
        type: Array,
        default() {
          return []
        }
      },
      subjectIdFirst: {
        type: String,
        default() {
          return ''
        }
      }
    },
    methods: {
      onChangeSubject (subjectId) {
        this.$emit('changed', subjectId)
      }
    },
    mounted() {
      let self = this;
      let checkExist = setInterval(function () {
        // Check DOM đã render xong id hay chưa
        if (self.subjectIdFirst != "" && self.subjectIdFirst != null) {
          self.subjectId = self.subjectIdFirst;
          clearInterval(checkExist);
        }
      }, 100);
    }
  };
</script>