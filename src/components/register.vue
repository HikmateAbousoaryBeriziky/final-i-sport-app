<template>
  <section class="flex max-h-full">
    <main class="w-96 h-screen bg-green-400 p-7 space-y-5 hidden md:block">
      <header>
        <nav class="p-3">
          <h4 class="text-2xl font-bold">
            <i class="fa fa-plus"></i>Inscription
            <router-link to="/"
              ><button class="bg-red-500 text-white p-1 rounded">
                <i class="fa fa-home"></i> Accueil
              </button></router-link
            >
          </h4>
        </nav>
      </header>
      <div class="p-3 my-7 space-y-6">
        <h1 class="text-white text-2xl">Inscriver vous sur I-sport</h1>
        <p class="text-white">Institut superieur polytechnique de Madagascar</p>
      </div>
      <div>
        <img src="../assets/image/ispm.jpg" alt="" srcset="" />
      </div>
    </main>

    <main class="flex-auto bg-white space-y-7 p-2">
      <header class="py-5 px-5 my-4">
        <nav>
          <ul class="flex items-center justify-end space-x-4">
            <a href="">
              <li>
                <i class="fab fa-facebook"></i>
              </li>
            </a>
            <a href="">
              <li>
                <i class="fab fa-google"></i>
              </li>
            </a>
            <a href="">
              <li>
                <i class="fab fa-linkedin"></i>
              </li>
            </a>
          </ul>
        </nav>
      </header>

      <div class="flex items-center justify-center p-5">
        <h4 class="text-3xl font-bold">
          <i class="fa fa-plus"></i> Inscription
        </h4>
      </div>

      <section class="flex flex-col items-center justify center">
        <form action="" class="space-y-4">
          <div class="nom">
            <div class="relative mt-1 flex">
              <input
                type="text"
                name="im"
                @v-model="personne.im"
                placeholder="IM"
                class="
                  flex
                  p-4
                  w-80
                  h-10
                  rounded
                  pl-10
                  text-sm
                  focus:outline-none
                  border border-gray-500
                  focus:border-green-200
                  font-light
                "
              />
            </div>

            <div class="relative mt-1">
              <input
                type="text"
                name="nom"
                @v-model="personne.nom"
                placeholder="Nom"
                class="
                  p-4
                  w-80
                  h-10
                  rounded
                  pl-10
                  text-sm
                  focus:outline-none
                  border border-gray-500
                  focus:border-green-200
                  font-light
                "
              />
            </div>
            <div class="relative mt-1">
              <input
                type="text"
                name="prenom"
                @v-model="personne.prenom"
                placeholder="Prenom"
                class="
                  p-4
                  w-80
                  h-10
                  rounded
                  pl-10
                  text-sm
                  focus:outline-none
                  border border-gray-500
                  focus:border-green-200
                  font-light
                "
              />
            </div>
            <div class="relative mt-1">
              <input
                type="text"
                name="classe"
                @v-model="personne.classe"
                placeholder="Classe"
                class="
                  p-4
                  w-80
                  h-10
                  rounded
                  pl-10
                  text-sm
                  focus:outline-none
                  border border-gray-500
                  focus:border-green-200
                  font-light
                "
              />
            </div>
          </div>
          <div class="Password">
            <input
              type="password"
              name="mdp"
              @v-model="personne.mdp"
              placeholder="password"
              class="
                p-4
                w-80
                h-10
                rounded
                pl-10
                text-sm
                focus:outline-none
                border border-gray-500
                focus:border-green-200
                font-light
              "
            />
          </div>
          <button
            class="
              focus:outline-none
              bg-green-700
              focus:bg-green-500 focus:ring focus:ring-green-500
              w-80
              h-9
              text-white
              hover:bg-green-500
            "
            @click="register()"
          >
            S'inscrire
          </button>
        </form>
      </section>
      <section class="flex flex-col items-center justy-center space-y-4">
        <router-link to="Login"
          ><button class="bg-red-500 text-white p-2 rounded">
            Connexion
          </button></router-link
        >
        <p class="border border-solide border-black-500">&copy; tendry 2021</p>
      </section>
    </main>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      personne: {},
    };
  },

  methods: {
    register() {
      var im = document.getElementsByName("im");
      var nom = document.getElementsByName("nom");
      var prenom = document.getElementsByName("prenom");
      var classe = document.getElementsByName("classe");
      var mdp = document.getElementsByName("mdp");
      if (im && prenom && nom && classe && mdp === "") {
        alert("veuiller remplir le champ");
      }
      this.axios
        .post("http://127.0.0.1:8080/api/register")
        .then((response) => this.$router.push({ name: Personne }))
        .catch((err) => console.log(err))
        .finally(() => (this.loading = false));
    },
  },
};
</script>

<style>
</style>