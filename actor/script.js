const courses = [
    {
      url: "#",
      title: " unknown",
      thumbnail: "images/download (1).jpg",
      category: "film ",
      description: "2011",
      price: "136 million ",
      duration: "1.53",
    },
  
    {
      url: "#",
      title: " blacklight",
      thumbnail: "images/download (2).jpg",
      category: "film ",
      description: "2015",
      price: "160 million ",
      duration: "2",
    },
  
    {
      url: "#",
      title: " memory",
      thumbnail: "images/download (3).jpg",
      category: "film ",
      description: "2022",
      price: "236 million ",
      duration: "2.30"
    },
  
    {
      url: "#",
      title: " the grey",
      thumbnail: "images/download.jpg",
      category: "film ",
      description: "2015",
      price: "140 million ",
      duration: "2",
    },
  ];
  
  const coursesContainer = document.querySelector(".courses-container");
  
  const displayCourse = (
    urlValue,
    titleValue,
    categoryValue,
    thumbnailValue,
    descriptionValue,
    priceValue,
    durationValue
  ) => {
    const card = document.createElement("div");
    card.classList.add("card");
  
    const a = document.createElement("a");
    a.setAttribute("href", urlValue);
  
    const category = document.createElement("div");
    category.classList.add("category");
    category.innerHTML = categoryValue;
  
    const img = document.createElement("img");
    img.setAttribute("src", thumbnailValue);
  
    const title = document.createElement("h2");
    title.classList.add("title");
    title.innerHTML = titleValue;
  
    const description = document.createElement("div");
    description.classList.add("description");
    description.innerHTML = descriptionValue;
  
    const info = document.createElement("div");
    info.classList.add("info");
  
    const price = document.createElement("div");
    price.classList.add("price");
    price.innerHTML = priceValue;
  
    const duration = document.createElement("div");
    duration.classList.add("duration");
  
    const timeIcon = document.createElement("div");
    timeIcon.classList.add("time-icon");
    timeIcon.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
      clip-rule="evenodd"
    />
  </svg>`;
  
    const value = document.createElement("div");
    value.classList.add("value");
    value.innerHTML = durationValue;
  
    //   Appending Elements
  
    coursesContainer.appendChild(card);
    card.appendChild(a);
    a.appendChild(category);
    a.appendChild(img);
    a.appendChild(title);
    a.appendChild(description);
    a.appendChild(info);
  
    info.appendChild(price);
    info.appendChild(duration);
  
    duration.appendChild(timeIcon);
    duration.appendChild(value);
  };
  
  const generateCourseData = () => {
    courses.forEach((c) => {
      displayCourse(
        c.url,
        c.title,
        c.category,
        c.thumbnail,
        c.description,
        c.price,
        c.duration
      );
    });
  };
  
  generateCourseData();
  