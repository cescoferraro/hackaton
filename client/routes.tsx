const hackaton = "/hackaton"
declare var env: any;
const isProd = () => {
    if (env === "development") {
        return false
    }
    return true
}
export const routesMap = {
    HOME: isProd() ? hackaton : '/',      // action <-> url path
    USER: isProd() ? hackaton + '/user/:id' : '/user/:id',  // :id is a dynamic segment
}
