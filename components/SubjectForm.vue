<template>
    <form action="#" @submit.prevent="onSubmit">
        <p v-if="errorsPresent" class="error">Vui lòng điền đầy đủ thông tin bắc buộc!</p>
        <div class="ui labeled input fluid mb10">
            <div class="ui label w180">
                <i class="address card icon"></i>Tên
            </div>
            <input type="text" placeholder="Enter name..." v-model="subject.name" />
        </div>
        <button class="positive ui button">Xác nhận</button>
        <nuxt-link to="/admin/subjects" class="ui button">
            Hủy
        </nuxt-link>
    </form>
</template>

<script>
  export default {
    name: 'subject-form',
    props: {
      subject: {
        type: Object,
        required: false,
        default: () => {
          return {
            name: ''
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
        this.subject.name = "";
      }
    },
    methods: {
      onSubmit: function() {
        if (this.subject.name === '') {
          this.errorsPresent = true;
        } else {
          this.errorsPresent = false;
          this.$emit('createOrUpdate', this.subject);
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
