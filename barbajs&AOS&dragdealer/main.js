import './style.css'
import barba from '@barba/core'
import anime from 'animejs'
import AOS from 'aos'
import 'aos/dist/aos.css'

barba.init({
    transitions: [{
        name: 'default-transition',
        leave(data) {
            return anime({
                targets: data.current.container,
                opacity: 0,
            })
        },
        enter(data) {
            return anime({
                targets: data.next.container,
                opacity: [0, 1]
            })
        }
    }]
})


AOS.init()
