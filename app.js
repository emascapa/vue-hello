const app = new Vue (
    {
        el: '#app',

        data: {
            awesomeMessage: 'Ciao',
            h1_custom_class: 'text-center text-white fw-bold display-2',
            container_custom_class: 'my-4 mx-auto bg-primary p-4 rounded rounded-4 border border-2 border-dark w-75',
            container_custom_class_2: 'mt-4 d-flex justify-content-around',
            custome_img_src_1: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
            custome_img_src_2: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
            custome_img_src_3: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
            image_custom_class: 'rounded rounded-pill border border-2 border-dark bg-light w-25'

        },
        methods:{
            sayBulba() {
                alert('BULBAAAAAASSSSAURRR');
            },
            sayCharme() {
                alert('CHAAR CHAAAAAAA');
            },
            saySquero() {
                alert('SQUERO SQUEEEEE');
            },
        }
    }
)