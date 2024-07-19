<template>
  <div class=" flex grid m-0">
    <div class="col-8 p-0">
      <div class="hero">

        <div class="video-background">
          <video autoplay loop muted class="fill-width">
            <source src="../assets/video1.mp4" type="video/mp4" />
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
    <div class="col-4 p-0 align-content-center">
      <div class="mx-8 px-4 card">
        <h2 class="text-100">Login</h2>
        <div class="p-field flex flex-column gap-3">
          <label for="username" class="text-100" style="margin: 0 16px 0 0;">Nickname</label>
          <InputText  class="bg-white-alpha-10 border-none" id="username" v-model="username" />
        </div>
        <div class="p-field flex flex-column gap-3">
          <label for="password" class="text-100" style="margin: 0 16px 0 0;">Password</label>
          <InputText class="bg-white-alpha-10 border-none" id="password" type="password" v-model="password" />
        </div>
        <Button label="Login" icon="pi pi-check" @click="handleLogin"
                class="bg-white-alpha-10 border-none border-round-sm text-100 px-3 py-2 text-base cursor-pointer transition-all transition-duration-200 hover:bg-white-alpha-20 hover:border-primary-600 active:bg-primary-700 active:border-primary-700">Login</Button>
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

  body {
    background: rgb(112,163,208);
    background: radial-gradient(circle, rgba(112,163,208,1) 0%, rgba(2,27,57,1) 100%);
  }
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
    font-size: 2rem;
    line-height : 1.5;
    letter-spacing: 0.2em
}
  
.card {
    background: rgba( 255, 255, 255, 0.25 );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    padding: 2rem;
    backdrop-filter: blur( 19px );
    -webkit-backdrop-filter: blur( 19px );
    margin-bottom: 2rem;
    box-shadow: var(--card-shadow, 0.37);
    border-radius: 12px;
    border: none
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
  