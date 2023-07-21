import { useEffect } from "react";



ComponentDidMount: useEffect(() => {
 const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
   console.log(entry)
   if (entry.isIntersecting) {
    entry.target.classList.add('show');
   }
   else {
    entry.target.classList.remove('show');
   }
  });
 });
 const hidden = new Document.querySelectorAll('.hidden');
 hidden.forEach((el) => observer.observe(el));
});




