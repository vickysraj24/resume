const contactController = (req, res) => {
  res.render("contact", {
    title: "Contact",
    page_name: "Contact",
  });
};

export { contactController };
