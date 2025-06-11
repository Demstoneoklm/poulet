import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Produit from '../components/Produit.vue';

describe('Produit.vue', () => {
  const product = {
    id: 1,
    name: 'Poulet rôti',
    description: 'Délicieux et croustillant',
    price: 12.99,
    image: 'https://via.placeholder.com/150',
  };

  it('renders product details correctly', () => {
    const wrapper = mount(Produit, {
      props: { product },
    });

    expect(wrapper.find('h3').text()).toBe(product.name);
    expect(wrapper.find('p').text()).toBe(product.description);
    expect(wrapper.find('span').text()).toBe(`${product.price} €`);
    expect(wrapper.find('img').attributes('src')).toBe(product.image);
  });

  it('emits add-to-cart event when button is clicked', async () => {
    const wrapper = mount(Produit, {
      props: { product },
    });

    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted()['add-to-cart']).toBeTruthy();
    expect(wrapper.emitted()['add-to-cart'][0]).toEqual([product]);
  });
});