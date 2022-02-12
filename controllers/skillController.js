const skillController = (req, res) => {
  res.render("skill", {
    title: "Skill",
    page_name: "Skill",
  });
};

export { skillController };
