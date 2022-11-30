export function renderFamily(familyObject) {
    const clubEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    nameEl.textContent = familyObject.name;

    clubEl.append(nameEl);

    return clubEl;
}