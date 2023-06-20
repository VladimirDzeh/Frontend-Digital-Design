function activeItem(items, itemClass, target) {
    const btns = document.querySelectorAll(items);

    btns.forEach(btn => {
        btn.classList.remove(itemClass);
        btn.removeAttribute('disabled', 'disabled');
    });

    target.classList.add(itemClass);
    target.setAttribute('disabled', 'disabled');
}

function toggleDropdown(target, showClass, buttons, btnDropdown, btnDropdownActive) {
    const btns = document.querySelectorAll(buttons);

    target.nextElementSibling.classList.toggle(showClass);

    btns.forEach(btn => {
        if (btn !== target) {
            btn.nextElementSibling.classList.remove(showClass);
            if (btn.matches(btnDropdown)) {
                btn.classList.remove(btnDropdownActive);
            }
        }
    });

    if (target.matches(btnDropdown)) {
        target.classList.toggle(btnDropdownActive);
    }
}

function closeDropdown(menu, visibleClass, btnDropdown, btnDropdownActive) {
    const dropdowns = document.querySelectorAll(menu);
    const btn = document.querySelector(btnDropdown);
    dropdowns.forEach(dropdown => {
        dropdown.classList.remove(visibleClass);
    });

    btn.classList.remove(btnDropdownActive);
}

export {
    activeItem,
    toggleDropdown,
    closeDropdown
}