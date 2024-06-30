<template>
    <div >
      <h1>Aggiungi Evento</h1>
      <InputText v-model="name" placeholder="Nome Evento"/>
      <Calendar v-model="date" placeholder="Data Evento"/>
      <Button label="Salva" icon="pi pi-save" @click="saveEvent"/>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import InputText from 'primevue/inputtext';
  import Calendar from 'primevue/calendar';
  import Button from 'primevue/button';
  
  export default {
    components: { InputText, Calendar, Button },
    setup() {
      const name = ref('');
      const date = ref(null);
      const router = useRouter();

      const saveEvent = () => {
        const newEvent = {id: Date.now(), name: name.value, date: date.value}
        console.log('nuovo evento', newEvent)
        router.push('/');
      };
      return { name, date, saveEvent };
    }
  }
  </script>
  