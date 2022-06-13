<template>
  <div>
      <div class="justify-between flex text-xl p-4 text-black bg-green-500 border border-black border-b-2 font-mono">
          <div> 5Ds of Cybersecurity</div>
          <div class="flex flex-row space-x-10 justify-end ">
              <NuxtLink to="/index">Home</NuxtLink>
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
            links: {'Home': '/home', 'Game': '/game', 'Resources': '/resources', 'About': '/about'}
        }
    }    
}
</script>

<style>

</style>