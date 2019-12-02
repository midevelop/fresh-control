console.log("fdsafjlserj")
let app = new Vue({
    el: "#app",
    data: {
        category: ["Продукты", "Одежда"]
    },
    methods: {

        fetchCategory() {
            axios.get('/category')
                .then(response => this.category = response.data.category.map(item=>item.item))
        }
    }

})
