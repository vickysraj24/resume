const homeController = (req, res) => {
  res.render("home", {
    title: "Home",
    page_name: "Home",
  });
};

export { homeController };
