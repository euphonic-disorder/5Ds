<template>
  <div>
      <div class="justify-between flex md:flex-row flex-col text-xl p-4 text-black bg-green-500 border border-black border-b-2 font-mono">
          <div @click="show = !show" class="underline"> 5Ds of Cybersecurity</div>
          <div class="flex flex-row space-x-10 justify-end hidden md:inline">
              <NuxtLink to="/">Home</NuxtLink>
              <a href="https://5dscommunitychallenge.itch.io/5ds-and-you">Game</a>
              <NuxtLink to="/resources">Resources</NuxtLink>
              <NuxtLink to="/about">About</NuxtLink>
          </div>
          <div v-if="show" class="py-2 flex flex-col space-y-2 justify-end   md:hidden inline">
              <NuxtLink to="/">Home</NuxtLink>
              <a href="https://5dscommunitychallenge.itch.io/5ds-and-you">Game</a>
              <NuxtLink to="/resources">Resources</NuxtLink>
              <NuxtLink to="/about">About</NuxtLink>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            show: true,
        }
    }    
}
</script>

<style>

</style>