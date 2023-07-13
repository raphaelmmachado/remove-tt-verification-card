function checkForElement(query) {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        const element = document.querySelector(query);
        if (element) {
          console.log(`Element found on page!`);
          // Remove the element from the page
          element.remove();
        }
      }
    });
  });

  // Start observing the page for changes
  observer.observe(document.body, { childList: true, subtree: true });
}
checkForElement('[aria-label="Obter verificação"]');

// This code defines a function called checkForElement that takes in a query as an argument.
// The query is a string that describes a certain element on the webpage, which we are looking for.

// The function creates a new MutationObserver object, which is a tool that allows us to observe changes to the webpage.
// We pass in a callback function to the observer that will be called whenever a change is detected on the webpage.

// Inside the callback function, we loop through all of the mutations that were detected.
// If the type of the mutation is "childList" (meaning a child element was added or removed from the page),
//  we then search for the element specified by the query using document.querySelector.

// If the element is found, we log a message to the console saying that the element was found,
//  and remove it from the page using the remove() method.

// Finally, we start observing the page for changes by calling observer.observe()
//  and passing in document.body (which is the root element of the page)
//  as well as some options that specify what kind of changes we want to observe (in this case, child elements being added or removed from the page).

// In this specific example, we are searching for an element with an aria-label attribute of "Obter verificação".
