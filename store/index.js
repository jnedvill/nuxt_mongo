import Vue from 'vue';
import Vuex from 'vuex';
import 'semantic-ui-css/semantic.css';
import axios from "axios";

Vue.use(Vuex);
const baseURL = 'http://localhost:3000/teachers/';
const subjectURL = 'http://localhost:3000/subjects/';
const classURL = 'http://localhost:3000/classes/';
const scheduleURL = 'http://localhost:3000/schedules/';
const deleteBusy = 'http://localhost:3000/teachersDeleteSchedules/';
const subjectScheduleURL = 'http://localhost:3000/subjectSchedules/';
const loginURL = 'http://localhost:3000/api/login/';
const logoutURL = 'http://localhost:3000/api/logout/';

const state = () => {
  return {
    authenticated: false,
    teachers: [],
    role: '',
    gradeSchedule: 1,
    teacherId: '',
    token: {headers: {'Authorization': ''}},
    teacherIdSchedule: ''
  }
};

const getters = {
  isAuth: state => state.authenticated,
  getTeachers: state => state.teachers,
  isRole: state => state.role
};

const mutations = {
  login(state, user) {
    Vue.set(state, 'authenticated', true);
    Vue.set(state, 'role', user.account);
    if (user.account == "user") {
      Vue.set(state, 'teacherId', user.teacherId);
    }
  },

  logout(state) {
    Vue.set(state, 'authenticated', false);
    Vue.set(state, 'role', '');
    Vue.set(state, 'token', {headers: {'Authorization': ''}});
    Vue.set(state, 'teacherId', '');
  },

  getTeachers(state, teachers) {
    Vue.set(state, 'teachers', teachers);
  },

  SET_USER(state, user) {
    if (user.account == "admin") {
      state.authenticated = true;
      state.role = "admin";
      state.token.headers.Authorization = user.token;
    } else if (user.account == "user") {
      state.authenticated = true;
      state.role = "user";
      state.teacherId = user.teacherId
      state.token.headers.Authorization = user.token;
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

  // apiTeacher
  async getTeacher({commit, state}, id) {
    let res = await axios.get(baseURL + id, state.token);
    return res.data;
  },

  async getTeachers({commit, state}) {
    let res = await axios.get(baseURL, state.token);
    commit('getTeachers', res.data);
    return res.data;
  },

  async deleteSchedulesOfTeacher({commit, state}, payload) {
    let res = await axios.put(baseURL, payload, state.token);
    return res.data;
  },

  async deleteTeacher({commit, state}, id) {
    let res = await axios.delete(baseURL + id, state.token);
    return res.data;
  },

  async updateTeacher({commit, state}, payload) {
    let res = await axios.put(baseURL + payload._id, payload, state.token);
    return res.data;
  },

  async deleteSchedulesOfTeacherBusy({commit, state}, payload) {
    let res = await axios.put(deleteBusy, payload, state.token);
    return res.data;
  },

  async createTeacher({commit, state}, payload) {
    let res = await axios.post(baseURL, payload, state.token);
    return res.data;
  },


  // apiSubject
  async getSubject({commit, state}, id) {
    let res = await axios.get(subjectURL + id, state.token);
    return res.data;
  },
  async getSubjects({commit, state}) {
    let res = await axios.get(subjectURL, state.token);
    return res.data;
  },
  async deleteSubject({commit, state}, id) {
    let res = await axios.delete(subjectURL + id, state.token);
    return res.data;
  },
  async createSubject({commit, state}, payload) {
    let res = await axios.post(subjectURL, payload, state.token);
    return res.data;
  },
  async updateSubject({commit, state}, payload) {
    let res = await axios.put(subjectURL + payload._id, payload, state.token);
    return res.data;
  },
  async deleteSchedulesOfSubject({commit, state}, payload) {
    let res = await axios.put(subjectURL, payload, state.token);
    return res.data;
  },


  // apiClass
  async getClass({commit, state}, id) {
    let res = await axios.get(classURL + id, state.token);
    return res.data;
  },
  async getClasses({commit, state}) {
    let res = await axios.get(classURL, state.token);
    return res.data;
  },
  async getClassesGrade({commit, state}, payload) {
    let res = await axios.get(classURL + 'grade/' + payload, state.token);
    return res.data;
  },
  async deleteClass({commit, state}, id) {
    let res = await axios.delete(classURL + id, state.token);
    return res.data;
  },
  async createClass({commit, state}, payload) {
    let res = await axios.post(classURL, payload, state.token);
    return res.data;
  },
  async updateClass({commit, state}, payload) {
    let res = await axios.put(classURL + payload._id, payload, state.token);
    return res.data;
  },
  async deleteSchedulesOfClass({commit, state}, payload) {
    let res = await axios.put(classURL, payload, state.token);
    return res.data;
  },

  // apiSchedule
  async getSchedulesOfTeacher({commit, state}, id) {
    let res = await axios.get(scheduleURL + id, state.token)
    return res.data;
  },
  async getSchedules({commit, state}) {
    let res = await axios.get(scheduleURL, state.token);
    return res.data;
  },
  async deleteSchedule({commit, state}, payload) {
    let res = await axios.put(scheduleURL, payload, state.token);
    return res.data;
  },
  async deleteSchedules({commit, state}) {
    let res = await axios.delete(scheduleURL, state.token);
    return res.data;
  },
  async createSchedule({commit, state}, payload) {
    let res = await axios.post(scheduleURL, payload, state.token);
    return res.data;
  },
  async updateSchedule({commit, state}, payload) {
    let res = await axios.put(scheduleURL + payload._id, payload, state.token);
    return res.data;
  },

  // apiSubjectSchedule
  async getSubjectSchedulesOfTeacher({commit, state}, id) {
    let res = await axios.get(subjectScheduleURL + id, state.token);
    return res.data;
  },
  async getSubjectSchedules({commit, state}) {
    let res = await axios.get(subjectScheduleURL, state.token);
    return res.data;
  },
  async deleteSubjectSchedule({commit, state}, payload) {
    let res = await axios.put(subjectScheduleURL, payload, state.token);
    return res.data;
  },
  async deleteSubjectSchedules({commit, state}) {
    let res = await axios.delete(subjectScheduleURL, state.token);
    return res.data;
  },
  async createSubjectSchedule({commit, state}, payload) {
    let res = await axios.post(subjectScheduleURL, payload, state.token);
    return res.data;
  },
  async updateSubjectSchedule({commit, state}, payload) {
    let res = await axios.put(subjectScheduleURL + payload._id, payload, state.token);
    return res.data;
  },
};

export default () => new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
