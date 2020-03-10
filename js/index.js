function set_time() {
    document.getElementById('time').innerText = Date();
}

set_time();
setInterval(() => {
    set_time();
}, 1000);
