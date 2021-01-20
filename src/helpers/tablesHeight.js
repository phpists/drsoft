
//    Функция изменения высоты таблиц
function changeHeight() {
    let height = window.screen.height,
        width = window.screen.width;
    const wrapper = document.querySelector(".table__block-wrapper");

    if (width <= 800)
        wrapper.style.maxHeight = `${(height = height - 550)}px`;
    else wrapper.style.maxHeight = `${(height = height - 580)}px`;

    const moveHeight = wrapper.clientHeight;
    if (moveHeight + 1 > height) wrapper.style.overflowY = "scroll";
    else wrapper.style.overflowY = "hidden";
}


export default changeHeight; 