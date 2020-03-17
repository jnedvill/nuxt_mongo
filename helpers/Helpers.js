import axios from 'axios';

const baseURL = 'http://localhost:3000/teachers/';
const subjectURL = 'http://localhost:3000/subjects/';
const classURL = 'http://localhost:3000/classes/';
const scheduleURL = 'http://localhost:3000/schedules/';
const deleteBusy = 'http://localhost:3000/teachersDeleteSchedules/';
const subjectScheduleURL = 'http://localhost:3000/subjectSchedules/';
const loginURL = 'http://localhost:3000/api/login/';
const logoutURL = 'http://localhost:3000/api/logout/';

export const apiTeacher = {
  getTeacher: async id => {
    const res = await axios.get(baseURL + id);
    return res.data;
  },
  getTeachers: async () => {
    const res = await axios.get(baseURL);
    return res.data;
  },
  deleteTeacher: async id => {
    const res = await axios.delete(baseURL + id);
    return res.data;
  },
  createTeacher: async payload => {
    const res = await axios.post(baseURL, payload);
    return res.data;
  },
  updateTeacher: async payload => {
    const res = await axios.put(baseURL + payload._id, payload);
    return res.data;
  },
  deleteSchedulesOfTeacher: async payload => {
    const res = await axios.put(baseURL, payload);
    return res.data;
  },
  deleteSchedulesOfTeacherBusy: async payload => {
    const res = await axios.put(deleteBusy, payload);
    return res.data;
  },
};

export const apiSubject = {
  getSubject: async id => {
    const res = await axios.get(subjectURL + id);
    return res.data;
  },
  getSubjects: async () => {
    const res = await axios.get(subjectURL);
    return res.data;
  },
  deleteSubject: async id => {
    const res = await axios.delete(subjectURL + id);
    return res.data;
  },
  createSubject: async payload => {
    const res = await axios.post(subjectURL, payload);
    return res.data;
  },
  updateSubject: async payload => {
    const res = await axios.put(subjectURL + payload._id, payload);
    return res.data;
  },
  deleteSchedulesOfSubject: async payload => {
    const res = await axios.put(subjectURL, payload);
    return res.data;
  }
};

export const apiClass = {
  getClass: async id => {
    const res = await axios.get(classURL + id);
    return res.data;
  },
  getClasses: async () => {
    const res = await axios.get(classURL);
    return res.data;
  },
  getClassesGrade: async grade => {
    const res = await axios.get(classURL + 'grade/' + grade);
    return res.data;
  },
  deleteClass: async id => {
    const res = await axios.delete(classURL + id);
    return res.data;
  },
  createClass: async payload => {
    const res = await axios.post(classURL, payload);
    return res.data;
  },
  updateClass: async payload => {
    const res = await axios.put(classURL + payload._id, payload);
    return res.data;
  },
  deleteSchedulesOfClass: async payload => {
    const res = await axios.put(classURL, payload);
    return res.data;
  }
};

export const apiSchedule = {
  getSchedulesOfTeacher: async id => {
    const res = await axios.get(scheduleURL + id);
    return res.data;
  },
  getSchedules: async () => {
    const res = await axios.get(scheduleURL);
    return res.data;
  },
  deleteSchedule: async payload => {
    const res = await axios.put(scheduleURL, payload);
    return res.data;
  },
  deleteSchedules: async () => {
    const res = await axios.delete(scheduleURL);
    return res.data;
  },
  createSchedule: async payload => {
    const res = await axios.post(scheduleURL, payload);
    return res.data;
  },
  updateSchedule: async payload => {
    const res = await axios.put(scheduleURL + payload._id, payload);
    return res.data;
  }
};

export const apiSubjectSchedule = {
  getSubjectSchedulesOfTeacher: async id => {
    const res = await axios.get(subjectScheduleURL + id);
    return res.data;
  },
  getSubjectSchedules: async () => {
    const res = await axios.get(subjectScheduleURL);
    return res.data;
  },
  deleteSubjectSchedule: async payload => {
    const res = await axios.put(subjectScheduleURL, payload);
    return res.data;
  },
  deleteSubjectSchedules: async () => {
    const res = await axios.delete(subjectScheduleURL);
    return res.data;
  },
  createSubjectSchedule: async payload => {
    const res = await axios.post(subjectScheduleURL, payload);
    return res.data;
  },
  updateSubjectSchedule: async payload => {
    const res = await axios.put(subjectScheduleURL + payload._id, payload);
    return res.data;
  }
};

export const apiLogin = {
  login: async payload => {
    const res = await axios.post(loginURL, payload);
    return res.data;
  }
};

export const apiLogout = {
  logout: async () => {
    const res = await axios.post(logoutURL);
    return res.data;
  }
};
