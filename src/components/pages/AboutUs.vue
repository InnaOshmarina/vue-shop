<template>
  <div>
    Информация о нашей компании.
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
    props: {
        propMessage: String
    }
})
export default class App extends Vue {

    constructor() {
        super();
        this.msg = 123;
    }

    // lifecycle hook


    beforeCreate () {
        console.log('create');
    }

    mounted () {
        console.log('bluber');
        this.greet()
    }

    destroyed () {
        console.log('destroyeddddddd');
    }

    // computed
    get computedMsg () {
        return 'computed ' + this.msg
    }

    // method
    greet () {
        alert('greeting: ' + this.msg)
    }
}
</script>

