<template>
  <div class="four-page">
    <div class="four-page__header">
      <div class="grid wide">
        <div class="row b-gutter">
          <div class="col l-6 m-6 c-12">
            <div class="four-page__header-project">CHECK OUR PROJECTS</div>
          </div>
          <div class="col l-6 m-6 c-12">
            <div class="four-page__header-content">
              Minuteness of the parts formed a great hindrance to my speed,
              resolved, contrary to my first intention, to make the being.
              Minuteness of the parts formed a great hindrance to my speed,
              resolved, contrary to my first intention, to make the being.
            </div>
          </div>
        </div>
        <div class="four-page__header-border"></div>
      </div>
    </div>
    <div class="four-page__body">
      <div class="grid wide">
        <div class="row m-gutter">
          <div class="col l-3 c-12">
            <div class="four-page__body-category-main">PORTFOLIO</div>
            <ul class="four-page__body-category-list">
              <li class="four-page__body-category-item">
                <span
                  @click="fourPageHandleCategoryClick('')"
                  class="four-page__body-category-link four-page__body-category-item-active"
                  data-category="All"
                  >All</span
                >
              </li>
              <li class="four-page__body-category-item">
                <span
                  @click="fourPageHandleCategoryClick('')"
                  class="four-page__body-category-link"
                  data-category="DESIGN"
                  >Design</span
                >
              </li>
              <li class="four-page__body-category-item">
                <span
                  @click="fourPageHandleCategoryClick('')"
                  class="four-page__body-category-link"
                  data-category="DEVELOPMENT"
                  >Development</span
                >
              </li>
              <li class="four-page__body-category-item">
                <span
                  @click="fourPageHandleCategoryClick('')"
                  class="four-page__body-category-link"
                  data-category="BRANDING"
                  >Branding</span
                >
              </li>
              <li class="four-page__body-category-item">
                <span
                  @click="fourPageHandleCategoryClick('')"
                  class="four-page__body-category-link"
                  data-category="PRODUCTS"
                  >Products</span
                >
              </li>
            </ul>
            <select class="four-page__body-category-select" id="categorySelect">
              <option class="four-page__body-category-select-item" value="All">
                All
              </option>
              <option
                class="four-page__body-category-select-item"
                value="DESIGN"
              >
                Design
              </option>
              <option
                class="four-page__body-category-select-item"
                value="DEVELOPMENT"
              >
                Development
              </option>
              <option
                class="four-page__body-category-select-item"
                value="BRANDING"
              >
                Branding
              </option>
              <option
                class="four-page__body-category-select-item"
                value="PRODUCTS"
              >
                Products
              </option>
            </select>
          </div>
          <div class="col l-9 c-12">
            <div class="four-page__body-padding"></div>
            <div
              class="four-page__body-panner-list"
              id="data-container"
              :data-category="selectedCategory"
            >
              <!-- item -->
              <div></div>
            </div>
            <div class="four-page__body-panner-load-more">
              <div
                class="four-page__body-panner-load-more-btn"
                id="load-more-container"
              >
                LOAD MORE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { onMounted } from "vue";

///  *** load more four page
let fourPagePortfolioData;
let fourPageVisibleItems = 2;
// lấy dữ liệu
async function fourPageFetchData() {
  try {
    const response = await fetch("datapublic/data.json");
    const data = await response.json();
    fourPagePortfolioData = data;
    fourPageRenderProjects(data.slice(0, fourPageVisibleItems));
  } catch (error) {
    console.log("Error:", error);
  }
}
fourPageFetchData();

function fourPageFilterData(category) {
  const container = document.getElementById("data-container");
  container.innerHTML = "";
  container.setAttribute("data-category", category);
  const filteredItems = fourPagePortfolioData.filter((item) => {
    if (category === "All") {
      return true;
    } else {
      return item.portfolio === category;
    }
  });
  fourPageVisibleItems = 2;
  fourPageRenderProjects(filteredItems.slice(0, fourPageVisibleItems));
  updateLoadMoreButton(filteredItems.length, category);
}
// render dữ liệu
function fourPageRenderProjects(items) {
  const container = document.getElementById("data-container");
  items.forEach((item) => {
    console.log(item.portfolio);
    const projectDiv = document.createElement("div");
    projectDiv.className = "four-page__body-panner-design";
    projectDiv.style.backgroundColor = item.color;

    const portfolioDiv = document.createElement("div");
    portfolioDiv.className = "four-page__body-panner-design-tag";
    portfolioDiv.textContent = item.portfolio;

    const descriptionDiv = document.createElement("div");
    descriptionDiv.className = "four-page__body-panner-design-content";
    descriptionDiv.textContent = item.description;

    let contentDiv = "";
    if (item.portfolio == "DESIGN" || item.portfolio == "DEVELOPMENT") {
      contentDiv = document.createElement("img");
      contentDiv.className = "four-page__body-panner-design-img-dog";
      contentDiv.src = item.content;
    } else {
      contentDiv = document.createElement("img");
      contentDiv.className = "four-page__body-panner-design-img";
      contentDiv.src = item.content;
    }
    projectDiv.appendChild(portfolioDiv);
    projectDiv.appendChild(descriptionDiv);
    projectDiv.appendChild(contentDiv);
    container.appendChild(projectDiv);
  });
}
// load more item
function updateLoadMoreButton(totalItems, category) {
  const fourPageLoadMoreContainer = document.getElementById(
    "load-more-container"
  );
  if (
    fourPageVisibleItems >= totalItems ||
    (category !== "All" &&
      fourPageVisibleItems >=
        fourPagePortfolioData.filter((item) => item.portfolio === category)
          .length)
  ) {
    fourPageLoadMoreContainer.style.display = "none";
  } else {
    fourPageLoadMoreContainer.style.display = "block";
  }
}

let fourPageCategorySelect = document.getElementById("categorySelect");
console.log("123", fourPageCategorySelect);

onMounted(() => {
  // Lấy danh sách các danh mục
  const fourPageCategoryLinks = document.querySelectorAll(
    ".four-page__body-category-link"
  );

  function fourPageHandleCategoryClick(event) {
    fourPageCategoryLinks.forEach((link) => {
      link.classList.remove("four-page__body-category-item-active");
    });
    event.target.classList.add("four-page__body-category-item-active");
    const fourPageDataCategory = event.target.getAttribute("data-category");
    fourPageFilterData(fourPageDataCategory);
  }

  fourPageCategoryLinks.forEach((link) => {
    console.log("123123", link, fourPageHandleCategoryClick);
    link.addEventListener("click", fourPageHandleCategoryClick);
  });

  document
    .getElementById("load-more-container")
    .addEventListener("click", function () {
      const container = document.getElementById("data-container");
      const category = container.getAttribute("data-category");
      let filteredItems;
      if (category === "All") {
        filteredItems = fourPagePortfolioData.slice(
          fourPageVisibleItems,
          fourPageVisibleItems + 2
        );
      } else {
        const filteredCategoryItems = fourPagePortfolioData.filter(
          (item) => item.portfolio === category
        );
        filteredItems = filteredCategoryItems.slice(
          fourPageVisibleItems,
          fourPageVisibleItems + 2
        );
      }
      fourPageRenderProjects(filteredItems);
      fourPageVisibleItems += 2;
      updateLoadMoreButton(fourPagePortfolioData.length, category);
    });

  let fourPageCategorySelect = document.getElementById("categorySelect");
  console.log("123", fourPageCategorySelect);
  fourPageCategorySelect.addEventListener("change", function () {
    let selectedCategory = fourPageCategorySelect.value;
    fourPageFilterData(selectedCategory);
  });

  window.addEventListener("DOMContentLoaded", function () {
    fourPageFilterData("All");
  });

  return fourPageCategoryLinks;
});
</script>





<style >
/* four-page */
.four-page {
  background-color: var(--white-color);
}
.four-page__header {
}
.four-page__header-project {
  margin-top: 105px;
  font-family: "Inknut Antiqua", serif;
  font-weight: 900;
  font-size: 56px;
  line-height: 64px;
  color: var(--black-color);
  margin-bottom: 87px;
}
.four-page__header-content {
  margin-top: 107px;
  font-family: "DM Sans", serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: var(--black-color);
  opacity: 50.13%;
}
.four-page__header-border {
  width: 100%;
  height: 2px;
  background-color: var(--black-color);
}
.four-page__body {
}
.four-page__body-category-main {
  font-family: "Roboto Condensed", serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 3px;
  padding-top: 73px;
  padding-bottom: 37px;
}
.four-page__body-category-list {
  margin-bottom: 282px;
}
.four-page__body-category-item {
  color: var(--black-color);
  padding: 8px 0px;
  margin-top: 8x;
  font-family: "DM Sans", serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  cursor: pointer;
}
.four-page__body-category-link {
  font-family: "DM Sans", serif;
  display: inline-block;
  border-radius: 2px;

  padding-top: 7px;
  padding-bottom: 7px;
  width: 170px;
}
.four-page__body-category-item-active {
  color: var(--white-color);
  background-color: var(--black-color);
  padding-left: 16px;
}
#categorySelect {
  display: none;
}
.four-page__body-padding {
  padding-top: calc(78px - 47px);
}
.four-page__body-panner-design {
  position: relative;
  width: 870px;
  height: 416px;
  background-color: var(--yellow-color);
  margin-top: 47px;
  animation: fade-in 1s ease;
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.four-page__body-panner-design-tag {
  position: absolute;
  top: 219px;
  left: 48px;
  font-family: "Roboto Condensed", serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 3px;
}
.four-page__body-panner-design-content {
  position: absolute;
  top: 263px;
  left: 48px;
  font-family: "Inknut Antiqua", serif;
  font-weight: 900;
  font-size: 40px;
  line-height: 48px;
  width: 281px;
  height: 96px;
}
.four-page__body-panner-design-img {
  height: 435px;
  width: 614px;
  position: absolute;
  bottom: -1px;
  left: 308px;
}
.four-page__body-panner-design-img-dog {
  height: 470px;
  width: 376px;
  position: absolute;
  bottom: 0px;
  left: 383px;
}
.four-page__body-panner-load-more {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 240px;
}
.four-page__body-panner-load-more-btn {
  width: 170px;
  height: 48px;
  background-color: var(--primary-color);
  color: var(--white-color);
  font-family: "Roboto Condensed", serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 48px;
  letter-spacing: 1px;
  text-align: center;
}
</style>

