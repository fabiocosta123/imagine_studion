$(document).ready(() => {
  const slickOptions = {
    autoplay: true,
    dots: false,
    // pauseOnHover: false,
    prevArrow:
      '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
    nextArrow:
      '<button type="button" class="slick-next slider__next-arrow">Next</button>;',
  };

  $(".slider").slick(slickOptions);

  $(".footer__form--button").on("click", () => {
    const email = $("#email").val();
    Email.send({
      Host: "smtp.yourisp.com",
      Username: "username", //nome de usuario que foi configurado no smtpJS
      Password: "password", //senha criada no smtpJS
      To: "them@website.com", //email para quem irei enviar
      From: "you@isp.com", //email de quem enviou (pode usar a variavel e-mail)
      Subject: "This is the subject",
      Body: "And this is the body",
    }).then((message) => alert(message));
  });
});
