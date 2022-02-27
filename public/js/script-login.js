function sendLoginData() {
  const usernameField = document.querySelector(".js-username");
  const passwordField = document.querySelector(".js-password");

  fetch("/api/login", {
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
}
