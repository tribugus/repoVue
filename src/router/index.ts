import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import AboutView from '../views/AboutView.vue'

import OtroView from '../views/OtroView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [






    {
      path: '/',
      name: 'home',
      component: HomeView,

    
      /*beforeEnter (to, from, next) {

        console.log('Intentando ingresar a Home');
        // Lógica de validación antes de entrar a la ruta
        const isAuthenticated = false; // Por ejemplo, un valor de autenticación simulado
  
        if (isAuthenticated) {
          next(); // Permite la navegación
        } else {
          next({ name: 'about' }); // Redirige al login si no está autenticado
        }

      },*/


    },

 
    {
      path: '/otro',
      name: 'otro',
      component: OtroView,
    },


    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },


    {
      path: '/user',
      name: 'user',
      
      /*beforeEnter() {
        var a = 0;
        if(a>0){
          next(vm => {
            // access to component public instance via `vm`
          })
          
        }
      },*/
      children: [
        { path: 'list', component: AboutView },
        { path: 'details', component: AboutView },
      ],
    },


    {
      path: '/:pathMatch(.*)*', // Captura todas las rutas no definidas
      redirect: { name: 'home' }, // Redirige a la ruta de Login
    },
  



  ],
})

export default router
