import Vue from 'vue';
import Vuex from 'vuex';
import 'semantic-ui-css/semantic.css';
import {apiTeacher} from '../helpers/Helpers';
Vue.use(Vuex);

const state = () => {
  return {
    authenticated: false,
    teachers: [],
    role: '',
    gradeSchedule: 1,
    teacherId: '',
    token: '',
    teacherIdSchedule: ''
  }
};

const getters = {
  isAuth: state => state.authenticated,
  getTeachers: state => state.teachers,
  isRole: state => state.role,
  getToken: state => state.token,
};

const mutations = {
  login(state, user) {
    Vue.set(state, 'authenticated', true);
    Vue.set(state, 'role', user.account);
    Vue.set(state, 'token', user.token);
    if (user.account == "user") {
      Vue.set(state, 'teacherId', user.teacherId);
    }
  },

  logout(state) {
    Vue.set(state, 'authenticated', false);
    Vue.set(state, 'role', '');
    Vue.set(state, 'token', '');
    Vue.set(state, 'teacherId', '');
  },

  setTeachers(state, teachers) {
    Vue.set(state, 'teachers', teachers);
  },

  SET_USER(state, user) {
    if (user.account == "admin") {
      state.authenticated = true;
      state.role = "admin";
      state.token = user.token;
    } else if (user.account == "user") {
      state.authenticated = true;
      state.role = "user";
      state.teacherId = user.teacherId
      state.token = user.token;
    }
  }
};

const actions = {
  nuxtServerInit({commit}, {req}) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },
  login({commit}, user) {
    commit('login', user)
  },

  logout({commit}) {
    commit('logout')
  },

  async setTeachers({commit}) {

    let teachers = await apiTeacher.getTeachers();
    commit('setTeachers', teachers)
  }

};

export default () => new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
