<template>
    <div>
        <h2>Thông tin:</h2>
        <div class="ui list">
            <div class="item">
                <i class="user outline icon"></i>
                <div class="content">
                    <router-link :to="{ name: 'admin-teachers-edit-id', params: { id: teacher._id ? teacher._id : 'test', isSchedule: true }}">{{ teacher.name }}</router-link>
                </div>
            </div>
            <div class="item">
                <i class="star outline icon"></i>
                <div class="content">
                    {{ teacher.homeroom_flg ? "GVCN" : "Bộ môn" }}
                </div>
            </div>
            <div class="item">
                <i class="recycle icon"></i>
                <div class="content">
                    Số tiết đã dạy: {{ lessionTeached }}/{{ teacher.lessons_quantity }}
                </div>
            </div>
            <div class="item">
                <i class="calendar outline icon"></i>
                <div class="content">
                    <router-link :to="{ name: 'admin-teachers-view-id', params: { id: teacher._id ? teacher._id : 'test' }}">Thời khóa biểu</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'teacher-info',
    props: {
      teacher: {
        type: Object,
        default() {
          return {}
        }
      },
      lessionTeached: {
        type: Number,
        default: () => {
          return 0;
        }
      }
    }
  };
</script>
