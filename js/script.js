// * HTML Elements
let mainRow = document.querySelector(".mainRow");
let mainAsideRow = document.querySelector(".mainAsideRow");
let heroAside = document.querySelector(".heroAside");
let hero = document.querySelector(".hero");
let searchResource = document.querySelector(".searchResource");
const place = document.querySelector(".place");
const SearchName = document.querySelector(".SearchName");
const searchByLetter = document.querySelector(".searchByLetter");
const hide = document.querySelector(".hide");
const search = document.querySelector(".search");
const navSearch = document.querySelector(".navSearch");
const navCategories = document.querySelector(".navCategories");
const category = document.querySelector(".category");
const categoryBox = document.querySelector(".categoryBox");
const navArea = document.querySelector(".navArea");
const area = document.querySelector(".area");
const areaBox = document.querySelector(".areaBox");
const Ingredients = document.querySelector(".Ingredients");
const ingredBox = document.querySelector(".ingredBox");
const navIngredients = document.querySelector(".navIngredients");
const alertPhone = document.querySelector(".alertPhone");
const inPhone = document.querySelector(".inPhone");
const alertMail = document.querySelector(".alertMail");
const inputMail = document.querySelector(".inputMail");
const alertName = document.querySelector(".alertName");
const repassAlert = document.querySelector(".repassAlert");
const inrepass = document.querySelector(".inrepass");
const passAlert = document.querySelector(".passAlert");
const inPass = document.querySelector(".inPass");
const alertAge = document.querySelector(".alertAge");
const inAge = document.querySelector(".inAge");
const inputName = document.querySelector(".inputName");
const contact = document.querySelector(".contact");
const navcontact = document.querySelector(".navcontact");
let submitBtn = document.querySelector(".submitBtn");
const sideNav = $(".side-nav").outerWidth();
const navLogo = $(".nav-smile").outerWidth();
const navCalc = sideNav - navLogo;
const nameRegex = /^[A-Z][a-z]{3,}$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneRegex = /^(\+20)?01[0125][0-9]{8}$/;
const ageRegex = /^(1[6789]|[2-9][0-9])$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/;

let isShown = false;
// ~ controlling nav Buttons
navSearch.addEventListener("click", function () {
  $("body").css({ overflow: "hidden" });
  $(".loading")
    .fadeToggle(500, function () {
      $("body").css({ overflow: "visible" });
      hero.classList.add("d-none");
      heroAside.classList.add("d-none");
      category.classList.add("d-none");
      search.classList.remove("d-none");
      area.classList.add("d-none");
      Ingredients.classList.add("d-none");
      contact.classList.add("d-none");
      $(".side-nav").animate({ left: `-${navCalc}px` }, 500);
      $(".movingIcon").removeClass("fa-x").addClass("fa-align-justify");
      isShown = false;
    })
    .fadeToggle(500);
});
navCategories.addEventListener("click", function () {
  $("body").css({ overflow: "hidden" });
  $(".loading")
    .fadeToggle(500, function () {
      $("body").css({ overflow: "visible" });
      categorymeals();
      hero.classList.add("d-none");
      search.classList.add("d-none");
      heroAside.classList.add("d-none");
      contact.classList.add("d-none");
      category.classList.remove("d-none");
      area.classList.add("d-none");
      Ingredients.classList.add("d-none");
      $(".side-nav").animate({ left: `-${navCalc}px` }, 500);
      $(".movingIcon").removeClass("fa-x").addClass("fa-align-justify");
      isShown = false;
    })
    .fadeToggle(500);
});
navcontact.addEventListener("click", function () {
  $("body").css({ overflow: "hidden" });
  $(".loading")
    .fadeToggle(500, function () {
      $("body").css({ overflow: "visible" });
      hero.classList.add("d-none");
      search.classList.add("d-none");
      heroAside.classList.add("d-none");
      category.classList.add("d-none");
      area.classList.add("d-none");
      Ingredients.classList.add("d-none");
      contact.classList.remove("d-none");
      $(".side-nav").animate({ left: `-${navCalc}px` }, 500);
      $(".movingIcon").removeClass("fa-x").addClass("fa-align-justify");
      isShown = false;
    })
    .fadeToggle(500);
});
navArea.addEventListener("click", function () {
  $("body").css({ overflow: "hidden" });
  $(".loading")
    .fadeToggle(500, function () {
      $("body").css({ overflow: "visible" });
      getArea();
      hero.classList.add("d-none");
      search.classList.add("d-none");
      heroAside.classList.add("d-none");
      category.classList.add("d-none");
      area.classList.remove("d-none");
      contact.classList.add("d-none");
      $(".side-nav").animate({ left: `-${navCalc}px` }, 500);
      $(".movingIcon").removeClass("fa-x").addClass("fa-align-justify");
      isShown = false;
    })
    .fadeToggle(500);
});
navIngredients.addEventListener("click", function () {
  $("body").css({ overflow: "hidden" });
  $(".loading")
    .fadeToggle(500, function () {
      $("body").css({ overflow: "visible" });
      getingred();
      hero.classList.add("d-none");
      search.classList.add("d-none");
      heroAside.classList.add("d-none");
      category.classList.add("d-none");
      area.classList.add("d-none");
      contact.classList.add("d-none");
      Ingredients.classList.remove("d-none");
      $(".side-nav").animate({ left: `-${navCalc}px` }, 500);
      $(".movingIcon").removeClass("fa-x").addClass("fa-align-justify");
      isShown = false;
    })
    .fadeToggle(500);
});
// ^ controlling nav move

$(".side-nav").css({ left: `-${navCalc}px` });

$(".movingIcon").on("click", function () {
  if (isShown == true) {
    (function () {
      $(".links li").animate(
        {
          top: 300,
        },
        500
      );
    })();
    $(".side-nav").animate({ left: `-${navCalc}px` }, 500);
    $(".movingIcon").removeClass("fa-x").addClass("fa-align-justify");
    isShown = false;
  } else {
    $(".side-nav").animate({ left: "0px" }, 500, function () {
      $(".links li:nth-child(1)").animate(
        {
          top: 0,
        },
        100,
        function () {
          $(".links li:nth-child(2)").animate(
            {
              top: 0,
            },
            100,
            function () {
              $(".links li:nth-child(3)").animate(
                {
                  top: 0,
                },
                100,
                function () {
                  $(".links li:nth-child(4)").animate(
                    {
                      top: 0,
                    },
                    100,
                    function () {
                      $(".links li:nth-child(5)").animate(
                        {
                          top: 0,
                        },
                        100
                      );
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
    $(".movingIcon").removeClass("fa-align-justify").addClass("fa-x");
    isShown = true;
  }
});

// ! hiding loading
jQuery(function () {
  $(".loading").fadeOut(1000, function () {
    $("body").css({ overflow: "visible" });
  });
});

// * playing with API
async function getmeal() {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );
  let data = await response.json();

  displayMain(data.meals);
}
function displayMain(arr) {
  let contentbox = "";
  for (let i = 0; i < arr.length; i++) {
    contentbox += `<div class="col-md-3">
              <div onclick="getmealInfo(${arr[i].idMeal})" class="meal position-relative overflow-hidden rounded-2">
                <img class="w-100" src="${arr[i].strMealThumb}" alt="" />
                <div
                  class="mealLayer position-absolute d-flex align-items-center text-black p-2"
                >
                  <h3>${arr[i].strMeal}</h3>
                </div>
              </div>
            </div>`;
  }
  mainRow.innerHTML = contentbox;
}
getmeal();

async function getmealInfo(idInfo) {
  $("body").css({ overflow: "hidden" });
  $(".loading")
    .fadeToggle(500)
    .fadeToggle(500, function () {
      $("body").css({ overflow: "visible" });
    });

  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idInfo}`
  );
  let data = await response.json();

  hero.classList.add("d-none");
  heroAside.classList.remove("d-none");
  displayAsideMain(data.meals[0]);
}
function displayAsideMain(meal) {
  let contentBox = "";

  let miniDetails = ``;

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      miniDetails += `<li class="alert alert-info m-2 p-1">
      ${meal[`strIngredient${i}`]} ${meal[`strMeasure${i}`]}
</li>`;
    }
  }

  let tags = "";
  if (meal.strTags) {
    let tagList = meal.strTags.split(",");
    for (let i = 0; i < tagList.length; i++) {
      tags += `
      <li class="alert alert-danger m-2 p-1">${tagList[i]}</li>`;
    }
  }

  contentBox = `

        <div class="col-md-4">
              <img
                class="w-100 rounded-3"
                src="${meal.strMealThumb}"
                alt=""
              />
              <h2>${meal.strMeal}</h2>
            </div>
            <div class="col-md-8">
              <h2>Instructions</h2>
              <p>
                ${meal.strInstructions}
              </p>
              <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
              <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
              <h3>Recipes :</h3>
              <ul class="list-unstyled d-flex g-3 flex-wrap">
                ${miniDetails}
              </ul>

              <h3>Tags :</h3>
              <ul class="list-unstyled d-flex g-3 flex-wrap">
               ${tags}
              </ul>

              <a
                target="_blank"
                href="${meal.strSource}"
                class="btn btn-success"
                >Source</a
              >
              <a
                target="_blank"
                href="${meal.strYoutube}"
                class="btn btn-danger"
                >Youtube</a
              >
            </div>`;
  mainAsideRow.innerHTML = contentBox;
  search.classList.add("d-none");
  category.classList.add("d-none");
  area.classList.add("d-none");
  Ingredients.classList.add("d-none");
  contact.classList.add("d-none");
}
async function searchmeal(meal) {
  $(".loading").fadeIn(500).fadeOut(500);
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
  );
  let data = await response.json();
  data.meals ? displaysearch(data.meals) : displaysearch([]);
  // displaysearch(data.meals);
}
function displaysearch(arr) {
  let contentbox = "";
  for (let i = 0; i < arr.length; i++) {
    contentbox += `<div class="col-md-3">
              <div onclick="getmealInfo(${arr[i].idMeal})" class="meal position-relative overflow-hidden rounded-2">
                <img class="w-100" src="${arr[i].strMealThumb}" alt="" />
                <div
                  class="mealLayer position-absolute d-flex align-items-center text-black p-2"
                >
                  <h3>${arr[i].strMeal}</h3>
                </div>
              </div>
            </div>`;
  }
  searchResource.innerHTML = contentbox;
}
SearchName.addEventListener("input", function () {
  searchmeal(this.value);
  place.classList.add("d-none");
});

async function searchmealLetter(meal) {
  $(".loading").fadeIn(500).fadeOut(500);
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${meal}`
  );
  let data = await response.json();
  displaysearch(data.meals);
}
searchByLetter.addEventListener("input", function () {
  searchmealLetter(this.value);
  place.classList.add("d-none");
});
// & category
async function categorymeals() {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  let data = await response.json();
  categoryWork(data.categories);
}
categorymeals();
function categoryWork(arr) {
  let box = "";
  for (let i = 0; i < arr.length; i++) {
    box += `<div class="col-md-3">
              <div
                onclick="getCategory('${arr[i].strCategory}')"
                class="meal position-relative overflow-hidden rounded-2"
              >
                <img
                  class="w-100"
                  src="${arr[i].strCategoryThumb}"
                  alt=""
                  srcset=""
                />
                <div
                  class="mealLayer position-absolute text-center text-black p-2"
                >
                  <h3>${arr[i].strCategory}</h3>
                  <p>
                   ${arr[i].strCategoryDescription
                     .split(" ")
                     .slice(0, 20)
                     .join(" ")}
                  </p>
                </div>
              </div>
            </div>`;
  }
  categoryBox.innerHTML = box;
}
async function getCategory(category) {
  $(".loading").fadeToggle(500);
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );
  response = await response.json();
  displaycategory(response.meals.slice(0, 20));
}
function displaycategory(arr) {
  $(".loading").fadeToggle(500);
  categoryBox.innerHTML = "";
  let content = "";
  for (let i = 0; i < arr.length; i++) {
    content += `
      <div class="col-md-3">
        <div onclick="getmealInfo('${arr[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2">
          <img class="w-100" src="${arr[i].strMealThumb}" alt="${arr[i].strMeal}" />
          <div class="mealLayer position-absolute d-flex align-items-center text-black p-2">
            <h3>${arr[i].strMeal}</h3>
          </div>
        </div>
      </div>
    `;
  }
  categoryBox.innerHTML = content;
}
// ! area
async function getArea() {
  $(".loading").fadeOut(500);
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  response = await response.json();
  displayArea(response.meals);
}
getArea();
function displayArea(arr) {
  let content = "";
  for (let i = 0; i < arr.length; i++) {
    content += `
            <div class="col-md-3 areaPointer">
              <div
                onclick="getAreaMeal('${arr[i].strArea}')"
                class="rounded-2 areaPointer text-center"
              >
                <i class="fa-solid fa-house-laptop fa-4x"></i>
                <h3>${arr[i].strArea}</h3>
              </div>
            </div>`;
  }
  areaBox.innerHTML = content;
}
async function getAreaMeal(area) {
  areaBox.innerHTML = "";
  $(".loading").fadeOut(500);
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );
  response = await response.json();
  displayareaclick(response.meals.slice(0, 20));
}
function displayareaclick(arr) {
  $(".loading").fadeOut(500);
  areaBox.innerHTML = "";
  let content = "";
  for (let i = 0; i < arr.length; i++) {
    content += `
      <div class="col-md-3">
        <div onclick="getmealInfo('${arr[i].idMeal}')" class="meal areaPointer position-relative overflow-hidden rounded-2">
          <img class="w-100" src="${arr[i].strMealThumb}" alt="${arr[i].strMeal}" />
          <div class="mealLayer position-absolute d-flex align-items-center text-black p-2">
            <h3>${arr[i].strMeal}</h3>
          </div>
        </div>
      </div>
    `;
  }
  areaBox.innerHTML = content;
}
// ? ingrediants
async function getingred() {
  $(".loading").fadeOut(500);
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  response = await response.json();
  displayingred(response.meals.slice(0, 20));
}
getingred();
function displayingred(arr) {
  let content = "";
  for (let i = 0; i < arr.length; i++) {
    content += `
            <div class="col-md-3">
              <div
                onclick="getingredMeal('${arr[i].strIngredient}')"
                class="rounded-2 text-center areaPointer"
              >
                <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                <h3>${arr[i].strIngredient}</h3>
                <p>
                  ${arr[i].strDescription.split(" ").slice(0, 20).join(" ")}
                </p>
              </div>
            </div>`;
  }
  ingredBox.innerHTML = content;
}
async function getingredMeal(ingred) {
  ingredBox.innerHTML = "";
  $(".loading").fadeOut(500);
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingred}`
  );
  response = await response.json();
  displayingredclick(response.meals.slice(0, 20));
}
function displayingredclick(arr) {
  $(".loading").fadeOut(500);
  ingredBox.innerHTML = "";
  let content = "";
  for (let i = 0; i < arr.length; i++) {
    content += `
      <div class="col-md-3">
        <div onclick="getmealInfo('${arr[i].idMeal}')" class="meal areaPointer position-relative overflow-hidden rounded-2">
          <img class="w-100" src="${arr[i].strMealThumb}" alt="${arr[i].strMeal}" />
          <div class="mealLayer position-absolute d-flex align-items-center text-black p-2">
            <h3>${arr[i].strMeal}</h3>
          </div>
        </div>
      </div>
    `;
  }
  ingredBox.innerHTML = content;
}
function validate(regex, element) {
  if (regex.test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    element.nextElementSibling.classList.add("d-none");

    btnSupmit();
    return true;
  } else {
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
    element.nextElementSibling.classList.remove("d-none");
    return false;
  }
}
// ? testing

function validate(regex, element) {
  if (regex.test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    element.nextElementSibling.classList.add("d-none");

    return true;
  } else {
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
    element.nextElementSibling.classList.remove("d-none");

    return false;
  }
}
function validaterepass(regex, element) {
  if (regex.test(element.value) && inPass.value === element.value) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    element.nextElementSibling.classList.add("d-none");

    return true;
  } else {
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
    element.nextElementSibling.classList.remove("d-none");

    return false;
  }
}
document.querySelectorAll(".contact input").forEach((input) => {
  input.addEventListener("input", () => {
    if (
      validate(nameRegex, inputName) &&
      validate(emailRegex, inputMail) &&
      validate(phoneRegex, inPhone) &&
      validate(ageRegex, inAge) &&
      validate(passwordRegex, inPass) &&
      validaterepass(passwordRegex, inrepass)
    ) {
      submitBtn.removeAttribute("disabled");
    } else {
      submitBtn.setAttribute("disabled", true);
    }
  });
});
submitBtn.addEventListener("click", function () {
  hide.classList.add("d-none");
  document.querySelector(".showName").innerHTML = inputName.value;
  place.classList.remove("d-none");
  search.classList.remove("d-none");
});
