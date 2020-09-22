const accordionContents = document.querySelectorAll('.content');
accordionContents.forEach((accordionContent, index)=>{
    accordionContent.addEventListener('click', (e)=>{
        accordionContents[index].classList.toggle("active");
    });
});