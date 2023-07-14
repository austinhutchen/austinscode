



const observer = new IntersectionObserver((entries)=>{
 entries.forEach((entry)=>{
  console.log(entry)
  if(entry.IsIntersecting){
   entry.target.classlist.add('show');
  }
 });
});

const hidden = new document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));

