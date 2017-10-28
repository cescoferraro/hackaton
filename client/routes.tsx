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
    USER: isProd() ? hackaton + '/user/:id' : '/user/:id',
    CHALLENGE: isProd() ? hackaton + '/challenge/:id' : '/challenge/:id'
}
