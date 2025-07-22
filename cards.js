const cards = document.getElementById("cards");

const createCards = (user) => {

    let card = document.createElement("div");
    cards.appendChild(card);

    card.classList = "user-card"
    let heading = document.createElement("h1");
    card.appendChild(heading);
    heading.innerText = "User Profile card"

    const imageDiv = document.createElement("div");
    const image = document.createElement("img");
    image.src = user.profilePic;
    image.alt = "user profile picture";

    imageDiv.appendChild(image);
    card.appendChild(imageDiv);

    const h3 = document.createElement("h3");
    h3.innerText = `Name : ${user.name}`
    card.appendChild(h3)
    const role = document.createElement("span");
    role.innerText = `Role : ${user.role}`;
    card.appendChild(role);
    const lko = document.createElement("span");
    lko.innerText = `Location : ${user.location}`
    card.appendChild(lko);
    const skillsBtn = document.createElement("div");
    skillsBtn.classList = "skills";
    user?.skills?.map((skill, index) => {
        const btn = document.createElement("button");
        btn.innerText = skill;
        skillsBtn.appendChild(btn);
    })
    card.appendChild(skillsBtn);

}

const user = {
    name: "Arvind",
    role: "mern",
    location: "lucknow",
    profilePic: "./image/image1.webp",
    skills: ["React", "exprerss"]

}
const user2 = {
    name: "Raj",
    role: "laravel",
    location: "jdt",
    profilePic: "./image/image1.webp",
    skills: ["efhuygeact", "fu4h3"]

}
const user3 = {
    name: "Raj",
    role: "laravel",
    location: "jdt",
    profilePic: "./image/image1.webp",
    skills: ["efhuygeact", "fu4h3"]

}
const users = [user, user2,user3]


users.forEach(user=>createCards(user));
// createCards();

