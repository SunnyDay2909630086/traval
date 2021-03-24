import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    //注释掉的actions相当于组件中的this.$store.commit()
    // actions: {
    //     changeCity(context, city){
    //         context.commit('changeCity', city)
    //     }
    // },
    mutations
})