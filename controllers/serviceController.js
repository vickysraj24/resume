const serviceController = (req, res) => {
  res.render("service", {
    title: "Service",
    page_name: "Service",
  });
};

export { serviceController };
