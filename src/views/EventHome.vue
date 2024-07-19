<template>
  <div class="grid">
    <div class="col-8">
      <h1>Eventi</h1>
      <Button label="Aggiungi Evento" icon="pi pi-plus" @click="addEvent" class="mb-3" />
      <div class="p-card">
        <DataTable :value="events" paginator :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem"
                   :class="{'p-datatable-striped': true}" rowHover="true">
          <Column field="name" header="Nome"></Column>
          <Column field="date" header="Data"></Column>
          <Column header="Azioni">
          <template #body="slotProps">
            <Button type="button" icon="pi pi-search" class="p-button-rounded" @click="viewEvent(slotProps.data.id)" />
          </template>
          </Column>
        </DataTable>
      </div>
    </div>
    <div>
      <h4 class="col-4 text-100"> cxcxc </h4>
    </div>
  </div>
</template>

<script>
import { ref, h } from 'vue';
import { useRouter } from 'vue-router';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default {
  name: 'EventHome',
  components: { Button, DataTable, Column },
  setup() {
    const events = ref([
      { id: 1, name: 'Conferenza sulla Tecnologia', date: '2024-07-01'},
      { id: 2, name: 'Workshop di Fotografia', date: '2024-07-05' },
      { id: 3, name: 'Festival della Musica', date: '2024-07-10' },
      { id: 4, name: 'Mostra d’Arte Contemporanea', date: '2024-07-15' },
      { id: 5, name: 'Seminario di Cucina', date: '2024-07-20' },
      { id: 6, name: 'Evento di Networking', date: '2024-07-25' },
      { id: 7, name: 'Fiera del Libro', date: '2024-07-30' },
      { id: 8, name: 'Corso di Yoga', date: '2024-08-01' },
      { id: 9, name: 'Spettacolo Teatrale', date: '2024-08-05' },
      { id: 10, name: 'Maratona Benefica', date: '2024-08-10' }
    ]);

    const router = useRouter();
    const addEvent = () => {
      router.push('/add-event');
    };
    const viewEvent = (id) => {
      router.push(`/event/${id}`);
    };

    const actionTemplate = (rowData) => {
      return h(Button, {
        onClick: () => viewEvent(rowData.id)
      });
    };

    return { events, addEvent, viewEvent, actionTemplate };
  }
}
</script>


