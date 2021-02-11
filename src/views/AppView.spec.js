import { render } from '@testing-library/vue';
import AppView from './AppView.vue';

const store = {
  state: {
    user: {
      displayName: "test name",
    },
  },
  mutations: {
    setUnits(state, data) {
      state.units = data;
    },
  },
  actions: {
    bindUnits({ commit }) {
      commit('setUnits', [
        {
          name: "test unit 1",
          description: "description test unit 1",
          id: "id1",
        },
        {
          name: "test unit 2",
          description: "description test unit 2",
          id: "id2",
        },
      ]);
    },
  },
};

describe('AppView', () => {
  it('is truthy', () => {
    expect(AppView).toBeTruthy();
  });

  it('is rendering proper data', async () => {
    const { getByText, findByTitle, findByText } = render(AppView, { store });
    getByText('Hi test name!');

    await findByTitle('test unit 1');
    await findByTitle('test unit 2');

    await findByText('description test unit 1');
    await findByText('description test unit 2');
  });
});