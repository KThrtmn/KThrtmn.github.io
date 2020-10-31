const images = document.querySelectorAll("[data-src]");

const imgOptions={};

const imgObserver = new IntersectionObserver((entries,imgObserver)=> 
{
entries.forEach(entry=>{
    if (!entry.isIntersecting) {
        return;
    } else{
       preloadImgage(entry.target);
       imgObserver.unobserve(entry.target); 
    }

})

}, imgOptions);