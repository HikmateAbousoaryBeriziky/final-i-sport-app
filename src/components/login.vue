<template>
  <section class="flex max-h-full">
    <main class="w-96 h-screen bg-green-400 p-7 space-y-5 hidden md:block">
      <header>
        <nav class="p-3 flex space-x-2">
          <h4 class="text-2xl font-bold">I-Sport</h4>
          <router-link to="/"
            ><button class="bg-red-500 text-white p-1 rounded">
              <i class="fa fa-home"></i> Accueil
            </button></router-link
          >
        </nav>
      </header>
      <div class="p-3 my-7 space-y-6">
        <h1 class="text-white text-2xl">Connecter vous sur I-sport</h1>
        <p class="text-white">Institut superieur polytechnique de Madagascar</p>
      </div>
      <div class="mt-10">
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
        <h4 class="text-3xl font-bold"><i class="fa fa-user"></i>Connexion</h4>
      </div>

      <section class="flex flex-col items-center justify center">
        <form action="" class="space-y-4">
          <div class="email">
            <div class="relative mt-1">
              <input
                type="text"
                name="im"
                @v-model="personne.im"
                placeholder="IM"
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
              name=""
              placeholder="password"
              @v-model="personne.mdp"
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
            @click="login()"
          >
            Connexion
          </button>
        </form>
      </section>
      <section class="flex flex-col items-center justy-center space-y-4">
        <router-link to="Register"
          ><button class="bg-red-500 text-white p-2 rounded">
            Inscription
          </button></router-link
        >
        <div>
          <ul class="flex items-center justify-around space-x-5">
            <a href="">
              <li>
                <i class="fab fa-facebook text-blue-700"></i>
              </li>
            </a>
            <a href="">
              <li>
                <i class="fab fa-google text-red-500"></i>
              </li>
            </a>
            <a href="">
              <li>
                <i class="fab fa-linkedin text-blue-1000"></i>
              </li>
            </a>
          </ul>
        </div>

        <div>
          <span>Vous n'avez pas de compte?</span>
          <a href="" class="text-blue-500 font-bold hover:text-blue-200"
            >créer une compte</a
          >
        </div>
        <p class="border border-solide border-black-500">&copy; tendry 2021</p>
      </section>
    </main>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      personne: {},
    };
  },
  methods: {
    login() {
      var im = document.getElementsByName("im");
      var mdp = document.getElementsByName("mdp");
      if (im && mdp === "") {
        alert("veuiller remplir le champ");
      }
      this.axios
        .post("http://127.0.0.1:8080/api/login")
        .then((response) => this.$router.push({ name: Personne }))
        .catch((err) => console.log(err))
        .finally(() => (this.loading = false));
    },
  },
};
</script>

<style>
</style>