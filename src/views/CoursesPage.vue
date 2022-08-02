<template>
    <v-app>
        <v-container>
            <h1>Liste des cours</h1>
            <div class="courses">
                <div v-for="course in allCourses" :key="course.id" class="course">
                    {{course.title}}
                </div>
            </div>
        </v-container>
    </v-app>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    name: 'CoursesPage',
    computed: mapGetters(['allCourses'])
};
</script>
<style scoped>
    .courses {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }

    .course {
        border: 1px solid #ccc;
        background: #141c3e;
        color: white;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer;
    }
</style>
