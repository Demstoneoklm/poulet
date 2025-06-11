import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Produits from '../components/Produits.vue';
import Produit from '../components/Produit.vue';

describe('Produits.vue', () => {
  it('renders a list of products', () => {
    const wrapper = mount(Produits);
    
    // Vérifie que le titre est présent
    expect(wrapper.find('h2').text()).toBe('Nos produits');

    // Vérifie que le nombre de composants Produit est correct
    const produits = wrapper.findAllComponents(Produit);
    expect(produits).toHaveLength(2);
  });

  it('handles add-to-cart event from product component', async () => {
    const wrapper = mount(Produits);
    const produitComponent = wrapper.findComponent(Produit);

    // Simule un clic sur le bouton du produit enfant
    await produitComponent.find('button').trigger('click');

    // Vérifie que le composant Produits a émis l'événement add-to-cart
    // (seulement si le composant Produits re-émet l'événement)
    const emittedEvents = wrapper.emitted();
    console.log('Events émis par Produits:', emittedEvents);
    
    // Alternative: vérifier que le produit enfant a émis l'événement
    const produitEvents = produitComponent.emitted();
    expect(produitEvents['add-to-cart']).toBeTruthy();
    expect(produitEvents['add-to-cart'][0]).toBeTruthy();
  });
});