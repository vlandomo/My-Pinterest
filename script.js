/***** randome *****/
function shuffleElements() {
  const colums = document.getElementById('column1');
  const card = Array.from(colums.children);
  const shuffledcard = card.sort(() => Math.random() - 0.5);
  
  // تفريغ المحتوى الأصلي
  colums.innerHTML = '';

  // إعادة إضافة العناصر بشكل عشوائي
  shuffledcard.forEach(card => {
    colums.appendChild(card);
  });
}

function shuffleElements() {
  const colums = document.getElementById('column2');
  const card = Array.from(colums.children);
  const shuffledcard = card.sort(() => Math.random() - 0.5);
  
  // تفريغ المحتوى الأصلي
  colums.innerHTML = '';

  // إعادة إضافة العناصر بشكل عشوائي
  shuffledcard.forEach(card => {
    colums.appendChild(card);
  });
}



document.addEventListener('DOMContentLoaded', function() {
  const parentElement = document.querySelector('.parent');

  if (parentElement) {
    parentElement.addEventListener('click', (event) => {
      if (event.target.classList.contains('photo')) {
        console.log('hi');
      }
    });
  }
});

/***** popup *****/
let popup = document.getElementById('popup');
function openpopup() {
  popup.classList.add('open-popup');
}

function closepopup() {
  popup.classList.remove('open-popup');
}

/***** language *****/
const setLanguage = (language) => {
  const content = {
    en: {
      title: 'title',
      download: 'Download',
      share: 'Share',
      report: 'Report this post',
      settings: 'Settings',
      privacy: 'Privacy',
      darkMode: 'Dark Mode',all: 'All',
      notification: 'Notification',
      about: 'About'
    },
    ar: {
      title: 'عنوان',
      download: 'تحميل',
      share: 'مشاركة',
      report: 'الإبلاغ عن هذه المشاركة',
      settings: 'الاعدادات',
      darkMode: 'الوضع المظلم',
      privacy: 'خصوصية',
      all: 'الكل',
      notification: 'اشعارات',
      about: 'عنا'
    }
  };

  // تحديث نصوص الـ navbar
  document.querySelectorAll('.navbar-top h3').forEach(a => {
    a.textContent = content[language].settings;
  });

document.querySelectorAll('.all h3').forEach(h3 => {
  h3.textContent = content[language].all;
});
  // تحديث نصوص محتوى القائمة
  document.querySelectorAll('.scontent a').forEach((a, index) => {
    if (index === 0) a.textContent = content[language].darkMode;
    if (index === 1) a.textContent = content[language].privacy;
    if (index === 2) a.textContent = content[language].notification;
    if (index === 3) a.textContent = content[language].about;
  });

  // تحديث العناوين في الوصف
  document.querySelectorAll('.description p').forEach(p => {
    p.textContent = content[language].title;
  });

  // تحديث نصوص عناصر المشاركة
  document.querySelectorAll('.share-img a').forEach((a, index) => {
    if (index === 0) a.textContent = content[language].download;
    if (index === 1) a.textContent = content[language].share;
    if (index === 2) a.textContent = content[language].report;
  });

  // تحديث اتجاه النصوص بناءً على اللغة
  if (language === 'ar') {
    document.body.classList.add('rtl');
    document.body.classList.remove('ltr');
  } else {
    document.body.classList.add('ltr');
    document.body.classList.remove('rtl');
  }

  // تخزين اللغة في localStorage
  localStorage.setItem('language', language);

  // تحديث نص زر تبديل اللغة
  const languageToggle = document.getElementById('language-toggle');
  if (languageToggle) {
    languageToggle.textContent = language === 'en' ? 'عربى' : 'English';
  }
};

// استرجاع اللغة المحفوظة من localStorage
const savedLanguage = localStorage.getItem('language') || 'en';
setLanguage(savedLanguage);

// تبديل اللغة عند النقر على زر تبديل اللغة
const languageToggleBtn = document.getElementById('language-toggle');
if (languageToggleBtn) {
  languageToggleBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const currentLanguage = localStorage.getItem('language') || 'en';
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
  });
}

/***** Dark Mode *****/
const enableDarkMode = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", "disabled");
};

// تفعيل الوضع المظلم إذا كان مفعلًا من قبل
if (localStorage.getItem("darkMode") === "enabled") {
  enableDarkMode();
}

// تبديل الوضع المظلم عند النقر على الزر
const darkModeToggleBtn = document.getElementById("toggle-dark-mode");
if (darkModeToggleBtn) {
  darkModeToggleBtn.addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });
}
