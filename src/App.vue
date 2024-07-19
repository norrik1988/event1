<template>
  <div id="app">
    <main class="grid">
      <aside class="col-2">
        <Sidebar/>
      </aside>
      <section class="col-10">
        <router-view />
      </section>
    </main>
  </div>
</template>

<script>
import Sidebar from './components/SidebarComponent.vue';



export default {
  name: 'App',
  components: {
    Sidebar,
  },
}
</script>

<style>

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

header {
  background-color: #333;
  color: white;
  padding: 4px;
}

main {
  display: flex;
  flex: 1; 
}

section {
  flex: 1; 
  padding: 10px;
}
</style>





