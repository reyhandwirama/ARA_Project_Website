const aheader1="Indonesia memiliki 34 provinsi dan 17000+ pulau";
const aheader2="Candi Borobudur Masuk Ke Dalam Situs Warisan Budaya Dunia";
const aheader3="Mandalika International Circuit di Indonesia";
const aheader4="Bali Bukan Negara, Tapi Provinsi di Indonesia";
const aheader5="Bunga Raflesia Arnoldi Berasal  dari Indonesia";
const aheader6="Prestasi Atlet Bulu Tangkis Indonesia";
const aheader7="Prestasi Atlet Kartu Bridge Indonesia";
const aheader8="Batik adalah warisan budaya dunia";
const aheader9="Tentang Kami";

const atext1="Penambahan pulau akan didaftarkan dalam pertemuan United Nation Group of Expert on Geographical Names (UNGEGN) pada tahun 2022";
const atext2="Candi Buddha terbesar di dunia ini  termasuk ke dalam situs Warisan Budaya Dunia yang diakui oleh Organisasi Pendidikan, Keilmuan, dan Kebudayaan Perserikatan Bangsa-Bangsa atau UNESCO";
const atext3="Berada di dekat Pantai Mandalika, pintu gerbang ke sebagian besar kota besar, dan hanya 30 menit dari Bandara Internasional Zainuddin Abdul Madjid Lombok.";
const atext4="Provinsi Dengan Ibukota Denpasar, menjadi destinasi wisata impian banyak orang";
const atext5="Pertama kali ditemukan di Bengkulu ketika sedang ekspedisi yang dipimpin oleh Thomas Stamford Raffles dan Dr. Joseph Arnold";
const atext6="Telah meraih beberapa prestasi, seperti: Juara Beregu Putri di BADMINTON ASIA TEAM CHAMPIONSHIP dan Pemenang MD di ALL ENGLAND"
;
const atext7="Meraih medali perunggu di ASEAN Games 2018 dan  Michael Hartono Menjadi Atlet tertua di cabang olahraga tersebut." ;
const atext8="Pada Oktober 2009, UNESCO menetapkan batik Indonesia sebagai Masterpiece of Oral and Intangible Cultural Heritage of Humanity.<br></br><br></br>Sebagai bagian dari pengakuan ini, UNESCO menegaskan bahwa Indonesia melestarikan warisannya. Tanggal 2 Oktober 2009 telah ditetapkan oleh pemerintah Indonesia sebagai Hari Batik Nasional.";
const atext9="IndoFacts adalah platform tempat Anda dapat menemukan fakta menarik dan mendidik tentang negara Indonesia, baik kepada penduduk lokal ataupun mancanegara.";


const header1="Indonesia has 34 Province and 17000+ Islands";
const header2="Borobudur templeis  a World Cultural Heritage Site";
const header3="Mandalika International Circuit In Indonesia";
const header4="Bali Isn’t a Country, it’s a Province";
const header5="Rafflesia flowerArnoldi Comes From Indonesia";
const header6="Achievement of Indonesian Badminton Athletes";
const header7="Bridge Card Athlete Achievement";
const header8="Batik is a world cultural heritage";
const header9="About Us";

const text1 ="Additional islands will be listed at the United Nation Group of Experts on Geographical Names (UNGEGN) meeting in 2022";
const text2="The largest Buddhist temple in the world is included in the World Cultural Heritage site recognized by the United Nations Educational, Scientific and Cultural Organization or UNESCO.";
const text3="Located near Mandalika Beach, gateway to most major cities, and only 30 minutes* from Lombok's Zainuddin Abdul Madjid International Airport.";
const text4="Province with the capital city of Denpasar, is a dream tourist destination for many people";
const text5="It was first discovered in Bengkulu during an expedition led by Thomas Stamford Raffles and Dr. Joseph Arnold";
const text6="Has achieved several accomplishments, such as:The Winner of Women Team at BADMINTON ASIA TEAM CHAMPIONSHIP and The Winner of MD at ALL ENGLAND";
const text7="Won a Bronze Medal at the 2018 ASIAN Games and Michael Hartono became the oldest athlete in the sport.";
const text8="In October 2009, UNESCO designated Indonesian batik as a Masterpiece of Oral and Intangible Cultural Heritage of Humanity.<br><br>As part of this recognition, UNESCO insists that Indonesia preserve its heritage. October 2, 2009 has been designated by the Indonesian government as the National Batik Day.";
const text9="IndoFacts is a platform where you can find interesting and educational facts about Indonesia, both to locals and foreigners.";

window.onscroll = function() {myFunction()};

var header = document.querySelector(".navbar");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.classList.remove("mt-1");
  } else {
    header.classList.remove("sticky");
  }
}

function translateBahasa(){
    var element = document.getElementById("en");
    var element2 = document.getElementById("id");
    if(element.classList.contains("non-aktif")){
        element.classList.remove("non-aktif");
        document.getElementById("id").classList.add("non-aktif");
        document.getElementById("header1").innerHTML=header1;
        document.getElementById("text1").innerHTML=text1;
        document.getElementById("header2").innerHTML=header2;
        document.getElementById("text2").innerHTML=text2;
        document.getElementById("header3").innerHTML=header3;
        document.getElementById("text3").innerHTML=text3;
        document.getElementById("header4").innerHTML=header4;
        document.getElementById("text4").innerHTML=text4;
        document.getElementById("header5").innerHTML=header5;
        document.getElementById("text5").innerHTML=text5;
        document.getElementById("header6").innerHTML=header6;
        document.getElementById("text6").innerHTML=text6;
        document.getElementById("header7").innerHTML=header7;
        document.getElementById("text7").innerHTML=text7;
        document.getElementById("header8").innerHTML=header8;
        document.getElementById("text8").innerHTML=text8;
        document.getElementById("header9").innerHTML=header9;
        document.getElementById("text9").innerHTML=text9;
        
    }
    else if(element2.classList.contains("non-aktif")){
        element2.classList.remove("non-aktif");
        document.getElementById("en").classList.add("non-aktif");
        
        document.getElementById("header1").innerHTML=aheader1;
        document.getElementById("text1").innerHTML=atext1;
        document.getElementById("header2").innerHTML=aheader2;
        document.getElementById("text2").innerHTML=atext2;
        document.getElementById("header3").innerHTML=aheader3;
        document.getElementById("text3").innerHTML=atext3;
        document.getElementById("header4").innerHTML=aheader4;
        document.getElementById("text4").innerHTML=atext4;
        document.getElementById("header5").innerHTML=aheader5;
        document.getElementById("text5").innerHTML=atext5;
        document.getElementById("header6").innerHTML=aheader6;
        document.getElementById("text6").innerHTML=atext6;
        document.getElementById("header7").innerHTML=aheader7;
        document.getElementById("text7").innerHTML=atext7;
        document.getElementById("header8").innerHTML=aheader8;
        document.getElementById("text8").innerHTML=atext8;
        document.getElementById("header9").innerHTML=aheader9;
        document.getElementById("text9").innerHTML=atext9;
    }
}


    window.addEventListener('scroll',reveal);

    function reveal(){
        var reveals = document.querySelectorAll('.reveal');

        for(var i = 0; i<reveals.length; i++){

            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 200;

            if(revealtop<windowheight - revealpoint){
                reveals[i].classList.add('active');
            }
            else{
                reveals[i].classList.remove('active');
            }
        }
    }