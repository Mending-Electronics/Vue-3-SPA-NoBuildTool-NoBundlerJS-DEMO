// Initialisation de l'application Vue 3 Global 

// Vue.config.delimiters = ['[[', ']]'];

// Données partagées pour l'échange de props entre apps
window.sharedData = Vue.reactive({
  prop1: 'Valeur initiale pour App1',
  prop2: 'Valeur initiale pour App2',
  prop3: 'Valeur initiale pour App3',
  prop4: 'Valeur initiale pour App4',
  tasks: ['Tâche 1', 'Tâche 2']
});

// Création du router avec les routes définies
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes
});

// Création de l'application Vue
const app = Vue.createApp({});

// Enregistrement des composants globaux
app.component('component-1', Component1);
app.component('component-2', Component2);
app.component('component-3', Component3);
app.component('card-information', CardInformation);

// Utilisation du router
app.use(router);

// Montage de l'application sur #app
app.mount('#app');

// Log pour confirmer le montage
console.log('Vue 3 SPA mounted successfully');

