//hvert billed, og de informationer vi laver img tagget ud fra
//objekt - variabler med propeties
let image1 = { src: "billede1.png", alt: "3 billeder", bannertext: "", logo: "" };
let image2 = { src: "billede2.png", alt: "2 billeder", bannertext: "", logo: "" };
let image3 = { src: "billede3.png", alt: "1 billede", bannertext: "", logo: "" };
let image4 = { src: "billede4.png", alt: "Søg hjæjp", bannertext: "SØG HJÆLP", logo: "logo.png" };
let image5 = { src: "billede5.png", alt: "Det er aldrig for sent", bannertext: "DET ER ALDRIG FOR SENT", logo: "logo.png" };

//img lenght = antal billeder 
//array som indenholder antal billeder - henter variabler - nemmer at printe ud 
var images = [image1, image2, image3, image4, image5,];


//funktion - genere DOMmen i HTML

//her generere den et div som indenholder img+h3 tag for hvert billed i array
window.onload = function () {

    //for loop - 21-74

    // for loop der kører for hvert billed i array'et "images"
    for (i = 0; i < images.length; i++) {
        //her laver den div'en
        //i henter billederne fra arrayet, nr = hele objektet fra arrayet
        //nr er ikke nr, men hvor vi henter et objekt i array
        var nr = images[i];
        // laver div tagget - div. = (variabel) = div tag navn
        var div1 = document.createElement("div");

        // stylet - det her vi sætter attributter som gør vi kan vælge den div 
        div1.id = "sliderId_" + [i];
        div1.className = "slide";
        div1.setAttribute('style', 'opacity: 0;');

        //fortæller hvor diverne skal ligge 
        document.getElementById("imageSlides").appendChild(div1);
        // her sætter den det første billed i slideren til opacity 1
        //operators (- og + og = og &)
        if (i == 0) {
            div1.setAttribute('style', 'opacity: 1;');
        }

        //her laver den Img + H3 tag som ligger i div
        if (i == i) {
            //img
            var img1 = document.createElement("img");

            //nr = hvilket nr billede vi er nået til
            //nr.src = henter det rigtige billede ift nr man er nået til 
            img1.src = ("src", "billeder/" + nr.src);
            img1.alt = ("alt", +nr.alt);

            //slider id + i = hvilken div img tagget skal puttes ind i 
            document.getElementById("sliderId_" + [i]).appendChild(img1);

            //H3
            var elem3 = document.createElement("h3");
            var h = document.createTextNode(nr.bannertext);
            elem3.appendChild(h);
            document.getElementById("sliderId_" + [i]).appendChild(elem3);

            //A img tag 
            var a1 = document.createElement("a");
            a1.id = ("test" + [i]);
            a1.href = "https://csm-danmark.dk/syd/";
            document.getElementById("sliderId_" + [i]).appendChild(a1);
            if (i == i) {
                var logo1 = document.createElement("img");
                logo1.src = ("src", "billeder/" + nr.logo);
                document.getElementById("test" + [i]).appendChild(logo1);
            }
        }
    }
}





//her skifter den opacity for "array nr 0 til array.length"
let x = 1;
let prev = 0; //"prev" skifter opacity på sidst ændret billed

//her skifter den imellem hvert billed, for at give en opacity 0
function slide() {
    document.getElementById("sliderId_" + x).style.opacity = 1;
    document.getElementById("sliderId_" + prev).style.opacity = 0;
    console.log("x = " + x);
    prev = x;
    if (x === images.length - 1) {
        x = 0;
    } else {
        x++;
    }
}
//her aktivere den ovenstående funktion hvert 3. sekund
setInterval(slide, 3000);
