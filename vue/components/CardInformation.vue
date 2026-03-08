// Définition du composant CardInformation - Modal Bootstrap 5

const CardInformation = {
  template: `
    <!-- Modal Bootstrap 5 -->
    <div class="modal fade" id="cardInfoModal" tabindex="-1" aria-labelledby="cardInfoModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="cardInfoModalLabel">
              <i :class="selectedCard.icon" class="me-2"></i>
              {{ selectedCard.title }}
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-4 text-center mb-3">
                <i :class="selectedCard.icon" :style="{ fontSize: '4rem', color: selectedCard.color }"></i>
              </div>
              <div class="col-md-8">
                <h6>{{ selectedCard.subtitle }}</h6>
                <p class="text-muted">{{ selectedCard.description }}</p>
              </div>
            </div>
            
            <div class="mt-4">
              <h6><i class="bi bi-info-circle"></i> Informations détaillées</h6>
              <div v-html="selectedCard.detailedInfo"></div>
            </div>

            <div class="mt-4" v-if="selectedCard.features && selectedCard.features.length > 0">
              <h6><i class="bi bi-list-check"></i> Caractéristiques principales</h6>
              <ul class="list-group">
                <li v-for="feature in selectedCard.features" :key="feature" class="list-group-item">
                  <i class="bi bi-check-circle text-success me-2"></i>
                  {{ feature }}
                </li>
              </ul>
            </div>

            <div class="mt-4" v-if="selectedCard.codeExample">
              <h6><i class="bi bi-code-slash"></i> Exemple de code</h6>
              <pre class="bg-light p-3 rounded"><code>{{ selectedCard.codeExample }}</code></pre>
            </div>

            <div class="mt-4" v-if="selectedCard.benefits && selectedCard.benefits.length > 0">
              <h6><i class="bi bi-star"></i> Avantages</h6>
              <div class="row">
                <div v-for="benefit in selectedCard.benefits" :key="benefit" class="col-md-6 mb-2">
                  <div class="d-flex align-items-center">
                    <i class="bi bi-arrow-right-circle text-primary me-2"></i>
                    <span>{{ benefit }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              <i class="bi bi-x-circle"></i> Fermer
            </button>
            <!-- <button type="button" class="btn btn-primary" @click="exploreMore" v-if="selectedCard.exploreLink">
              <i class="bi bi-arrow-right-circle"></i> Explorer plus
            </button> -->
          </div>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      selectedCard: {
        title: '',
        subtitle: '',
        description: '',
        icon: '',
        color: '',
        detailedInfo: '',
        features: [],
        codeExample: '',
        benefits: [],
        exploreLink: ''
      },
      cards: {
        routing: {
          title: 'Routing',
          subtitle: 'Navigation SPA avec Vue Router',
          description: 'Gestion des routes et navigation dans l\'application',
          icon: 'bi bi-router',
          color: '#0d6efd',
          detailedInfo: `
            <p>Vue Router est le routeur officiel pour Vue.js. Il permet de créer des applications Single Page Application (SPA) avec une navigation fluide entre les différentes pages.</p>
            <h6>Fonctionnalités principales :</h6>
            <ul>
              <li>Routing basé sur les composants</li>
              <li>Navigation programmatique</li>
              <li>Routes imbriquées</li>
              <li>Guards de navigation</li>
              <li>Lazy loading des composants</li>
            </ul>
          `,
          features: [
            'Routes déclaratives',
            'Navigation avec hash history',
            'Paramètres de route dynamiques',
            'Redirections et alias',
            'Transitions animées entre routes'
          ],
          codeExample: `const routes = [
  { path: '/', component: HomeView },
  { path: '/app1', component: App1View },
  { path: '/app2', component: App2View },
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes
});`,
          benefits: [
            'Navigation fluide sans rechargement',
            'Gestion d\'état automatique',
            'URL bookmarkable',
            'Support du bouton retour'
          ],
          exploreLink: '#/app1'
        },
        components: {
          title: 'Composants Vue',
          subtitle: 'Architecture basée sur les composants',
          description: 'Réutilisables et interactifs',
          icon: 'bi bi-stack',
          color: '#198754',
          detailedInfo: `
            <p>Les composants Vue sont des blocs de construction réutilisables avec leur propre logique et template. Ils permettent de créer des interfaces complexes de manière modulaire.</p>
            <h6>Types de composants :</h6>
            <ul>
              <li>Composants globaux</li>
              <li>Composants locaux</li>
              <li>Composants fonctionnels</li>
              <li>Composants asynchrones</li>
            </ul>
          `,
          features: [
            'Props pour passer des données',
            'Events pour communiquer',
            'Slots pour le contenu personnalisé',
            'Cycle de vie complet',
            'Reactivité automatique'
          ],
          codeExample: `const Component1 = {
  template: \`<div>{{ message }}</div>\`,
  props: ['title'],
  data() {
    return { message: 'Hello Vue!' }
  },
  methods: {
    greet() {
      console.log('Bonjour!')
    }
  }
};`,
          benefits: [
            'Réutilisabilité',
            'Maintenabilité',
            'Encapsulation',
            'Testabilité',
            'Composition flexible'
          ],
          exploreLink: '#/app1'
        },
        bootstrap: {
          title: 'Bootstrap 5',
          subtitle: 'Framework CSS moderne',
          description: 'UI moderne et responsive',
          icon: 'bi bi-bootstrap',
          color: '#6f42c1',
          detailedInfo: `
            <p>Bootstrap 5 est un framework CSS qui fournit des composants UI prêts à l'emploi et un système de grille responsive. Il est parfait pour créer rapidement des interfaces professionnelles.</p>
            <h6>Nouveautés de Bootstrap 5 :</h6>
            <ul>
              <li>Suppression de jQuery</li>
              <li>CSS Grid et Flexbox</li>
              <li>Variables CSS personnalisables</li>
              <li>Composants améliorés</li>
              <li>Support des dark modes</li>
            </ul>
          `,
          features: [
            'Système de grille responsive',
            'Composants UI prêts à l\'emploi',
            'Utilitaires CSS',
            'Thèmes personnalisables',
            'Support des icones Bootstrap'
          ],
          codeExample: `<div class="container">
  <div class="row">
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Titre</h5>
          <p class="card-text">Contenu</p>
          <button class="btn btn-primary">Bouton</button>
        </div>
      </div>
    </div>
  </div>
</div>`,
          benefits: [
            'Design responsive',
            'Rapidité de développement',
            'Consistance visuelle',
            'Documentation complète',
            'Communauté active'
          ],
          exploreLink: '#/app3'
        },
        architecture: {
          title: 'Architecture Progressive',
          subtitle: 'Applications légères 100% Front-end',
          description: 'Applications SPA légères et performantes',
          icon: 'bi bi-rocket',
          color: '#6f42c1',
          detailedInfo: `
            <p>L'architecture progressive Vue 3 permet de créer des applications sans dépendances lourdes. Chaque composant peut être chargé indépendamment via CDN.</p>
            <h6>Principes de l'architecture :</h6>
            <ul>
              <li>Chargement progressif des fonctionnalités</li>
              <li>Séparation des responsabilités</li>
              <li>Optimisation des performances</li>
              <li>Déploiement simplifié</li>
            </ul>
          `,
          features: [
            'Pas de build tools requis',
            'CDN pour les dépendances',
            'Composants auto-contenus',
            'Déploiement par simple copie',
            'Compatible avec tous les backends'
          ],
          codeExample: `<!-- Via CDN -->
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script src="https://unpkg.com/vue-router@4/dist/vue-router.global.js"></script>

<!-- Composant -->
const MyComponent = {
  template: \`<div>Hello World</div>\`,
  mounted() { console.log('Ready!') }
};`,
          benefits: [
            'Développement rapide',
            'Pas de configuration complexe',
            'Idéal pour prototypes',
            'Intégration facile',
            'Performance optimale'
          ],
          exploreLink: '#/app4'
        },
        backend: {
          title: 'Intégration Backend type Microservice',
          subtitle: 'Compatible Django/Flask/PHP',
          description: 'Architecture SPA/Microservice minimale',
          icon: 'bi bi-server',
          color: '#0dcaf0',
          detailedInfo: `
            <p>Cette architecture permet d'intégrer Vue 3 dans n'importe quel backend existant. Les fichiers Vue sont placés dans le dossier static et servis directement par le serveur web.</p>
            <h6>Intégration avec les backends :</h6>
            <ul>
              <li>Django : fichiers dans static/</li>
              <li>Flask : fichiers dans static/</li>
              <li>PHP : fichiers dans public/</li>
              <li>API REST pour la communication</li>
            </ul>
          `,
          features: [
            'Compatible tous les backends',
            'API REST pour la communication',
            'Délimiteurs personnalisables',
            'Microservice architecture',
            'Déploiement simplifié'
          ],
          codeExample: `// Configuration pour Django/Flask
const app = Vue.createApp({
  delimiters: ['[[', ']]']  // Évite les conflits
});

// Communication avec l'API
fetch('/api/data')
  .then(response => response.json())
  .then(data => {
    this.items = data;
  });`,
          benefits: [
            'Intégration transparente',
            'Séparation Front/Back',
            'API REST standard',
            'Microservice pattern',
            'Scalabilité'
          ],
          exploreLink: '#/app4'
        },
        performance: {
          title: 'Performance Optimale avec le serveur',
          subtitle: 'Échange minimal, chargement rapide',
          description: 'Optimisation des performances client-serveur',
          icon: 'bi bi-speedometer2',
          color: '#ffc107',
          detailedInfo: `
            <p>L'architecture CDN offre des performances exceptionnelles avec un poids total de 50-100 kB pour l'application complète.</p>
            <h6>Optimisations :</h6>
            <ul>
              <li>Fichiers minifiés locaux ou CDN</li>
              <li>Cache navigateur automatique</li>
              <li>CDN géographiquement distribués</li>
              <li>Charge serveur minimale</li>
            </ul>
          `,
          features: [
            'Poids total : 50-100 kB',
            'CDN pour les dépendances',
            'Cache navigateur optimal',
            'Charge serveur minimale',
            'Chargement instantané'
          ],
          codeExample: `// Poids des fichiers
app.js        : ~15 kB
routes.js     : ~5 kB
components    : ~30 kB
styles        : ~10 kB
templates     : ~10 kB
Total         : ~70 kB

// Via CDN
Vue 3         : ~40 kB (gzip)
Vue Router    : ~15 kB (gzip)
Bootstrap 5   : ~25 kB (gzip)`,
          benefits: [
            'Chargement ultra-rapide',
            'Bande passante économisée',
            'Serveur moins sollicité',
            'Expérience utilisateur optimale',
            'SEO friendly'
          ],
          exploreLink: '#/app4'
        }
      }
    };
  },
  methods: {
    showCardInfo(cardType) {
      this.selectedCard = this.cards[cardType] || this.cards.routing;
      
      // Afficher la modal Bootstrap
      const modal = new bootstrap.Modal(document.getElementById('cardInfoModal'));
      modal.show();
    },
    exploreMore() {
      if (this.selectedCard.exploreLink) {
        // Fermer la modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('cardInfoModal'));
        modal.hide();
        
        // Naviguer vers le lien
        window.location.href = this.selectedCard.exploreLink;
      }
    }
  },
  mounted() {
    console.log('CardInformation component mounted');
  }
};
