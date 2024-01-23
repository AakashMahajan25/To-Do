function addtodo() {
    const inputvalue = document.querySelector('.input-task').value;
    const target = document.createElement('div');
    const parent = document.querySelector('.main-container');
    target.classList.add('task');
    const target2 = document.createElement('button');
    target2.innerHTML = 'Done!';
    target.innerHTML = `<p>${inputvalue}</p>`;
    parent.appendChild(target);
    target.appendChild(target2);

}