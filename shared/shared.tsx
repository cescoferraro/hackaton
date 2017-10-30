export const distance = (lat1, lon1, lat2, lon2) => {
    var p = 0.017453292519943295;    // Math.PI / 180
    var c = Math.cos;
    var a = 0.5 - c((lat2 - lat1) * p) / 2 +
        c(lat1 * p) * c(lat2 * p) *
        (1 - c((lon2 - lon1) * p)) / 2;

    return 1000 * 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}
export const initialUser = {
    name: "joe doe",
    kind: "USER",
    foto: "http://www.planystech.com/wp-content/uploads/2017/03/profile-placeholder.jpg",
    moedas: 847234,
    email: "Joe doe"
}

export const fakeReward = () => {
    window.location.href = "https://www.facebook.com/events/1966359860302568/?context=create&previousaction=create&ref=46&source=2&sid_create=2374811930&action_history=[%7B%22mechanism%22%3A%22bookmarks%22%2C%22surface%22%3A%22bookmarks_menu%22%2C%22extra_data%22%3A%22[]%22%7D%2C%7B%22mechanism%22%3A%22main_list%22%2C%22surface%22%3A%22dashboard%22%2C%22extra_data%22%3A%22%7B%5C%22dashboard_filter%5C%22%3A%5C%22upcoming%5C%22%7D%22%7D%2C%7B%22surface%22%3A%22create_dialog%22%2C%22mechanism%22%3A%22user_create_dialog%22%2C%22extra_data%22%3A[]%7D]&has_source=1"
}
