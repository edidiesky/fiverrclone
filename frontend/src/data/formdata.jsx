export const inputData = [
         {
           id: 1,
           name: "name",
           placeholder: "John",
           type: "text",
           text: "My Name",
           errorMessage:
             "firstname should be 3-16 characters and should not contain any special Characters",
           required: true,
           pattern: "^[a-zA-Z]{4,}( {1,2}[a-zA-Z]{4,}){0,}$",
         },
         {
           id: 2,
           name: "username",
           placeholder: "Doe",
           type: "text",
           text: "Last name",
           errorMessage:
             "username should be 3-16 characters and should not contain any special Characters",
           required: true,
           pattern: "^[a-zA-Z]{4,}( {1,2}[a-zA-Z]{4,}){0,}$",
         },
         {
           id: 3,
           name: "email",
           placeholder: "example@site.com",
           type: "email",
           text: "Email",
           errorMessage: "It should be a valid email",
           required: true,
         },
         {
           id: 4,
           name: "password",
           placeholder: "Minimum 8 Characters",
           type: "password",
           text: "password",
         },
         {
           id: 5,
           name: "isAdmin",
           placeholder: "isAdmin",
           type: "text",
           text: "isAdmin",
           errorMessage:
             "isAdmin should be 3-16 characters and should not contain any special Characters",
           required: true,
         },
         {
           id: 6,
           name: "phone",
           placeholder: "Doe",
           type: "text",
           text: "phone",
           errorMessage:
             "phone should be 3-16 characters and should not contain any special Characters",
           required: true,
         },
         {
           id: 7,
           name: "country",
           placeholder: "country",
           type: "text",
           text: "Country",
           errorMessage:
             "country should be 3-16 characters and should not contain any special Characters",
           required: true,
           pattern: "^[a-zA-Z]{4,}( {1,2}[a-zA-Z]{4,}){0,}$",
         },
         {
           id: 8,
           name: "city",
           placeholder: "city",
           type: "text",
           text: "city",
           errorMessage:
             "city should be 3-16 characters and should not contain any special Characters",
           required: true,
           pattern: "^[a-zA-Z]{4,}( {1,2}[a-zA-Z]{4,}){0,}$",
         },
         {
           id: 9,
           name: "address",
           placeholder: "address",
           type: "text",
           text: "address",
           errorMessage:
             "address should be 3-16 characters and should not contain any special Characters",
           required: true,
         },
       ];
