export const navigation = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    children: [
      {
        title: "About CEG",
        path: "/abouthtain",
      },
      {
        title: "Minister of Health & Family Welfare",
        path: '#'
      },
      {
        title: "Minister of State",
        path: "#",
      },
      {
        title: "Secretary",
        path: "/secretary",
      },
     
      {
        title: "Objectives",
        path: "/objectives",
      },
      {
        title: 'Members',
         children: [
          {
            title: "CEG Scientists",  
            path: "cegscientists",
          },
         
        ],
      }
    ],
  },
  {
    title: "Resource Hubs/Centres",
    path: "/resource-hubs",
  },
  {
    title: "What We Do",
    children: [
       {
        title: "Process Manual",
        path: "/process-guidelines-development",
      },
      {
        title: "Stem Cell Therapy Guidelines",
        path: "/stem-cell-therapy-guidelines",
      },
     
      {
        title: "Lung Cancer Treatment & Palliation Guidelines",
        path: "/lung-cancer-treatment-and-palliation-guidelines",
      },
      
    ],
  },
  {
    title: "Media",
    children: [
      {
        title: "Photos",
        path: "/gallery",
      },
      {
        title: "Videos",
        path: "videos",
      },
    ],
  },
  {
    title: "Contact Us",
    path: "/contact",
  },

 
  
];