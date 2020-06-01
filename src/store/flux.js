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
                  },

            }
      };
};

export default getState;