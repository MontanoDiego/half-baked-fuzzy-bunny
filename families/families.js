import { checkAuth, deleteBunny, getFamilies, logout } from '../fetch-utils.js';
import { renderFamily } from '../render-utils.js';


checkAuth();

const familiesEl = document.querySelector('.families-container');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

async function displayFamilies() {
    // fetch families from supabase
    const families = await getFamilies();
    // clear out the familiesEl
    familiesEl.innerHTML = '';

    for (let family of families) {
        const familyEl = renderFamily(family);
        const bunniesEl = document.createElement('ul');
        for (let bunny of family.fuzzy_bunnies) {
            const bunnyEl = document.createElement('div');
            bunnyEl.addEventListener('click', async () => {
                await deleteBunny(bunny.id);
                displayFamilies();
            });
            bunnyEl.classList.add('bunny');
            bunnyEl.textContent = bunny.name;

            bunniesEl.append(bunnyEl);
        }
        familyEl.append(bunniesEl);
        familiesEl.append(familyEl);
    }
}

window.addEventListener('load', async () => {
    const families = await getFamilies();

    displayFamilies(families);
});
