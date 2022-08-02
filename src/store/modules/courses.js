const state = {
    courses: [
        {
            id: 1,
            title: 'Course 1'
        },
        {
            id: 2,
            title: 'Course 2'
        }
    ]
};

const getters = {
    allCourses: (state) => state.courses
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
};