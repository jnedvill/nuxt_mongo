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
                <i class="address card icon"></i>Tài khoản
            </div>
            <input type="text" placeholder="Enter username..." v-model="teacher.username"/>
        </div>
        <div class="ui labeled input fluid mb10">
            <div class="ui label w180">
                <i class="address card icon"></i>Mật khẩu
            </div>
            <input type="text" placeholder="Enter password..." v-model="teacher.password"/>
        </div>
        <div class="ui labeled input fluid mb10">
            <div class="ui label w180">
                <i class="star icon"></i> GVCN
            </div>
            <div class="ui left floated compact">
                <div class="ui fitted toggle checkbox mt7 ml10">
                    <input type="checkbox" placeholder="Enter phone" v-model="teacher.homeroom_flg" value="1"/>
                    <label></label>
                </div>
            </div>
        </div>
        <div class="ui labeled input fluid mb10">
            <div class="ui label w180">
                <i class="clipboard list icon"></i> Số tiết
            </div>
            <input type="number" placeholder="Enter Lessons Quantity" v-model="teacher.lessons_quantity"/>
        </div>
        <table class="ui celled table noselect">
            <thead>
            <tr>
                <th colspan="2">Thứ hai</th>
                <th colspan="2">Thứ ba</th>
                <th colspan="2">Thứ tư</th>
                <th colspan="2">Thứ năm</th>
                <th colspan="2">Thứ sáu</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td id="Mon1" v-on:click="onClickBusyTable('Mon1')" class="renew">Tiết 1</td>
                <td rowspan="4" v-on:click.prevent="onClickBusyTableMulti(['Mon1', 'Mon2', 'Mon3', 'Mon4'])" class="morningTd blueOff">
                    <button class="fluid ui teal button morningButton" onclick="this.blur();"><i class="sun outline icon morningI"></i>
                    </button>
                </td>
                <td id="Tue1" v-on:click="onClickBusyTable('Tue1')" class="renew">Tiết 1</td>
                <td rowspan="4" v-on:click.prevent="onClickBusyTableMulti(['Tue1', 'Tue2', 'Tue3', 'Tue4'])" class="morningTd blueOff">
                    <button class="fluid ui teal button morningButton" onclick="this.blur();"><i class="sun outline icon morningI"></i>
                    </button>
                </td>
                <td id="Wed1" v-on:click="onClickBusyTable('Wed1')" class="renew">Tiết 1</td>
                <td rowspan="4" v-on:click.prevent="onClickBusyTableMulti(['Wed1', 'Wed2', 'Wed3', 'Wed4'])" class="morningTd blueOff">
                    <button class="fluid ui teal button morningButton" onclick="this.blur();"><i class="sun outline icon morningI"></i>
                    </button>
                </td>
                <td id="Thu1" v-on:click="onClickBusyTable('Thu1')" class="renew">Tiết 1</td>
                <td rowspan="4" v-on:click.prevent="onClickBusyTableMulti(['Thu1', 'Thu2', 'Thu3', 'Thu4'])" class="morningTd blueOff">
                    <button class="fluid ui teal button morningButton" onclick="this.blur();"><i class="sun outline icon morningI"></i>
                    </button>
                </td>
                <td id="Fri1" v-on:click="onClickBusyTable('Fri1')" class="renew">Tiết 1</td>
                <td rowspan="4" v-on:click.prevent="onClickBusyTableMulti(['Fri1', 'Fri2', 'Fri3', 'Fri4'])" class="morningTd blueOff">
                    <button class="fluid ui teal button morningButton" onclick="this.blur();"><i class="sun outline icon morningI"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td id="Mon2" v-on:click="onClickBusyTable('Mon2')" class="renew">Tiết 2</td>
                <td id="Tue2" v-on:click="onClickBusyTable('Tue2')" class="renew">Tiết 2</td>
                <td id="Wed2" v-on:click="onClickBusyTable('Wed2')" class="renew">Tiết 2</td>
                <td id="Thu2" v-on:click="onClickBusyTable('Thu2')" class="renew">Tiết 2</td>
                <td id="Fri2" v-on:click="onClickBusyTable('Fri2')" class="renew">Tiết 2</td>
            </tr>
            <tr>
                <td id="Mon3" v-on:click="onClickBusyTable('Mon3')" class="renew">Tiết 3</td>
                <td id="Tue3" v-on:click="onClickBusyTable('Tue3')" class="renew">Tiết 3</td>
                <td id="Wed3" v-on:click="onClickBusyTable('Wed3')" class="renew">Tiết 3</td>
                <td id="Thu3" v-on:click="onClickBusyTable('Thu3')" class="renew">Tiết 3</td>
                <td id="Fri3" v-on:click="onClickBusyTable('Fri3')" class="renew">Tiết 3</td>
            </tr>
            <tr>
                <td id="Mon4" v-on:click="onClickBusyTable('Mon4')" class="renew">Tiết 4</td>
                <td id="Tue4" v-on:click="onClickBusyTable('Tue4')" class="renew">Tiết 4</td>
                <td id="Wed4" v-on:click="onClickBusyTable('Wed4')" class="renew">Tiết 4</td>
                <td id="Thu4" v-on:click="onClickBusyTable('Thu4')" class="renew">Tiết 4</td>
                <td id="Fri4" v-on:click="onClickBusyTable('Fri4')" class="renew">Tiết 4</td>
            </tr>
            <tr>
                <td id="Mon5" v-on:click="onClickBusyTable('Mon5')" class="renew">Tiết 5</td>
                <td rowspan="3" v-on:click.prevent="onClickBusyTableMulti(['Mon5', 'Mon6', 'Mon7'])" class="afternoonTd blueOff">
                    <button class="fluid ui teal button afternoonButton" onclick="this.blur();"><i class="moon outline icon afternoonI"></i></button>
                </td>
                <td id="Tue5" v-on:click="onClickBusyTable('Tue5')" class="renew">Tiết 5</td>
                <td rowspan="3" v-on:click.prevent="onClickBusyTableMulti(['Tue5', 'Tue6', 'Tue7'])" class="afternoonTd blueOff">
                    <button class="fluid ui teal button afternoonButton" onclick="this.blur();"><i class="moon outline icon afternoonI"></i></button>
                </td>
                <td id="Wed5" v-on:click="onClickBusyTable('Wed5')" class="renew">Tiết 5</td>
                <td rowspan="3" v-on:click.prevent="onClickBusyTableMulti(['Wed5', 'Wed6', 'Wed7'])" class="afternoonTd blueOff">
                    <button class="fluid ui teal button afternoonButton" onclick="this.blur();"><i class="moon outline icon afternoonI"></i></button>
                </td>
                <td id="Thu5" v-on:click="onClickBusyTable('Thu5')" class="renew">Tiết 5</td>
                <td rowspan="3" v-on:click.prevent="onClickBusyTableMulti(['Thu5', 'Thu6', 'Thu7'])" class="afternoonTd blueOff">
                    <button class="fluid ui teal button afternoonButton" onclick="this.blur();"><i class="moon outline icon afternoonI"></i></button>
                </td>
                <td id="Fri5" v-on:click="onClickBusyTable('Fri5')" class="renew">Tiết 5</td>
                <td rowspan="3" v-on:click.prevent="onClickBusyTableMulti(['Fri5', 'Fri6', 'Fri7'])" class="afternoonTd blueOff">
                    <button class="fluid ui teal button afternoonButton" onclick="this.blur();"><i class="moon outline icon afternoonI"></i></button>
                </td>
            </tr>
            <tr>
                <td id="Mon6" v-on:click="onClickBusyTable('Mon6')" class="renew">Tiết 6</td>
                <td id="Tue6" v-on:click="onClickBusyTable('Tue6')" class="renew">Tiết 6</td>
                <td id="Wed6" v-on:click="onClickBusyTable('Wed6')" class="renew">Tiết 6</td>
                <td id="Thu6" v-on:click="onClickBusyTable('Thu6')" class="renew">Tiết 6</td>
                <td id="Fri6" v-on:click="onClickBusyTable('Fri6')" class="renew">Tiết 6</td>
            </tr>
            <tr>
                <td id="Mon7" v-on:click="onClickBusyTable('Mon7')" class="renew">Tiết 7</td>
                <td id="Tue7" v-on:click="onClickBusyTable('Tue7')" class="renew">Tiết 7</td>
                <td id="Wed7" v-on:click="onClickBusyTable('Wed7')" class="renew">Tiết 7</td>
                <td id="Thu7" v-on:click="onClickBusyTable('Thu7')" class="renew">Tiết 7</td>
                <td id="Fri7" v-on:click="onClickBusyTable('Fri7')" class="renew">Tiết 7</td>
            </tr>
            </tbody>
        </table>
        <button class="positive ui button">Xác nhận</button>
        <nuxt-link v-if="!isSchedule" to="/admin/teachers" class="ui button">
            Hủy
        </nuxt-link>
        <nuxt-link v-if="isSchedule" to="/admin/schedule" class="ui button">
            Hủy
        </nuxt-link>
    </form>
</template>
<script>
  const RED = "rgb(255, 159, 159)";
  export default {
    name: 'teacher-form',
    props: {
      teacher: {
        type: Object,
        required: false,
        default: () => {
          return {
            name: '',
            username: '',
            password: '123',
            homeroom_flg: false,
            lessons_quantity: 23,
            busy: []
          };
        }
      },
      toggleSuccess: {
        type: Boolean,
        default() {
          return true
        }
      },
      isSchedule: {
        type: Boolean,
        default() {
          return false
        }
      }
    },
    data() {
      return {
        errorsPresent: false
      };
    },
    watch: {
      teacher: function (newVal) {
        for (let i = 0; i < newVal.busy.length; i++) {
          document.getElementById(newVal.busy[i]).style.backgroundColor = RED;
        }
      },
      toggleSuccess: function () {
        this.teacher.name = "";
        this.teacher.busy = [];
        let x = document.getElementsByClassName("renew");
        for (let i = 0; i < x.length; i++) {
          x[i].style.backgroundColor = null;
        }
      }
    },
    methods: {
      onSubmit: function () {
        if (this.teacher.name === '' || this.teacher.lessons_quantity === '' || this.teacher.username === '' || this.teacher.password === '' || this.teacher.username === 'admin') {
          this.errorsPresent = true;
        } else {
          this.errorsPresent = false;
          if (this.teacher.homeroom_flg == '' || this.teacher.homeroom_flg == null) {
            this.teacher.homeroom_flg = 0;
          }
          this.$emit('createOrUpdate', this.teacher);
        }
      },
      onClickBusyTable: function (id) {
        if (document.getElementById(id).style.backgroundColor == RED) {
          for (let i = 0; i < this.teacher.busy.length; i++) {
            if (this.teacher.busy[i] === id) {
              this.teacher.busy.splice(i, 1);
              break;
            }
          }
          document.getElementById(id).style.backgroundColor = null;
        } else {
          this.teacher.busy.push(id);
          document.getElementById(id).style.backgroundColor = RED;
        }
      },
      onClickBusyTableMulti: function (idArr) {
        let count = idArr.length;
        for (let i = 0; i < idArr.length; i++) {
          if (document.getElementById(idArr[i]).style.backgroundColor == RED) {
            count -= 1;
          }
        }
        if (count == 0) {
          for (let i = 0; i < idArr.length; i++) {
            for (let j = 0; j < this.teacher.busy.length; j++) {
              if (this.teacher.busy[j] === idArr[i]) {
                this.teacher.busy.splice(j, 1);
                break;
              }
            }
            document.getElementById(idArr[i]).style.backgroundColor = null;
          }
        } else {
          for (let i = 0; i < idArr.length; i++) {
            if (document.getElementById(idArr[i]).style.backgroundColor != RED) {
              this.teacher.busy.push(idArr[i]);
              document.getElementById(idArr[i]).style.backgroundColor = RED;
            }
          }
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
