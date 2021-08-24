const isAuth = (to, from, next) => {
    const token = localStorage.getItem('token')
    token ? next() : next('/login')
}

export default isAuth