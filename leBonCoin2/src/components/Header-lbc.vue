<script setup></script>

<template>
  <header>
    <div class="container">
      <div class="topBloc">
        <RouterLink :to="{ name: 'home' }">
          <img src="../assets/img/logo.svg" alt="" />
        </RouterLink>

        <div class="middlePart">
          <BtnPublishOffer />

          <div>
            <input type="text" name="search" id="search" placeholder="Rechercher sur leboncoin" />
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
          </div>
        </div>

        <div>
          <font-awesome-icon :icon="['far', 'user']" />
          <p>Se connecter</p>
        </div>
      </div>

      <div class="bottomBloc">
        <span>Immobilier</span>

        <font-awesome-icon :icon="['fas', 'circle']" />

        <span>Véhicules</span>

        <font-awesome-icon :icon="['fas', 'circle']" />

        <span>Locations de vacances</span>

        <font-awesome-icon :icon="['fas', 'circle']" />

        <span>Emploi</span>

        <font-awesome-icon :icon="['fas', 'circle']" />

        <span>Mode</span>

        <font-awesome-icon :icon="['fas', 'circle']" />

        <span>Maison & Jardin</span>

        <font-awesome-icon :icon="['fas', 'circle']" />

        <span>Famille</span>

        <font-awesome-icon :icon="['fas', 'circle']" />

        <span>Electronique</span>

        <font-awesome-icon :icon="['fas', 'circle']" />

        <span>Loisirs</span>

        <font-awesome-icon :icon="['fas', 'circle']" />

        <span>Autres</span>
      </div>
    </div>
  </header>
</template>
<style scoped>
header {
  height: 110px;
  border: 1px solid green;
}
img {
  width: 140px;
}
.container {
  border: 1px solid blue;
}
.container > div {
  border: 1px solid red;
  display: flex;
}
</style>
