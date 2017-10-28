const hackaton = "/hackaton"
declare var env: any;
const isProd = () => {
    if (env === "development") {
        return false
    }
    return true
}
export const routesMap = {
    HOME: isProd() ? hackaton : '/',
    LOGIN: isProd() ? hackaton + '/login' : '/login',
    PROFILE: isProd() ? hackaton + '/profile' : '/profile',
    CHALLENGE: isProd() ? hackaton + '/challenge/:id' : '/challenge/:id'
}
