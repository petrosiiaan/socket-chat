smilesBtn.addEventListener('click', () => {
    if(smilesContainer.style.display === '' || smilesContainer.style.display === 'none') {
        smilesContainer.style.display = 'block'
    }
    else {
        smilesContainer.style.display = 'none'
    }
})

for(let i = 0; i < smiles.length; i++) {
    smiles[i].onclick = () => {
        sendInput.value = smiles[i].textContent
    }
}