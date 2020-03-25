import { capitalize } from "lodash";

export default st => {
<<<<<<< HEAD
=======
  console.log("piece of state", st);
>>>>>>> 3436759024b5000326cd01466737e8c142168cdf
  return `
<section id="blog">
  ${st.posts.map(post => formatBlogPost(post)).join("")}
</section>
`;
};

function formatBlogPost(post) {
  return `
  <div class="blog-post">
    <h4>${capitalize(post.title)} by User ${post.userId}</h4>
    <p>${capitalize(post.body)}</p>
  </div>
  `;
}

// const formatBlogPost = post => `
//   <div class="blog-post">
//     <h4>${capitalize(post.title)} by User ${post.userId}</h4>
//     <p>${capitalize(post.body)}</p>
//   </div>
//   `;
