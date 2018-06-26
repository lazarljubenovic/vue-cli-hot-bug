import {FunctionalComponentOptions} from 'vue';

const Functional: FunctionalComponentOptions<{}> = {
  name: 'Functional',
  functional: true,
  render(h) {
    return h('div');
  },
};

export default Functional;
