const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const darkLight = $('.dark-light')
const body = $('body')
const navItems = $$('.nav-item')
const navUL = $('.nav-list')
const menuItems = $$('.menu-item-link')
const inputSearch = $('.header-search input')
const header = $('.header')
const headerSearch = $('.header-search')
const headerProfile = $('.header-profile')
const closeBtn = $('.close')
const updateBtn = $$('.update')
const updateForm = $('.update-form')
const cancelBtn = $('.cancel')
const menuBtn = $$('.right .menu')
const menuList = $$('.right .menu-list')
const overlayDropBtn = $('.overlay-dropdown-btn')

darkLight.onclick = function() {
    this.classList.toggle('dark-mode')
    this.classList.toggle('light-mode')
    body.classList.toggle('light-mode')
}

navItems.forEach((item,index) => {
    item.onclick = function() {
        $('.nav-item.active').classList.remove('active')
        this.classList.add('active')
    }
});

menuItems.forEach(function(item,index) {
    item.onclick = function() {
        $('.menu-item-link.active').classList.remove('active')
        this.classList.add('active')
    }
})

inputSearch.addEventListener('focus', function() {
    headerSearch.classList.add('max')
    navUL.style.display = 'none'
    headerProfile.style.display = 'none'
    
})

inputSearch.addEventListener('blur', function() {
    headerSearch.classList.remove('max')
    navUL.style.display = 'flex'
    headerProfile.style.display = 'flex'
    
})

closeBtn.onclick = function() {
    updateForm.style.visibility = 'hidden'
    updateForm.style.opacity = '0'
}

cancelBtn.onclick = function() {
    updateForm.style.visibility = 'hidden'
    updateForm.style.opacity = '0'
}

updateBtn.forEach(function(item) {
    item.onclick = function () {
        updateForm.style.visibility = 'unset'
        updateForm.style.opacity = '1'
    }
})

menuBtn.forEach((item,index) => {
    item.onclick = function() {
        menuList[index].classList.toggle('show')
        overlayDropBtn.classList.toggle('show')
        overlayDropBtn.onclick = function() {
            menuList[index].classList.toggle('show')
            overlayDropBtn.classList.toggle('show')
        }
    }
})

