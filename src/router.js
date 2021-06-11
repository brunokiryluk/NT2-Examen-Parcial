import Vue from 'vue'
import VueRouter from 'vue-router'


import Form from './components/Form/index.vue'
import MultipleChoice from './components/MultipleChoice/index.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode : 'history',
    routes : [
        {path : '/', redirect : '/form'},
        {path : '/form' , component: Form},
        {path : '/multiple', component: MultipleChoice}
    ],
})