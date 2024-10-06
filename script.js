document.getElementById("view-more").addEventListener("click", function () {
  hiddenBlogs.forEach((blog) => {
    blog.classList.toggle("hidden");
  });
});

const blogsContainer = document.querySelector(".blogs");
const hiddenBlogs = document.querySelectorAll(".hidden");
if (hiddenBlogs.style.display === "none") {
  blogsContainer.style.gridTemplateAreas = `
    ". .. ."
    ". b6 ."
    ". b5 ."
    ". b4 ."
    ". vm ."
    ". .. ."
  `;
}
