console.log("fdsafjlserj")
let app = new Vue({
    el: "#app",
    data: {
        category: []
    },
    async mounted(){
        this.fetchCategory()
    },
    methods: {

        async fetchCategory() {
           await axios.get('/category')
                .then(response => this.category = response.data.category.map(item => item.item))
        }
    }

})
