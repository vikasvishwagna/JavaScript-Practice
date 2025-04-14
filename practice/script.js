var parentId = document.getElementById('parent');
var childId = document.getElementById('child');

parentId.addEventListener('click', function(){
  console.log("parent dev is clicked");
});

childId.addEventListener('click', function(){
  console.log("child dev is clicked");
});
