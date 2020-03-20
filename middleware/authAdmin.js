export default function ({ store, redirect }) {
  // use store.getters.isAuth ...
  if (!store.getters.isAuth) {
    return redirect('/')
  } else {
    if (store.getters.isRole !== "admin") {
      return redirect('/')
    }
  }
}
