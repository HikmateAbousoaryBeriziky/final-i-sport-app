<template>
  <div class="h-screen">
    <div class="atsasany bg-green-500 px-20 py-32 font-bold text-white">
      <div class="bar flex justify-between">
        <div class="menu mx-40">
          <h1 class="text-2xl">
            <span class="text-yellow-500 text-4xl">I</span>-Sport
          </h1>
        </div>
        <div class="menu flex space-x-10 p-5">
          <router-link to="Login"
            ><button
              class="
                bg-green-700
                px-5
                rounded
                hover:bg-green-900
                border border-solid border-1
              "
            >
              Se connecter
            </button></router-link
          >
          <router-link to="Register"
            ><button
              class="
                bg-red-500
                px-5
                rounded
                hover:bg-red-700
                border border-solid border-1
              "
            >
              Inscription
            </button></router-link
          >
        </div>
        <div class="logo h-20 w-20 mx-40">
          <img src="../assets/image/ispm.jpg" alt="" srcset="" />
        </div>
      </div>
      <br />
      <hr />
      <div class="-py-10 text-center -mb-20">
        <h1 class="text-4xl">
          Institut superieur
          <span class="text-yellow-500">polytechnique</span> de Madagascar
        </h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          laborum fugiat aliquam. Itaque, porro iure tenetur voluptatibus
          dignissimos exercitationem in dolore ipsa fuga ea ad, repellendus
          ipsam numquam vel atque.
        </p>
      </div>
    </div>
    <div class="sary flex justify-center space-x-28 -mb-20 bg-yellow-500 p-6">
      <div class="1 h-60 w-60">
        <img
          src="../assets/image/1.jpg"
          class="animate-pulse"
          alt=""
          srcset=""
        />
      </div>
      <div class="2 h-60 w-60">
        <img
          src="../assets/image/2.jpg"
          class="animate-pulse"
          alt=""
          srcset=""
        />
      </div>
      <div class="3 h-60 w-60">
        <img
          src="../assets/image/3.jpg"
          class="animate-pulse"
          alt=""
          srcset=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style >
</style>