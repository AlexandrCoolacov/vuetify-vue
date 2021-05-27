export default {
    state: {
        ads: [
            {
                title: 'First ad',
            description: 'Hello Ia description',
            promo: false,
            imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            id: '123'
            },
            {
                title: 'Second ad',
            description: 'Hello Ia description',
            promo: true,
            imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            id: '234'
            },
            {
                title: 'thord ad',
            description: 'Hello Ia description',
            promo: true,
            imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            id: '345'
            },
        ],
    },
    mutations: {
        createAd (state , payload) {
            state.ads.push(payload)
        }
    },
    actions: {
        createAd ({commit} , payload) {
                payload.id = '34534634'

                commit ('createAd' , payload)
        }
    },
    getters: {
        ads (state) {
            return state.ads
        },
        promoAds (state) {
            return state.ads.filter(ad => {
                return ad.promo
            })
        },
        myAds ( state) {
            return state.ads
        },
        adById (state) {
            return adId => {
                return state.ads.find( ad => ad.id === adId)
            }

        }
    }
}