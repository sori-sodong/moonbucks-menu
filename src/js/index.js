function App(){
  document.querySelector("#espresso-menu-form").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  const countMenuNum = () => {
    document.querySelector(".menu-count").innerText = `총 ${document.querySelector("#espresso-menu-list").querySelectorAll("li").length}개`
  };

  const addMenuName = () => {
    const menuName = document.querySelector("#espresso-menu-name").value;
    if(menuName === "") {
      alert("입력하세요!");
      return;
    }
    document.querySelector("#espresso-menu-list").insertAdjacentHTML("beforeend", 
    `
    <li class="menu-list-item d-flex items-center py-2">
      <span class="w-100 pl-2 menu-name">${menuName}</span>
      <button
        type="button"
        class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
      >
        수정
      </button>
      <button
        type="button"
        class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
      >
        삭제
      </button>
    </li>
    ` 
    );
    countMenuNum();
    // input 값 초기화
    document.querySelector("#espresso-menu-name").value = "";
  };
  
  document.querySelector("#espresso-menu-name").addEventListener("keypress", (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    else {
      addMenuName();
    }
    
  });
  document.querySelector("#espresso-menu-submit-button").addEventListener("click", (e) => {
    addMenuName();
  });
  
  const editMenuName = (e) => {
    const closestLi = e.target.closest("li").querySelector(".menu-name");
    const newMenuName = prompt("새로운 이름을 입력하세요.",closestLi.innerText);
    closestLi.innerText = newMenuName;
  }

  const removeMenuName = (e) => {
    if(confirm("삭제하시겠습니까?")) {
      e.target.closest("li").remove();
    }
    countMenuNum();
  }
  document.querySelector("#espresso-menu-list").addEventListener("click", (e) => {
    if(e.target.classList.contains("menu-edit-button")) {
      editMenuName(e);
    }

    if(e.target.classList.contains("menu-remove-button")){
      removeMenuName(e);
    }
  });
}

App();