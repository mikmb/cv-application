const sampleData = {
  personalInfo: {
    firstName: "Mik",
    lastName: "B",
    email: "myemail-is-not-real@gmail.com",
    phone: "123-456-7890",
  },
  education: [
    {
      schoolName: "Udacity",
      degree: "Front-End Web Developer Nanodegree",
      startDate: "12/2014",
      endDate: "04/2015",
      isCollapsed: true,
      id: crypto.randomUUID(),
    },
    {
      schoolName: "University of Nevada, Las Vegas",
      degree: "Computer Science, BS & Minor in Mathematics",
      startDate: "08/2010",
      endDate: "12/2012",
      isCollapsed: true,
      id: crypto.randomUUID(),
    },
    {
      schoolName: "College of Southern Nevada",
      degree: "",
      startDate: "08/2008",
      endDate: "07/2010",
      isCollapsed: true,
      id: crypto.randomUUID(),
    },
  ],
  experiences: [
    {
      companyName: "Company Five",
      title: "Software Engineer",
      startDate: "11/2018",
      endDate: "10/2020",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
      isCollapsed: true,
      id: crypto.randomUUID(),
    },
    {
      companyName: "Company Four",
      title: "Software Engineer",
      startDate: "04/2017",
      endDate: "11/2018",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
      isCollapsed: true,
      id: crypto.randomUUID(),
    },
    {
      companyName: "Company Three",
      title: "Software Engineer",
      startDate: "04/2015",
      endDate: "02/2017",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
      isCollapsed: true,
      id: crypto.randomUUID(),
    },
    {
      companyName: "Company Two",
      title: "Software Engineer",
      startDate: "06/2014",
      endDate: "03/2015",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
      isCollapsed: true,
      id: crypto.randomUUID(),
    },
    {
      companyName: "Company One",
      title: "Software Engineer",
      startDate: "05/2013",
      endDate: "03/2014",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
      isCollapsed: true,
      id: crypto.randomUUID(),
    },
  ],
};

export default sampleData;
