import { useRoute, RouteLocation } from 'vue-router';
import { useStore } from 'vuex';
import { defineComponent, watch } from 'vue';
type IRouteView = {
  Component: any;
  route: RouteLocation;
};
export default defineComponent({
  name: 'LayMain',
  props: ['instanComponent', 'instanRoute'],
  setup(props) {
    const instanComponent = props.instanComponent;
    const instanRoute = props.instanRoute;
    const store = useStore();
    const keepAlives = store.getters['admin/keepAlivesGetter'];
    return {
      store,
      keepAlives,
      instanComponent,
      instanRoute
    };
  },
  render() {
    /* const instanComponent = this.instanComponent;
    const instanRoute = this.instanRoute; */
    const store = this.store;
    const keepAlives = this.keepAlives;

    return (
      <keep-alive include={keepAlives}>
        <this.instanComponent />
      </keep-alive>
      //   <component v-else :is="Component" :key="route.fullPath" />
    );
  }
});

/**
 * <router-view
        v-slots={({ Component, route }: IRouteView) => {
        }}
      ></router-view>
 */
