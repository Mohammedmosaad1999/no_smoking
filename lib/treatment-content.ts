import type { Locale } from "./i18n";
import type { LocalizedVideo } from "./video-utils";

type Bilingual = Record<Locale, string>;

export type VideoLink = LocalizedVideo;
export type BuyLink = { label: Bilingual; url: string };

export type TreatmentSection = {
  id: string;
  title: Bilingual;
  content: Bilingual[];
  videos?: VideoLink[];
  buyLinks?: BuyLink[];
  bullets?: Bilingual[][];
};

export const treatmentContent = {
  title: { en: "Treatment", ar: "العلاج" },
  subtitle: {
    en: "Psychological and medical support to help you quit smoking.",
    ar: "دعم نفسي وطبي لمساعدتك على الإقلاع عن التدخين.",
  },
  tabs: {
    medical: { en: "Medical Treatment", ar: "العلاج الطبي" },
    nrt: { en: "Nicotine Replacement Therapy", ar: "العلاج ببدائل النيكوتين" },
    psychological: { en: "Psychological Treatment", ar: "العلاج النفسي" },
    mohp: { en: "MOHP Role", ar: "دور وزارة الصحة" },
  },
  medical: {
    intro: {
      en: "Medical treatment of smoking is usually divided into 2 groups, Medications and NRT (Nicotine Replacement Therapy).",
      ar: "ينقسم العلاج الطبي للتدخين عادة إلى مجموعتين، الأدوية والعلاج ببدائل النيكوتين.",
    },
    champix: {
      title: { en: "Champix", ar: "شامبيكس" },
      mechanism: {
        title: { en: "The Mechanism", ar: "آلية العمل" },
        body: {
          en: "The active ingredient in Champix is varenicline, which works by attaching to the same receptors in the brain that nicotine normally affects. It works in two ways: first, it partially acts like nicotine to help reduce cravings and withdrawal symptoms, and second, it blocks nicotine from attaching to these receptors, which reduces the pleasure people usually feel from smoking. This helps make quitting smoking easier and lowers the urge to smoke again.",
          ar: "المادة الفعالة في شامبيكس هي الفارينيكلين، والتي تعمل عن طريق الارتباط بنفس المستقبلات في الدماغ التي يؤثر عليها النيكوتين عادة. وهو يعمل بطريقتين: أولاً، يعمل جزئيًا مثل النيكوتين للمساعدة في تقليل الرغبة الشديدة وأعراض الانسحاب، وثانيًا، يمنع النيكوتين من الارتباط بهذه المستقبلات، مما يقلل من المتعة التي يشعر بها الناس عادةً من التدخين. يساعد هذا على تسهيل الإقلاع عن التدخين ويقلل الرغبة في التدخين مرة أخرى.",
        },
      },
      why: {
        title: { en: "Why Champix?", ar: "لماذا شامبيكس؟" },
        body: {
          en: "Champix has been studied in two main trials in 2,052 smokers. The first trial offered 12-week treatments of Champix, bupropion (Zyban) or placebo, with a quitting target one week after starting treatment. The outcome was measured as the proportion of patients who had not smoked for four weeks, verified by breath analysis. Champix was more effective than bupropion or placebo in helping patients to stop smoking. The percentage of patients who had not smoked at all during weeks 9-12 was 44% with Champix, 30% with bupropion, and 18% with placebo.",
          ar: "تمت دراسة شامبيكس في تجربتين رئيسيتين أجريتا على 2052 مدخنًا. قدمت التجربة الأولى علاجات لمدة 12 أسبوعًا باستخدام شامبيكس أو بوبروبيون (زيبان) أو دواء وهمي، مع هدف الإقلاع عن العلاج بعد أسبوع واحد من بدء العلاج. تم قياس النتيجة كنسبة المرضى الذين لم يدخنوا لمدة أربعة أسابيع، وتم التحقق من ذلك عن طريق تحليل التنفس. كان عقار شامبيكس أكثر فعالية من عقار بوبروبيون أو الدواء الوهمي في مساعدة المرضى على الإقلاع عن التدخين. وكانت نسبة المرضى الذين لم يدخنوا على الإطلاق خلال الأسابيع 9-12 44% مع شامبيكس، و30% مع بوبروبيون، و18% مع الدواء الوهمي.",
        },
      },
      risks: {
        title: { en: "What is the risk associated with Champix?", ar: "ما هي المخاطر المرتبطة بـ شامبيكس؟" },
        body: {
          en: "The most common side-effects with Champix (seen in more than 1 patient in 10) are nausea (feeling sick), insomnia (difficulty sleeping), abnormal dreams, headache and nasopharyngitis (inflammation of the nose and throat).",
          ar: "الآثار الجانبية الأكثر شيوعًا لـ Champix (التي تظهر في أكثر من مريض واحد في 10) هي الغثيان (الشعور بالغثيان)، والأرق (صعوبة النوم)، والأحلام غير الطبيعية، والصداع، والتهاب البلعوم الأنفي (التهاب الأنف والحنجرة).",
        },
      },
      whereToBuy: { en: "Where to Buy", ar: "اشتريها منين" },
      video: { en: "Video: How to Use Champix", ar: "فيديو يوريك ازاي تستخدم الدواء" },
      buyUrl: "https://www.vezeeta.com/en-eg/pharmacy/champix-1-mg-28-f-c-tablet",
      videos: [
        {
          locale: "ar",
          label: {
            en: "How to Use Champix",
            ar: "ازاي تستخدم شامبيكس",
          },
          url: "https://youtu.be/osVTf4Un_3c?si=nYsPmVWZTmuUJ3VG",
        },
      ],
    },
  },
  nrt: {
    intro: {
      title: { en: "Nicotine Replacement Therapy (NRT)", ar: "العلاج ببدائل النيكوتين" },
      paragraphs: [
        {
          en: "Nicotine replacement therapy (NRT) can help you quit smoking. NRT products contain low, controlled doses of nicotine to keep withdrawal and craving symptoms at bay. There are several options and ways you can combine the products. It's best to talk to a healthcare provider before starting NRT.",
          ar: "يمكن أن يساعدك العلاج ببدائل النيكوتين (NRT) على الإقلاع عن التدخين. تحتوي منتجات NRT على جرعات منخفضة ومراقبة من النيكوتين للحفاظ على أعراض الانسحاب والرغبة الشديدة. هناك عدة خيارات وطرق يمكنك الجمع بين المنتجات. من الأفضل التحدث مع مقدم الرعاية الصحية قبل بدء NRT.",
        },
        {
          en: "Nicotine replacement therapy (NRT) involves using products (like gum and patches) with low doses of nicotine to cut down on cravings and lessen withdrawal symptoms after you quit smoking. It's a type of medication-assisted treatment (MAT) for people with nicotine dependence (tobacco use disorder).",
          ar: "يتضمن العلاج ببدائل النيكوتين (NRT) استخدام منتجات (مثل العلكة واللصقات) بجرعات منخفضة من النيكوتين لتقليل الرغبة الشديدة وتخفيف أعراض الانسحاب بعد الإقلاع عن التدخين. إنه نوع من العلاج بمساعدة الأدوية (MAT) للأشخاص الذين يعانون من الاعتماد على النيكوتين.",
        },
        {
          en: "The nicotine products for NRT don't contain the other toxins (like carcinogens) that smoking exposes you to. Experts state that NRT is generally safe for almost all adults who want to quit smoking. But pregnant women and teens shouldn't use NRT. Certain health conditions, like liver or kidney issues, may make NRT unsafe as well. Discuss NRT with a healthcare provider before starting it.",
          ar: "منتجات النيكوتين لـ NRT لا تحتوي على السموم الأخرى (مثل المواد المسرطنة) التي يعرضك لها التدخين. يذكر الخبراء أن NRT آمن بشكل عام لجميع البالغين الذين يريدون الإقلاع عن التدخين. لكن النساء الحوامل والمراهقين لا ينبغي أن يستخدموا NRT. قد تجعل بعض الحالات الصحية، مثل مشاكل الكبد أو الكلى، NRT غير آمن أيضاً.",
        },
      ],
    },
    products: ["Gum", "Lozenges", "Skin patches", "Inhalers", "Nasal sprays"] as const,
    productLabels: {
      Gum: { en: "Gum", ar: "علكة" },
      Lozenges: { en: "Lozenges", ar: "أقراص استحلاب" },
      "Skin patches": { en: "Skin patches", ar: "لصقات جلدية" },
      Inhalers: { en: "Inhalers", ar: "أجهزة استنشاق" },
      "Nasal sprays": { en: "Nasal sprays", ar: "بخاخات أنفية" },
    },
    sections: [
      {
        id: "gum",
        title: { en: "How to use nicotine gum", ar: "كيفية استخدام علكة النيكوتين" },
        content: [
          {
            en: "Nicotine gum is an over the counter (OTC) product. You chew on the gum to release the nicotine. Once you get a tingling feeling or it develops a peppery taste, you position the gum between your cheek and gum for about 30 minutes.",
            ar: "علكة النيكوتين منتج بدون وصفة طبية. تمضغ العلكة لإطلاق النيكوتين. بمجرد الشعور بوخز أو طعم فلفلي، ضع العلكة بين خدك ولثتك لمدة 30 دقيقة تقريباً.",
          },
          {
            en: "Wait at least 15 minutes after drinking caffeine-containing beverages and acidic beverages before chewing. You can typically use a piece of gum every one to two hours for the first six weeks. Following six weeks, reduce use gradually. Don't use more than one piece at a time. Plan to stop using the gum by 12 weeks.",
            ar: "انتظر 15 دقيقة على الأقل بعد شرب المشروبات المحتوية على الكافيين والمشروبات الحمضية قبل المضغ. يمكنك عادة استخدام قطعة كل ساعة إلى ساعتين للأسابيع الستة الأولى. بعد ذلك، قلل الاستخدام تدريجياً. لا تستخدم أكثر من قطعة في المرة. خطط للتوقف عن استخدام العلكة بحلول 12 أسبوعاً.",
          },
        ],
        videos: [
          {
            locale: "en",
            label: { en: "How to use nicotine gum", ar: "استخدام علكة النيكوتين" },
            url: "https://youtu.be/7wvBq38mues?si=Qk_tapQShv-bdXf8",
          },
          {
            locale: "ar",
            label: { en: "How to use nicotine gum", ar: "استخدام علكة النيكوتين" },
            url: "https://youtu.be/OSW0lT6pI90?si=KDrIrKmYZhBdSKz9",
          },
        ],
        buyLinks: [
          { label: { en: "Nicotine Gum", ar: "علكة النيكوتين" }, url: "https://www.amazon.com/Blip-NRT-Nicotine-Gum-Replacement/dp/B0CM6V6TS9" },
          { label: { en: "Nicotine Lozenges", ar: "أقراص استحلاب النيكوتين" }, url: "https://www.amazon.com/Quitine-Nicotine-Lozenges-Flavor-Smoking/dp/B0DN3YWVVB" },
        ],
      },
      {
        id: "lozenges",
        title: { en: "How to use nicotine lozenges", ar: "كيفية استخدام أقراص استحلاب النيكوتين" },
        content: [
          {
            en: "Nicotine lozenges are OTC products that you put in your mouth between your cheek and gums (like hard candy or a cough drop). The lozenge slowly releases nicotine as it dissolves in your mouth.",
            ar: "أقراص استحلاب النيكوتين منتجات بدون وصفة طبية تضعها في فمك بين خدك ولثتك. يطلق القرص النيكوتين ببطء أثناء ذوبانه في فمك.",
          },
          {
            en: "You can typically use one lozenge every one to two hours for the first six weeks. Following six weeks, reduce use to one lozenge every two to four hours, then every four to eight hours. Don't use more than one lozenge at a time.",
            ar: "يمكنك عادة استخدام قرص واحد كل ساعة إلى ساعتين للأسابيع الستة الأولى. بعد ذلك، قلل الاستخدام تدريجياً. لا تستخدم أكثر من قرص في المرة.",
          },
        ],
        videos: [
          {
            locale: "en",
            label: { en: "How to use nicotine lozenges", ar: "استخدام أقراص النيكوتين" },
            url: "https://youtu.be/IzRgbANNrWE?si=asp5o0nGSjgUah4f",
          },
        ],
        buyLinks: [
          { label: { en: "Buy Lozenges", ar: "اشتري الأقراص" }, url: "https://a.co/d/0fB0F24d" },
        ],
      },
      {
        id: "patches",
        title: { en: "How to use nicotine patches", ar: "كيفية استخدام لصقات النيكوتين" },
        content: [
          {
            en: "Nicotine patches are OTC products you place on your skin in the morning that give a small, steady dose of nicotine throughout the day.",
            ar: "لصقات النيكوتين منتجات بدون وصفة طبية تضعها على جلدك في الصباح لتعطي جرعة صغيرة وثابتة من النيكوتين طوال اليوم.",
          },
          {
            en: "The nicotine patch comes in different strengths. You typically wear one patch for 16 or 24 hours. Put the patch on clean, dry, healthy and hair-free skin on your upper body. Mix up where you put the patch each day.",
            ar: "تأتي لصقة النيكوتين بقوى مختلفة. عادة ما ترتدي لصقة واحدة لمدة 16 أو 24 ساعة. ضع اللصقة على جلد نظيف وجاف وصحي وخالٍ من الشعر على الجزء العلوي من جسمك. غيّر مكان اللصقة كل يوم.",
          },
        ],
        videos: [
          {
            locale: "en",
            label: { en: "How to use nicotine patches", ar: "استخدام لصقات النيكوتين" },
            url: "https://youtu.be/3e4-_X_5kWA?si=YI6sqHXZLqcIiHny",
          },
          {
            locale: "ar",
            label: { en: "How to use nicotine patches", ar: "استخدام لصقات النيكوتين" },
            url: "https://youtu.be/pzmOfgftV5c?si=4pomj5ni3hQmnBb8",
          },
        ],
        buyLinks: [
          { label: { en: "Buy Patches", ar: "اشتري اللصقات" }, url: "https://a.co/d/0atPe6Zg" },
        ],
      },
      {
        id: "inhalers",
        title: { en: "How to use nicotine inhalers", ar: "كيفية استخدام أجهزة استنشاق النيكوتين" },
        content: [
          {
            en: "Nicotine inhalers require a prescription from a healthcare provider. The cartridge contains nicotine, and you inhale a controlled dose through a mouthpiece. The back of your throat mainly absorbs the nicotine, not your lungs.",
            ar: "تتطلب أجهزة استنشاق النيكوتين وصفة طبية. تحتوي الخرطوشة على النيكوتين، وتستنشق جرعة محكومة من خلال فوهة. يمتص الجزء الخلفي من حلقك النيكوتين بشكل رئيسي، وليس رئتيك.",
          },
          {
            en: "Take frequent short, shallow puffs from the inhaler. Don't inhale deeply. Don't eat or drink for 15 minutes before using the inhaler or while using it. Nicotine inhalers aren't the same as e-cigarettes (vaping).",
            ar: "خذ نفثات قصيرة وضحلة متكررة من جهاز الاستنشاق. لا تستنشق بعمق. لا تأكل أو تشرب لمدة 15 دقيقة قبل الاستخدام أو أثناءه. أجهزة استنشاق النيكوتين ليست مثل السجائر الإلكترونية.",
          },
        ],
        videos: [
          {
            locale: "en",
            label: { en: "How to use nicotine inhalers", ar: "استخدام جهاز الاستنشاق" },
            url: "https://youtu.be/TlkLj4IY25s?si=gtb0mvoiJae-jrP-",
          },
          {
            locale: "ar",
            label: { en: "How to use nicotine inhalers", ar: "استخدام جهاز الاستنشاق" },
            url: "https://youtube.com/shorts/HWXO5qOey4c?si=ddx1CtkWFDPLhw3G",
          },
        ],
        buyLinks: [
          { label: { en: "Buy Inhaler", ar: "اشتري جهاز الاستنشاق" }, url: "https://a.co/d/08cWSVRk" },
        ],
      },
      {
        id: "nasal-spray",
        title: { en: "How to use nicotine nasal sprays", ar: "كيفية استخدام بخاخات النيكوتين الأنفية" },
        content: [
          {
            en: "Nicotine nasal sprays require a prescription. They're pump bottles that contain nicotine in liquid form that you spray into each nostril. Levels of nicotine peak within five to 10 minutes after using the spray.",
            ar: "تتطلب بخاخات النيكوتين الأنفية وصفة طبية. هي زجاجات مضخة تحتوي على النيكوتين بشكل سائل ترشه في كل فتحة أنف. تبلغ مستويات النيكوتين ذروتها خلال 5-10 دقائق.",
          },
          {
            en: "Providers typically recommend using at least eight doses per day for the first six weeks. Don't use more than 40 doses per day. You shouldn't use nicotine nasal spray for longer than three months.",
            ar: "يوصي مقدمو الرعاية عادة باستخدام 8 جرعات على الأقل يومياً للأسابيع الستة الأولى. لا تستخدم أكثر من 40 جرعة يومياً. لا ينبغي استخدام البخاخ لأكثر من 3 أشهر.",
          },
        ],
        videos: [
          {
            locale: "en",
            label: { en: "How to use nicotine nasal spray", ar: "استخدام البخاخ الأنفي" },
            url: "https://youtu.be/1ofPBXHDVDc?si=oHOaI9KY-HDhUlzL",
          },
          {
            locale: "ar",
            label: { en: "How to use nicotine nasal spray", ar: "استخدام البخاخ الأنفي" },
            url: "https://youtu.be/0Hwa0a556IU?si=KBprIFcsOxJ-yyyb",
          },
        ],
        buyLinks: [
          { label: { en: "Buy Nasal Spray", ar: "اشتري البخاخ الأنفي" }, url: "https://a.co/d/03Gu4s8J" },
        ],
      },
    ] as TreatmentSection[],
    combining: {
      title: { en: "Combining NRT products", ar: "الجمع بين منتجات NRT" },
      body: {
        en: "NRT products work differently, so you may benefit from using more than one product. Using a long-acting product (a nicotine patch) can help lessen withdrawal, while using a short-acting product can quickly relieve cravings. You can combine gum, lozenges, inhaler, or nasal spray with a nicotine patch. Talk to your healthcare provider about the best and safest way to combine NRT products for you.",
        ar: "تعمل منتجات NRT بشكل مختلف، لذا قد تستفيد من استخدام أكثر من منتج. يمكن أن يساعد المنتج طويل المفعول (لصقة النيكوتين) في تقليل الانسحاب، بينما يمكن للمنتج قصير المفعول تخفيف الرغبة الشديدة بسرعة. يمكنك الجمع بين العلكة أو الأقراص أو جهاز الاستنشاق أو البخاخ الأنفي مع لصقة النيكوتين.",
      },
    },
    risksBenefits: {
      title: { en: "Risks / Benefits", ar: "المخاطر / الفوائد" },
      advantages: {
        title: { en: "What are the advantages of NRT?", ar: "ما هي مزايا NRT؟" },
        body: {
          en: "Using NRT effectively reduces the urge to smoke cigarettes by providing your body with nicotine through safer products. Studies show that using NRT helps increase the chances of quitting smoking by about 50% to 70%.",
          ar: "يقلل استخدام NRT بفعالية الرغبة في تدخين السجائر من خلال توفير النيكوتين لجسمك عبر منتجات أكثر أماناً. تظهر الدراسات أن استخدام NRT يساعد في زيادة فرص الإقلاع عن التدخين بنسبة 50% إلى 70%.",
        },
      },
      sideEffects: {
        title: { en: "What are the side effects of NRT?", ar: "ما هي الآثار الجانبية لـ NRT؟" },
        general: [
          { en: "Nausea", ar: "غثيان" },
          { en: "Headache", ar: "صداع" },
          { en: "Racing heart", ar: "تسارع ضربات القلب" },
        ],
        patches: [
          { en: "Skin irritation", ar: "تهيج الجلد" },
          { en: "Sleep problems or unusual dreams", ar: "مشاكل النوم أو أحلام غير عادية" },
        ],
        gum: [
          { en: "Throat irritation", ar: "تهيج الحلق" },
          { en: "Mouth sores", ar: "تقرحات الفم" },
          { en: "Hiccups", ar: "فواق" },
        ],
      },
      poisoning: {
        title: { en: "Nicotine poisoning", ar: "تسمم النيكوتين" },
        body: {
          en: "It's essential to use NRT products as they're intended. Using them too often or taking them while continuing to smoke can lead to nicotine poisoning. Go to the emergency room if you or your child have symptoms like nausea, vomiting, increased heart rate, dizziness, or seizures.",
          ar: "من الضروري استخدام منتجات NRT كما هو مقصود. استخدامها بكثرة أو أثناء الاستمرار في التدخين يمكن أن يؤدي إلى تسمم النيكوتين. اذهب إلى غرفة الطوارئ إذا ظهرت أعراض مثل الغثيان والقيء وتسارع ضربات القلب والدوخة أو النوبات.",
        },
      },
    },
    recovery: {
      title: { en: "Recovery and Outlook", ar: "التعافي والتوقعات" },
      duration: {
        en: "Healthcare providers recommend using NRT for eight to 12 weeks. If NRT hasn't significantly helped by this point, talk to your provider about next steps.",
        ar: "يوصي مقدمو الرعاية باستخدام NRT لمدة 8 إلى 12 أسبوعاً. إذا لم يساعد NRT بشكل كبير بحلول هذه النقطة، تحدث مع مقدم الرعاية عن الخطوات التالية.",
      },
      alternatives: {
        en: "If NRT doesn't work for you, your provider may recommend varenicline or bupropion, or different NRT products or doses. Addressing psychological, emotional and social elements is also crucial.",
        ar: "إذا لم ينجح NRT معك، قد يوصي مقدم الرعاية بالفارينيكلين أو البوبروبيون، أو منتجات أو جرعات NRT مختلفة. معالجة العناصر النفسية والعاطفية والاجتماعية أمر بالغ الأهمية أيضاً.",
      },
    },
    teamNote: {
      title: { en: "A note from RESET YOUR BREATH TEAM", ar: "ملاحظة من فريق ابدأ من جديد" },
      body: {
        en: "Choosing to quit smoking is a huge step toward living a healthier life. But it's also daunting and challenging. Nicotine replacement therapy (NRT) can help make the quitting process a little easier. Talk to a healthcare provider to see if NRT is right for you.",
        ar: "اختيار الإقلاع عن التدخين خطوة كبيرة نحو حياة أكثر صحة. لكنه أيضاً مرهق وصعب. يمكن أن يساعد العلاج ببدائل النيكوتين (NRT) في تسهيل عملية الإقلاع قليلاً. تحدث مع مقدم الرعاية الصحية لمعرفة ما إذا كان NRT مناسباً لك.",
      },
    },
    whereToBuy: { en: "Where to buy", ar: "أين تشتري" },
    videos: { en: "Videos", ar: "فيديوهات" },
  },
  psychological: {
    title: { en: "Psychological Treatment", ar: "العلاج النفسي" },
    methods: [
      {
        title: { en: "Cognitive Behavioral Therapy (CBT)", ar: "العلاج السلوكي المعرفي" },
        description: {
          en: "CBT helps smokers identify triggers, change negative thoughts linked to cigarettes, and learn coping strategies instead of smoking.",
          ar: "يساعد العلاج السلوكي المعرفي المدخنين على تحديد المحفزات وتغيير الأفكار السلبية المرتبطة بالسجائر وتعلم استراتيجيات التأقلم بدلاً من التدخين.",
        },
        example: {
          en: 'Instead of thinking "Smoking relaxes me," the smoker learns other relaxation methods like exercise or breathing techniques.',
          ar: 'بدلاً من التفكير "التدخين يريحني"، يتعلم المدخن طرق استرخاء أخرى مثل التمارين أو تقنيات التنفس.',
        },
      },
      {
        title: { en: "Behavioral Therapy", ar: "العلاج السلوكي" },
        description: {
          en: "Focuses on changing smoking habits through reward systems, habit replacement, avoiding triggers, and creating daily non-smoking routines.",
          ar: "يركز على تغيير عادات التدخين من خلال أنظمة المكافأة واستبدال العادات وتجنب المحفزات وإنشاء روتين يومي خالٍ من التدخين.",
        },
        example: {
          en: "Chewing gum or drinking water whenever cravings appear.",
          ar: "مضغ العلكة أو شرب الماء عند ظهور الرغبة الشديدة.",
        },
      },
      {
        title: { en: "Motivational Interviewing", ar: "المقابلة التحفيزية" },
        description: {
          en: "A counselor helps increase motivation to quit, resolve doubts and fears, and build confidence. Useful for smokers unsure about quitting.",
          ar: "يساعد المستشار في زيادة الدافعية للإقلاع وحل الشكوك والمخاوف وبناء الثقة. مفيد للمدخنين غير المتأكدين من الإقلاع.",
        },
      },
      {
        title: { en: "Support Groups and Group Therapy", ar: "مجموعات الدعم والعلاج الجماعي" },
        description: {
          en: "Group sessions help by sharing experiences, receiving emotional support, learning from success stories, and reducing isolation.",
          ar: "تساعد الجلسات الجماعية من خلال مشاركة التجارب والحصول على الدعم العاطفي والتعلم من قصص النجاح وتقليل العزلة.",
        },
      },
      {
        title: { en: "Stress Management Techniques", ar: "تقنيات إدارة التوتر" },
        description: {
          en: "Teaches deep breathing, meditation, mindfulness, time management, and physical activity to reduce the urge to smoke during stress.",
          ar: "يعلم التنفس العميق والتأمل واليقظة الذهنية وإدارة الوقت والنشاط البدني لتقليل الرغبة في التدخين أثناء التوتر.",
        },
      },
      {
        title: { en: "Relapse Prevention Therapy", ar: "علاج الوقاية من الانتكاس" },
        description: {
          en: "Helps recognize high-risk situations, prepare for cravings, recover quickly if relapse happens, and maintain long-term abstinence.",
          ar: "يساعد في التعرف على المواقف عالية الخطورة والاستعداد للرغبة الشديدة والتعافي بسرعة عند الانتكاس والحفاظ على الامتناع طويل المدى.",
        },
      },
      {
        title: { en: "Family and Social Support", ar: "الدعم العائلي والاجتماعي" },
        description: {
          en: "Encouragement from family and friends improves quitting success by providing emotional support, reducing exposure to smoking environments, and increasing accountability.",
          ar: "يشجع الدعم من العائلة والأصدقاء نجاح الإقلاع من خلال توفير الدعم العاطفي وتقليل التعرض لبيئات التدخين وزيادة المساءلة.",
        },
      },
    ],
  },
  mohp: {
    title: { en: "MOHP Role", ar: "دور وزارة الصحة والسكان" },
    subtitle: {
      en: "The Ministry of Health and Population's strategy for tobacco control in Egypt.",
      ar: "استراتيجية وزارة الصحة والسكان لمكافحة التبغ في مصر.",
    },
    sections: [
      {
        title: { en: "National Anti-Smoking Awareness Campaigns", ar: "الحملات الوطنية للتوعية ضد التدخين" },
        body: {
          en: 'MOHP launched several media campaigns to educate people about the dangers of smoking. One famous campaign was "Save Yourself", which showed how smoking damages arteries and causes strokes and heart disease. The ministry also included anti-smoking awareness in the presidential "100 Million Healthy Lives" initiative.',
          ar: 'أطلقت وزارة الصحة عدة حملات إعلامية لتوعية الناس بمخاطر التدخين. من أشهرها حملة "أنقذ نفسك" التي أظهرت كيف يضر التدخين بالشرايين ويسبب السكتات وأمراض القلب. كما أدرجت الوزارة التوعية ضد التدخين في مبادرة "100 مليون صحة".',
        },
        bullets: [
          { en: "Lung cancer", ar: "سرطان الرئة" },
          { en: "Heart disease", ar: "أمراض القلب" },
          { en: "Passive smoking", ar: "التدخين السلبي" },
          { en: "The importance of quitting tobacco", ar: "أهمية الإقلاع عن التبغ" },
        ],
      },
      {
        title: { en: "Smoking Cessation Clinics", ar: "عيادات الإقلاع عن التدخين" },
        body: {
          en: "MOHP established free smoking cessation clinics across Egypt. These clinics provide medical consultation, psychological support, follow-up programs, and medications for nicotine addiction. More than 30 clinics were opened nationwide.",
          ar: "أنشأت وزارة الصحة عيادات مجانية للإقلاع عن التدخين في جميع أنحاء مصر. توفر هذه العيادات استشارات طبية ودعماً نفسياً وبرامج متابعة وأدوية لإدمان النيكوتين. تم افتتاح أكثر من 30 عيادة على مستوى الجمهورية.",
        },
      },
      {
        title: { en: "Smoke-Free Policies", ar: "سياسات الأماكن الخالية من التدخين" },
        body: {
          en: "The ministry introduced strict rules banning smoking inside hospitals, health facilities, and government health institutions. In 2023, the Minister of Health permanently banned smoking in all health facilities and imposed fines on violators.",
          ar: "أدخلت الوزارة قواعد صارمة تحظر التدخين داخل المستشفيات والمرافق الصحية والمؤسسات الصحية الحكومية. في 2023، حظر وزير الصحة التدخين بشكل دائم في جميع المرافق الصحية وفرض غرامات على المخالفين.",
        },
      },
      {
        title: { en: "Cooperation with WHO and International Programs", ar: "التعاون مع منظمة الصحة العالمية" },
        body: {
          en: "MOHP cooperates with WHO under the Framework Convention on Tobacco Control, including increasing taxes on cigarettes, graphic warning images, banning tobacco advertisements, and monitoring smoking rates.",
          ar: "تتعاون وزارة الصحة مع منظمة الصحة العالمية بموجب الاتفاقية الإطارية لمكافحة التبغ، بما في ذلك زيادة الضرائب على السجائر وصور التحذير والحظر الإعلاني ومراقبة معدلات التدخين.",
        },
      },
      {
        title: { en: "Early Detection and Lung Health Initiatives", ar: "مبادرات الكشف المبكر وصحة الرئة" },
        body: {
          en: "Programs for early detection of lung cancer, lung health screening, and helping smokers identify respiratory diseases early encourage smokers to stop before developing severe complications.",
          ar: "برامج الكشف المبكر عن سرطان الرئة وفحص صحة الرئة ومساعدة المدخنين على اكتشاف أمراض الجهاز التنفسي مبكراً تشجع المدخنين على التوقف قبل تطور مضاعفات خطيرة.",
        },
      },
      {
        title: { en: "Research and Data Collection", ar: "البحث وجمع البيانات" },
        body: {
          en: "MOHP conducts studies with WHO about smoking prevalence, shisha use among youth, economic damage caused by tobacco, and passive smoking exposure to create stronger anti-smoking policies.",
          ar: "تجري وزارة الصحة دراسات مع منظمة الصحة العالمية حول انتشار التدخين واستخدام الشيشة بين الشباب والأضرار الاقتصادية للتبغ والتعرض للتدخين السلبي لإنشاء سياسات أقوى لمكافحة التدخين.",
        },
      },
    ],
    impact: {
      title: { en: "Overall Impact", ar: "التأثير العام" },
      bullets: [
        { en: "Prevention through awareness", ar: "الوقاية من خلال التوعية" },
        { en: "Treatment through cessation clinics", ar: "العلاج من خلال عيادات الإقلاع" },
        { en: "Protection through smoke-free laws", ar: "الحماية من خلال قوانين الأماكن الخالية من التدخين" },
        { en: "Policy enforcement through taxation and advertising bans", ar: "تطبيق السياسات من خلال الضرائب وحظر الإعلانات" },
      ],
    },
  },
} as const;

export function tt(record: Bilingual, locale: Locale): string {
  return record[locale];
}
