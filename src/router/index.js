import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import Contacto from '../components/Contacto.vue'
import Portada from '../components/Portada.vue'
import Usuario from '../components/Usuario.vue'
import Usuariofotos from '../components/Usuariofotos.vue'
import Usuariobio from '../components/Usuariobio.vue'

import Equipo from '../components/Equipo.vue'
import Equipojoel from '../components/Equipo-joel.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: Contacto
    },
    {
      path: '/portada',
      name: 'portada',
      component: Portada
    },
    {
      path: '/usuario/:id',
      name: 'usuario',
      component: Usuario
    },
    // {
    //   path: '/equipo/:id',
    //   // name: 'equipo',
    //   // nested routes
    //   component: Equipo, children: [
    //   	{
    //   		path: '',
    //   		component: Usuario, name:'equipo',
    //   		children: [
    //   			{path: 'fotos', name: 'fotos', component: Usuariofotos},
    //   			{path: 'bio', name: 'bio', component: Usuariobio},

    //   		]
    //   	}

    //   ]
    // },
    // con named views
    {
      path: '/equipo/:id',
      // name: 'equipo',
      // nested routes
      component: Equipo, children: [
      	{
      		path: '',
      		components: {
      			default: Usuario,
      			bio: Usuariobio,
      			fotos: Usuariofotos

      		}, name:'equipo',
      		
      	}

      ]
    },
    {
    	path: '/prueba',
    	// la url se mantiene como /prueba
    	alias: '/otraprueba',
    	// redirect: '/',
    	redirect: {name: 'home'},
    	component: Home,

    }
   
  ]
})
