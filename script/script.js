let modal = document.getElementById('modal-window');
let close = document.getElementById('close');
let icon = document.getElementById('btn-icon');

icon.onclick = function(){
    modal.style.width = '100%';
}
close.onclick = function(){
    modal.style.width = '0%';
}