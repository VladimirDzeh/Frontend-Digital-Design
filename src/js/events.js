import {
    activeItem,
    toggleDropdown,
    closeDropdown
} from '@/js/uiFunc.js';

export default function events() {
    document.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;

        if (target.dataset.action === 'active') {
            activeItem(
                '[data-action="active"]',
                'menu__btn_active',
                target
            );
        }

        if (target.dataset.action === 'toggle') {
            toggleDropdown(
                target,
                'dropdown-menu_visible',
                '[data-action="toggle"]',
                '.btn-menu',
                'btn-menu_active'
            );
        }

        if (!target.closest('#close')) {
            closeDropdown(
                '.dropdown-menu',
                'dropdown-menu_visible',
                '[data-action="toggle"]',
                'btn-menu_active'
            );
        }


    });
}