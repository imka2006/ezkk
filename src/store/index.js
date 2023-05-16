import { createStore } from "vuex";

export default createStore({
    state: {
        signupModel: false,
        signinModel: false,
        URL: "https://cotedu.pythonanywhere.com/",
        data: null,
        schedule: [],
        success: false,
        local: localStorage.getItem('access'),
        burger:false,
        account: localStorage.getItem('access'),
        isLoading: false
    },
    getters: {},
    mutations: {
        logOut(state) {  
            state.isLoading = true
            state.account = ""
            localStorage.clear()
            state.isLoading = false;
            state.burger = false; 
            state.signinModel = false
        },
        setModalActive(state) {
            state.signinModel = !state.signinModel
        }
        // async getData(store, item) {
        //     // const data = await fetch(store.URL + "api/v1/auth/", {
        //     //     method: "POST",
        //     //     headers: {
        //     //         "Content-Type": "application/json", // Установите заголовок Content-Type, если отправляете данные в формате JSON
        //     //     },
        //     //     body: JSON.stringify(item), // Преобразуйте данные в формат JSON перед отправкой
        //     // });
        //     // const response = await data.json();
        //     // console.log(data);
        //     // console.log(response);
        //     await fetch(store.URL + "api/v1/auth/", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(item),
        //     })
        //         .then((response) => response.json())
        //         .then((data) => {
        //             console.log(data, item);
        //             // Дополнительные действия после успешного выполнения запроса
        //         })
        //         .catch((error) => {
        //             console.log("Произошла ошибка:", error);
        //             // Обработка ошибки при выполнении запроса
        //         });
        // },
    },
    actions: {
        async getPost(context, item) {
            const state = context.state; 
            state.isLoading = true
            try {
                const response = await fetch(state.URL + "api/v1/auth/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: item.userName,
                        password: item.password,
                    }),
                });

                const data = await response.json();
                if (data.access) {
                    state.success = true;
                    localStorage.setItem("access", data.access);
                    state.account = localStorage.getItem('access')
                }
            } catch (error) {
                console.log("Произошла ошибка:", error);
                // Обработка ошибки при выполнении запроса
            } 
            state.isLoading = false
            state.signupModel = false
            state.burger = false
        },

        // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90e…I6Mn0.6RtrTfPXQ-P6lkNrMiBrTMFsgVM0lrtSkLkVs-GjOM8'
        // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgzOTg2MTc5LCJpYXQiOjE2ODM5NzUzNzksImp0aSI6IjQwY2I4ZWQ1NWM2MzQwYzM5ZDY3ZmEzZWRhZWY1MjkwIiwidXNlcl9pZCI6Mn0.2m1BNtdWt7ZiKxa-fCXqmVLFY-yZ2u5acGYwWKyOld8"
    },
    modules: {},
});
