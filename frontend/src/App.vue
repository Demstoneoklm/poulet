<template>   
  <div id="app">     
    <header>       
      <h1>Boutique de Poulet</h1>       
      <nav>         
        <router-link to="/">Accueil</router-link>         
        <router-link to="/produits">Produits</router-link>         
        <router-link to="/panier">Panier</router-link>         
        <router-link to="/paiement">Paiement</router-link>         
        <router-link to="/admin">Admin</router-link>       
      </nav>     
    </header>          
    
    <!-- Affiche la vue correspondant à la route actuelle -->     
    <main>       
      <router-view />     
    </main>   
  </div> 
</template>  

<script setup> 
// CORRECTION : Supprimer l'import et l'utilisation de Produit ici
// Le composant sera géré par les routes individuelles
</script>  

<style scoped> 
header {   
  background-color: #f8f8f8;   
  padding: 10px;   
  text-align: center; 
}  

nav a {   
  margin: 0 10px;   
  text-decoration: none;   
  color: #333; 
}  

nav a.router-link-active {   
  font-weight: bold;   
  color: #007BFF; 
}  

main {   
  padding: 20px; 
} 
</style>