Vue.createApp({
    data() {
        return {
            dischiData: [],
            indexClicked: 0,
            isCardClicked: false
        }
    },

    methods: {
        OnCardClick(index) {
            if(!this.isCardClicked) {
                this.indexClicked = index;
                this.isCardClicked = !this.isCardClicked;
                const body = document.body;
                if(!body.classList.contains('overflow-hidden')) {
                    body.classList.add('overflow-hidden');
                }
            }
        },

        OnCardExit() {
            this.indexClicked = 0;
            this.isCardClicked = !this.isCardClicked;
            const body = document.body;
            if(body.classList.contains('overflow-hidden')) {
                body.classList.remove('overflow-hidden');
            }
        }
    },

    mounted() {
        axios.get("store_Dischi.php").then((response) => {
            this.dischiData = response.data;
        });

        console.log(this.dischiData);
    } 
}
).mount("#app");