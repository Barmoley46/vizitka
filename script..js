$(document).ready(function() {
    $("#upload-photo").click(function() {
        $("#photo-input").click();
    });
    $("#photo-input").change(function(e) {
        const fileInput = e.target; 
        if (fileInput.files && fileInput.files[0]) { 
            const file = fileInput.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    $("#card-photo").attr('src', e.target.result).show();
                    $("#photo-preview").html('<img src="" alt="Превью" style="max-width: 50px; max-height: 50px;">')
                }
                reader.readAsDataURL(file);
            }
        } else {
            $("#photo-preview").html(''); 
            $("#card-photo").attr('src', '').hide(); 
        }
        fileInput.value = ''; 
    });
    $("#upload-card-bg").click(function() {
        $("#card-bg-image").click();
    });

   $("#card-bg-image").change(function(e) {
        const fileInput = e.target;
        if (fileInput.files && fileInput.files[0]) { 
            const file = fileInput.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    $("#card").css("background-image", 'url("' + e.target.result + '")');
                    $("#card-bg-preview").html('<img src="" style="max-width: 50px; max-height: 50px;">');
                }
                reader.readAsDataURL(file);
            }
        } else {
            $("#card").css("background-image", '');
            $("#card-bg-preview").html('');
        }
        fileInput.value = ''; 
    });
    $("#bg-color").change(function() {
        $("#card").css("background-color", $(this).val());
        $("#card").css("background-image", ''); 
    });
    $("#font-family").change(function() {
        const fontFamily = $(this).val();
        $("#card").css("font-family", fontFamily);
    });
    $("#text-color").change(function() {
        $("#card").css("color", $(this).val());
    });
    $("#name-color").change(function() {
        $(".card-name").css("color", $(this).val());
    });
    $("#name").keyup(function() {
        $(".card-name").text($(this).val());
    });

    $("#title").keyup(function() {
        $(".card-title").text($(this).val());
    });

    $("#phone").keyup(function() {
        $(".card-phone").text($(this).val());
    });

    $("#email").keyup(function() {
        $(".card-email").text($(this).val());
    });
    $("#avatar-shape").change(function() {
        const shape = $(this).val();
        switch (shape) {
            case "circle":
                $("#card-photo").css("border-radius", "50%");
                break;
            case "square":
                $("#card-photo").css("border-radius", "0");
                break;
            case "rounded":
                $("#card-photo").css("border-radius", "10px"); 
                break;
        }
    });
    $("#save-card").click(function() {
        const card = document.getElementById("card");
        const cardWidth = card.offsetWidth;
        const cardHeight = card.offsetHeight;
          html2canvas(card, {
                width: cardWidth,
                height: cardHeight,
                scale: 2 
            }).then(function(canvas) {
                const link = document.createElement('a');
                link.href = canvas.toDataURL("image/png");
                link.download = 'vizitka.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });

    });
});
