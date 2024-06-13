import CommuterFlowsComponent from "./components/CommuterFlows.vue";
import CommuterFlowsStore from "./store/indexCommuterFlows";
import deLocale from "./locales/de/additional.json";

export default {
    component: CommuterFlowsComponent,
    store: CommuterFlowsStore,
    locales: {
        de: deLocale
    }
};
