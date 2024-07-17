<template>
  <div id="app">
    <!-- Topbar -->
    <header>
      <h1>Topbar</h1>
      <!-- Qui puoi aggiungere altri elementi della topbar come menu, pulsanti, etc. -->
    </header>

    <!-- Contenuto principale -->
    <main>
      <!-- Sidebar -->
      <aside>
        <h2>Sidebar</h2>
        <!-- Qui puoi aggiungere i link della sidebar -->
        <router-link to="/">Home</router-link>
        <!-- Aggiungi altri link per le altre rotte del tuo router -->
      </aside>

      <!-- Contenuto dinamico del router -->
      <section>
        <router-view />
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Stili globali se necessario */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Altezza minima per occupare l'intera altezza della viewport */
}

header {
  background-color: #333;
  color: white;
  padding: 4px;
}

main {
  display: flex;
  flex: 1; /* Il contenuto principale (sidebar e router-view) si espande per riempire lo spazio rimanente */
}

aside {
  width: 200px; /* Larghezza della sidebar */
  background-color: #f0f0f0;
  padding: 10px;
}

section {
  flex: 1; /* Il router-view occupa tutto lo spazio rimanente */
  padding: 10px;
}
</style>





