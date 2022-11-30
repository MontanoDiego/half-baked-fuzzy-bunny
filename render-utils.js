export function renderFamily(familyObject) {
    const familyEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    nameEl.textContent = familyObject.name;

    familyEl.classList.add('family');

    familyEl.append(nameEl);

    return familyEl;
}