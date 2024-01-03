
//use for making new sites 
var arr = [


];

Callback.addEventListener('click', () => {
   console.log(arr);
   var inputElementArr = document.getElementById("arrInput");
   var inputValueArr = inputElementArr.value;
   arr.push(inputValueArr);
   console.log(inputValueArr);

 })

//use for making a new tabs with names
buttonID.addEventListener('click', () => {


    var inputElement = document.getElementById("textInput");
    var inputValue = inputElement.value;


    console.log(inputElement)

    chrome.tabs.create({
     url:  "http://"+inputValue,
     active: false
       });
})


Callender.addEventListener('click', () => {
    chrome.tabs.create({
        url: "https://scienceleadership.instructure.com/calendar",
        active: true
    });
    console.log("YESSIR");

})
DashB.addEventListener('click', () => {
    chrome.tabs.create({
        url: "https://scienceleadership.instructure.com/grades",
        active: true
    });
})

saveButton.addEventListener('click', () => {
  //  var notes = document.getElementById('notes').value;    
  //  console.log(notes)

      var textToSave = document.getElementById('notes').value;

  // Use chrome.storage.sync.set for Chrome extension storage
  chrome.storage.sync.set({ savedText: textToSave }, function() {
    console.log('Data saved');
  });

})
document.addEventListener('DOMContentLoaded', function() {
    // Use chrome.storage.sync.get for Chrome extension storage
    chrome.storage.sync.get(['savedText'], function(result) {
      var storedText = result.savedText;
      if (storedText) {
        document.getElementById('notes').value = storedText;
        console.log('Restored data:', storedText);
      }
    });
  });

Reload.addEventListener('click', () => {
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  var currentTab = tabs[0];
  // Reload the current tab
  chrome.tabs.reload(currentTab.id);
  console.log("Reload");

});
});