let timeout = null;
let input = document.createElement('input');
const wrapper = document.querySelector('[data-wrapper]');
input.addEventListener('keyup', function(e){
    clearTimeout(timeout);
    timeout = setTimeout(() => console.log(e), 2000);
});
wrapper.append(input);