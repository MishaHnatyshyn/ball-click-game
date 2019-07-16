const deleteLives = () => {
    const headerLives = document.getElementById('header__lives');
    headerLives.removeChild(headerLives.lastElementChild);
}

export default deleteLives;