//Team Data

const team = [
  {
    id: "anna",
    fullName: "Anna Kendrick",
    jobTitle: "Front-end Ninja",
    bio: "Bibliophile, loves to dive into fictional worlds, ships JS code like brownies",
    avatar: "https://avatars.dicebear.com/api/avataaars/annakendrick.svg",
  },
  {
    id: "harry",
    fullName: "Harry Fawn",
    jobTitle: "Illustrator",
    bio: "Creates new illustrations each week, will kill for coffee, and loves beaches",
    avatar: "https://avatars.dicebear.com/api/avataaars/harryfn.svg",
  },
  {
    id: "sofia",
    fullName: "Sofia Sultan",
    jobTitle: "Backend Engineer",
    bio: "Donuts over waffles. Martinis over whiskeys. Typescript over anything.",
    avatar: "https://avatars.dicebear.com/api/avataaars/sofiasul.svg",
  },
];

//Modify Code below this line

//Content Selected using ID.
const content = document.getElementById("content");

/**
 * Creates and img HTML element with given src and alt
 * @param {string} src - Source for image
 * @param {string} alt - Alt text for image
 * @returns An Image HTML Element
 */
const getImageElement = (src, alt) => {
  let image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  image.height = 100;
  image.width = 100;
  // image.style.height = "100";
  // image.style.width = "100";
  return image;
};

/**
 * Creates a new card with passed parameters.
 * @param {string} id - Unique id from team data
 * @param {string} fullName - Name of the team member
 * @param {string} jobTitle - Job title of the team memeber
 * @param {string} bio - Description Bio
 * @param {string} avatar - Source of the avatar image.
 * @returns section HTML element with Image and Text
 */
function generateCard(id, fullName, jobTitle, bio, avatar) {
  //1. Create a new "section" element and set the className and id
  let section = document.createElement("section");
  section.setAttribute("class", "team-member");
  section.setAttribute("id", id);
  //2. Generate the image using getImageElement() function
  //Hint - Use fullname as alt for the image.
  const img = getImageElement(avatar, fullName);

  //3. Create a div for text content
  let div = document.createElement("div");

  //4. Create an h2 for fullName
  let name = document.createElement("h2");
  name.textContent = fullName;

  //5. Create an h3 for jobTitle
  let jobtitle = document.createElement("h3");
  jobtitle.textContent = jobTitle;
  //6. Create a p for bio
  let bioElement = document.createElement("p");
  bioElement.textContent = bio;
  //7. Append the fullName, jobTitle, and bio element
  //   to the div created for text.
  // div.appendChild(name,jobtitle,bioElement);
  div.append(name);
  div.append(jobtitle);
  div.append(bioElement);

  //8. Append the Image and the Text div
  //   to the new section you created in step 1
  section.append(img);
  section.append(div);

  //Return the new section element created.
  return section;
  // console.log(section)
}

/**
 * Generates and returns an array of HTML elements
 * @param {Array} data Team data array
 */
function generateCardArray(data) {
  const cards = [];
  //Add logic to populate `cards` array below
  // [id,fullName,jobTitle,bio,avatar];
  data.forEach((element) => {
    let details = generateCard(
      element.id,
      element.fullName,
      element.jobTitle,
      element.bio,
      element.avatar
    );
    cards.push(details);
  });
  //Return cards array
  return cards;
  // console.log(cards);
}
// generateCardArray(team);

const cardsArray = generateCardArray(team);

// cardsArray.forEach((element) => {
//   content.append(element);
// });
//Run a loop for the cardsArray and append its elements to content.
for (let card of cardsArray) {
  content.append(card);
}
// //Modify Code above this line
