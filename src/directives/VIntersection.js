export default {
    mounted(el, binding) {
        console.log(el, binding)
        const options = {
            // root: document.querySelector('#scrollArea'),
            rootMargin: '0px',
            threshold: 1.0
        }
        //я не понял, почему при теряется контекст, при использовании function declaration
        const callback = (entries, observer) => {
            if (entries[0].isIntersecting) {
                binding.value()
                console.log(entries)
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(el)
    },
    name: 'intersection'
}