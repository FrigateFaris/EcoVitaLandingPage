
/* ============ I18N ============ */
const translations = {
  ru: {
    nav_history:"О бренде", nav_quality:"Качество", nav_catalog:"Каталог", nav_faq:"Вопросы", nav_contacts:"Контакты",
    hero_eyebrow:"ECOVITA · с 1994 года", hero_h1:"Качество, проверенное временем",
    hero_p:"БАДы ECOVITA — тщательный выбор ингредиентов и производства по всему миру.",
    hero_scroll:"скролль вниз",
    hero_hist_a_p:"Российский бренд витаминов и БАД, основанный в 1994 году. С тех пор мы последовательно расширяем ассортимент, опираясь на глубокое изучение рынка сырья.",
    hero_hist_quote:"Лучший ингредиент — там, где он лучший.<br>Омега-3 — из России. Артишок — из Индии.<span class=\"mark close\">&rdquo;</span>",
    hist_year:"1994", hist_today:"сегодня", hist_principle:"Принцип ECOVITA", formula_label:"ФОРМУЛА",
    hist_eyebrow:"История бренда", hist_h2:"Путь длиной<br>в три десятилетия",
    fc_h2:"Каталог формул", fc_sub:"Продуманные нутрицевтические формулы для поддержки здоровья и качества жизни", fc_search:"Поиск по каталогу",
    showcase_all_products:"Вся продукция",
    hist_p1:"<strong>ECOVITA</strong> — российский бренд витаминов и БАД, основанный в 1994 году. Начав с ограниченной линейки продукции, компания последовательно расширяла ассортимент, опираясь на глубокое изучение рынка сырья — в том числе с применением современных ИИ-инструментов анализа.",
    hist_p2:"Философия бренда проста: <strong>лучший ингредиент берётся там, где он лучший</strong>. Омега-3 — из России, артишок — из Индии. ECOVITA выбирает производственные площадки по всему миру, оптимизируя состав и цену под потребности конкретного рынка — включая Узбекистан, где мы учитываем дозировки и предпочтения местного потребителя.",
    hist_p3:"Часть производственных мощностей принадлежит компании напрямую, что позволяет контролировать качество на каждом этапе — от сырья до готовой капсулы.",
    src1_title:"Омега-3 — Россия", src1_desc:"Концентрат рыбьего жира высокой степени очистки",
    src2_title:"Артишок — Индия", src2_desc:"Экстракт для поддержки печени и пищеварения",
    src3_title:"Адаптация — Узбекистан", src3_desc:"Дозировки и состав под предпочтения местного рынка",
    qual_eyebrow:"Качество и стандарты", qual_h2:"Контроль на каждом этапе",
    qual_p:"Каждая позиция линейки ECOVITA проходит производство по международным стандартам, с прозрачным составом и понятной дозировкой на каждой упаковке.",
    journey_rail:"Путь формулы", journey_eyebrow:"Качество и стандарты", journey_h2:"Путь формулы",
    journey_intro:"От активных компонентов до готовой банки — показываем логику формулы и то, какую информацию вы находите на каждой упаковке ECOVITA.",
    journey_step1_num:"01 · СОСТАВ", journey_step1_h3:"Прозрачный состав", journey_step1_p:"На производственной линии готовые капсулы проходят визуальные этапы контроля. На упаковке мы раскрываем, что находится внутри: активные вещества, их форму и точную дозировку на порцию.",
    journey_s1_f1_k:"На упаковке", journey_s1_f1_v:"Название активных веществ, форма и дозировка.", journey_s1_f2_k:"Прозрачность", journey_s1_f2_v:"Состав без нераскрытых смесей и непонятных сокращений.", journey_s1_f3_k:"Контроль", journey_s1_f3_v:"Проверка процесса и готовой формы перед фасовкой.",
    journey_step2_num:"02 · ФАСОВКА", journey_step2_h3:"Форма выпуска и фасовка", journey_step2_p:"Капсулы, таблетки, порошки и жидкие форматы фасуются в подходящую тару. Количество единиц и способ приёма определяются самой формулой и всегда указаны на упаковке.",
    journey_s2_f1_k:"Тара", journey_s2_f1_v:"Формат банки подбирается под конкретный продукт.", journey_s2_f2_k:"Количество", journey_s2_f2_v:"Число капсул или объём указываются на лицевой стороне.", journey_s2_f3_k:"Применение", journey_s2_f3_v:"Рекомендованный способ приёма — на каждой упаковке.",
    journey_step3_num:"03 · УПАКОВКА И КОНТРОЛЬ", journey_step3_h3:"Информация, которую можно проверить", journey_step3_p:"На этикетке собраны ключевые данные: активные компоненты, дозировка, способ применения и предупреждения. Перед отправкой готовая продукция проходит визуальный контроль целостности упаковки и читаемости маркировки.",
    journey_s3_f1_k:"Этикетка", journey_s3_f1_v:"Читаемый состав и вся необходимая информация о продукте.", journey_s3_f2_k:"Проверка", journey_s3_f2_v:"Контроль целостности банки, крышки и маркировки.", journey_s3_f3_k:"Стандарты", journey_s3_f3_v:"Производственные процессы выстроены по международным требованиям.",
    journey_step4_num:"04 · ГОТОВЫЙ ПРОДУКТ", journey_step4_h3:"Финальный результат", journey_step4_p:"После фасовки и маркировки формула становится готовым продуктом ECOVITA. На финальной упаковке собрана главная информация: название, активная формула, дозировка, количество капсул и рекомендации по применению.",
    journey_s4_f1_k:"Спереди", journey_s4_f1_v:"Название продукта, ключевая формула и количество капсул.", journey_s4_f2_k:"На этикетке", journey_s4_f2_v:"Состав, дозировка, способ применения и предупреждения.", journey_s4_f3_k:"Результат", journey_s4_f3_v:"Продукт готов к отправке в линейку ECOVITA.",
    journey_visual_1:"капсулы на линии", journey_visual_2:"пустые банки на линии", journey_visual_3:"контроль маркировки", journey_visual_4:"готовый продукт ECOVITA", journey_final_seal:"ФИНАЛЬНЫЙ<br>КОНТРОЛЬ", journey_capsule_caption:"точная порция",
    journey_photo1_title:"ГОТОВАЯ КАПСУЛА", journey_photo1_sub:"Реальный этап производства", journey_photo2_title:"ПОДГОТОВКА ТАРЫ", journey_photo2_sub:"Перед фасовкой готового продукта", journey_photo3_title:"РУЧНОЙ КОНТРОЛЬ", journey_photo3_sub:"Этикетка и целостность упаковки", journey_photo4_title:"ГОТОВАЯ ЛИНЕЙКА", journey_photo4_sub:"Финальная проверка перед отправкой",
    q1_title:"GMP-сертификация", q1_desc:"Производство соответствует стандарту Good Manufacturing Practice — контроль качества на каждом этапе процесса.",
    q2_title:"Прозрачный состав", q2_desc:"Точная дозировка активных веществ указана на каждой упаковке — без скрытых компонентов.",
    q3_title:"Отбор сырья", q3_desc:"Ингредиенты закупаются в странах, где конкретное сырьё показывает наилучшее качество.",
    cat_eyebrow:"Полная линейка", cat_h2:"Каталог продукции",
    faq_eyebrow:"Частые вопросы", faq_h2:"Вопросы и ответы",
    faq_sub:"Собрали то, о чём чаще всего спрашивают о БАДах ECOVITA — от состава до хранения.",
    faq_q1:"Чем БАД отличается от лекарства?",
    faq_a1:"БАД — это не лекарство, а дополнительный источник питательных веществ. Он не диагностирует и не лечит заболевания и не заменяет терапию, назначенную врачом.",
    faq_q2:"Как правильно принимать БАДы ECOVITA?",
    faq_a2:"Дозировка и способ приёма указаны на упаковке каждого продукта — мы намеренно делаем эту информацию понятной, без сокращений. Превышать заявленную суточную норму не рекомендуется.",
    faq_q3:"Есть ли противопоказания?",
    faq_a3:"Как и у любых БАДов, возможна индивидуальная непереносимость компонентов. При беременности, кормлении грудью или приёме других препаратов перед началом приёма проконсультируйтесь с врачом.",
    faq_q4:"Где и как производится продукция ECOVITA?",
    faq_a4:"Мы выбираем производственные площадки по всему миру — там, где конкретное сырьё показывает наилучшее качество, — и контролируем процесс по стандарту GMP на каждом этапе, от сырья до готовой капсулы. Подробнее — в разделе «Путь формулы» выше.",
    faq_q5:"Как хранить БАДы и какой у них срок годности?",
    faq_a5:"Храните в сухом прохладном месте, недоступном для детей, вдали от прямых солнечных лучей. Срок годности указан на упаковке каждого продукта.",
    faq_q6:"Где купить продукцию ECOVITA?",
    faq_a6:"Актуальный ассортимент представлен в каталоге на этом сайте. Чтобы уточнить наличие и способы покупки, свяжитесь с нами через контакты в футере сайта.",
    foot_ig:"Instagram", foot_tg:"Telegram", foot_fb:"Facebook", foot_rights:"Все права защищены.",
    tab_all:"Все", show_more:"Показать ещё", show_less:"Свернуть каталог", details:"Подробнее",
    modal_composition:"Состав", modal_usage:"Способ применения", modal_warnings:"Предупреждения",
    modal_image_hint:"Нажмите на упаковку, чтобы увеличить", modal_disclaimer:"БАД не является лекарственным средством.",
    modal_no_image:"Изображение скоро появится", close:"Закрыть"
  },
  uz: {
    nav_history:"Brend haqida", nav_quality:"Sifat", nav_catalog:"Katalog", nav_faq:"Savollar", nav_contacts:"Aloqa",
    hero_eyebrow:"ECOVITA · 1994 yildan", hero_h1:"Vaqt sinovidan oʻtgan sifat",
    hero_p:"ECOVITA BAD'lari — butun dunyo boʻylab ingredientlar va ishlab chiqarishning ehtiyotkorlik bilan tanlanishi.",
    hero_scroll:"pastga skroll qiling",
    hero_hist_a_p:"1994 yilda asos solingan vitaminlar va BAD'lar boʻyicha rossiyalik brend. Shundan beri biz xomashyo bozorini chuqur oʻrganish asosida assortimentni izchil kengaytirmoqdamiz.",
    hero_hist_quote:"Eng yaxshi ingredient — u eng yaxshi boʻlgan joydan.<br>Omega-3 — Rossiyadan. Artishok — Hindistondan.<span class=\"mark close\">&rdquo;</span>",
    hist_year:"1994", hist_today:"bugun", hist_principle:"ECOVITA tamoyili", formula_label:"FORMULA",
    hist_eyebrow:"Brend tarixi", hist_h2:"Uch oʻn yillik<br>yoʻl",
    fc_h2:"Formulalar katalogi", fc_sub:"Sogʻliq va hayot sifatini qoʻllab-quvvatlash uchun oʻylangan nutritsevtik formulalar", fc_search:"Katalogdan qidirish",
    showcase_all_products:"Barcha mahsulotlar",
    hist_p1:"<strong>ECOVITA</strong> — 1994 yilda asos solingan vitaminlar va BAD'lar boʻyicha rossiyalik brend. Cheklangan mahsulot toʻplamidan boshlab, kompaniya xomashyo bozorini chuqur oʻrganish asosida assortimentni izchil kengaytirdi — jumladan zamonaviy sun'iy intellekt vositalaridan foydalanib.",
    hist_p2:"Brend falsafasi sodda: <strong>eng yaxshi ingredient u eng yaxshi boʻlgan joydan olinadi</strong>. Omega-3 — Rossiyadan, artishok — Hindistondan. ECOVITA butun dunyo boʻylab ishlab chiqarish maydonchalarini tanlaydi, tarkib va narxni aniq bozor ehtiyojlariga moslashtiradi — jumladan Oʻzbekiston, bu yerda biz mahalliy iste'molchi afzalliklari va dozalarni hisobga olamiz.",
    hist_p3:"Ishlab chiqarish quvvatlarining bir qismi kompaniyaning oʻziga tegishli — bu xomashyodan tayyor kapsulagacha boʻlgan har bir bosqichda sifatni nazorat qilish imkonini beradi.",
    src1_title:"Omega-3 — Rossiya", src1_desc:"Yuqori tozalikdagi baliq yogʻi konsentrati",
    src2_title:"Artishok — Hindiston", src2_desc:"Jigar va ovqat hazm qilishni qoʻllab-quvvatlash uchun ekstrakt",
    src3_title:"Moslashuv — Oʻzbekiston", src3_desc:"Mahalliy bozor afzalliklariga moslashtirilgan doza va tarkib",
    qual_eyebrow:"Sifat va standartlar", qual_h2:"Har bosqichda nazorat",
    qual_p:"ECOVITA liniyasining har bir mahsuloti xalqaro standartlar boʻyicha ishlab chiqariladi, tarkibi shaffof va dozasi har bir qadoqda aniq koʻrsatilgan.",
    journey_rail:"Formula yoʻli", journey_eyebrow:"Sifat va standartlar", journey_h2:"Formula yoʻli",
    journey_intro:"Faol komponentlardan tayyor bankagacha — formula mantigʻi va ECOVITA qadoqlarida ko‘rsatiladigan ma’lumotlarni tushuntiramiz.",
    journey_step1_num:"01 · TARKIB", journey_step1_h3:"Shaffof tarkib", journey_step1_p:"Ishlab chiqarish liniyasida tayyor kapsulalar vizual nazorat bosqichlaridan o‘tadi. Qadoqda ichidagi faol moddalar, ularning shakli va porsiyadagi aniq doza ko‘rsatiladi.",
    journey_s1_f1_k:"Qadoqda", journey_s1_f1_v:"Faol moddalarning nomi, shakli va dozasi.", journey_s1_f2_k:"Shaffoflik", journey_s1_f2_v:"Yashirin aralashmalar va noaniq qisqartmalarsiz tarkib.", journey_s1_f3_k:"Nazorat", journey_s1_f3_v:"Fasovkadan oldin jarayon va tayyor shaklni tekshirish.",
    journey_step2_num:"02 · FASOVKA", journey_step2_h3:"Chiqarilish shakli va fasovka", journey_step2_p:"Kapsula, tabletka, kukun va suyuq formatlar mos idishga joylanadi. Birliklar soni va qabul qilish usuli formula bilan belgilanadi va qadoqda ko‘rsatiladi.",
    journey_s2_f1_k:"Idish", journey_s2_f1_v:"Banka formati aniq mahsulotga mos tanlanadi.", journey_s2_f2_k:"Miqdor", journey_s2_f2_v:"Kapsulalar soni yoki hajm old tomonda ko‘rsatiladi.", journey_s2_f3_k:"Qabul qilish", journey_s2_f3_v:"Tavsiya etilgan usul har bir qadoqda bor.",
    journey_step3_num:"03 · QADOQLASH VA NAZORAT", journey_step3_h3:"Tekshirish mumkin bo‘lgan ma’lumot", journey_step3_p:"Yorliqda asosiy ma’lumotlar jamlangan: faol komponentlar, doza, qabul qilish usuli va ogohlantirishlar. Jo‘natishdan oldin mahsulot qadoq butligi va markirovka o‘qilishini vizual nazoratdan o‘tadi.",
    journey_s3_f1_k:"Yorliq", journey_s3_f1_v:"O‘qiladigan tarkib va mahsulot haqidagi zarur ma’lumot.", journey_s3_f2_k:"Tekshiruv", journey_s3_f2_v:"Banka, qopqoq va markirovka butligini nazorat qilish.", journey_s3_f3_k:"Standartlar", journey_s3_f3_v:"Ishlab chiqarish jarayonlari xalqaro talablarga muvofiq yo‘lga qo‘yilgan.",
    journey_step4_num:"04 · TAYYOR MAHSULOT", journey_step4_h3:"Yakuniy natija", journey_step4_p:"Fasovka va markirovkadan so‘ng formula tayyor ECOVITA mahsulotiga aylanadi. Yakuniy qadoqda nomi, faol formula, doza, kapsulalar soni va qabul qilish tavsiyalari jamlangan.",
    journey_s4_f1_k:"Old tomonda", journey_s4_f1_v:"Mahsulot nomi, asosiy formula va kapsulalar soni.", journey_s4_f2_k:"Yorliqda", journey_s4_f2_v:"Tarkib, doza, qabul qilish usuli va ogohlantirishlar.", journey_s4_f3_k:"Natija", journey_s4_f3_v:"Mahsulot ECOVITA liniyasiga jo‘natishga tayyor.",
    journey_visual_1:"liniyadagi kapsulalar", journey_visual_2:"liniyadagi bo‘sh bankalar", journey_visual_3:"markirovka nazorati", journey_visual_4:"tayyor ECOVITA mahsuloti", journey_final_seal:"YAKUNIY<br>NAZORAT", journey_capsule_caption:"aniq porsiya",
    journey_photo1_title:"TAYYOR KAPSULA", journey_photo1_sub:"Haqiqiy ishlab chiqarish bosqichi", journey_photo2_title:"IDISHNI TAYYORLASH", journey_photo2_sub:"Tayyor mahsulotni fasovkalashdan oldin", journey_photo3_title:"QO‘LDA NAZORAT", journey_photo3_sub:"Yorliq va qadoq butligi", journey_photo4_title:"TAYYOR LINIYA", journey_photo4_sub:"Jo‘natishdan oldingi yakuniy tekshiruv",
    q1_title:"GMP-sertifikati", q1_desc:"Ishlab chiqarish Good Manufacturing Practice standartiga mos keladi — jarayonning har bosqichida sifat nazorati.",
    q2_title:"Shaffof tarkib", q2_desc:"Faol moddalarning aniq dozasi har bir qadoqda koʻrsatilgan — yashirin komponentlarsiz.",
    q3_title:"Xomashyo tanlovi", q3_desc:"Ingredientlar aynan shu xomashyo eng yaxshi sifat koʻrsatadigan davlatlardan xarid qilinadi.",
    cat_eyebrow:"Toʻliq liniya", cat_h2:"Mahsulotlar katalogi",
    faq_eyebrow:"Koʻp beriladigan savollar", faq_h2:"Savol va javoblar",
    faq_sub:"ECOVITA BAD'lari haqida eng koʻp beriladigan savollarni toʻpladik — tarkibdan saqlashgacha.",
    faq_q1:"BAD dori vositasidan nimasi bilan farq qiladi?",
    faq_a1:"BAD — dori emas, balki qoʻshimcha ozuqa moddalari manbai. U kasalliklarni tashxis qoʻymaydi, davolamaydi va shifokor tayinlagan davolashni almashtirmaydi.",
    faq_q2:"ECOVITA BAD'larini qanday qabul qilish kerak?",
    faq_a2:"Doza va qabul qilish usuli har bir mahsulot qadogʻida koʻrsatilgan — biz bu maʼlumotni ataylab tushunarli va qisqartmalarsiz qilamiz. Belgilangan kunlik meʼyordan oshirish tavsiya etilmaydi.",
    faq_q3:"Qarshi koʻrsatmalar bormi?",
    faq_a3:"Har qanday BAD kabi, komponentlarga individual bardoshsizlik boʻlishi mumkin. Homiladorlik, emizish davri yoki boshqa dorilarni qabul qilishda qabul qilishdan oldin shifokor bilan maslahatlashing.",
    faq_q4:"ECOVITA mahsulotlari qayerda va qanday ishlab chiqariladi?",
    faq_a4:"Biz butun dunyo boʻylab ishlab chiqarish maydonchalarini — aynan shu xomashyo eng yaxshi sifat koʻrsatadigan joylarni — tanlaymiz va jarayonni GMP standarti boʻyicha har bosqichda, xomashyodan tayyor kapsulagacha nazorat qilamiz. Batafsil — yuqoridagi «Formula yoʻli» boʻlimida.",
    faq_q5:"BAD'larni qanday saqlash kerak va yaroqlilik muddati qancha?",
    faq_a5:"Quruq, salqin, bolalar yeta olmaydigan va toʻgʻridan-toʻgʻri quyosh nuridan uzoq joyda saqlang. Yaroqlilik muddati har bir mahsulot qadogʻida koʻrsatilgan.",
    faq_q6:"ECOVITA mahsulotlarini qayerdan sotib olsa boʻladi?",
    faq_a6:"Dolzarb assortiment ushbu saytdagi katalogda taqdim etilgan. Mavjudligi va xarid usullarini aniqlashtirish uchun sayt pastidagi kontaktlar orqali biz bilan bogʻlaning.",
    foot_ig:"Instagram", foot_tg:"Telegram", foot_fb:"Facebook", foot_rights:"Barcha huquqlar himoyalangan.",
    tab_all:"Barchasi", show_more:"Yana ko‘rsatish", show_less:"Katalogni yig‘ish", details:"Batafsil",
    modal_composition:"Tarkibi", modal_usage:"Qabul qilish usuli", modal_warnings:"Ogohlantirishlar",
    modal_image_hint:"Kattalashtirish uchun qadoqni bosing", modal_disclaimer:"BAD dori vositasi emas.",
    modal_no_image:"Tasvir tez orada qo‘shiladi", close:"Yopish"
  }
};

let currentLang = 'ru';
let currentTab = 'all';
let products = [];
let catalogExpanded = false;
let lastFocusedElement = null;
const CATALOG_PREVIEW_COUNT = 8;
const featuredProductOrder = [
  'ecovita-magnesium-glycinate-360', 'ecovita-magnesium-malate-200',
  'ecovita-chlorophyll-liquid-menthol', 'ecovita-psyllium-75',
  'ecovita-omega3-30', 'ecovita-omega3-100', 'ecovita-lions-mane',
  'ecovita-coq10-100', 'ecovita-mag-citrate-b6', 'ecovita-selenium-100',
  'ecovita-sunflower-lecithin', 'ecovita-zinc-picolinate',
  'ecovita-vitamin-c-500', 'ecovita-marine-collagen',
  'ecovita-men-active', 'ecovita-women-balance', 'ecovita-l-carnitine'
];

function t(key){ return translations[currentLang][key] || translations.ru[key] || key; }

function applyI18n(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const val = translations[currentLang][key];
    if (val) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key = el.getAttribute('data-i18n-placeholder');
    const val = translations[currentLang][key];
    if (val) el.placeholder = val;
  });
  document.documentElement.lang = currentLang;
}

document.querySelectorAll('.lang-switch button').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    currentLang = btn.getAttribute('data-lang');
    document.querySelectorAll('.lang-switch button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    applyI18n();
    if (typeof renderShowcase === 'function') renderShowcase();
    if (typeof renderFcFilters === 'function'){ renderFcFilters(); renderFcGrid(); }
  });
});

/* Mobile navigation: the desktop links become a proper accessible menu on
   narrow screens instead of simply disappearing. */
const navBurger = document.getElementById('nav-burger');
const mainNav = document.getElementById('nav');
function setMobileMenu(open){
  if (!navBurger || !mainNav) return;
  mainNav.classList.toggle('menu-open', open);
  navBurger.setAttribute('aria-expanded', String(open));
  navBurger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
}
if (navBurger){
  navBurger.addEventListener('click', ()=>setMobileMenu(!mainNav.classList.contains('menu-open')));
  document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click', ()=>setMobileMenu(false)));
  window.addEventListener('resize', ()=>{
    if (window.innerWidth > 760) setMobileMenu(false);
  }, {passive:true});
  document.addEventListener('keydown', event=>{
    if (event.key === 'Escape' && mainNav.classList.contains('menu-open')) setMobileMenu(false);
  });
}

/* ============ CATALOG ============ */
const placeholderIcon = `<svg class="placeholder-icon" viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="28" y="18" width="44" height="14" rx="3" fill="currentColor" opacity="0.25"/>
  <rect x="22" y="32" width="56" height="96" rx="10" fill="currentColor" opacity="0.14"/>
  <rect x="22" y="58" width="56" height="24" fill="currentColor" opacity="0.22"/>
</svg>`;

/* ============ FORMULA CATALOG (preview section) ============ */
const leafIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 20c8 0 15-6 16-16-9 1-16 8-16 16z"/><path d="M4 20c2-5 6-9 11-11"/></svg>`;

const fcProducts = {
  ru: [
    { img:'calcium-citrate.png', name:'Calcium Citrate', dose:'210 MG · 90 CAPS', cat:'bones', desc:'Легкоусвояемая форма кальция для костей и зубов.', bullets:['Для поддержания здоровья костей и зубов','При возрастных изменениях костной ткани'], detail:'Кальция цитрат — одна из наиболее биодоступных форм кальция, которая усваивается независимо от кислотности желудка. Формула поддерживает плотность костной ткани, здоровье зубов и участвует в нормальной работе сердечной мышцы, что особенно важно при возрастных изменениях опорно-двигательного аппарата.' },
    { img:'calcium-zinc-mg-d3-b6.png', name:'Calcium Zinc Magnesium D3 B6', dose:'50/5/33 MG · 100 CAPS', cat:'heart', desc:'Комплекс минералов для сосудов, мозга и печени.', bullets:['Сохраняет баланс полезного холестерина','Поддерживает здоровье мозга и печени'], detail:'Сбалансированный комплекс кальция, цинка, магния, витаминов D3 и B6 разработан для комплексной поддержки организма: помогает сохранять здоровый баланс холестерина, поддерживает работу мозга и печени, а также улучшает кровообращение при регулярном приёме.' },
    { img:'chia-seeds.png', name:'Chia Seeds', dose:'150 G', cat:'digestion', desc:'Семена чиа с высоким содержанием клетчатки.', bullets:['Способствует улучшению пищеварения','Поддержке сердечно-сосудистой системы'], detail:'Семена чиа — натуральный источник растительной клетчатки, омега-3 жирных кислот и антиоксидантов. Продукт способствует мягкому улучшению пищеварения, помогает контролировать аппетит и вес, а также поддерживает здоровье сердечно-сосудистой системы.' },
    { img:'chromium-picolinate.png', name:'Chromium Picolinate', dose:'200 MCG · 60 CAPS', cat:'metabolism', desc:'Хром для контроля уровня сахара и метаболизма.', bullets:['Поддержание здорового уровня сахара в крови','Улучшает обмен веществ'], detail:'Пиколинат хрома — хорошо усваиваемая форма хрома, которая поддерживает здоровый уровень сахара в крови, улучшает чувствительность к инсулину и способствует ускорению обмена веществ, помогая при контроле массы тела.' },
    { img:'collagen.png', name:'Collagen Type I-III', dose:'430 MG · 60 CAPS', cat:'beauty', desc:'Коллаген для кожи, суставов и иммунитета.', bullets:['Улучшает здоровье кожи','Способствует восстановлению хрящевой ткани'], detail:'Коллаген типов I–III — структурный белок, поддерживающий упругость и увлажнённость кожи, прочность волос и ногтей. Формула также способствует восстановлению хрящевой ткани суставов и укрепляет иммунную систему.' },
    { img:'vitamin-d3-2000.png', name:'Vitamin D3 2000 МЕ', dose:'2000 ME · 100 CAPS', cat:'beauty', desc:'Витамин D3 для иммунитета и нервной системы.', bullets:['Способствует повышению общего иммунитета','Восстанавливает нервную систему'], detail:'Витамин D3 в дозировке 2000 МЕ поддерживает работу иммунной системы, способствует нормальному усвоению кальция, восстановлению нервной системы и поддержанию мышечного тонуса — базовая дозировка для регулярного приёма.' },
    { img:'vitamin-d3-5000.png', name:'Vitamin D3 5000 МЕ', dose:'5000 ME · 100 CAPS', cat:'beauty', desc:'Усиленная дозировка витамина D3.', bullets:['Способствует повышению общего иммунитета','Восстанавливает нервную систему'], detail:'Витамин D3 в дозировке 5000 МЕ — усиленная формула для тех, кто нуждается в дополнительной поддержке иммунитета, особенно в периоды пониженной инсоляции. Поддерживает нервную систему и мышечный тонус.' },
    { img:'vitamin-d3-10000.png', name:'Vitamin D3 10000 МЕ', dose:'10000 ME · 100 CAPS', cat:'beauty', desc:'Максимальная дозировка витамина D3.', bullets:['Способствует повышению общего иммунитета','Восстанавливает нервную систему'], detail:'Витамин D3 в высокой дозировке 10000 МЕ предназначен для восполнения выраженного дефицита витамина D под контролем специалиста. Поддерживает иммунитет, нервную систему и мышечный тонус.' },
    { img:'vitamin-d3-k2.png', name:'Vitamin D3 + K2', dose:'2000 ME · 50 MCG · 100 CAPS', cat:'beauty', desc:'Сочетание D3 и K2 для костей и сосудов.', bullets:['Восстанавливает нервную систему','Способствует повышению иммунитета'], detail:'Комбинация витаминов D3 и K2 усиливает усвоение кальция и направляет его именно в костную ткань, а не в сосуды. Формула поддерживает иммунитет, нервную систему и способствует улучшению структуры кожи.' },
    { img:'folic-acid.png', name:'Folic Acid', dose:'400 MCG · 60 CAPS', cat:'beauty', desc:'Фолиевая кислота для гормонального баланса.', bullets:['Гормональный баланс','Поддержка нервной системы'], detail:'Фолиевая кислота (витамин B9) участвует в делении клеток, поддерживает гормональный баланс, здоровье нервной системы и репродуктивной функции — особенно важна при планировании беременности.' },
    { img:'glucosamine-chondroitin-msm.png', name:'Glucosamine Chondroitin MSM', dose:'2320 MG · 120 CAPS', cat:'bones', desc:'Комплекс для суставов и подвижности.', bullets:['Уменьшению боли и увеличению подвижности суставов','Стимулирует восстановление тканей'], detail:'Комплекс глюкозамина, хондроитина и MSM — классическая формула для здоровья суставов. Способствует уменьшению боли, увеличению подвижности, стимулирует восстановление хрящевой ткани и служит профилактикой возрастного разрушения суставов.' },
    { img:'indole-3-carbinol.png', name:'Indole-3-Carbinol', dose:'200 MG · 60 CAPS', cat:'metabolism', desc:'Растительный экстракт для гормонального баланса.', bullets:['Поддержка гормонального баланса','Здоровый метаболизм эстрогенов'], detail:'Индол-3-карбинол — природное соединение из крестоцветных овощей, поддерживающее здоровый метаболизм эстрогенов и гормональный баланс. Дополнительно обеспечивает антиоксидантную защиту клеток.' },
    { img:'myo-inositol.png', name:'Myo-Inositol', dose:'500 MG · 200 MCG · 100 CAPS', cat:'metabolism', desc:'Инозитол для гормонального здоровья.', bullets:['Гормональный баланс','Здоровье репродуктивной системы'], detail:'Мио-инозитол поддерживает гормональный баланс и здоровье репродуктивной системы, а также способствует улучшению метаболизма — часто применяется в комплексной поддержке женского здоровья.' },
    { img:'iron-chelate.png', name:'Iron Chelate', dose:'40 MG · 60 CAPS', cat:'beauty', desc:'Хелатное железо против анемии и усталости.', bullets:['Поддерживает уровень гемоглобина в крови','Снижает риск развития анемии'], detail:'Хелатная форма железа отличается высокой усвояемостью и мягким действием на ЖКТ. Поддерживает нормальный уровень гемоглобина, снижает риск развития анемии и способствует повышению работоспособности.' },
    { img:'5htp-b6.png', name:'5-HTP + Vitamin B6', dose:'200 MG + 2 MG · 60 CAPS', cat:'beauty', desc:'5-HTP для спокойствия и качественного сна.', bullets:['Спокойствие и эмоциональный комфорт','Улучшение качества сна'], detail:'5-HTP в сочетании с витамином B6 поддерживает естественную выработку серотонина, способствуя эмоциональному спокойствию, снижению тревожности и улучшению качества сна.' },
    { img:'alpha-lipoic-acid.png', name:'Alpha Lipoic Acid', dose:'100 MG · 60 CAPS', cat:'metabolism', desc:'Мощный антиоксидант для печени и метаболизма.', bullets:['Детокс и здоровье печени','Мощная антиоксидантная защита'], detail:'Альфа-липоевая кислота — универсальный антиоксидант, поддерживающий детокс-функцию печени, защищающий клетки от окислительного стресса и способствующий здоровому метаболизму при снижении веса.' },
    { img:'b-complex.png', name:'B-Complex', dose:'60 CAPS', cat:'heart', desc:'Комплекс витаминов группы B для энергии и нервов.', bullets:['Улучшает состояние кожи, волос и ногтей','Стимулирует работу сердечно-сосудистой системы'], detail:'Комплекс витаминов группы B поддерживает энергетический обмен, укрепляет нервную систему, улучшает состояние кожи, волос и ногтей, а также стимулирует работу сердечно-сосудистой системы.' },
    { img:'berberine.png', name:'Berberine', dose:'500 MG · 60 CAPS', cat:'metabolism', desc:'Берберин для контроля сахара и метаболизма.', bullets:['Контроль сахара в крови','Ускорение метаболизма'], detail:'Берберин — растительный алкалоид, широко изученный за способность поддерживать здоровый уровень сахара в крови, ускорять метаболизм и снижать аппетит при контроле массы тела.' },
    { img:'biotin-b7.png', name:'Biotin Vitamin B7', dose:'5000 MCG · 60 CAPS', cat:'beauty', desc:'Биотин для волос, кожи и ногтей.', bullets:['Улучшает состояние кожи, волос и ногтей','Ускоряет метаболизм'], detail:'Биотин (витамин B7) в высокой дозировке 5000 мкг — популярная формула для красоты: улучшает состояние кожи, укрепляет волосы и ногти, а также участвует в ускорении обмена веществ.' },
  ],
  uz: [
    { img:'calcium-citrate.png', name:'Calcium Citrate', dose:'210 MG · 90 CAPS', cat:'bones', desc:'Suyak va tishlar uchun yengil singadigan kaltsiy.', bullets:['Suyak va tishlar sog\u02bblig\u02bbini saqlash uchun','Yoshga bog\u02bbliq suyak toʻqimasi oʻzgarishlarida'], detail:'Kaltsiy sitrat — oshqozon kislotaligidan qatʼi nazar yaxshi singadigan kaltsiy shakli. Formula suyak toʻqimasi zichligini, tishlar salomatligini qoʻllab-quvvatlaydi va yurak mushagi ishida ishtirok etadi.' },
    { img:'calcium-zinc-mg-d3-b6.png', name:'Calcium Zinc Magnesium D3 B6', dose:'50/5/33 MG · 100 CAPS', cat:'heart', desc:'Tomirlar, miya va jigar uchun minerallar kompleksi.', bullets:['Foydali xolesterin balansini saqlaydi','Miya va jigar salomatligini qoʻllab-quvvatlaydi'], detail:'Kaltsiy, rux, magniy, D3 va B6 vitaminlarining muvozanatli kompleksi xolesterin balansini saqlashga, miya va jigar ishini qoʻllab-quvvatlashga hamda qon aylanishini yaxshilashga yordam beradi.' },
    { img:'chia-seeds.png', name:'Chia Seeds', dose:'150 G', cat:'digestion', desc:'Yuqori tolali chia urugʻlari.', bullets:['Ovqat hazm qilishni yaxshilashga yordam beradi','Yurak-qon tomir tizimini qoʻllab-quvvatlaydi'], detail:'Chia urugʻlari — tabiiy oʻsimlik tolasi, omega-3 va antioksidantlar manbai. Ovqat hazm qilishni yaxshilaydi, ishtahani nazorat qilishga yordam beradi va yurak-qon tomir tizimini qoʻllab-quvvatlaydi.' },
    { img:'chromium-picolinate.png', name:'Chromium Picolinate', dose:'200 MCG · 60 CAPS', cat:'metabolism', desc:'Qandni nazorat qilish va metabolizm uchun xrom.', bullets:['Qondagi shakar darajasini saqlashga yordam beradi','Moddalar almashinuvini yaxshilaydi'], detail:'Xrom pikolinati qondagi shakar darajasini saqlashga, insulinga sezuvchanlikni yaxshilashga va moddalar almashinuvini tezlashtirishga yordam beradi.' },
    { img:'collagen.png', name:'Collagen Type I-III', dose:'430 MG · 60 CAPS', cat:'beauty', desc:'Teri, bogʻimlar va immunitet uchun kollagen.', bullets:['Teri salomatligini yaxshilaydi','Xaftaga toʻqimasini tiklashga yordam beradi'], detail:'I–III turdagi kollagen teri elastikligi va namligini, soch hamda tirnoqlar mustahkamligini qoʻllab-quvvatlaydi, bogʻim xaftaga toʻqimasini tiklashga yordam beradi va immunitetni mustahkamlaydi.' },
    { img:'vitamin-d3-2000.png', name:'Vitamin D3 2000 ME', dose:'2000 ME · 100 CAPS', cat:'beauty', desc:'Immunitet va asab tizimi uchun D3 vitamini.', bullets:['Umumiy immunitetni oshirishga yordam beradi','Asab tizimini tiklaydi'], detail:'2000 ME dozadagi D3 vitamini immunitetni, kaltsiy singishini, asab tizimi tiklanishini va mushak tonusini qoʻllab-quvvatlaydi.' },
    { img:'vitamin-d3-5000.png', name:'Vitamin D3 5000 ME', dose:'5000 ME · 100 CAPS', cat:'beauty', desc:'Kuchaytirilgan D3 vitamini dozasi.', bullets:['Umumiy immunitetni oshirishga yordam beradi','Asab tizimini tiklaydi'], detail:'5000 ME dozadagi D3 vitamini quyosh yetishmasligi davrida qoʻshimcha immunitet yordamiga muhtoj boʻlganlar uchun kuchaytirilgan formula.' },
    { img:'vitamin-d3-10000.png', name:'Vitamin D3 10000 ME', dose:'10000 ME · 100 CAPS', cat:'beauty', desc:'D3 vitaminining maksimal dozasi.', bullets:['Umumiy immunitetni oshirishga yordam beradi','Asab tizimini tiklaydi'], detail:'10000 ME yuqori dozadagi D3 vitamini mutaxassis nazorati ostida jiddiy D vitamin taqchilligini toʻldirish uchun moʻljallangan.' },
    { img:'vitamin-d3-k2.png', name:'Vitamin D3 + K2', dose:'2000 ME · 50 MCG · 100 CAPS', cat:'beauty', desc:'Suyak va tomirlar uchun D3 va K2 kombinatsiyasi.', bullets:['Asab tizimini tiklaydi','Immunitetni oshirishga yordam beradi'], detail:'D3 va K2 vitaminlari kombinatsiyasi kaltsiyning suyak toʻqimasiga yoʻnalishini kuchaytiradi, immunitet va asab tizimini qoʻllab-quvvatlaydi.' },
    { img:'folic-acid.png', name:'Folic Acid', dose:'400 MCG · 60 CAPS', cat:'beauty', desc:'Gormonal muvozanat uchun folat kislotasi.', bullets:['Gormonal muvozanat','Asab tizimini qoʻllab-quvvatlash'], detail:'Folat kislotasi (B9 vitamini) hujayra boʻlinishida ishtirok etadi, gormonal muvozanatni, asab tizimi va reproduktiv funksiyani qoʻllab-quvvatlaydi.' },
    { img:'glucosamine-chondroitin-msm.png', name:'Glucosamine Chondroitin MSM', dose:'2320 MG · 120 CAPS', cat:'bones', desc:'Bogʻimlar harakatchanligi uchun kompleks.', bullets:['Bogʻimlar harakatchanligini oshiradi, ogʻriqni kamaytiradi','Toʻqimalar tiklanishini rag\u02bbbatlantiradi'], detail:'Glyukozamin, xondroitin va MSM kompleksi bogʻim salomatligi uchun klassik formula — ogʻriqni kamaytiradi, harakatchanlikni oshiradi va xaftaga toʻqimasi tiklanishini rag\u02bbbatlantiradi.' },
    { img:'indole-3-carbinol.png', name:'Indole-3-Carbinol', dose:'200 MG · 60 CAPS', cat:'metabolism', desc:'Gormonal muvozanat uchun oʻsimlik ekstrakti.', bullets:['Gormonal muvozanatni qoʻllab-quvvatlash','Estrogen metabolizmini sogʻlom saqlash'], detail:'Indol-3-karbinol — krestogul sabzavotlardan olingan tabiiy birikma, estrogen metabolizmi va gormonal muvozanatni qoʻllab-quvvatlaydi hamda antioksidant himoya beradi.' },
    { img:'myo-inositol.png', name:'Myo-Inositol', dose:'500 MG · 200 MCG · 100 CAPS', cat:'metabolism', desc:'Gormonal salomatlik uchun inozitol.', bullets:['Gormonal muvozanat','Reproduktiv tizim salomatligi'], detail:'Myo-inozitol gormonal muvozanat va reproduktiv tizim salomatligini qoʻllab-quvvatlaydi, shuningdek metabolizmni yaxshilashga yordam beradi.' },
    { img:'iron-chelate.png', name:'Iron Chelate', dose:'40 MG · 60 CAPS', cat:'beauty', desc:'Anemiya va charchoqqa qarshi xelatli temir.', bullets:['Qondagi gemoglobin darajasini saqlaydi','Anemiya rivojlanish xavfini kamaytiradi'], detail:'Xelatli temir shakli yuqori singishi va oshqozonga yumshoq taʼsiri bilan ajralib turadi. Gemoglobin darajasini saqlaydi va anemiya xavfini kamaytiradi.' },
    { img:'5htp-b6.png', name:'5-HTP + Vitamin B6', dose:'200 MG + 2 MG · 60 CAPS', cat:'beauty', desc:'Xotirjamlik va sifatli uyqu uchun 5-HTP.', bullets:['Xotirjamlik va emotsional komfort','Uyqu sifatini yaxshilash'], detail:'5-HTP va B6 vitamini kombinatsiyasi tabiiy serotonin ishlab chiqarilishini qoʻllab-quvvatlaydi, xotirjamlik va uyqu sifatini yaxshilaydi.' },
    { img:'alpha-lipoic-acid.png', name:'Alpha Lipoic Acid', dose:'100 MG · 60 CAPS', cat:'metabolism', desc:'Jigar va metabolizm uchun kuchli antioksidant.', bullets:['Detoks va jigar salomatligi','Kuchli antioksidant himoya'], detail:'Alfa-lipoy kislotasi jigar detoks funksiyasini qoʻllab-quvvatlaydigan universal antioksidant, hujayralarni oksidlanish stressidan himoya qiladi.' },
    { img:'b-complex.png', name:'B-Complex', dose:'60 CAPS', cat:'heart', desc:'Energiya va asablar uchun B guruhi vitaminlari.', bullets:['Teri, soch va tirnoqlar holatini yaxshilaydi','Yurak-qon tomir tizimi ishini rag\u02bbbatlantiradi'], detail:'B guruhi vitaminlari kompleksi energiya almashinuvini, asab tizimini qoʻllab-quvvatlaydi, teri va soch holatini yaxshilaydi.' },
    { img:'berberine.png', name:'Berberine', dose:'500 MG · 60 CAPS', cat:'metabolism', desc:'Qand va metabolizm nazorati uchun berberin.', bullets:['Qondagi shakar nazorati','Metabolizmni tezlashtirish'], detail:'Berberin — qondagi shakar darajasini saqlash, metabolizmni tezlashtirish va ishtahani kamaytirishda yordam beruvchi oʻsimlik alkaloidi.' },
    { img:'biotin-b7.png', name:'Biotin Vitamin B7', dose:'5000 MCG · 60 CAPS', cat:'beauty', desc:'Soch, teri va tirnoqlar uchun biotin.', bullets:['Teri, soch va tirnoqlar holatini yaxshilaydi','Metabolizmni tezlashtiradi'], detail:'Yuqori dozadagi biotin (B7 vitamini) — teri holatini yaxshilaydi, soch va tirnoqlarni mustahkamlaydi hamda moddalar almashinuvida ishtirok etadi.' },
  ]
};
const fcCatLabels = {
  ru: { all:'Все продукты', bones:'Кости и суставы', heart:'Сердце и сосуды', metabolism:'Обмен веществ', digestion:'Пищеварение', beauty:'Красота и энергия' },
  uz: { all:'Barcha mahsulotlar', bones:'Suyak va bogʻimlar', heart:'Yurak va tomirlar', metabolism:'Moddalar almashinuvi', digestion:'Ovqat hazm qilish', beauty:'Goʻzallik va energiya' }
};
let fcActiveCat = 'all';
let fcSearchTerm = '';
let fcExpanded = false;
const FC_PREVIEW_COUNT = 8;
const fcProductCategory = {
  'Омега-3':'heart', 'Травы':'beauty', 'Антиоксиданты':'heart', 'Нервная система':'beauty',
  'Минералы':'beauty', 'Пищеварение':'digestion', 'Витамины':'beauty', 'Красота':'beauty', 'Спорт':'metabolism'
};

function fcFullImageSrc(product){ return product.image || `assets/products/${product.img}`; }

function fcImageSrc(product){
  if (product.image && product.image.startsWith('assets/products/')){
    const fileName = product.image.split('/').pop().replace(/\.(png|jpe?g)$/i, '.webp');
    return `assets/products/${fileName}`;
  }
  return fcFullImageSrc(product);
}

function getFormulaSupplementProducts(){
  const source = Array.isArray(window.ECOVITA_PRODUCTS) ? window.ECOVITA_PRODUCTS : [];
  return source.filter(product=>product.image).map(product=>{
    const isRu = currentLang === 'ru';
    const fullName = isRu ? product.title_ru : (product.title_uz || product.title_ru);
    return {
      image: product.image,
      name: fullName.replace(/^ECOVITA\s*/i, '').split(',')[0],
      dose: product.dosage || '',
      cat: fcProductCategory[product.category_tab] || 'beauty',
      desc: isRu ? product.short_ru : (product.short_uz || product.short_ru),
      detail: isRu ? (product.detail_ru || product.short_ru) : (product.detail_uz || product.short_uz || product.short_ru),
      composition: isRu ? product.composition_ru : (product.composition_uz || product.composition_ru),
      usage: isRu ? product.usage_ru : (product.usage_uz || product.usage_ru),
      warnings: isRu ? product.warnings_ru : (product.warnings_uz || product.warnings_ru),
      bullets: [],
      featured: true
    };
  });
}

function renderFcFilters(){
  const el = document.getElementById('fc-filters');
  if (!el) return;
  const labels = fcCatLabels[currentLang] || fcCatLabels.ru;
  const cats = ['all','bones','heart','metabolism','digestion','beauty'];
  el.innerHTML = cats.map(c=>`<button class="fc-filter-btn${c===fcActiveCat?' active':''}" data-cat="${c}">${labels[c]}</button>`).join('');
  el.querySelectorAll('.fc-filter-btn').forEach(btn=>{
    btn.onclick = ()=>{ fcActiveCat = btn.getAttribute('data-cat'); fcExpanded = fcActiveCat !== 'all'; renderFcFilters(); renderFcGrid(); };
  });
}

function renderFcGrid(){
  const grid = document.getElementById('fc-grid');
  if (!grid) return;
  const list = [...getFormulaSupplementProducts(), ...(fcProducts[currentLang] || fcProducts.ru)];
  const term = fcSearchTerm.trim().toLowerCase();
  const filtered = list.filter(p=>{
    const catOk = fcActiveCat==='all' || p.cat===fcActiveCat;
    const searchOk = !term || p.name.toLowerCase().includes(term) || p.bullets.join(' ').toLowerCase().includes(term);
    return catOk && searchOk;
  }).sort((a,b)=>Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
  const usePreview = fcActiveCat === 'all' && !fcSearchTerm && !fcExpanded;
  const visibleProducts = usePreview ? filtered.slice(0, FC_PREVIEW_COUNT) : filtered;
  const actions = document.getElementById('fc-catalog-actions');
  if (filtered.length === 0){
    grid.innerHTML = `<div class="fc-empty">—</div>`;
    actions.innerHTML = '';
    return;
  }
  grid.innerHTML = visibleProducts.map((p,i)=>`
    <div class="fc-card" data-fc-idx="${list.indexOf(p)}">
      <div class="fc-card-media">
        <div class="fc-card-arc"></div>
        <div class="fc-leaf bl">${leafIcon}</div>
        <div class="fc-leaf br">${leafIcon}</div>
        <img src="${fcImageSrc(p)}" alt="${p.name}" loading="lazy">
      </div>
      <div class="fc-card-name">${p.name}</div>
      <div class="fc-card-divider"></div>
      <div class="fc-card-desc">${p.desc || ''}</div>
      <div class="fc-bullets">
        ${p.bullets.map(b=>`<div class="fc-bullet">${leafIcon}<span>${b}</span></div>`).join('')}
      </div>
    </div>`).join('');

  grid.querySelectorAll('.fc-card').forEach(card=>{
    card.addEventListener('click', ()=>{
      const idx = parseInt(card.getAttribute('data-fc-idx'), 10);
      openFcModal(list[idx]);
    });
  });

  if (fcActiveCat === 'all' && !fcSearchTerm && filtered.length > FC_PREVIEW_COUNT){
    const label = fcExpanded ? t('show_less') : `${t('show_more')} (${filtered.length - FC_PREVIEW_COUNT})`;
    actions.innerHTML = `<button class="fc-catalog-toggle${fcExpanded ? ' is-expanded':''}" type="button" id="fc-catalog-toggle">${label}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></button>`;
    document.getElementById('fc-catalog-toggle').onclick = ()=>{ fcExpanded = !fcExpanded; renderFcGrid(); };
  } else {
    actions.innerHTML = '';
  }
}

function openFcModal(p){
  const overlay = document.getElementById('fc-modal');
  const body = document.getElementById('fc-modal-body');
  if (!overlay || !body) return;
  // В карточке загружается лёгкая миниатюра, а в модальном окне — исходное
  // изображение, чтобы этикетку можно было рассмотреть без потери качества.
  const imageSrc = fcFullImageSrc(p);
  const details = [
    [t('modal_composition'), p.composition],
    [t('modal_usage'), p.usage],
    [t('modal_warnings'), p.warnings]
  ].filter(([, value])=>value);
  body.innerHTML = `
    <div class="fc-modal-media">
      <div class="fc-modal-arc"></div>
      <button class="fc-modal-image-button" type="button" id="fc-modal-image-zoom" aria-label="${t('modal_image_hint')}"><img src="${imageSrc}" alt="${p.name}"></button>
    </div>
    <div class="fc-modal-info">
      <div class="fc-modal-name">${p.name}</div>
      <div class="fc-modal-dose">${p.dose || ''}</div>
      <p class="fc-modal-detail">${p.detail || p.desc || ''}</p>
      ${details.length ? `<div class="fc-modal-details">${details.map(([label,value])=>`<div><strong>${label}</strong><span>${value}</span></div>`).join('')}</div>` : ''}
      <div class="fc-bullets">
        ${p.bullets.map(b=>`<div class="fc-bullet">${leafIcon}<span>${b}</span></div>`).join('')}
      </div>
    </div>`;
  document.getElementById('fc-modal-image-zoom').onclick = ()=>openImageLightbox(imageSrc, p.name);
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeFcModal(){
  const overlay = document.getElementById('fc-modal');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function initFormulaCatalog(){
  renderFcFilters();
  renderFcGrid();
  const overlay = document.getElementById('fc-modal');
  if (overlay){
    overlay.addEventListener('click', (e)=>{ if (e.target === overlay) closeFcModal(); });
  }
  const closeBtn = document.getElementById('fc-modal-close');
  if (closeBtn) closeBtn.addEventListener('click', closeFcModal);
  document.addEventListener('keydown', (e)=>{ if (e.key === 'Escape') closeFcModal(); });
  const input = document.getElementById('fc-search-input');
  if (input){
    input.addEventListener('input', ()=>{ fcSearchTerm = input.value; renderFcGrid(); });
  }
}

async function loadProducts(){
  try {
    const res = await fetch('assets/data/products.json');
    if (!res.ok) throw new Error('Каталог не загружен');
    products = await res.json();
  } catch (error) {
    // При открытии через file:// браузер может блокировать fetch. В этом случае
    // используем заранее подключённую локальную копию каталога.
    products = window.ECOVITA_PRODUCTS || [];
  }
  renderTabs();
  renderProducts();
}

function tabLabel(p){ return currentLang==='ru' ? p.category_tab : (p.category_tab_uz || p.category_tab); }

function renderTabs(){
  const tabsEl = document.getElementById('tabs');
  // build unique list keyed by RU value (stable filter key) but display translated label
  const catMap = new Map();
  products.forEach(p=>{ if(!catMap.has(p.category_tab)) catMap.set(p.category_tab, tabLabel(p)); });
  const cats = [...catMap.entries()].sort((a,b)=>a[1].localeCompare(b[1]));
  const all = translations[currentLang].tab_all;
  tabsEl.innerHTML = '';
  const allBtn = document.createElement('button');
  allBtn.className = 'tab-btn' + (currentTab==='all' ? ' active':'');
  allBtn.textContent = all;
  allBtn.onclick = ()=>{ currentTab='all'; catalogExpanded=false; renderTabs(); renderProducts(); };
  tabsEl.appendChild(allBtn);
  cats.forEach(([catKey,label])=>{
    const b = document.createElement('button');
    b.className = 'tab-btn' + (currentTab===catKey ? ' active':'');
    b.textContent = label;
    b.onclick = ()=>{ currentTab=catKey; catalogExpanded=true; renderTabs(); renderProducts(); };
    tabsEl.appendChild(b);
  });
}

function renderProducts(){
  const grid = document.getElementById('product-grid');
  const filtered = (currentTab==='all' ? products : products.filter(p=>p.category_tab===currentTab))
    .slice()
    .sort((a,b)=>{
      const aPriority = featuredProductOrder.indexOf(a.sku);
      const bPriority = featuredProductOrder.indexOf(b.sku);
      const aRank = aPriority < 0 ? Number.MAX_SAFE_INTEGER : aPriority;
      const bRank = bPriority < 0 ? Number.MAX_SAFE_INTEGER : bPriority;
      return aRank - bRank || a.num - b.num;
    });
  const usePreview = currentTab==='all' && !catalogExpanded;
  const visibleProducts = usePreview ? filtered.slice(0, CATALOG_PREVIEW_COUNT) : filtered;
  document.getElementById('catalog-count').textContent =
    currentLang==='ru'
      ? `${visibleProducts.length} из ${filtered.length} позиций`
      : `${visibleProducts.length} / ${filtered.length} ta mahsulot`;

  if (filtered.length === 0){
    grid.innerHTML = `<div class="empty-state">—</div>`;
    return;
  }

  grid.innerHTML = visibleProducts.map(p=>{
    const title = currentLang==='ru' ? p.title_ru : (p.title_uz || p.title_ru);
    const desc = currentLang==='ru' ? p.short_ru : (p.short_uz || p.short_ru);
    const media = p.image
      ? `<div class="product-media has-photo"><img src="${p.image}" alt="${title}" loading="lazy"></div>`
      : `<div class="product-media" style="background:linear-gradient(160deg, ${p.accent}22, ${p.accent}0d); color:${p.accent};"><div class="placeholder-media">${placeholderIcon}</div></div>`;
    return `
      <button class="product-card" type="button" data-product-sku="${p.sku}" aria-label="${t('details')}: ${title}">
        <div style="position:relative;">
          ${media}
          <span class="product-chip" style="background:${p.accent}">${tabLabel(p)}</span>
        </div>
        <div class="product-body">
          <div class="product-title">${title}</div>
          <div class="product-dosage">${p.dosage}</div>
          <div class="product-desc">${desc}</div>
          <div class="product-foot">
            <span class="product-price">${p.price}</span>
          </div>
        </div>
      </button>`;
  }).join('');

  grid.querySelectorAll('[data-product-sku]').forEach(card=>{
    card.addEventListener('click', ()=>openProductModal(products.find(p=>p.sku===card.dataset.productSku)));
  });

  const actions = document.getElementById('catalog-actions');
  if (currentTab==='all' && filtered.length > CATALOG_PREVIEW_COUNT){
    const label = catalogExpanded ? t('show_less') : `${t('show_more')} (${filtered.length - CATALOG_PREVIEW_COUNT})`;
    actions.innerHTML = `<button class="catalog-toggle${catalogExpanded ? ' is-expanded':''}" type="button" id="catalog-toggle">${label}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></button>`;
    document.getElementById('catalog-toggle').onclick = ()=>{ catalogExpanded=!catalogExpanded; renderProducts(); };
  } else {
    actions.innerHTML = '';
  }
}

function setText(id, value){ document.getElementById(id).textContent = value || '—'; }

function openProductModal(product){
  if (!product) return;
  lastFocusedElement = document.activeElement;
  const title = currentLang==='ru' ? product.title_ru : (product.title_uz || product.title_ru);
  const detail = currentLang==='ru'
    ? (product.detail_ru || product.short_ru)
    : (product.detail_uz || product.short_uz || product.short_ru);
  const composition = currentLang==='ru' ? product.composition_ru : (product.composition_uz || product.composition_ru);
  const usage = currentLang==='ru' ? product.usage_ru : (product.usage_uz || product.usage_ru);
  const warnings = currentLang==='ru' ? product.warnings_ru : (product.warnings_uz || product.warnings_ru);
  setText('modal-product-category', tabLabel(product));
  setText('modal-product-title', title);
  setText('modal-product-dosage', product.dosage);
  setText('modal-product-description', detail);
  setText('modal-product-composition', composition);
  setText('modal-product-usage', usage);
  setText('modal-product-warnings', warnings);
  setText('modal-composition-label', t('modal_composition'));
  setText('modal-usage-label', t('modal_usage'));
  setText('modal-warnings-label', t('modal_warnings'));
  setText('modal-disclaimer', t('modal_disclaimer'));

  const visual = document.getElementById('modal-product-visual');
  if (product.image){
    visual.innerHTML = `<button class="modal-image-button" type="button" id="modal-image-zoom"><img class="modal-product-image" src="${product.image}" alt="${title}"><span class="modal-image-hint"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="10.5" cy="10.5" r="5.5"/><path d="m15 15 5 5M10.5 8v5M8 10.5h5"/></svg>${t('modal_image_hint')}</span></button>`;
    document.getElementById('modal-image-zoom').onclick = ()=>openImageLightbox(product.image, title);
  } else {
    visual.innerHTML = `<div class="modal-image-button" aria-label="${t('modal_no_image')}"><div class="modal-placeholder">${placeholderIcon}</div><span class="modal-image-hint">${t('modal_no_image')}</span></div>`;
  }
  const modal = document.getElementById('product-modal');
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
  modal.querySelector('.product-modal-dialog').focus();
}

function closeProductModal(){
  const modal = document.getElementById('product-modal');
  modal.classList.remove('open'); modal.setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
  if (lastFocusedElement) lastFocusedElement.focus();
}

function openImageLightbox(src, alt){
  document.getElementById('lightbox-image').src = src;
  document.getElementById('lightbox-image').alt = alt;
  const lightbox = document.getElementById('image-lightbox');
  lightbox.classList.add('open'); lightbox.setAttribute('aria-hidden','false');
}

function closeImageLightbox(){
  const lightbox = document.getElementById('image-lightbox');
  lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden','true');
}

document.querySelectorAll('[data-close-product-modal]').forEach(el=>el.addEventListener('click', closeProductModal));
document.querySelectorAll('[data-close-lightbox]').forEach(el=>el.addEventListener('click', closeImageLightbox));
document.addEventListener('keydown', event=>{
  if (event.key !== 'Escape') return;
  if (document.getElementById('image-lightbox').classList.contains('open')) closeImageLightbox();
  else if (document.getElementById('product-modal').classList.contains('open')) closeProductModal();
});

/* ============ HERO SCROLL-SCRUB ============ */
// Scrubbed via a hardware-decoded <video> (assets/video/hero-scrub.mp4)
// instead of a canvas + JPEG-per-scroll-tick sequence — the browser's GPU
// decoder seeks it, so there's no per-frame image loading/decoding here.
const heroVideo = document.getElementById('scene-video');
const HERO_VIDEO_DURATION_FALLBACK = 241/24;
const heroWrapper = document.getElementById('hero-wrapper');
const heroText = document.getElementById('hero-text');
const heroBottles = document.getElementById('hero-bottles');
const navEl = document.getElementById('nav');

/* Phones get a plain CSS background photo instead of the scroll scrub (see
   the ≤760px CSS block) — the video is hidden there, so skip loading it
   entirely. */
function isMobileHeroLayout(){ return window.innerWidth <= 760; }
if (!isMobileHeroLayout()){
  heroVideo.addEventListener('loadeddata', revealOverlays, {once:true});
  heroVideo.load();
}

function revealOverlays(){
  heroText.classList.add('visible');
  const panel = document.getElementById('glass-panel');
  setTimeout(()=> panel.classList.add('visible'), 250);
}

/* ---- Ambient particles ---- */
function spawnParticles(){
  const container = document.getElementById('hero-particles');
  const count = window.innerWidth <= 760 ? 7 : 14;
  for (let i=0;i<count;i++){
    const p = document.createElement('div');
    p.className = 'particle';
    const size = 2 + Math.random()*3.5;
    p.style.width = size+'px';
    p.style.height = size+'px';
    p.style.left = (Math.random()*100)+'%';
    p.style.setProperty('--drift', (Math.random()*60-30)+'px');
    const duration = 9 + Math.random()*10;
    p.style.animationDuration = duration+'s';
    p.style.animationDelay = (Math.random()*duration)+'s';
    container.appendChild(p);
  }
}
spawnParticles();

/* ---- Subtle cursor parallax on bottle cards ---- */
const bottlesGroup = document.getElementById('hero-bottles');
if (window.matchMedia('(hover: hover)').matches) {
  document.querySelector('.hero-sticky').addEventListener('mousemove', (e)=>{
    // The hero changes to a centred vertical composition below 961px.
    // A mouse transform there would override its responsive position.
    if (window.innerWidth <= 960){
      bottlesGroup.style.transform = '';
      return;
    }
    const nx = (e.clientX / window.innerWidth) - 0.5;
    const ny = (e.clientY / window.innerHeight) - 0.5;
    bottlesGroup.style.transform = `rotateX(${(-ny*6).toFixed(2)}deg) rotateY(${(nx*8).toFixed(2)}deg)`;
  });
  document.querySelector('.hero-sticky').addEventListener('mouseleave', ()=>{
    // Clearing the inline value lets the scroll state and media rules take over.
    bottlesGroup.style.transform = '';
  });
  window.addEventListener('resize', ()=>{
    if (window.innerWidth <= 960) bottlesGroup.style.transform = '';
  }, {passive:true});
}

let ticking=false;
const heroSticky = document.querySelector('.hero-sticky');
let heroStage = 0;
// Cumulative stage reveal while scrolling through the hero:
// 0 intro (hero text+bottles) -> 1 gap (empty) -> 2 history section
// Each transition has separate enter/exit thresholds (hysteresis) so scrolling back up doesn't flicker.
const STAGE_ENTER = [0, 0.05, 0.24, 0.34, 0.44];
const STAGE_EXIT  = [0, 0.03, 0.21, 0.31, 0.41];
const HISTORY_START = 0.20; // progress at which the darkening + timeline fill begin ramping
const PRODUCT_ENTER = [0, 0.53, 0.68]; // auto-advance the showcased vitamin while scrolling
const PRODUCT_EXIT  = [0, 0.50, 0.65];
const CONTENT_FADE_START = 0.82; // content (last vitamin + all text) fades out first...
const CONTENT_FADE_END   = 0.90;
const FOG_START = 0.90; // ...and only once it's fully gone does the smoke begin rising
const FOG_END = 1.0;
let autoProductIndex = 0;

const showcaseProducts = {
  ru: [
    { formula:'01', tab:'Magnesium + B6', eyebrow:'МАГНИЙ + B6', headline:'Спокойствие. Сон. Баланс.', desc:'Магний с витамином B6 поддерживает нервную систему, снижает стресс и улучшает качество сна.', img:'assets/products/mag-b6-60-v2.png' },
    { formula:'02', tab:"Lion's Mane", eyebrow:'ЛЬВИНАЯ ГРИВА', headline:'Фокус. Память. Спокойствие.', desc:'Ежовик гребенчатый способствует ясности ума, улучшает концентрацию и поддерживает память.', img:'assets/products/lions-mane-90.png' },
    { formula:'03', tab:'Glucosamine', eyebrow:'ГЛЮКОЗАМИН', headline:'Суставы. Подвижность. Восстановление.', desc:'Глюкозамин, хондроитин и MSM способствуют уменьшению боли и увеличению подвижности суставов.', img:'assets/products/gcm-120.png' },
  ],
  uz: [
    { formula:'01', tab:'Magnesium + B6', eyebrow:'MAGNIY + B6', headline:'Xotirjamlik. Uyqu. Muvozanat.', desc:'B6 vitaminli magniy asab tizimini qo\u02bbllab-quvvatlaydi, stressni kamaytiradi va uyqu sifatini yaxshilaydi.', img:'assets/products/mag-b6-60-v2.png' },
    { formula:'02', tab:"Lion's Mane", eyebrow:'SHER YOLI', headline:'Diqqat. Xotira. Xotirjamlik.', desc:'Kirpiksimon qo\u02bbziqorin ong ravshanligiga yordam beradi, diqqatni yaxshilaydi va xotirani qo\u02bblab-quvvatlaydi.', img:'assets/products/lions-mane-90.png' },
    { formula:'03', tab:'Glucosamine', eyebrow:'GLYUKOZAMIN', headline:'Bo\u02bbg\u02bbimlar. Harakatchanlik. Tiklanish.', desc:'Glyukozamin, xondroitin va MSM og\u02bbriqni kamaytirish va bo\u02bbg\u02bbimlar harakatchanligini oshirishga yordam beradi.', img:'assets/products/gcm-120.png' },
  ]
};
let showcaseIndex = 0;

function renderShowcase(){
  const list = showcaseProducts[currentLang] || showcaseProducts.ru;
  const p = list[showcaseIndex];
  const img = document.getElementById('showcase-img');
  const formulaLabel = document.querySelector('.formula-label');
  const eyebrowEl = document.getElementById('showcase-eyebrow');
  const headlineEl = document.getElementById('showcase-headline');
  const descEl = document.getElementById('showcase-desc');
  // Image and text crossfade together — swapping content only after the
  // fade-out has actually finished avoids the abrupt "flash" of switching
  // mid-fade, which read as too sudden between products.
  const fadeEls = [img, formulaLabel, eyebrowEl, headlineEl, descEl];
  fadeEls.forEach(el=>{ el.style.opacity = 0; });
  setTimeout(()=>{
    img.src = p.img;
    document.getElementById('formula-num').textContent = p.formula;
    eyebrowEl.textContent = p.eyebrow;
    headlineEl.textContent = p.headline;
    descEl.textContent = p.desc;
    fadeEls.forEach(el=>{ el.style.opacity = 1; });
  }, 420);

  const tabsEl = document.getElementById('product-tabs');
  tabsEl.innerHTML = '';
  list.forEach((item, i)=>{
    if (i>0){ const sep = document.createElement('span'); sep.className='tab-sep'; sep.textContent='|'; tabsEl.appendChild(sep); }
    const btn = document.createElement('button');
    btn.className = 'product-tab' + (i===showcaseIndex ? ' active':'');
    btn.innerHTML = `<span class="num">${item.formula}</span>${item.tab}`;
    btn.onclick = ()=>{ showcaseIndex = i; autoProductIndex = i; renderShowcase(); };
    tabsEl.appendChild(btn);
  });
  const prevBtn = document.createElement('button');
  prevBtn.className = 'tab-arrow'; prevBtn.innerHTML = '&#8249;';
  prevBtn.onclick = ()=>{ showcaseIndex = (showcaseIndex - 1 + list.length) % list.length; autoProductIndex = showcaseIndex; renderShowcase(); };

  const nextBtn = document.createElement('button');
  const isLastPreview = showcaseIndex === list.length - 1;
  if (isLastPreview){
    nextBtn.className = 'tab-arrow tab-arrow-cta';
    nextBtn.innerHTML = `<span>${t('showcase_all_products')}</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
    nextBtn.onclick = ()=>{ location.hash = 'catalog'; };
  } else {
    nextBtn.className = 'tab-arrow'; nextBtn.innerHTML = '&#8250;';
    nextBtn.onclick = ()=>{ showcaseIndex = (showcaseIndex + 1) % list.length; autoProductIndex = showcaseIndex; renderShowcase(); };
  }
  tabsEl.appendChild(prevBtn);
  tabsEl.appendChild(nextBtn);
}
function initShowcase(){ renderShowcase(); }

/* ============ FORMULA JOURNEY ============ */
function initFormulaJourney(){
  const shell = document.getElementById('journey-shell');
  if (!shell) return;
  const section = shell.closest('.formula-journey');
  const steps = [...shell.querySelectorAll('[data-journey-step]')];
  const panels = [shell.querySelector('.journey-intro'), ...steps].filter(Boolean);
  // Вступление — только короткая точка входа. Основные этапы получают
  // почти одинаковое экранное время, поэтому реакция начинается уже с
  // первых движений колеса, а не после длинной «пустой» прокрутки.
  const sceneStops = [0, .075, .306, .537, .768, 1];
  let framePending = false;

  function setPanelStates(activeIndex){
    panels.forEach((panel, index)=>{
      panel.dataset.sceneState = index < activeIndex ? 'past' : index === activeIndex ? 'active' : 'next';
    });
    steps.forEach((step, index)=>step.classList.toggle('is-visible', index + 1 === activeIndex));
  }

  function scrubProduction(step, index, sceneProgress){
    const cameraPaths = [
      { x:-2.2, y:1.8, dx:5.0, dy:-3.8, scale:1.12 },
      { x:2.0, y:1.1, dx:-5.2, dy:-3.0, scale:1.12 },
      { x:-1.2, y:1.9, dx:3.8, dy:-3.8, scale:1.10 },
      { x:1.7, y:1.0, dx:-4.4, dy:-2.6, scale:1.07 }
    ];
    const path = cameraPaths[index];
    if (path){
      step.style.setProperty('--scene-scale', (path.scale + sceneProgress * .13).toFixed(3));
      step.style.setProperty('--scene-x', `${(path.x + sceneProgress * path.dx).toFixed(2)}%`);
      step.style.setProperty('--scene-y', `${(path.y + sceneProgress * path.dy).toFixed(2)}%`);
      const visual = step.querySelector('.journey-visual');
      step.style.setProperty('--scan-y', `${visual ? Math.round(visual.clientHeight * sceneProgress) : 0}px`);
      step.style.setProperty('--scan-opacity', sceneProgress > .04 && sceneProgress < .98 ? '.92' : '0');
      return;
    }
    step.style.setProperty('--product-y', `${(32 - sceneProgress * 44).toFixed(1)}px`);
    step.style.setProperty('--product-rotate', `${(-5 + sceneProgress * 7).toFixed(2)}deg`);
    step.style.setProperty('--product-scale', (.93 + sceneProgress * .16).toFixed(3));
    step.style.setProperty('--orbit-turn', `${(sceneProgress * 92).toFixed(1)}deg`);
    step.style.setProperty('--seal-turn', `${(-12 + sceneProgress * 24).toFixed(1)}deg`);
    step.style.setProperty('--glow-scale', (.82 + sceneProgress * .45).toFixed(3));
    step.style.setProperty('--glow-opacity', (.22 + sceneProgress * .24).toFixed(3));
  }

  function updateJourney(){
    framePending = false;
    const rect = section.getBoundingClientRect();
    if (rect.bottom < -220 || rect.top > window.innerHeight + 220) return;

    if (window.innerWidth > 960){
      const travel = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      let activeIndex = panels.length - 1;
      for (let index = 0; index < panels.length - 1; index++){
        if (progress < sceneStops[index + 1]){
          activeIndex = index;
          break;
        }
      }
      shell.dataset.activeStage = String(Math.max(1, activeIndex));
      shell.style.setProperty('--journey-progress', Math.min(1, Math.max(0, progress / .9)).toFixed(3));
      setPanelStates(activeIndex);
      steps.forEach((step, index)=>{
        const start = sceneStops[index + 1];
        const end = sceneStops[index + 2];
        const sceneProgress = Math.min(1, Math.max(0, (progress - start) / (end - start)));
        scrubProduction(step, index, sceneProgress);
      });
      return;
    }

    const travel = Math.max(1, section.offsetHeight - window.innerHeight * .38);
    const progress = Math.min(1, Math.max(0, (window.innerHeight * .64 - rect.top) / travel));
    shell.style.setProperty('--journey-progress', progress.toFixed(3));
    let activeStep = steps[0];
    let closest = Infinity;
    steps.forEach((step, index)=>{
      const stepRect = step.getBoundingClientRect();
      const sceneProgress = Math.min(1, Math.max(0, (window.innerHeight * .84 - stepRect.top) / (stepRect.height + window.innerHeight * .34)));
      scrubProduction(step, index, sceneProgress);
      step.classList.toggle('is-visible', stepRect.bottom > window.innerHeight * .12 && stepRect.top < window.innerHeight * .76);
      const distance = Math.abs(stepRect.top - window.innerHeight * .42);
      if (distance < closest){ closest = distance; activeStep = step; }
    });
    shell.dataset.activeStage = activeStep.dataset.journeyStep;
  }

  function requestJourneyUpdate(){
    if (framePending) return;
    framePending = true;
    requestAnimationFrame(updateJourney);
  }
  window.addEventListener('scroll', requestJourneyUpdate, {passive:true});
  window.addEventListener('resize', requestJourneyUpdate, {passive:true});
  updateJourney();
}

function setHeroStage(s){
  if (s === heroStage) return;
  heroStage = s;
  heroSticky.setAttribute('data-stage', String(s));
}

function onScroll(){
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(()=>{
    navEl.classList.toggle('compact', window.scrollY>40);

    // Phones use the static hero (no pin, no scrub) — the opening frame is
    // already drawn once and everything below is normal page flow.
    if (isMobileHeroLayout()){
      ticking=false;
      return;
    }

    const rect = heroWrapper.getBoundingClientRect();

    // Ниже первого экрана герой не виден: не выполняем canvas-отрисовку и
    // обновление его элементов на каждом скролле каталога.
    if (rect.bottom <= 0 || rect.top >= window.innerHeight){
      ticking=false;
      return;
    }

    const scrollable = heroWrapper.offsetHeight - window.innerHeight;
    let progress = -rect.top/scrollable;
    progress = Math.min(1, Math.max(0, progress));
    const dur = heroVideo.duration || HERO_VIDEO_DURATION_FALLBACK;
    if (isFinite(dur) && dur > 0) heroVideo.currentTime = progress * dur;
    while (heroStage < 4 && progress > STAGE_ENTER[heroStage+1]) setHeroStage(heroStage+1);
    while (heroStage > 0 && progress < STAGE_EXIT[heroStage]) setHeroStage(heroStage-1);

    // Overall darkening of the history section grows continuously the further you scroll
    const darkenEl = document.getElementById('history-darken');
    const histT = Math.min(1, Math.max(0, (progress - HISTORY_START) / (1 - HISTORY_START)));

    // Auto-advance the showcased vitamin while the user keeps scrolling
    if (heroStage >= 4){
      let idx = autoProductIndex;
      while (idx < 2 && progress > PRODUCT_ENTER[idx+1]) idx++;
      while (idx > 0 && progress < PRODUCT_EXIT[idx]) idx--;
      if (idx !== autoProductIndex){ autoProductIndex = idx; showcaseIndex = idx; renderShowcase(); }
    } else if (autoProductIndex !== 0){
      autoProductIndex = 0; showcaseIndex = 0;
    }

    // Phase 1: after the last vitamin has shown, the content fades away completely first
    const contentFade = 1 - Math.min(1, Math.max(0, (progress - CONTENT_FADE_START) / (CONTENT_FADE_END - CONTENT_FADE_START)));

    if (darkenEl) darkenEl.style.opacity = (histT * 0.72 * contentFade).toFixed(3);

    const historyContainerEl = document.querySelector('.history-container');
    if (historyContainerEl) historyContainerEl.style.opacity = contentFade.toFixed(3);

    // Phase 2: only once the content is gone does the fog image slowly fade in from the bottom
    const fogT = Math.min(1, Math.max(0, (progress - FOG_START) / (FOG_END - FOG_START)));
    const fogEl = document.getElementById('hero-fog-final');
    if (fogEl) fogEl.style.opacity = fogT.toFixed(3);

    // Timeline fill travels left-to-right as you scroll through the section
    const fillEl = document.getElementById('timeline-fill');
    if (fillEl){
      fillEl.style.width = (histT * 100).toFixed(1) + '%';
    }

    ticking=false;
  });
}

window.addEventListener('scroll', onScroll, {passive:true});
onScroll();
applyI18n();
initShowcase();
initFormulaCatalog();
initFormulaJourney();
initFaq();

/* ============ NAV GRID ALIGNMENT ============
   --edge is a CSS calc() approximation of ".container's content edge, as
   seen from a position:fixed element with no max-width of its own to get
   centered by". calc()'s 100vw ignores the scrollbar though, so on a
   classic (non-overlay) scrollbar it drifts a few px from where .container
   actually lands. Measuring a real .container and writing the exact result
   back over --edge keeps the floating nav pixel-locked to the same column
   as every section below it, at any zoom level or scrollbar style. */
function syncNavEdge(){
  const probe = document.querySelector('.formula-catalog > .container');
  if (!probe) return;
  const rect = probe.getBoundingClientRect();
  const padLeft = parseFloat(getComputedStyle(probe).paddingLeft) || 0;
  document.documentElement.style.setProperty('--edge', Math.max(0, rect.left + padLeft) + 'px');
}
window.addEventListener('resize', syncNavEdge, {passive:true});
syncNavEdge();
if (document.fonts && document.fonts.ready) document.fonts.ready.then(syncNavEdge);

/* ============ FAQ ACCORDION ============ */
function initFaq(){
  const items = [...document.querySelectorAll('.faq-item')];
  items.forEach(item=>{
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    btn.addEventListener('click', ()=>{
      const open = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
      answer.style.maxHeight = open ? answer.scrollHeight + 'px' : '';
    });
  });
  // Keep an open answer's height correct if the viewport reflows its text.
  window.addEventListener('resize', ()=>{
    items.forEach(item=>{
      if (!item.classList.contains('is-open')) return;
      const answer = item.querySelector('.faq-answer');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    });
  }, {passive:true});
}