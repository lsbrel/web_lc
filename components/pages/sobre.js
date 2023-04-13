import carousel from '../widgets/widgetCarousel.js'
import cards from '../widgets/widgetCards.js'

export default {
    components:{
        'main-carousel': carousel,
        'main-cards': cards
    },
    data() {
        return {
            nome: 'pagina sobre'
        }
    },
    template:
        // INICIO-HTML
        `
        <div>
            <col>
                <row>
                    <main-carousel></main-carousel>
                </row>
                <row>
                    <main-cards></main-cards>
                </row>
            </col>
        </div>
    `
    // FIM-HTML
}