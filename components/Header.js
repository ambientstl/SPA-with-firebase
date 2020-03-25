import { User } from "../store";

export default st => `
<header>
  <h1>Example SPA: ${st.header}</h1>
<<<<<<< HEAD
  <a href="${!User.loggedIn ? "/Signin" : "/"}">${
  !User.loggedIn ? "LOG IN" : "LOG OUT"
}</a>
=======
>>>>>>> 3436759024b5000326cd01466737e8c142168cdf
</header>
`;
