const menu = (btnBurger, btnSubmenu) => {
    const burger = document.querySelector(btnBurger);
    const nav = document.querySelector('.nav');
    const navLink = document.querySelectorAll(btnSubmenu);

    burger.addEventListener('click', (e) => {
        nav.classList.toggle('active');

        burger.getAttribute("aria-expanded") == "false" ? burger.setAttribute("aria-expanded", "true") :
            burger.setAttribute("aria-expanded", "false")
    })

    navLink.forEach(el => {
        function hideSubmenu(element) {
            element.classList.remove('active')
            element.setAttribute("aria-expanded", "false");
            element.parentNode.querySelectorAll('.nav__sublink').forEach(elem => { elem.setAttribute("tabindex", "-1") })
        }

        function showSubmenu(element) {
            element.classList.add('active');
            element.setAttribute("aria-expanded", "true");
            element.parentNode.querySelectorAll('.nav__sublink').forEach(elem => { elem.setAttribute("tabindex", "0") });
        }

        el.addEventListener('click', function (e) {
            if (this.classList.contains('active')) { hideSubmenu(this) }
            else {
                navLink.forEach(el => { hideSubmenu(el) })
                showSubmenu(this);
            }
        })
    })
}

export default menu;