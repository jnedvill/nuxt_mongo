<template>
    <form action="#" @submit.prevent="onSubmit">
        <p v-if="errorsPresent" class="error">Vui lòng điền đầy đủ thông tin bắc buộc!</p>
        <div class="ui labeled input fluid mb10">
            <div class="ui label w180">
                <i class="calendar plus icon"></i>Tên lớp
            </div>
            <input type="text" placeholder="Enter name..." v-model="classModel.name" />
        </div>
        <div class="ui labeled input fluid mb10">
            <div class="ui label w180">
                <i class="calendar plus icon"></i>Khối
            </div>
            <div class="field ml10 mt7">
                <div class="ui radio checkbox">
                    <input type="radio" placeholder="Enter grade..." name="grade" v-model="classModel.grade" value="1"/>
                    <label>Lớp 1</label>
                </div>
            </div>
            <div class="field ml10 mt7">
                <div class="ui radio checkbox">
                    <input type="radio" placeholder="Enter grade..." name="grade" v-model="classModel.grade" value="2"/>
                    <label>Lớp 2</label>
                </div>
            </div>
            <div class="field ml10 mt7">
                <div class="ui radio checkbox">
                    <input type="radio" placeholder="Enter grade..." name="grade" v-model="classModel.grade" value="3"/>
                    <label>Lớp 3</label>
                </div>
            </div>
            <div class="field ml10 mt7">
                <div class="ui radio checkbox">
                    <input type="radio" placeholder="Enter grade..." name="grade" v-model="classModel.grade" value="4"/>
                    <label>Lớp 4</label>
                </div>
            </div>
            <div class="field ml10 mt7">
                <div class="ui radio checkbox">
                    <input type="radio" placeholder="Enter grade..." name="grade" v-model="classModel.grade" value="5"/>
                    <label>Lớp 5</label>
                </div>
            </div>
        </div>
        <button class="positive ui button">Xác nhận</button>
        <router-link to="/admin/classes" class="ui button">
            Hủy
        </router-link>
    </form>
</template>

<script>
  export default {
    name: 'class-form',
    props: {
      classModel: {
        type: Object,
        required: false,
        default: () => {
          return {
            name: '',
            grade: 1
          };
        }
      },
      toggleSuccess: {
        type: Boolean,
        default() {
          return true
        }
      }
    },
    data() {
      return {
        errorsPresent: false
      };
    },
    watch: {
      toggleSuccess: function () {
        this.classModel.name = "";
      }
    },
    methods: {
      onSubmit: function() {
        if (this.classModel.name == '' || this.classModel.grade == '' || this.classModel.grade == null) {
          this.errorsPresent = true;
        } else {
          this.errorsPresent = false;
          this.$emit('createOrUpdate', this.classModel);
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
