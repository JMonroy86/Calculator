const getState = ({ getStore, setStore }) => {
      return {
            store: {
                  textValue: ""
            },
            actions: {
                  setValues: e => {
                        const store = getStore();
                        setStore({
                              ...store, ...e

                        })
                        // console.log(store.value)
                        // console.log(typeof store.value)
                  },

            }
      };
};

export default getState;