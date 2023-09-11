Vue.createApp({
    data() {
        return {
            dischiData: []
        }
    },

    methods: {

    },

    mounted() {
        axios.get("store_Dischi.php").then((response) => {
            this.dischiData = response.data;
        });

        console.log(this.dischiData);
    } 
}
).mount("#app");