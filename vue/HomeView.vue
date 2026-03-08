// Définition du composant HomeView

const HomeView = {
  template: `


    <!-- Landing Page-->
    <section class="bg-success text-white py-5" id="landing">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h1 class="display-4 fw-bold">Bienvenue sur le démonstrateur Vue 3 Global </h1>
                    <code>Sans BuilTools (Node.JS/Deno/Bun) ni Bundler (Vite, Webpack, RollUp)</code>
                    <p class="lead">Découvrez comment créer des SPAs facilement et rapidement sans build tools ni bundler en utilisant Vue 3.</p>
                    
                    <p >
                      Dans ce demonstrateur les technologies suivante ont été utilisé:
                      <ul>
                        <li>Vue 3 Global via CDN ou pré-minifié *.global.min.js / *.global.prod.min.js</li>
                        <li>Vue Router Global pour gérer les routes et la navigation dans l'application disponibles via CDN ou pré-minifié *.min.js</li>
                        <li>Bootstrap 5 pour la puissance de ces composants CSS responsive design disponibles via CDN ou pré-minifié bootstrap.min.css</li>
                        <li>Bootstrap Icons pour une variété d'icônes simplement contenu dans un fichier Font *.Wolf</li>
                        <li>Bootstrap Bundle JS via CDN ou pré-minifié <code>bootstrap.bundle.min.js</code> pour les composants Bootstrap Natif en JavaScript (Popovers, Modals, etc.) et les transitions de Themes en CSS</li>
                      </ul>
                    </p>
                    
                    <a href="#app" class="d-block btn btn-light btn-lg mt-3"><i class="bi bi-arrow-down-circle"></i> Explorer</a>
                </div>
                <div class="col-lg-6">
                    <div class="text-center">
                        <img src="assets/JsVue.svg" alt="Vue 3 SPA" class="img-fluid rounded" style="max-width: 300px;height: auto;width: 200px;">
                        <img src="assets/BootstrapVue.svg" alt="Vue 3 SPA" class="img-fluid rounded" style="max-width: 300px;height: auto;width: 200px;">
                    </div>
                </div>
            </div>
        </div>
    </section>


    <div class="container mt-5">
      <div class="row">
        <div class="col-12">
          <h1><i class="bi bi-info-circle"></i> Accueil - Vue 3 Global </h1>
          <p class="lead">Cette page explique comment créer des SPAs avec Vue 3 sans build tools.</p>
          <div class="alert alert-primary">
            <h4>Points clés :</h4>
            <ul>
              <li>Utilisation de Vue 3 Global</li>
              <li>Pas de type="module" ni export</li>
              <li>Composants définis en JavaScript ES5</li>
              <li>Routing avec Vue Router Global</li>
              <li>Intégration Bootstrap 5 et Icons</li>
              <li>Hooks Vue 3: onMounted, computed, watch</li>
              <li>Bindings: v-model, v-if, v-for</li>
              <li>v-cloak pour masquer le chargement</li>
              <li>Loading skeleton</li>
            </ul>
          </div>
          <div class="row">
              <div class="col-md-4">
              <div class="card text-center shadow-sm m-2" @click="showCardInfo('architecture')" style="cursor: pointer; transition: transform 0.2s;" @mouseover="$event.currentTarget.style.transform='translateY(-5px)'" @mouseout="$event.currentTarget.style.transform='translateY(0)'">
                <div class="card-body">
                  <i class="bi bi-rocket display-4 text-success"></i>
                  <h5 class="card-title">Architecture Progressive Vue</h5>
                  <p class="card-text">Applications légères 100% Front-end type SPA.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card text-center shadow-sm m-2" @click="showCardInfo('components')" style="cursor: pointer; transition: transform 0.2s;" @mouseover="$event.currentTarget.style.transform='translateY(-5px)'" @mouseout="$event.currentTarget.style.transform='translateY(0)'">
                <div class="card-body">
                  <i class="bi bi-stack display-4 text-success"></i>
                  <h5 class="card-title">Composants Vue</h5>
                  <p class="card-text">Réutilisables et interactifs.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card text-center shadow-sm m-2" @click="showCardInfo('routing')" style="cursor: pointer; transition: transform 0.2s;" @mouseover="$event.currentTarget.style.transform='translateY(-5px)'" @mouseout="$event.currentTarget.style.transform='translateY(0)'">
                <div class="card-body">
                  <i class="bi bi-router display-4 text-success"></i>
                  <h5 class="card-title">Routing Vue</h5>
                  <p class="card-text">Navigation SPA avec Vue Router.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card text-center shadow-sm m-2" @click="showCardInfo('bootstrap')" style="cursor: pointer; transition: transform 0.2s;" @mouseover="$event.currentTarget.style.transform='translateY(-5px)'" @mouseout="$event.currentTarget.style.transform='translateY(0)'">
                <div class="card-body">
                  <i class="bi bi-bootstrap display-4" style="font-size: 4rem; color: rgb(111, 66, 193);"></i>
                  <h5 class="card-title">Bootstrap 5</h5>
                  <p class="card-text">UI moderne et responsive.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card text-center shadow-sm m-2" @click="showCardInfo('backend')" style="cursor: pointer; transition: transform 0.2s;" @mouseover="$event.currentTarget.style.transform='translateY(-5px)'" @mouseout="$event.currentTarget.style.transform='translateY(0)'">
                <div class="card-body">
                  <i class="bi bi-server display-4 text-info"></i>
                  <h5 class="card-title">Intégration Backend type Microservice</h5>
                  <p class="card-text">Compatible Django/Flask/PHP.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card text-center shadow-sm m-2" @click="showCardInfo('performance')" style="cursor: pointer; transition: transform 0.2s;" @mouseover="$event.currentTarget.style.transform='translateY(-5px)'" @mouseout="$event.currentTarget.style.transform='translateY(0)'">
                <div class="card-body">
                  <i class="bi bi-speedometer2 display-4 text-warning"></i>
                  <h5 class="card-title">Performance Optimale avec le serveur</h5>
                  <p class="card-text">Échange minimal, chargement rapide via CDN.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- CardInformation Modal Component -->
      <card-information ref="cardInfo"></card-information>
    </div>
  `,
  methods: {
    showCardInfo(cardType) {
      this.$refs.cardInfo.showCardInfo(cardType);
    }
  }
};
