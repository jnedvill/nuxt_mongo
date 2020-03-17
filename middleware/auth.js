export default function ({ store, redirect }) {
  // use store.getters.isAuth ...
  if (!store.getters.isAuth) {
    return redirect('/login')
  } else {
    if (store.getters.isRole !== "user") {
      return redirect('/login')
    }
  }
}
