async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      Accept: "applicaiton/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function sendSignupData() {
  const usernameField = document.querySelector(".js-username");
  const passwordField = document.querySelector(".js-password");

  // postData("/api/signup", {
  //   username: usernameField.value,
  //   password: passwordField.value,
  // }).then((data) => {
  //   console.log(data);
  // });

  fetch("/api/signup", {
    method: "POST",
    redirect: "follow",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: usernameField.value,
      password: passwordField.value,
    }),
  })
    .then((response) => {
      console.log(response);
      window.location.href = response.url;
    })
    .catch(function (err) {
      console.info(err + " url: " + url);
    });
  // (async () => {
  //   const rawResponse = await fetch("/api/", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ a: 1, b: "Textual content" }),
  //   });
  //   const content = await rawResponse.json();

  //   console.log(content);
  // })();
}
