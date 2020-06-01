import Vue from 'vue'

export default function createNotice(component, props) {
    console.log(component, props)
    // 方案一
    const Comp = Vue.extend(component)
    const comp = new Comp({
        propsData: props
    })
    // console.log(comp)
    comp.$mount()
    // console.log(comp.$el)

    // 方案二
    // const vm = new Vue({
    //     render: h => h(component, { props })
    // }).$mount()

    // const comp = vm.$children[0]


    // 方案三
    // const Comp = Vue.component('comp', component)

    // const comp = new Comp({
    //     propsData: props
    // })

    // comp.$mount()

    document.body.appendChild(comp.$el)
    comp.remove = () => {
        document.body.removeChild(comp.$el)
        comp.$destroy()
    }
    comp.show()
}