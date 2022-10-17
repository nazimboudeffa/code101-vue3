const state = {
    courses: [
        {
            id: 1,
            title: 'Cours un',
            description: '',
            answer: ''
        },
        {
            id: 2,
            title: 'Cours deux',
            description: '',
            answer: ''
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