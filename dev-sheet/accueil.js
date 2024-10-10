<script>
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) { // Ajuste cette valeur si nécessaire
        header.classList.add('header-scroll');
    } else {
        header.classList.remove('header-scroll');
    }
});
</script>
