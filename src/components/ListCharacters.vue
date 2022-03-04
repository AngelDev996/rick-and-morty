<template>
    <section>
        <div class="characters">
            <div class="characters__item">
                <h2>Characters</h2>
            </div>
        </div>
    </section>
</template>

<script>
import{ useStore} from 'vuex'
import store from '../store'
export default {
    setup(){
        const store = useStore()
    }
}
</script>

<style>
</style>