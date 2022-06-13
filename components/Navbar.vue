<template>
  <div>
      <div class="justify-between flex md:flex-row flex-col text-xl p-4 text-black bg-green-500 border border-black border-b-2 font-mono">
          <div class="flex justify-between items-center">
              <div  class="underline"> 5Ds of Cybersecurity</div>
              <div>
        <svg  @click="show = !show"  xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 md:hidden" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
</svg>
              </div>
          </div>
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
            show: false,
        }
    }    
}
</script>

<style>

</style>