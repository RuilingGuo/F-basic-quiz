import { userInfoBinder, educationItemBinder } from "./dataBinder";

const render = async (user, education) => {
  await user
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("avatar-img").setAttribute("src", data.avatar);
      document.getElementById("userInfo").innerHTML = userInfoBinder(
        data.name,
        data.age
      );
      document.getElementById("description").innerHTML = data.description;
    });

  await education
    .then((res) => res.json())
    .then((data) => {
      data.sort((a, b) => a.year - b.year);
      data.forEach(
        (element) =>
          (document.getElementById(
            "educations-list"
          ).innerHTML += educationItemBinder(
            element.year,
            element.title,
            element.description
          ))
      );
    });
};

export default render;
