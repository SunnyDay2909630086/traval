<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hot="hotCities" :letter="letter" :current.sync="currentLetter"></city-list>
        <city-alphabet :cities="cities" :currentLetter="currentLetter" :newLetter.sync="letter"></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data(){
        return{
            cities:{},
            hotCities: [],
            letter: '',
            currentLetter: ''
        }
    },
    mounted(){
        this.getCityInfo()
    },
    methods:{
        getCityInfo(){
            axios.get('../../static/mock/city.json').then(res => {
                res = res.data
                // console.log(res, 'res')
                if(res.ret && res.data){
                    const data = res.data
                    this.cities = data.cities
                    this.hotCities = data.hotCities
                }
            }).catch( err => console.log(err))
        }
    }
}
</script>

<style lang="">
    
</style>