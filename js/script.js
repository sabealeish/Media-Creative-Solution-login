



function TV2(){
    var navNum = document.querySelector('.nav-num');
    var children = navNum.querySelectorAll('div');
    document.querySelector(".avtivetv").classList.remove('avtivetv')
document.querySelector(".TV2").classList.add('avtivetv')
for (var i = 0; i < 2; i++) {
    children[i].classList.add('active');
  }
}
function TV3(){
    var navNum = document.querySelector('.nav-num');
    var children = navNum.querySelectorAll('div');
    document.querySelector(".avtivetv").classList.remove('avtivetv')
document.querySelector(".TV3").classList.add('avtivetv')
for (var i = 0; i < 3; i++) {
    children[i].classList.add('active');
  }
}
function TV4(){
    var navNum = document.querySelector('.nav-num');
    var children = navNum.querySelectorAll('div');
    document.querySelector(".avtivetv").classList.remove('avtivetv')
document.querySelector(".TV4").classList.add('avtivetv')
for (var i = 0; i < 4; i++) {
    children[i].classList.add('active');
  }
}
function TV1(){
    var navNum = document.querySelector('.nav-num');
    var children = navNum.querySelectorAll('div');
    document.querySelector(".avtivetv").classList.remove('avtivetv')
document.querySelector(".TV1").classList.add('avtivetv')
for (var i = 0; i < 1; i++) {
    children[i].classList.add('active');
  }
}
function TV5(){
    var navNum = document.querySelector('.nav-num');
var children = navNum.querySelectorAll('div');
     document.querySelector(".avtivetv").classList.remove('avtivetv')
 document.querySelector(".TV5").classList.add('avtivetv')
 for (var i = 0; i < 5; i++) {
     children[i].classList.add('active');
   }
 }
 function poup(){
  document.querySelector(".poup").classList.add("show")
  document.querySelector(".ovlay").classList.add("showovelay")
 }
 function clospoup(){
    document.querySelector(".poup").classList.remove("show")
    document.querySelector(".ovlay").classList.remove("showovelay")
   }
   function poup2(){
    document.querySelector(".show").classList.r("show")
    document.querySelector(".poup2").classList.add("show")
    
   }
   function clospoup2(){
    document.querySelector(".show").classList.remove("show")
    document.querySelector(".ovlay").classList.remove("showovelay")
   }


//    --------------------------------------------------




function TV21(){
    var navNum2 = document.querySelector('.nav-num2');
    var children2 = navNum2.querySelectorAll('div');
    document.querySelector(".avtivetv").classList.remove('avtivetv')
document.querySelector(".TV2").classList.add('avtivetv')
for (var i = 0; i < 2; i++) {
    children2[i].classList.add('active');
  }
}
function TV31(){
    var navNum2 = document.querySelector('.nav-num2');
    var children2 = navNum2.querySelectorAll('div');
    document.querySelector(".avtivetv").classList.remove('avtivetv')
document.querySelector(".TV3").classList.add('avtivetv')
for (var i = 0; i < 3; i++) {
    children2[i].classList.add('active');
  }
}
function TV41(){
    var navNum2 = document.querySelector('.nav-num2');
    var children2 = navNum2.querySelectorAll('div');
    document.querySelector(".avtivetv").classList.remove('avtivetv')
document.querySelector(".TV4").classList.add('avtivetv')
for (var i = 0; i < 4; i++) {
    children2[i].classList.add('active');
  }
}
function TV11(){
    var navNum2 = document.querySelector('.nav-num2');
    var children2 = navNum2.querySelectorAll('div');
    document.querySelector(".avtivetv").classList.remove('avtivetv')
document.querySelector(".TV1").classList.add('avtivetv')
for (var i = 0; i < 1; i++) {
    children2[i].classList.add('active');
  }
}



// ******************************

const dropdownBtn = document.getElementById("dropdown-btn");
const dropdownContent = document.getElementById("dropdown-content");

const locales = {
  "en-GB": "44",
  "ar-SA": "966",
  "zh-CN": "86",
  "de-DE": "49",
  "es-ES": "34",
  "fr-FR": "33",
  "hi-IN": "91",
  "it-IT": "39",
  "in-ID": "62",
  "ja-JP": "81",
  "ko-KR": "82",
  "nl-NL": "31",
  "no-NO": "47",
  "pl-PL": "48",
  "pt-BR": "55",
  "sv-SE": "46",
  "fi-FI": "358",
  "th-TH": "66",
  "tr-TR": "90",
  "uk-UA": "380",
  "vi-VN": "84",
  "ru-RU": "7",
  "he-IL": "972"
};

// إضافة الدول العربية
locales["ar-EG"] = "20"; // مصر
locales["ar-DZ"] = "213"; // الجزائر
locales["ar-MA"] = "212"; // المغرب
locales["ar-TN"] = "216"; // تونس
locales["ar-LY"] = "218"; // ليبيا
locales["ar-OM"] = "968"; // عمان
locales["ar-KW"] = "965"; // الكويت
locales["ar-BH"] = "973"; // البحرين
locales["ar-QA"] = "974"; // قطر
locales["ar-AE"] = "971"; // الإمارات العربية المتحدة


function getFlagSrc(countryCode) {
  return /^[A-Z]{2}$/.test(countryCode)
    ? `https://www.countryflagicons.com/SHINY/64/${countryCode.toUpperCase()}.png`
    : "";
}

function setSelectedLocale(locale) {
  const countryCode = locales[locale];
  if (!countryCode) {
    return;
  }

  const intlLocale = new Intl.Locale(locale);
  const langName = new Intl.DisplayNames([locale], {
    type: "language",
  }).of(intlLocale.language);

  dropdownContent.innerHTML = "";

  Object.entries(locales).forEach(([key, value]) => {
    if (key !== locale) {
      const otherIntlLocale = new Intl.Locale(key);
      const otherLangName = new Intl.DisplayNames([key], {
        type: "language",
      }).of(otherIntlLocale.language);

      const listEl = document.createElement("li");
      listEl.innerHTML = `+${value} - ${otherLangName}<img src="${getFlagSrc(
        otherIntlLocale.region
      )}" />`;
      listEl.value = key;
      listEl.addEventListener("mousedown", function (event) {
        event.preventDefault();
        setSelectedLocale(key);
      });
      dropdownContent.appendChild(listEl);
    }
  });

  dropdownBtn.innerHTML = `<img src="${getFlagSrc(
    intlLocale.region
  )}" />+${countryCode} <span class="arrow-down"></span>`;
}

setSelectedLocale(Object.keys(locales)[0]);

const browserLang = new Intl.Locale(navigator.language).language;
for (const locale in locales) {
  const localeLang = new Intl.Locale(locale).language;
  if (localeLang === browserLang) {
    setSelectedLocale(locale);
    break;
  }
}

const btn = document.querySelectorAll("button")
btn.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault(); // منع تحديث الصفحة الافتراضي عند النقر
    
  });
});


function pag1(){
  window.location = "Register new account.html"
}

function pag2(){
  window.location = "Register new account2.html"
}

function pag3(){
  window.location = "Register new account3.html"
}

function pag4(){
  window.location = "Register new account4.html"
}
