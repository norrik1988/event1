<!-- src/components/Hero.vue -->
<template>
  <div class=" flex grid m-0">
    <div class="col-8 p-0 border-1">
      <div class="hero">
        <!-- <p-menubar :model="items" class="flex border-none CustomText bg-black-alpha-90 ">
          <template #start>
            <img alt="logo" src="../assets/logo.png" height="32" class="mr-2">
          </template>
          <div>dxsds</div>
        </p-menubar> -->

        <div class="video-background">
          <!-- Video di sfondo -->
          <video autoplay loop muted class="fill-width">
            <source src="../assets/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

    
        <div class="hero-content">
          <div class="hero-text p-6">
            <h1>Welcome to Another Site no.098</h1>
            <p>read subtitle here ランダムな日本語の書き</p>
          </div>
    
        </div>
      </div>
    </div>
    <div class="col-4 p-0 align-content-center border-1">
      <div class="mx-8 px-4 card">
        <h2>Login</h2>
        <div class="p-field flex flex-column gap-3">
          <label for="username" style="margin: 0 16px 0 0;">Nickname</label>
          <InputText id="username" v-model="username" />
        </div>
        <div class="p-field flex flex-column gap-3">
          <label for="password" style="margin: 0 16px 0 0;">Password</label>
          <InputText id="password" type="password" v-model="password" />
        </div>
        <Button label="Login" icon="pi pi-check" @click="handleLogin"
                class="bg-primary border-primary-500 px-3 py-2 text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700">Login</Button>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import { Button } from 'primevue/button';

  export default {
    components: {
    Button
  },
    data() {
      return {
        username: '',
        password: '',
        items: [
          {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            to: '/'
          },
          {
            label: 'Events',
            icon: 'pi pi-fw pi-calendar',
            to: '/events'
          },
          {
            label: 'Add Event',
            icon: 'pi pi-fw pi-plus',
            to: '/add-event'
          }
        ]
      };
    },
    methods: {
  handleLogin() { 
    this.$router.push('/events'); 
  }
}
  };
  </script>
  
  <style>
  .hero {
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 69%;
  height: 100%;
  overflow: hidden;
}

.video-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 69%;
    height: 100%;
    overflow: hidden;
}
  
.hero-content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
  }

  .hero-text {
    color: white;
    max-width: 50%;
    background-color: black;
    opacity: 90%;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    position: absolute;
    left: 2%;
    z-index: 5;
    top: 40%;
}
  
.card {
    background: var(--surface-card);
    border: 1px solid var(--surface-border);
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: var(--card-shadow);
    border-radius: 12px;
}
  
.login-form h2 {
    margin-top: 0;
  }
  
.p-field {
    margin-bottom: 16px;
  }

.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #ffffff !important;
}

.p-menubar .p-menubar-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
    color: #495057 !important;
}

.p-menubar {
    padding: 0.5rem;
    background: #f8f9fa;
    color: #495057;
    border: 1px solid #dee2e6;
    border-radius: 3px;
    padding: 0 0 0 24px;
}
  
</style>
  