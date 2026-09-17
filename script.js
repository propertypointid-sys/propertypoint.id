/* =========================================================
   PROPERTYPOINT.ID
   PROPERTY FINDER — MASTER SCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       WHATSAPP
    ===================================================== */

    const WHATSAPP_NUMBER = "6285892567879";


    /* =====================================================
       DOM
    ===================================================== */

    const stepOne =
        document.getElementById("stepOne");

    const stepTwo =
        document.getElementById("stepTwo");

    const stepThree =
        document.getElementById("stepThree");

    const finderResult =
        document.getElementById("finderResult");

    const propertyOptions =
        document.getElementById("propertyOptions");

    const stepTwoTitle =
        document.getElementById("stepTwoTitle");

    const resultText =
        document.getElementById("resultText");

    const whatsappButton =
        document.getElementById("whatsappButton");

    const requestButton =
        document.getElementById("requestButton");

    const backToStepOne =
        document.getElementById("backToStepOne");

    const backToStepTwo =
        document.getElementById("backToStepTwo");

    const startOver =
        document.getElementById("startOver");

    const headerChat =
        document.getElementById("headerChat");

    const headerBrand =
        document.querySelector(".site-header .brand");

    const heroCta =
        document.querySelector(".hero-cta");

    const finder =
        document.getElementById("finder");

    const seviaBridge =
        document.getElementById("seviaBridge");

    const seviaExperience =
        document.getElementById("seviaExperience");

    const seviaCharacter =
        document.getElementById("seviaCharacter");

    const seviaBackground =
        document.getElementById("seviaBackground");

    const seviaContextText =
        document.getElementById("seviaContextText");

    const seviaLanguageLabel =
        document.getElementById("seviaLanguageLabel");

    const seviaWelcomeTitle =
        document.getElementById("seviaWelcomeTitle");

    const seviaWelcomeText =
        document.getElementById("seviaWelcomeText");

    const seviaWelcomePrompt =
        document.getElementById("seviaWelcomePrompt");

    const seviaSkip =
        document.getElementById("seviaSkip");

    const seviaBack =
        document.getElementById("seviaBack");

    const seviaHome =
        document.getElementById("seviaHome");


    /* =====================================================
       USER SELECTION
    ===================================================== */

    let selection = {

        action: "",

        property: "",

        area: ""

    };

    /* =====================================================
       PROPERTY TYPES
    ===================================================== */

    const propertyTypes = {

        BUY: [

            ["House", "Landed residential property"],

            ["Apartment", "Apartment & condominium"],

            ["Commercial", "Shop house, office & commercial"],

            ["Warehouse", "Warehouse & industrial property"],

            ["Land", "Land & development opportunities"],

            ["Primary Project", "New development opportunities"],

            ["Other", "Something else"]

        ],


        SELL: [

            ["House", "Sell a landed property"],

            ["Apartment", "Sell an apartment"],

            ["Commercial", "Sell commercial property"],

            ["Warehouse", "Sell warehouse / industrial"],

            ["Land", "Sell land"],

            ["Other", "Something else"]

        ],


        RENT: [

            ["House", "House for rent"],

            ["Apartment", "Apartment for rent"],

            ["Commercial", "Shop house / office"],

            ["Warehouse", "Warehouse / industrial"],

            ["Other", "Something else"]

        ],


        INVEST: [

            ["Residential", "House & apartment opportunities"],

            ["Commercial", "Commercial investment"],

            ["Warehouse", "Industrial & logistics"],

            ["Land", "Land investment opportunities"],

            ["Primary Project", "New development opportunities"],

            ["Open to Ideas", "Show me interesting opportunities"]

        ],


        PRIMARY: [

            ["Residential Project", "New house & residential launches"],

            ["Apartment Project", "New apartment launches"],

            ["Commercial Project", "Shop house & commercial projects"],

            ["Warehouse / Industrial", "Industrial & logistics projects"],

            ["Investment Opportunity", "Projects with investment potential"],

            ["Show Me What's New", "Explore current opportunities"]

        ],


        UNSURE: [

            ["I'm Looking to Buy", "Help me understand what to buy"],

            ["I'm Looking to Sell", "Help me evaluate my property"],

            ["I'm Looking to Invest", "Help me find an opportunity"],

            ["I'm Exploring", "I just want to see what's interesting"]

        ]

    };


    /* =====================================================
       ACTION LABELS
    ===================================================== */

    const actionLabels = {

        BUY: "Buy",

        SELL: "Sell",

        RENT: "Rent",

        INVEST: "Invest",

        PRIMARY: "Primary Projects",

        UNSURE: "I'm Not Sure"

    };


    /* =====================================================
       SCROLL TO FINDER
    ===================================================== */

    function scrollToFinder() {

        if (!finder) {
            return;
        }

        const position =
            finder.getBoundingClientRect().top +
            window.scrollY -
            80;

        window.scrollTo({

            top: position,

            behavior: "smooth"

        });

    }


    /* =====================================================
       SHOW STEP
    ===================================================== */

    function showStep(step) {

        if (stepOne) {
            stepOne.classList.remove("active");
        }

        if (stepTwo) {
            stepTwo.classList.remove("active");
        }

        if (stepThree) {
            stepThree.classList.remove("active");
        }

        if (finderResult) {
            finderResult.classList.remove("active");
        }

        if (seviaBridge) {
            seviaBridge.classList.remove("active");
        }

        if (seviaExperience) {
            seviaExperience.classList.remove("active");
            seviaExperience.setAttribute("aria-hidden", "true");
        }


        if (step === 1 && stepOne) {

            stepOne.classList.add("active");

        }


        if (step === 2 && stepTwo) {

            stepTwo.classList.add("active");

        }


        if (step === 3 && stepThree) {

            stepThree.classList.add("active");

        }


        if (step === 4 && finderResult) {

            finderResult.classList.add("active");

        }

        if (step === 5 && seviaBridge) {

            seviaBridge.classList.add("active");

        }
        

        if (step === 6 && seviaExperience) {

            seviaExperience.classList.add("active");
            seviaExperience.setAttribute("aria-hidden", "false");

        }

        const targetStep =
            step === 1 ? stepOne :
            step === 2 ? stepTwo :
            step === 3 ? stepThree :
            step === 4 ? finderResult :
            step === 5 ? seviaBridge :
            step === 6 ? seviaExperience :
            null;

        if (targetStep) {
            targetStep.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }


    }


    /* =====================================================
       STEP 2 TITLE
    ===================================================== */

    function setStepTwoTitle(action) {

        if (!stepTwoTitle) {
            return;
        }


        const titles = {

            BUY:
                "What are you looking to buy?",

            SELL:
                "What would you like to sell?",

            RENT:
                "What are you looking to rent?",

            INVEST:
                "What type of opportunity interests you?",

            PRIMARY:
                "What kind of primary project?",

            UNSURE:
                "How can we help you?"

        };


        stepTwoTitle.textContent =
            titles[action] ||
            "What type of property?";

    }


    /* =====================================================
   BUILD STEP 2
===================================================== */

function buildPropertyOptions(action) {

    if (!propertyOptions) {
        return;
    }


    propertyOptions.innerHTML = "";


    const options =
        propertyTypes[action] || [];


    /*
       ICON FILES
       -------------------------------------------------
       These names must match the PNG files
       inside: assets/icons/
    */

    const iconMap = {

        "House":
            "assets/icons/house.png",

        "Apartment":
            "assets/icons/apartment.png",

        "Commercial":
            "assets/icons/commercial.png",

        "Warehouse":
            "assets/icons/warehouse.png",

        "Land":
            "assets/icons/land.png",

        "Other":
            "assets/icons/Other.png",

        "Primary Project":
            "assets/icons/primary.png",

        "Residential":
            "assets/icons/house.png",

        "Open to Ideas":
            "assets/icons/other.png",

        "Residential Project":
            "assets/icons/house.png",

        "Apartment Project":
            "assets/icons/apartment.png",

        "Commercial Project":
            "assets/icons/commercial.png",

        "Warehouse / Industrial":
            "assets/icons/warehouse.png",

        "Investment Opportunity":
            "assets/icons/invest-opportunity.png",

        "Show Me What's New":
            "assets/icons/optimized/show-me.png",

        "I'm Looking to Buy":
            "assets/icons/optimized/looking-buy.png",

        "I'm Looking to Sell":
            "assets/icons/looking-sell.png",

        "I'm Looking to Invest":
            "assets/icons/optimized/to-invest.png",

        "I'm Exploring":
            "assets/icons/optimized/exploring.png"

    };


    options.forEach(function (item) {

        const propertyName =
            item[0];


        const propertyDescription =
            item[1];


        const icon =
            iconMap[propertyName] ||
            "assets/icons/other.png";


        const button =
            document.createElement("button");


        button.type =
            "button";


        button.className =
            "option";


        button.dataset.property =
            propertyName;


        button.innerHTML = `

            <span class="option-icon">

                <img
                    src="${icon}"
                    alt="${propertyName}"
                    loading="lazy">

            </span>


            <span class="option-content">

                <span class="option-title">
                    ${propertyName}
                </span>

                <span class="option-description">
                    ${propertyDescription}
                </span>

            </span>


            <span class="option-arrow">
                →
            </span>

        `;


        propertyOptions.appendChild(button);

    });

}


    /* =====================================================
       BUILD WHATSAPP MESSAGE
    ===================================================== */

    function buildWhatsAppMessage() {

        const action =
            actionLabels[selection.action] ||
            selection.action ||
            "Not specified";


        const property =
            selection.property ||
            "Not specified";


        const area =
            selection.area ||
            "Not specified";


        return `Hello PropertyPoint.id,

I found your website and I'm interested in a property opportunity.

I'm looking to: ${action}

Property type:
${property}

Preferred area:
${area}

Please let me know what opportunities may be available.

Thank you.`;

    }


    /* =====================================================
       UPDATE WHATSAPP
    ===================================================== */

    function updateWhatsAppLinks() {

        const message =
            buildWhatsAppMessage();


        const url =
            "https://wa.me/" +
            WHATSAPP_NUMBER +
            "?text=" +
            encodeURIComponent(message);


        if (whatsappButton) {

            whatsappButton.href =
                url;

            whatsappButton.target =
                "_blank";

            whatsappButton.rel =
                "noopener noreferrer";

        }


        if (requestButton) {

            requestButton.href =
                url;

            requestButton.target =
                "_blank";

            requestButton.rel =
                "noopener noreferrer";

        }

    }


    /* =====================================================
       SHOW RESULT
    ===================================================== */

    function showResult() {

        const action =
            actionLabels[selection.action] ||
            selection.action;


        const property =
            selection.property ||
            "Any Property";


        const area =
            selection.area ||
            "All Areas";


        if (resultText) {

            resultText.innerHTML = `

                You're looking for
                <strong>${action}</strong>
                —
                <strong>${property}</strong>
                in
                <strong>${area}</strong>.

                <br><br>

                Let's connect and see
                what opportunities may fit your needs.

            `;

        }


        updateWhatsAppLinks();


        showStep(4);

    }


    /* =====================================================
       STEP 1
       BUY / SELL / RENT / INVEST /
       PRIMARY / I'M NOT SURE
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            const actionButton =
                event.target.closest(
                    ".image-option[data-action]"
                );


            if (!actionButton) {
                return;
            }


            event.preventDefault();


            const action =
                actionButton.dataset.action;


            if (!action) {
                return;
            }


            selection.action =
                action;

            selection.property =
                "";

            selection.area =
                "";


            setStepTwoTitle(action);


            buildPropertyOptions(action);


            showStep(2);

        }
    );


    /* =====================================================
   STEP 2
   PROPERTY / INTENT SELECTION
===================================================== */

if (propertyOptions) {

    propertyOptions.addEventListener(
        "click",
        function (event) {

            const propertyButton =
                event.target.closest(
                    ".option[data-property]"
                );


            if (!propertyButton) {
                return;
            }


            event.preventDefault();


            const selectedOption =
                propertyButton.dataset.property;


            /*
               SPECIAL FLOW FOR "I'M NOT SURE"
               --------------------------------
               Step 2 choices are actually intents.
            */

            if (selection.action === "UNSURE") {

                const unsureActions = {

                    "I'm Looking to Buy":
                        "BUY",

                    "I'm Looking to Sell":
                        "SELL",

                    "I'm Looking to Invest":
                        "INVEST",

                    "I'm Exploring":
                        "EXPLORE"

                };


                const newAction =
                    unsureActions[selectedOption];


                /*
                   I'M EXPLORING
                   Go directly to Area.
                */

                if (newAction === "EXPLORE") {

                selection.action =
                    "EXPLORE";

                selection.property =
                    "";

                selection.area =
                    "";

                showStep(5);

                return;
            }


                /*
                   BUY / SELL / INVEST
                   Now show the appropriate
                   property types.
                */

                if (newAction) {

                    selection.action =
                        newAction;

                    selection.property =
                        "";

                    selection.area =
                        "";


                    setStepTwoTitle(
                        newAction
                    );


                    buildPropertyOptions(
                        newAction
                    );


                    showStep(2);

                    return;
                }

            }


            /*
               NORMAL PROPERTY SELECTION
               --------------------------------
               BUY / SELL / RENT / INVEST /
               PRIMARY
            */

            selection.property =
                selectedOption;


            selection.area =
                "";


            showStep(3);

        }
    );

}



    /* =====================================================
       STAGE 2 — SEVIA BRIDGE
    ===================================================== */

    function getSeviaSearchSummary() {

        const action =
            actionLabels[selection.action] ||
            selection.action ||
            "Not specified";

        const property =
            selection.property ||
            "Not specified";

        const area =
            selection.area ||
            "Not specified";

        return `${action} • ${property} • ${area}`;

    }


    function showSeviaBridge() {

        if (seviaBridge) {
            seviaBridge.classList.add("active");
        }

        showStep(5);
    }


    /* =====================================================
       SEVIA EXPERIENCE — PAGE 2 / 3 / 4
       UI flow only. AI engine can be connected later.
    ===================================================== */

    const seviaLanguageConfig = {
        en: {
            character: "assets/sevia/sevia-international.png",
            guidingCharacter: "assets/sevia/sevia-international2.png",
            background: "assets/sevia/bg-international.png",
            label: "ENGLISH",
            introTitle: "Hi, I'm SeVIA.",
            introText: "PropertyPoint's AI Property Concierge, partnering with Hadi.",
            introPrompt: "Before we begin, may I know your name?",
            namePlaceholder: "Your name",
            continueLabel: "Continue",
            chatLabel: "ENGLISH",
            chatTitle: "Nice to meet you, {name}.",
            chatPrompt: "Let's narrow this down a little. Is this mainly for your own use, investment, or both?",
            searchLabel: "YOUR SEARCH",
            choices: { self: "Self Use", investment: "Investment", both: "Both" },
            rentChoices: { self: "For Myself", investment: "For Family", both: "For Business" },
            investChoices: { self: "Capital Growth", investment: "Income", both: "Both" },
            sellChoices: { self: "Personal Property", investment: "Investment Property", both: "Other" },
            chatStatus: "Tell me a little more, and I'll help you narrow it down.",
            followup: {
                self: "What matters most to you — location, space, or lifestyle?",
                investment: "What matters more to you — capital growth, rental income, or a balance of both?",
                both: "What matters most — your own needs, investment potential, or a balance of both?"
            },
            ready: "SeVIA is ready",
            placeholder: "Tell me what you have in mind...",
            response: "Got it, {name}. I’ve noted that. Tell me anything else that may help me narrow down the right opportunity.",
            continueHadi: "Continue with Hadi →",
            handoverQuestion: "Would you like to ask SeVIA anything else, or shall I connect you with Hadi via WhatsApp?",
            askMore: "Ask me something else",
            connectWhatsApp: "Connect Hadi via WhatsApp",
            handoverTitle: "Continue with Hadi.",
            handoverText: "Your search is ready. Choose how you'd like to continue.",
            labels: { name: "Name", action: "Looking to", property: "Property", area: "Area", purpose: "Purpose" },
            whatsappText: "Open WhatsApp with your summary",
            wechatText: "Scan the QR code to continue with Hadi",
            wechatInstruction: "Scan to continue with Hadi on WeChat.",
            wechatNote: "Your summary is shown above. WeChat does not reliably support a personal pre-filled message from a normal web link, so simply scan and send the summary.",
            copy: "Copy summary", copied: "Copied", backChat: "← Back to SeVIA"
        },
        id: {
            character: "assets/sevia/sevia-indonesia.png",
            guidingCharacter: "assets/sevia/bg-indonesia2.png",
            background: "assets/sevia/bg-indonesia.png",
            label: "BAHASA INDONESIA",
            introTitle: "Hai, saya SeVIA.",
            introText: "AI Property Concierge PropertyPoint, partnering with Hadi.",
            introPrompt: "Sebelum kita mulai, boleh saya tahu nama Anda?",
            namePlaceholder: "Nama Anda",
            continueLabel: "Lanjut",
            chatLabel: "BAHASA INDONESIA",
            chatTitle: "Senang bertemu dengan Anda, {name}.",
            chatPrompt: "Mari kita persempit sedikit. Kebutuhan ini terutama untuk penggunaan sendiri, investasi, atau keduanya?",
            searchLabel: "PENCARIAN ANDA",
            choices: { self: "Untuk Diri Sendiri", investment: "Investasi", both: "Keduanya" },
            rentChoices: { self: "Untuk Diri Sendiri", investment: "Untuk Keluarga", both: "Untuk Bisnis" },
            investChoices: { self: "Kenaikan Nilai", investment: "Penghasilan", both: "Keduanya" },
            sellChoices: { self: "Properti Pribadi", investment: "Properti Investasi", both: "Lainnya" },
            chatStatus: "Ceritakan sedikit lagi, saya akan membantu mempersempit pilihan Anda.",
            followup: {
                self: "Apa yang paling penting bagi Anda — lokasi, luas, atau gaya hidup?",
                investment: "Mana yang lebih penting bagi Anda — kenaikan nilai, penghasilan sewa, atau keseimbangan keduanya?",
                both: "Mana yang paling penting — kebutuhan Anda sendiri, potensi investasi, atau keseimbangan keduanya?"
            },
            ready: "SeVIA siap melanjutkan",
            placeholder: "Ceritakan apa yang Anda pikirkan...",
            response: "Baik, {name}. Saya sudah mencatatnya. Ceritakan hal lain yang menurut Anda penting agar saya bisa mempersempit pilihan yang tepat.",
            continueHadi: "Lanjut bersama Hadi →",
            handoverQuestion: "Apakah Anda ingin menanyakan hal lain kepada SeVIA, atau mau langsung saya hubungkan dengan Hadi via WhatsApp?",
            askMore: "Tanyakan hal lain",
            connectWhatsApp: "Hubungi Hadi via WhatsApp",
            handoverTitle: "Lanjut bersama Hadi.",
            handoverText: "Pencarian Anda sudah siap. Pilih cara untuk melanjutkan.",
            labels: { name: "Nama", action: "Kebutuhan", property: "Property", area: "Area", purpose: "Tujuan" },
            whatsappText: "Buka WhatsApp dengan ringkasan Anda",
            wechatText: "Scan QR untuk melanjutkan dengan Hadi",
            wechatInstruction: "Scan untuk melanjutkan dengan Hadi di WeChat.",
            wechatNote: "Ringkasan Anda terlihat di atas. WeChat tidak secara konsisten mendukung pesan pribadi yang sudah terisi melalui link web biasa, jadi cukup scan lalu kirim ringkasan tersebut.",
            copy: "Salin ringkasan", copied: "Tersalin", backChat: "← Kembali ke SeVIA"
        },
        zh: {
            character: "assets/sevia/sevia-mandarin.png",
            guidingCharacter: "assets/sevia/bg-mandarin2.png",
            background: "assets/sevia/bg-mandarin.png",
            label: "中文",
            introTitle: "你好，我是 SeVIA。",
            introText: "PropertyPoint 的 AI Property Concierge，与 Hadi 携手为您服务。",
            introPrompt: "开始之前，可以先知道您的名字吗？",
            namePlaceholder: "您的名字",
            continueLabel: "继续",
            chatLabel: "中文",
            chatTitle: "很高兴认识您，{name}。",
            chatPrompt: "让我们再缩小一点范围。这次主要是自住、投资，还是两者皆是？",
            searchLabel: "您的需求",
            choices: { self: "自住", investment: "投资", both: "两者皆是" },
            rentChoices: { self: "自己使用", investment: "家庭使用", both: "商业用途" },
            investChoices: { self: "升值潜力", investment: "收入", both: "两者皆是" },
            sellChoices: { self: "自用房产", investment: "投资房产", both: "其他" },
            chatStatus: "再告诉我一点，我可以帮助您进一步缩小范围。",
            followup: {
                self: "对您来说，什么更重要——位置、空间，还是生活方式？",
                investment: "对您来说，什么更重要——升值潜力、租金收入，还是两者平衡？",
                both: "什么对您最重要——自住需求、投资潜力，还是两者平衡？"
            },
            ready: "SeVIA 已准备好",
            placeholder: "告诉我您的想法...",
            response: "好的，{name}。我已经记下来了。如果还有其他重要信息，请告诉我，我可以继续帮您缩小范围。",
            continueHadi: "继续与 Hadi 沟通 →",
            handoverQuestion: "您希望我再问您一些问题，还是直接通过 WhatsApp 联系 Hadi？",
            askMore: "再问我一些",
            connectWhatsApp: "通过 WhatsApp 联系",
            handoverTitle: "继续与 Hadi 沟通。",
            handoverText: "您的需求已经准备好了。请选择您希望的联系方式。",
            labels: { name: "称呼", action: "需求", property: "房产", area: "区域", purpose: "用途" },
            whatsappText: "打开 WhatsApp，并附上您的需求摘要",
            wechatText: "扫描二维码继续与 Hadi 沟通",
            wechatInstruction: "扫描二维码，在 WeChat 上继续与 Hadi 沟通。",
            wechatNote: "您的需求摘要已显示在上方。普通网页链接无法可靠地向个人 WeChat 聊天预填消息，因此请扫描二维码后发送摘要。",
            copy: "复制需求摘要", copied: "已复制", backChat: "← 返回 SeVIA"
        }
    };

    let seviaLanguage = "en";
    let seviaName = "";
    let seviaPurpose = "";
    let seviaUserPriority = "";
    let seviaAdditionalNote = "";
    let seviaChatStarted = false;
    let seviaQualificationStep = 0;

    const seviaPageIntro = document.getElementById("seviaPageIntro");
    const seviaPageChat = document.getElementById("seviaPageChat");
    const seviaPageExploreIntro = document.getElementById("seviaPageExploreIntro");
    const seviaPageExploreDiscovery =
    document.getElementById("seviaPageExploreDiscovery");
    const seviaPageHandover = document.getElementById("seviaPageHandover");
    const seviaPageSummary = document.getElementById("seviaPageSummary");
    const seviaExploreMessage1 = document.getElementById("seviaExploreMessage1");
    const seviaExploreMessage2 = document.getElementById("seviaExploreMessage2");
    const seviaExploreNameRow = document.getElementById("seviaExploreNameRow");
    const seviaExploreNameInput = document.getElementById("seviaExploreNameInput");
    const seviaExploreNameContinue = document.getElementById("seviaExploreNameContinue");
    const seviaExploreNameError = document.getElementById("seviaExploreNameError");
    const seviaNameInput = document.getElementById("seviaNameInput");
    const seviaNameContinue = document.getElementById("seviaNameContinue");
    const seviaNameError = document.getElementById("seviaNameError");
    const seviaChatTitle = document.getElementById("seviaChatTitle");
    const seviaChatPrompt = document.getElementById("seviaChatPrompt");
    const seviaPurposeChoices = document.getElementById("seviaPurposeChoices");
    const seviaChatArea = document.getElementById("seviaChatArea");
    const seviaChatStatus = document.getElementById("seviaChatStatus");
    const seviaReadyText = document.getElementById("seviaReadyText");
    const seviaIntroTitle = document.getElementById("seviaIntroTitle");
    const seviaIntroText = document.getElementById("seviaIntroText");
    const seviaIntroPrompt = document.getElementById("seviaIntroPrompt");
    const seviaChatLabel = document.getElementById("seviaChatLabel");
    const seviaContextLabel = document.getElementById("seviaContextLabel");
    const seviaUserInput = document.getElementById("seviaUserInput");
    const seviaSend = document.getElementById("seviaSend");
    const seviaLocalResponse = document.getElementById("seviaLocalResponse");
    const seviaContinueHadi = document.getElementById("seviaContinueHadi");
    const seviaHandoverQuestion = document.getElementById("seviaHandoverQuestion");
    const seviaHandoverQuestionText = document.getElementById("seviaHandoverQuestionText");
    const seviaAskMore = document.getElementById("seviaAskMore");
    const seviaConnectWhatsApp = document.getElementById("seviaConnectWhatsApp");
    const seviaHandoverLabel = document.getElementById("seviaHandoverLabel");
    const seviaHandoverTitle = document.getElementById("seviaHandoverTitle");
    const seviaHandoverText = document.getElementById("seviaHandoverText");
    const seviaSummaryCard = document.getElementById("seviaSummaryCard");
    const seviaWhatsApp = document.getElementById("seviaWhatsApp");
    const seviaWhatsAppText = document.getElementById("seviaWhatsAppText");
    const seviaWeChat = document.getElementById("seviaWeChat");
    const seviaWeChatText = document.getElementById("seviaWeChatText");
    const seviaWeChatPanel = document.getElementById("seviaWeChatPanel");
    const seviaWeChatInstruction = document.getElementById("seviaWeChatInstruction");
    const seviaWeChatSummaryNote = document.getElementById("seviaWeChatSummaryNote");
    const seviaCopySummary = document.getElementById("seviaCopySummary");
    const seviaCopyStatus = document.getElementById("seviaCopyStatus");
    const seviaBackToChat = document.getElementById("seviaBackToChat");

    function seviaConfig() { return seviaLanguageConfig[seviaLanguage] || seviaLanguageConfig.en; }

    function seviaApplyChoiceLabels() {
        if (!seviaPurposeChoices) return;
        const config = seviaConfig();
        let choices = config.choices;
        if (selection.action === "RENT" && config.rentChoices) choices = config.rentChoices;
        if (selection.action === "SELL" && config.sellChoices) choices = config.sellChoices;
        if (selection.action === "INVEST" && config.investChoices) choices = config.investChoices;
        const buttons = seviaPurposeChoices.querySelectorAll(".sevia-shell-choice");
        buttons.forEach(function(button) {
            const key = button.dataset.purpose;
            button.textContent = choices[key] || choices.self;
            button.classList.remove("selected");
        });
    }

    function seviaSetPage(page) {

    [seviaPageIntro, seviaPageChat, seviaPageExploreIntro, seviaPageExploreDiscovery, seviaPageSummary, seviaPageHandover].forEach(function(el) {
        if (el) {
            el.classList.remove("active");
            el.style.display = "none";
        }
    });

    if (seviaUserInput) {
        seviaUserInput.style.display = "none";
    }

    if (seviaSend) {
        seviaSend.style.display = "none";
    }

    if (page === "intro" && seviaPageIntro) {
        seviaPageIntro.classList.add("active");
        seviaPageIntro.style.display = "block";
    }

    if (page === "chat" && seviaPageChat) {
        seviaPageChat.classList.add("active");
        seviaPageChat.style.display = "block";

        if (seviaUserInput) {
            seviaUserInput.style.display = "";
        }

        if (seviaSend) {
            seviaSend.style.display = "";
        }
    }

    if (page === "exploreIntro" && seviaPageExploreIntro) {

    seviaPageExploreIntro.classList.add("active");
    seviaPageExploreIntro.style.display = "block";

    /* RESET */

    if (seviaExploreMessage1) {
        seviaExploreMessage1.classList.remove("is-visible");
    }

    if (seviaExploreMessage2) {
        seviaExploreMessage2.classList.remove("is-visible");
        seviaExploreMessage2.textContent = "";
    }

    if (seviaExploreNameRow) {
        seviaExploreNameRow.classList.remove("is-visible");
    }

    if (seviaExploreNameRow) {
    seviaExploreNameRow.classList.remove("is-visible");
    }

    if (seviaExploreNameInput) {
        seviaExploreNameInput.value = "";
    }

    /*
     * START:
     * Background + frame visible.
     * SeVIA and panel hidden.
     */

    if (seviaCharacter) {
        seviaCharacter.classList.remove("explore-visible");
        seviaCharacter.classList.add("explore-hidden");
    }

    if (seviaPanel) {
        seviaPanel.classList.remove("explore-visible");
        seviaPanel.classList.add("explore-hidden");
    }


    /*
     * 1 — SEVIA ENTERS
     */

    setTimeout(function () {

    if (seviaCharacter) {
        seviaCharacter.classList.add("explore-visible");
    }

    }, 1000);


    /*
     * 2 — PANEL ENTERS
     * 1 second after SeVIA.
     */

    setTimeout(function () {

        if (seviaPanel) {
            seviaPanel.classList.remove("explore-hidden");
            seviaPanel.classList.add("explore-visible");
        }

    }, 3000);


    /*
     * 3 — INTRODUCTION
     */

    setTimeout(function () {

        if (seviaExploreMessage1) {
            seviaExploreMessage1.classList.add("is-visible");
        }

    }, 5000);


    /*
     * 4 — QUESTION
     * Start typing after introduction.
     */

    setTimeout(function () {

        if (!seviaExploreMessage2) return;

        const question =
            seviaLanguage === "id"
                ? "Bolehkah saya mengetahui nama Anda?"
                : seviaLanguage === "zh"
                    ? "可以告诉我您的名字吗？"
                    : "May I know your name?";

        let index = 0;

        seviaExploreMessage2.classList.add("is-visible");

        const typing = setInterval(function () {

            seviaExploreMessage2.textContent =
                question.slice(0, index + 1);

            index++;

            if (index >= question.length) {

                clearInterval(typing);

                /*
                 * 5 — RESPONSE BOX
                 */

                setTimeout(function () {

             if (seviaExploreNameRow) {
                seviaExploreNameRow.classList.add("is-visible");
            }

                }, 100);
            }

        }, 110);

    }, 6000);
}

if (page === "exploreDiscovery" && seviaPageExploreDiscovery) {

    seviaPageExploreDiscovery.classList.add("active");
    seviaPageExploreDiscovery.style.display = "block";
    seviaPageExploreDiscovery.scrollTop = 0;

    if (seviaExploreAreaInput) {
    seviaExploreAreaInput.value = "";
    }

    seviaExploreChoices.length = 0;

    const greeting =
        document.getElementById("seviaExploreDiscoveryGreeting");

    const question =
        document.getElementById("seviaExploreDiscoveryQuestion");

    const note =
        document.getElementById("seviaExploreDiscoveryNote");

    const grid =
        document.getElementById("seviaExploreChoiceGrid");

    const areaQuestion =
        document.getElementById("seviaExploreAreaQuestion");

    const areaRow =
        document.getElementById("seviaExploreAreaRow");

    const continueButton =
        document.getElementById("seviaExploreContinue");


    /* RESET */

    [greeting, question, note, areaQuestion, areaRow, continueButton]
        .forEach(function(el) {
            if (el) {
                el.classList.remove("is-visible");
            }
        });

    if (grid) {
        grid.querySelectorAll(".sevia-explore-choice")
            .forEach(function(card) {
                card.classList.remove("is-visible");
                card.classList.remove("selected");
            });
    }


    /*
     * 1 — GREETING
     */

    setTimeout(function() {

        if (!greeting) return;

        greeting.textContent =
            seviaLanguage === "id"
                ? `Hi ${seviaName},`
                : seviaLanguage === "zh"
                    ? `您好 ${seviaName}，`
                    : `Hi ${seviaName},`;

        greeting.classList.add("is-visible");

    }, 500);


    /*
     * 2 — QUESTION
     */

    setTimeout(function() {

        if (!question) return;

        const text =
            seviaLanguage === "id"
                ? "Apa yang ingin Anda Explore hari ini?"
                : seviaLanguage === "zh"
                    ? "今天您想探索什么？"
                    : "What would you like to Explore today?";

        question.textContent = "";

        question.classList.add("is-visible");

        let index = 0;

        const typing = setInterval(function() {

            question.textContent =
                text.slice(0, index + 1);

            index++;

            if (index >= text.length) {

                clearInterval(typing);

                if (note) {

                    note.textContent =
                        seviaLanguage === "id"
                            ? "Anda bisa memilih lebih dari satu."
                            : seviaLanguage === "zh"
                                ? "您可以选择多个选项。"
                                : "You can choose more than one.";

                    note.classList.add("is-visible");
                }


                /*
                 * 3 — CARDS ENTER ONE BY ONE
                 */

                if (grid) {

                    const cards =
                        grid.querySelectorAll(
                            ".sevia-explore-choice"
                        );

                    cards.forEach(function(card, i) {

                        setTimeout(function() {
                            card.classList.add("is-visible");
                        }, 250 + (i * 140));

                    });


                    /*
                     * 4 — AREA QUESTION
                     * After cards finish entering.
                     */

                    setTimeout(function() {

                        if (!areaQuestion) return;

                        const areaText =
                            seviaLanguage === "id"
                                ? "Ada area atau lokasi tertentu yang ingin Anda Explore?"
                                : seviaLanguage === "zh"
                                    ? "您是否有特定的区域或地点想要探索？"
                                    : "Is there a specific area or location you'd like to Explore?";

                        areaQuestion.textContent = "";

                        areaQuestion.classList.add(
                            "is-visible"
                        );

                        let areaIndex = 0;

                        const areaTyping =
                            setInterval(function() {

                                areaQuestion.textContent =
                                    areaText.slice(
                                        0,
                                        areaIndex + 1
                                    );

                                areaIndex++;

                                if (areaIndex >= areaText.length) {

                                    clearInterval(areaTyping);


                                    /*
                                     * 5 — RESPONSE BOX
                                     */

                                    setTimeout(function() {

                                        if (areaRow) {
                                            areaRow.classList.add(
                                                "is-visible"
                                            );
                                        }

                                    }, 700);

                                }

                            }, 70);

                    }, 250 + (cards.length * 140) + 700);

                }

            }

        }, 55);

    }, 1200);

}

    if (page === "summary" && seviaPageSummary) {
        seviaPageSummary.classList.add("active");
        seviaPageSummary.style.display = "block";
    }

    if (page === "handover" && seviaPageHandover) {
        seviaPageHandover.classList.add("active");
        seviaPageHandover.style.display = "block";
    }
}

    function seviaSetCharacter(src, softFade) {
    if (!seviaCharacter || !src) return;

    const currentSrc = seviaCharacter.getAttribute("src");

    if (!softFade) {
        const preload = new Image();

        preload.onload = function() {
            seviaCharacter.classList.add("is-fading");

            window.setTimeout(function() {
                seviaCharacter.src = src;
                seviaCharacter.classList.remove("is-fading");
            }, 300);
        };

        preload.onerror = function() {
            if (currentSrc) seviaCharacter.src = currentSrc;
            seviaCharacter.classList.remove("is-fading");
        };

        preload.src = src;
        return;
    }

    const preload = new Image();

    preload.onload = function() {

        // Fade OUT figur lama
        seviaCharacter.classList.add("is-fading");

        // Tunggu fade-out selesai
        window.setTimeout(function() {

            seviaCharacter.src = src;

            // Pastikan browser sudah menerapkan src baru
            requestAnimationFrame(function() {
                requestAnimationFrame(function() {
                    // Fade IN figur baru
                    seviaCharacter.classList.remove("is-fading");
                });
            });

        }, 1100);
    };

    preload.onerror = function() {
        if (currentSrc) seviaCharacter.src = currentSrc;
        seviaCharacter.classList.remove("is-fading");
    };

    preload.src = src;
}

function seviaSetExploreCharacter(src, onComplete) {
    if (!seviaCharacter || !src) return;

    seviaCharacter.classList.remove("explore-visible");
    seviaCharacter.classList.remove("explore-hidden");

    // Fade-out figur lama
    seviaCharacter.style.transition = "opacity 1.0s ease-in-out";
    seviaCharacter.style.opacity = "0";

    const preload = new Image();

    preload.onload = function() {

        // Tunggu fade-out figur lama
        setTimeout(function() {

            seviaCharacter.src = src;

            // Pastikan browser membaca gambar baru
            void seviaCharacter.offsetWidth;

            // Fade-in figur baru
            requestAnimationFrame(function() {
                seviaCharacter.style.opacity = "1";

                // Beri waktu fade-in selesai sebelum pindah halaman
                if (typeof onComplete === "function") {
                    setTimeout(onComplete, 1800);
                }
            });

        }, 1500);
    };

    preload.onerror = function() {
        seviaCharacter.style.opacity = "1";

        if (typeof onComplete === "function") {
            onComplete();
        }
    };

    preload.src = src;
}

    function seviaApplyLanguage() {
        const config = seviaConfig();
        if (seviaLanguageLabel) seviaLanguageLabel.textContent = config.label;
        if (seviaChatLabel) seviaChatLabel.textContent = config.chatLabel;
        if (seviaHandoverLabel) seviaHandoverLabel.textContent = config.label;
        if (seviaIntroTitle) seviaIntroTitle.textContent = config.introTitle;
        if (seviaIntroText) seviaIntroText.textContent = config.introText;
        if (seviaIntroPrompt) seviaIntroPrompt.textContent = config.introPrompt;
        if (seviaNameInput) seviaNameInput.placeholder = config.namePlaceholder;
        if (seviaNameContinue) { seviaNameContinue.textContent = ""; seviaNameContinue.setAttribute("aria-label", config.continueLabel); }
        if (seviaChatPrompt) {
            let prompt = config.chatPrompt;
            if (selection.action === "RENT") {
                prompt = seviaLanguage === "id"
                    ? "Mari kita persempit sedikit. Kebutuhan sewa ini untuk diri sendiri, keluarga, atau bisnis?"
                    : seviaLanguage === "zh"
                        ? "让我们再缩小一点范围。这次租赁主要是自己使用、家庭使用，还是商业用途？"
                        : "Let’s narrow this down a little. Is this rental mainly for yourself, family, or business?";
            } else if (selection.action === "SELL") {
                prompt = seviaLanguage === "id"
                    ? "Mari kita persempit sedikit. Properti ini akan dijual sebagai properti pribadi, investasi, atau lainnya?"
                    : seviaLanguage === "zh"
                        ? "让我们再缩小一点范围。这套房产是自用、投资，还是其他用途？"
                        : "Let’s narrow this down a little. Is this a personal property, an investment property, or something else?";
            } else if (selection.action === "INVEST") {
                prompt = seviaLanguage === "id"
                    ? "Mari kita persempit sedikit. Fokus investasi Anda lebih kepada kenaikan nilai, penghasilan, atau keduanya?"
                    : seviaLanguage === "zh"
                        ? "让我们再缩小一点范围。您的投资重点是升值潜力、收入，还是两者皆是？"
                        : "Let’s narrow this down a little. Is your investment focus capital growth, income, or both?";
            }
            seviaChatPrompt.textContent = prompt;
        }
        if (seviaContextLabel) seviaContextLabel.textContent = config.searchLabel;
        if (seviaChatStatus) seviaChatStatus.textContent = config.chatStatus;
        if (seviaReadyText) seviaReadyText.textContent = config.ready;
        if (seviaUserInput) seviaUserInput.placeholder = config.placeholder;
        if (seviaHandoverTitle) seviaHandoverTitle.textContent = config.handoverTitle;
        if (seviaHandoverText) seviaHandoverText.textContent = config.handoverText;
        if (seviaWhatsAppText) seviaWhatsAppText.textContent = config.whatsappText;
        if (seviaWeChatText) seviaWeChatText.textContent = config.wechatText;
        if (seviaWeChatInstruction) seviaWeChatInstruction.textContent = config.wechatInstruction;
        if (seviaWeChatSummaryNote) seviaWeChatSummaryNote.textContent = config.wechatNote;
        if (seviaCopySummary) seviaCopySummary.textContent = config.copy;
        if (seviaBackToChat) seviaBackToChat.textContent = config.backChat;
        if (seviaHandoverQuestionText) seviaHandoverQuestionText.textContent = config.handoverQuestion;
        if (seviaAskMore) seviaAskMore.textContent = config.askMore;
        if (seviaConnectWhatsApp) seviaConnectWhatsApp.textContent = config.connectWhatsApp;
        const seviaExploreLabel = document.getElementById("seviaExploreLabel");

        if (seviaExploreLabel) {
            seviaExploreLabel.textContent =
                seviaLanguage === "id"
                    ? "INDONESIA"
                    : seviaLanguage === "zh"
                        ? "中文"
                        : "ENGLISH";
        }

        if (seviaExploreMessage1) {
    seviaExploreMessage1.innerHTML =
        seviaLanguage === "id"
            ? `<div class="sevia-explore-greeting">Halo, saya SeVIA.</div>
               <div class="sevia-explore-description">Saya adalah AI Property Concierge dari PropertyPoint.id, partner Hadi, yang siap membantu Anda menjelajahi berbagai pilihan dan peluang properti.</div>`
            : seviaLanguage === "zh"
                ? `<div class="sevia-explore-greeting">您好，我是 SeVIA。</div>
                   <div class="sevia-explore-description">我是 PropertyPoint.id 的 AI 房产顾问，也是 Hadi 的合作伙伴。我可以帮助您探索各种房产选择与机会。</div>`
                : `<div class="sevia-explore-greeting">Hello, I'm SeVIA.</div>
                   <div class="sevia-explore-description">I'm PropertyPoint.id's AI Property Concierge, partnering with Hadi to help you explore a range of property choices and opportunities.</div>`;
}

        if (seviaExploreMessage2) {
            seviaExploreMessage2.dataset.idText = "Bolehkah saya mengetahui nama Anda?";
            seviaExploreMessage2.dataset.zhText = "可以告诉我您的名字吗？";
            seviaExploreMessage2.dataset.enText = "May I know your name?";
}

const seviaExploreChoiceLabels = {
    id: {
        residential: "Properti Residensial",
        commercial: "Properti Komersial",
        warehouse: "Gudang",
        land: "Tanah",
        investment: "Peluang Investasi",
        areas: "Area & Lokasi",
        unsure: "Saya Belum Yakin"
    },
    zh: {
        residential: "住宅房产",
        commercial: "商业地产",
        warehouse: "仓库",
        land: "土地",
        investment: "投资机会",
        areas: "区域与地点",
        unsure: "我还不确定"
    },
    en: {
        residential: "Residential Property",
        commercial: "Commercial Property",
        warehouse: "Warehouse",
        land: "Land",
        investment: "Investment Opportunities",
        areas: "Areas & Locations",
        unsure: "I'm Not Sure Yet"
    }
};

const exploreChoiceLabels =
    seviaExploreChoiceLabels[seviaLanguage] ||
    seviaExploreChoiceLabels.en;

const exploreChoiceGrid =
    document.getElementById("seviaExploreChoiceGrid");

if (exploreChoiceGrid) {
    exploreChoiceGrid
        .querySelectorAll(".sevia-explore-choice")
        .forEach(function(card) {

            const key = card.dataset.exploreChoice;
            const text = card.querySelector(".sevia-explore-choice-text");

            if (text && exploreChoiceLabels[key]) {
                text.textContent = exploreChoiceLabels[key];
            }
        });
}

        const summaryLabel = document.getElementById("seviaSummaryLabel");
        const summaryTitle = document.getElementById("seviaSummaryTitle");
        const summaryIntro = document.getElementById("seviaSummaryIntro");
        const summaryQuestion = document.getElementById("seviaSummaryQuestion");

        if (summaryLabel) summaryLabel.textContent =
            seviaLanguage === "id" ? "RINGKASAN" :
            seviaLanguage === "zh" ? "需求摘要" :
            "SUMMARY";

        if (summaryTitle) summaryTitle.textContent =
            seviaLanguage === "id" ? "Berikut yang saya pahami." :
            seviaLanguage === "zh" ? "这是我对您需求的理解。" :
            "Here's what I understand.";

        if (summaryIntro) summaryIntro.textContent =
            seviaLanguage === "id" ? "Saya sudah mengumpulkan poin-poin utama dari percakapan kita." :
            seviaLanguage === "zh" ? "我已经整理了我们对话中的主要需求。" :
            "I've gathered the key points from our conversation.";

        if (summaryQuestion) summaryQuestion.textContent =
            seviaLanguage === "id" ? "Apakah Anda masih ingin bertanya hal lain kepada SeVIA?" :
            seviaLanguage === "zh" ? "您还想向 SeVIA 询问其他问题吗？" :
            "Would you like to ask SeVIA anything else?";


    }

    function openSeviaExperience(language) {
        seviaLanguage = language || seviaLanguage || "en";
        const config = seviaConfig();
        seviaApplyLanguage();
        if (seviaBackground) seviaBackground.style.backgroundImage = `url("${config.background}")`;
        if (seviaCharacter) {
            const activeChat = seviaPageChat && seviaPageChat.classList.contains("active");
            seviaSetCharacter(activeChat ? config.guidingCharacter : config.character);
        }
        seviaName = "";
        seviaPurpose = "";
        seviaChatStarted = false;
        seviaQualificationStep = 0;
        if (seviaNameInput) seviaNameInput.value = "";
        if (seviaNameError) seviaNameError.textContent = "";
        if (seviaLocalResponse) { seviaLocalResponse.textContent = ""; seviaLocalResponse.classList.remove("active"); }
        if (seviaContinueHadi) seviaContinueHadi.classList.remove("active");
        if (seviaHandoverQuestion) { seviaHandoverQuestion.classList.remove("active"); seviaHandoverQuestion.setAttribute("aria-hidden", "true"); }
        if (seviaChatArea) { seviaChatArea.classList.remove("active"); seviaChatArea.setAttribute("aria-hidden", "true"); }
        if (seviaWeChatPanel) { seviaWeChatPanel.classList.remove("active"); seviaWeChatPanel.setAttribute("aria-hidden", "true"); }
        if (seviaContextText) seviaContextText.textContent = getSeviaSearchSummary();
        if (selection.action === "EXPLORE") {
         seviaSetPage("exploreIntro");
    } else {
         seviaSetPage("intro");
     }
     
        document.body.classList.add("sevia-only-mode");
        showStep(6);
        
    }

    document.addEventListener("click", function(event) {
        const languageButton = event.target.closest(".sevia-language-option");
        if (!languageButton) return;
        event.preventDefault();
        openSeviaExperience(languageButton.dataset.seviaLanguage);
    });

    if (seviaNameContinue) {
        seviaNameContinue.addEventListener("click", function() {
            const value = (seviaNameInput ? seviaNameInput.value : "").trim();
            if (!value) {
                if (seviaNameError) seviaNameError.textContent = seviaLanguage === "id" ? "Silakan masukkan nama Anda." : seviaLanguage === "zh" ? "请输入您的名字。" : "Please enter your name.";
                return;
            }
            seviaName = value.replace(/\s+/g, " ").replace(/\b([a-zA-Z][a-zA-Z'-]*)\b/g, function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
});
            if (seviaNameError) seviaNameError.textContent = "";
            const config = seviaConfig();
                    seviaSetExploreCharacter(config.guidingCharacter);

        if (seviaChatTitle) {
            seviaChatTitle.textContent =
                config.chatTitle.replace("{name}", seviaName);
        }

        if (seviaContextText) {
            seviaContextText.textContent =
                getSeviaSearchSummary();
        }

        seviaApplyChoiceLabels();

        if (selection.action === "EXPLORE") {

           seviaSetExploreCharacter(
            config.guidingCharacter
        );

            seviaSetPage("exploreDiscovery");

            return;
        }

        seviaSetPage("chat");
        });
    }

    if (seviaExploreNameContinue) {

    seviaExploreNameContinue.addEventListener(
        "click",
        function() {

            const value =
                (seviaExploreNameInput
                    ? seviaExploreNameInput.value
                    : ""
                ).trim();

            if (!value) {

                if (seviaExploreNameError) {
                    seviaExploreNameError.textContent =
                        seviaLanguage === "id"
                            ? "Silakan masukkan nama Anda."
                            : seviaLanguage === "zh"
                                ? "请输入您的名字。"
                                : "Please enter your name.";
                }

                return;
            }

            seviaName =
                value
                    .replace(/\s+/g, " ")
                    .replace(/\b([a-zA-Z][a-zA-Z'-]*)\b/g, function(word) {
                        return word.charAt(0).toUpperCase() +
                            word.slice(1).toLowerCase();
                    });

            if (seviaExploreNameError) {
                seviaExploreNameError.textContent = "";
            }

            const config =
                seviaConfig();

            /*
            * Fade ke pose Explore kedua
            */
            seviaSetExploreCharacter(
                config.guidingCharacter
            );

            /*
             * Masuk ke Explore Page 2
             */
            seviaSetPage(
                "exploreDiscovery"
            );

        }
    );

}

    if (seviaNameInput) {
        seviaNameInput.addEventListener("keydown", function(event) {
            if (event.key === "Enter") { event.preventDefault(); seviaNameContinue.click(); }
        });
    }

    /* =====================================================
   EXPLORE PAGE 2 — DISCOVERY CHOICES
===================================================== */

const seviaExploreChoices = [];

const seviaExploreChoiceGrid =
    document.getElementById("seviaExploreChoiceGrid");

const seviaExploreAreaInput =
    document.getElementById("seviaExploreAreaInput");

const seviaExploreContinue =
    document.getElementById("seviaExploreContinue");


if (seviaExploreChoiceGrid) {

    seviaExploreChoiceGrid.addEventListener(
        "click",
        function(event) {

            const card =
                event.target.closest(
                    ".sevia-explore-choice"
                );

            if (!card) return;

            event.preventDefault();

            const choice =
                card.dataset.exploreChoice;

            if (!choice) return;


            /*
             * TOGGLE
             */

            card.classList.toggle("selected");


            /*
             * Keep selected values only.
             */

            const index =
                seviaExploreChoices.indexOf(choice);

            if (card.classList.contains("selected")) {

                if (index === -1) {
                    seviaExploreChoices.push(choice);
                }

            } else {

                if (index !== -1) {
                    seviaExploreChoices.splice(
                        index,
                        1
                    );
                }

            }


            /*
             * CONTINUE APPEARS
             * only after at least one choice
             * OR area is filled.
             */

            if (
                seviaExploreContinue &&
                (
                    seviaExploreChoices.length > 0 ||
                    (
                        seviaExploreAreaInput &&
                        seviaExploreAreaInput.value.trim()
                    )
                )
            ) {

                seviaExploreContinue.classList.add(
                    "is-visible"
                );

            }

        }
    );

}


if (seviaExploreAreaInput) {

    seviaExploreAreaInput.addEventListener(
        "input",
        function() {

            if (!seviaExploreContinue) return;

            if (
                seviaExploreChoices.length > 0 ||
                seviaExploreAreaInput.value.trim()
            ) {

                seviaExploreContinue.classList.add(
                    "is-visible"
                );

            } else {

                seviaExploreContinue.classList.remove(
                    "is-visible"
                );

            }

        }
    );

}


if (seviaExploreContinue) {

    seviaExploreContinue.addEventListener(
        "click",
        function() {

            selection.action = "EXPLORE";

            selection.property =
                seviaExploreChoices.join(", ");

            selection.area =
                seviaExploreAreaInput
                    ? seviaExploreAreaInput.value.trim()
                    : "";

            // Pilih figur Page 3 sesuai bahasa
            const inviteCharacter =
                seviaLanguage === "id"
                    ? "assets/sevia/sevia-invite-indonesia.png"
                    : seviaLanguage === "zh"
                        ? "assets/sevia/sevia-invite-mandarin.png"
                        : "assets/sevia/sevia-invite-international.png";

            seviaSetExploreCharacter(inviteCharacter);

            // Buat summary berdasarkan pilihan yang benar-benar dipilih
            const selectedLabels = [];

            seviaExploreChoices.forEach(function(key) {

                const card = document.querySelector(
                    `.sevia-explore-choice[data-explore-choice="${key}"]`
                );

                if (card) {

                    const text =
                        card.querySelector(
                            ".sevia-explore-choice-text"
                        );

                    if (text) {
                        selectedLabels.push(
                            text.textContent.trim()
                        );
                    }

                }

            });

            let summaryHTML = "";

            if (seviaLanguage === "id") {

                summaryHTML =
                    `<strong>${seviaName}</strong>, ` +
                    `saya memahami bahwa Anda ingin ` +
                    `<strong>Explore ${selectedLabels.join(", ")}</strong>`;

                if (selection.area) {
                    summaryHTML +=
                        `, terutama di area atau lokasi ` +
                        `<strong>${selection.area}</strong>`;
                }

                summaryHTML += ".";

            } else if (seviaLanguage === "zh") {

                summaryHTML =
                    `<strong>${seviaName}</strong>，` +
                    `我了解到您想探索 ` +
                    `<strong>${selectedLabels.join("、")}</strong>`;

                if (selection.area) {
                    summaryHTML +=
                        `，特别关注 ` +
                        `<strong>${selection.area}</strong>`;
                }

                summaryHTML += "。";

            } else {

                summaryHTML =
                    `<strong>${seviaName}</strong>, ` +
                    `I understand that you'd like to Explore ` +
                    `<strong>${selectedLabels.join(", ")}</strong>`;

                if (selection.area) {
                    summaryHTML +=
                        `, with a particular interest in ` +
                        `<strong>${selection.area}</strong>`;
                }

                summaryHTML += ".";

            }

            // Masukkan summary ke Page 3
            if (seviaSummaryCard) {
                seviaSummaryCard.innerHTML =
                    `<div class="sevia-summary-natural">${summaryHTML}</div>`;
            }

            // Masuk ke Page 3
            seviaSetPage("summary");

        }
    );

}

    function seviaGetFollowupPrompt() {
    const config = seviaConfig();

    if (selection.action === "SELL") {
        if (seviaLanguage === "id") {
            return "Apa yang paling penting bagi Anda saat menjual — harga, waktu penjualan, atau hal lainnya?";
        }

        if (seviaLanguage === "zh") {
            return "出售房产时，什么对您最重要——价格、出售时间，还是其他因素？";
        }

        return "What matters most to you when selling — price, timing, or something else?";
    }

    const followup = config.followup || {};
    return followup[seviaPurpose] || followup.both || config.chatStatus;
}

    function seviaResetConversationUI() {
        seviaQualificationStep = 0;
        if (seviaLocalResponse) {
            seviaLocalResponse.textContent = "";
            seviaLocalResponse.classList.remove("active");
        }
        if (seviaContinueHadi) seviaContinueHadi.classList.remove("active");
        if (seviaHandoverQuestion) { seviaHandoverQuestion.classList.remove("active"); seviaHandoverQuestion.setAttribute("aria-hidden", "true"); }
        if (seviaUserInput) seviaUserInput.value = "";
    }

    if (seviaPurposeChoices) {
    seviaPurposeChoices.addEventListener("click", function(event) {

        const button = event.target.closest(".sevia-shell-choice");

        if (!button) return;

        seviaPurpose = button.dataset.purpose || "";
        seviaChatStarted = true;
        seviaQualificationStep = 1;

        /* Hide the search summary */
        const contextCard =
            document.getElementById("seviaContextCard");

        if (contextCard) {
            contextCard.style.display = "none";
        }

        /* Hide the three purpose choices */
        seviaPurposeChoices.style.display = "none";

        /* Build the acknowledgement */
let acknowledgement = "";

const action = seviaActionLabel();
const property = seviaPropertyLabel();
const area = selection.area || "";

if (seviaLanguage === "id") {

    if (selection.action === "SELL") {

        if (seviaPurpose === "self") {
            acknowledgement =
                `Saya sudah mencatat bahwa Anda ingin menjual ${property.toLowerCase()} di ${area} sebagai properti pribadi.`;
        }

        if (seviaPurpose === "investment") {
            acknowledgement =
                `Saya sudah mencatat bahwa Anda ingin menjual ${property.toLowerCase()} di ${area} sebagai properti investasi.`;
        }

        if (seviaPurpose === "both") {
            acknowledgement =
                `Saya sudah mencatat bahwa Anda ingin menjual ${property.toLowerCase()} di ${area} untuk tujuan lainnya.`;
        }

    } else {

        if (seviaPurpose === "self") {
            acknowledgement =
                `Saya sudah mencatat bahwa Anda ingin ${action} ${property.toLowerCase()} di ${area} untuk tinggal sendiri.`;
        }

        if (seviaPurpose === "investment") {
            acknowledgement =
                `Saya sudah mencatat bahwa Anda ingin ${action} ${property.toLowerCase()} di ${area} untuk investasi.`;
        }

        if (seviaPurpose === "both") {
            acknowledgement =
                `Saya sudah mencatat bahwa Anda ingin ${action} ${property.toLowerCase()} di ${area} untuk tinggal sendiri sekaligus investasi.`;
        }
    }

} else if (seviaLanguage === "zh") {

    if (selection.action === "SELL") {

        if (seviaPurpose === "self") {
            acknowledgement =
                `我已经记下了您的需求：您希望在 ${area} 出售${property}，这是一套自有房产。`;
        }

        if (seviaPurpose === "investment") {
            acknowledgement =
                `我已经记下了您的需求：您希望在 ${area} 出售${property}，作为投资房产。`;
        }

        if (seviaPurpose === "both") {
            acknowledgement =
                `我已经记下了您的需求：您希望在 ${area} 出售${property}，用于其他用途。`;
        }

    } else {

        if (seviaPurpose === "self") {
            acknowledgement =
                `我已经记下了您的需求：您希望在 ${area} ${action}${property}，用于自住。`;
        }

        if (seviaPurpose === "investment") {
            acknowledgement =
                `我已经记下了您的需求：您希望在 ${area} ${action}${property}，用于投资。`;
        }

        if (seviaPurpose === "both") {
            acknowledgement =
                `我已经记下了您的需求：您希望在 ${area} ${action}${property}，用于自住及投资。`;
        }
    }

} else {

    let englishProperty = property.toLowerCase();

    if (property === "Commercial") {
        englishProperty = "commercial property";
    } else if (property === "Land") {
        englishProperty = "land";
    } else if (property === "Other") {
        englishProperty = "another property";
    }

    const englishArticle =
        englishProperty === "land" ? "" :
        englishProperty === "another property" ? "" :
        englishProperty.startsWith("a ") || englishProperty.startsWith("an ") ? "" :
        englishProperty.startsWith("apartment") ? "an " :
        "a ";

    const englishPropertyText =
        englishArticle + englishProperty;

    if (selection.action === "SELL") {

        if (seviaPurpose === "self") {
            acknowledgement =
                `I've noted that you're looking to sell ${englishPropertyText} in ${area} as a personally owned property.`;
        }

        if (seviaPurpose === "investment") {
            acknowledgement =
                `I've noted that you're looking to sell ${englishPropertyText} in ${area} as an investment property.`;
        }

        if (seviaPurpose === "both") {
            acknowledgement =
                `I've noted that you're looking to sell ${englishPropertyText} in ${area} for another purpose.`;
        }

    } else {

        if (seviaPurpose === "self") {
            acknowledgement =
                `I've noted that you're looking to ${action.toLowerCase()} ${englishPropertyText} in ${area} for your own use.`;
        }

        if (seviaPurpose === "investment") {
            acknowledgement =
                `I've noted that you're looking to ${action.toLowerCase()} ${englishPropertyText} in ${area}, which is an investment property.`;
        }

        if (seviaPurpose === "both") {
            acknowledgement =
                `I've noted that you're looking to ${action.toLowerCase()} ${englishPropertyText} in ${area} for your own use and investment.`;
        }
    }
}

        /* Replace the old greeting */
        if (seviaChatTitle) {
            seviaChatTitle.textContent = acknowledgement;
            seviaChatTitle.classList.add("sevia-acknowledgement-title");
        }

        /* Replace the old purpose question */
        if (seviaChatPrompt) {
            seviaChatPrompt.textContent =
                seviaGetFollowupPrompt();
        }

        /* Clear previous response */
        if (seviaLocalResponse) {
            seviaLocalResponse.textContent = "";
            seviaLocalResponse.classList.remove("active");
        }

        /* Show the chat input */
        if (seviaChatArea) {
            seviaChatArea.classList.add("active");
            seviaChatArea.setAttribute("aria-hidden", "false");
        }

        if (seviaUserInput) {
            seviaUserInput.value = "";
            seviaUserInput.focus();
        }

    });
}

    function handleSeviaLocalInput(value) {

    const text = (value || "").trim();

    if (!text) return;

    const config = seviaConfig();


    /* =====================================================
       STEP 1 — USER ANSWERS:
       "Apa yang paling penting bagi Anda?"
       ===================================================== */

    if (seviaQualificationStep === 1) {

        const action = seviaActionLabel();

        const property = seviaPropertyLabel();

        const area =
            selection.area ||
            "";

        const purpose =
            seviaPurposeText() ||
            "";


        /*
         * Save user's answer.
         * Example: BGM
         */
        seviaUserPriority = text;


        /*
         * PAGE 4 SUMMARY
         */

        let summaryText = "";

if (seviaLanguage === "id") {

    if (selection.action === "SELL") {

        if (seviaPurpose === "self") {
            summaryText =
                `Anda ingin menjual ${property.toLowerCase()} di ${area} sebagai properti pribadi, dan prioritas Anda adalah: ${text}.`;
        } else if (seviaPurpose === "investment") {
            summaryText =
                `Anda ingin menjual ${property.toLowerCase()} di ${area} sebagai properti investasi, dan prioritas Anda adalah: ${text}.`;
        } else {
            summaryText =
                `Anda ingin menjual ${property.toLowerCase()} di ${area} untuk tujuan lainnya, dan prioritas Anda adalah: ${text}.`;
        }

    } else {

        summaryText =
            `Anda ingin ${action.toLowerCase()} ${property.toLowerCase()} di ${area}, untuk ${purpose.toLowerCase()}, dan prioritas Anda adalah: ${text}.`;
    }

} else if (seviaLanguage === "zh") {

    if (selection.action === "SELL") {

        if (seviaPurpose === "self") {
            summaryText =
                `您希望在 ${area} 出售${property}，这是一套自有房产，您的重点是：${text}。`;
        } else if (seviaPurpose === "investment") {
            summaryText =
                `您希望在 ${area} 出售${property}，作为投资房产，您的重点是：${text}。`;
        } else {
            summaryText =
                `您希望在 ${area} 出售${property}，用于其他用途，您的重点是：${text}。`;
        }

    } else {

        summaryText =
            `您希望在 ${area} ${action}${property}，用于${purpose}，您的重点是：${text}。`;
    }

} else {

    let englishProperty = property.toLowerCase();

    if (property === "Commercial") {
        englishProperty = "commercial property";
    } else if (property === "Apartment") {
        englishProperty = "an apartment";
    } else if (property === "House") {
        englishProperty = "a house";
    } else if (property === "Warehouse") {
        englishProperty = "a warehouse";
    } else if (property === "Land") {
        englishProperty = "land";
    } else if (property === "Other") {
        englishProperty = "another property";
    } else {
        englishProperty = `a ${englishProperty}`;
    }

    if (selection.action === "SELL") {

        if (seviaPurpose === "self") {
            summaryText =
                `You'd like to sell ${englishProperty} in ${area} that you own personally, and your priority is: ${text}.`;
        } else if (seviaPurpose === "investment") {
            summaryText =
                `You'd like to sell ${englishProperty} in ${area} as an investment property, and your priority is: ${text}.`;
        } else {
            summaryText =
                `You'd like to sell ${englishProperty} in ${area} for another purpose, and your priority is: ${text}.`;
        }

    } else {

        summaryText =
            `You'd like to ${action.toLowerCase()} ${englishProperty} in ${area} for ${purpose.toLowerCase()}, and your priority is: ${text}.`;
    }
}


        /*
         * Replace the large title.
         */

        if (seviaChatTitle) {

            seviaChatTitle.textContent =
                summaryText;

            seviaChatTitle.classList.add(
                "sevia-acknowledgement-title"
            );

        }


        /*
         * IMPORTANT:
         * The previous question is now finished.
         */

        if (seviaChatPrompt) {

            seviaChatPrompt.textContent =
                seviaLanguage === "id"
                    ? "Ada hal lain yang ingin Anda tambahkan?"
                    : seviaLanguage === "zh"
                        ? "还有其他想补充的吗？"
                        : "Is there anything else you'd like to add?";

        }


        /*
         * Remove the old response:
         * "Baik, Hadi. Saya sudah mencatatnya."
         */

        if (seviaLocalResponse) {

            seviaLocalResponse.textContent = "";

            seviaLocalResponse.classList.remove(
                "active"
            );

        }


        /*
         * Move to optional additional information.
         */

        seviaQualificationStep = 2;


        /*
         * Keep input visible.
         */

        if (seviaChatArea) {

            seviaChatArea.classList.add("active");

            seviaChatArea.setAttribute(
                "aria-hidden",
                "false"
            );

        }


        if (seviaUserInput) {

            seviaUserInput.value = "";

            seviaUserInput.focus();

        }


        /*
         * No handover yet.
         */

        if (seviaHandoverQuestion) {

            seviaHandoverQuestion.classList.remove(
                "active"
            );

            seviaHandoverQuestion.setAttribute(
                "aria-hidden",
                "true"
            );

        }

        return;
    }


    /* =====================================================
       STEP 2 — OPTIONAL ADDITION
       ===================================================== */

    if (seviaQualificationStep === 2) {

        /*
         * User added another detail.
         */

        if (seviaLocalResponse) {

            seviaLocalResponse.textContent =
                seviaLanguage === "id"
                    ? "Baik, saya sudah mencatat tambahan tersebut."
                    : seviaLanguage === "zh"
                        ? "好的，我已经记下了您的补充信息。"
                        : "Got it. I've noted that additional detail.";

            seviaLocalResponse.classList.add(
                "active"
            );

        }


        seviaQualificationStep = 3;
        
        seviaAdditionalNote = text;

        if (seviaUserInput) {
            seviaUserInput.value = "";
        }


        /*
         * SeVIA now has enough information.
         */

        if (seviaChatStatus) {

            seviaChatStatus.textContent =
                seviaLanguage === "id"
                    ? "SeVIA sudah mendapatkan gambaran yang cukup."
                    : seviaLanguage === "zh"
                        ? "SeVIA 已经有了比较清晰的了解。"
                        : "SeVIA has a clearer picture now.";

        }


        /*
 * Show SeVIA Summary Page.
 */

if (seviaSummaryCard) {

    const action = seviaActionLabel();
    const property = seviaPropertyLabel();
    const area = selection.area || "";
    const purpose = seviaPurposeText() || "";
    const priority = seviaUserPriority || "";
    const additional = seviaAdditionalNote || "";

    let summaryHTML = "";

    if (seviaLanguage === "id") {

        if (selection.action === "SELL") {

            if (seviaPurpose === "self") {
                summaryHTML =
                    `<strong>${seviaName}</strong> ingin ` +
                    `<strong>menjual ${property.toLowerCase()}</strong> di ` +
                    `<strong>${area}</strong> sebagai ` +
                    `<strong>properti pribadi</strong>`;
            } else if (seviaPurpose === "investment") {
                summaryHTML =
                    `<strong>${seviaName}</strong> ingin ` +
                    `<strong>menjual ${property.toLowerCase()}</strong> di ` +
                    `<strong>${area}</strong> sebagai ` +
                    `<strong>properti investasi</strong>`;
            } else {
                summaryHTML =
                    `<strong>${seviaName}</strong> ingin ` +
                    `<strong>menjual ${property.toLowerCase()}</strong> di ` +
                    `<strong>${area}</strong> untuk ` +
                    `<strong>tujuan lainnya</strong>`;
            }

        } else {

            summaryHTML =
                `<strong>${seviaName}</strong> ingin ` +
                `<strong>${action} ${property.toLowerCase()}</strong> di ` +
                `<strong>${area}</strong>, untuk ` +
                `<strong>${purpose.toLowerCase()}</strong>`;
        }

        if (priority) {
            summaryHTML += `, dengan prioritas <strong>${priority}</strong>`;
        }

        if (additional) {
            summaryHTML += `, dan catatan tambahan <strong>${additional}</strong>`;
        }

        summaryHTML += ".";

    } else if (seviaLanguage === "zh") {

        if (selection.action === "SELL") {

            if (seviaPurpose === "self") {
                summaryHTML =
                    `<strong>${seviaName}</strong> 希望在 ` +
                    `<strong>${area}</strong> ` +
                    `<strong>出售${property}</strong>，这是一套` +
                    `<strong>自有房产</strong>`;
            } else if (seviaPurpose === "investment") {
                summaryHTML =
                    `<strong>${seviaName}</strong> 希望在 ` +
                    `<strong>${area}</strong> ` +
                    `<strong>出售${property}</strong>，作为` +
                    `<strong>投资房产</strong>`;
            } else {
                summaryHTML =
                    `<strong>${seviaName}</strong> 希望在 ` +
                    `<strong>${area}</strong> ` +
                    `<strong>出售${property}</strong>，用于` +
                    `<strong>其他用途</strong>`;
            }

        } else {

            summaryHTML =
                `<strong>${seviaName}</strong> 希望在 ` +
                `<strong>${area}</strong> ` +
                `<strong>${action}${property}</strong>，用于 ` +
                `<strong>${purpose}</strong>`;
        }

        if (priority) {
            summaryHTML += `，重点是 <strong>${priority}</strong>`;
        }

        if (additional) {
            summaryHTML += `，补充信息为 <strong>${additional}</strong>`;
        }

        summaryHTML += "。";

    } else {

        let englishProperty = property.toLowerCase();

        if (property === "Commercial") {
            englishProperty = "a commercial property";
        } else if (property === "Apartment") {
            englishProperty = "an apartment";
        } else if (property === "House") {
            englishProperty = "a house";
        } else if (property === "Warehouse") {
            englishProperty = "a warehouse";
        } else if (property === "Land") {
            englishProperty = "land";
        } else if (property === "Other") {
            englishProperty = "another property";
        } else {
            englishProperty = `a ${englishProperty}`;
        }

        if (selection.action === "SELL") {

            if (seviaPurpose === "self") {
                summaryHTML =
                    `<strong>${seviaName}</strong> would like to ` +
                    `<strong>sell ${englishProperty}</strong> in ` +
                    `<strong>${area}</strong> that you own personally`;
            } else if (seviaPurpose === "investment") {
                summaryHTML =
                    `<strong>${seviaName}</strong> would like to ` +
                    `<strong>sell ${englishProperty}</strong> in ` +
                    `<strong>${area}</strong> as an ` +
                    `<strong>investment property</strong>`;
            } else {
                summaryHTML =
                    `<strong>${seviaName}</strong> would like to ` +
                    `<strong>sell ${englishProperty}</strong> in ` +
                    `<strong>${area}</strong> for another purpose`;
            }

        } else {

            summaryHTML =
                `<strong>${seviaName}</strong> would like to ` +
                `<strong>${action.toLowerCase()} ${englishProperty}</strong> in ` +
                `<strong>${area}</strong>, for ` +
                `<strong>${purpose.toLowerCase()}</strong>`;
        }

        if (priority) {
            summaryHTML += `, with a priority of <strong>${priority}</strong>`;
        }

        if (additional) {
            summaryHTML += `, and an additional note: <strong>${additional}</strong>`;
        }

        summaryHTML += ".";
    }

    seviaSummaryCard.innerHTML =
        `<div class="sevia-summary-natural">${summaryHTML}</div>`;
}

seviaSetPage("summary");

return;
    }

}

    if (seviaSend) seviaSend.addEventListener("click", function() { handleSeviaLocalInput(seviaUserInput ? seviaUserInput.value : ""); });
    if (seviaUserInput) seviaUserInput.addEventListener("keydown", function(event) { if (event.key === "Enter") { event.preventDefault(); handleSeviaLocalInput(seviaUserInput.value); } });

    if (seviaAskMore) {
        seviaAskMore.addEventListener("click", function() {
            const config = seviaConfig();
            seviaQualificationStep = 3;
            if (seviaHandoverQuestion) {
                seviaHandoverQuestion.classList.remove("active");
                seviaHandoverQuestion.setAttribute("aria-hidden", "true");
            }
            if (seviaLocalResponse) {
                seviaLocalResponse.textContent = seviaLanguage === "id"
                    ? `Tentu, ${seviaName}. Saya akan tanyakan satu hal lagi supaya Hadi mendapat gambaran yang lebih jelas.`
                    : seviaLanguage === "zh"
                        ? `当然，${seviaName}。我再问一个问题，让 Hadi 更清楚您的需求。`
                        : `Of course, ${seviaName}. I'll ask one more thing so Hadi has a clearer picture of what you need.`;
                seviaLocalResponse.classList.add("active");
            }
            if (seviaChatStatus) seviaChatStatus.textContent = config.followup[seviaPurpose] || config.chatStatus;
            if (seviaUserInput) seviaUserInput.focus();
        });
    }

    if (seviaConnectWhatsApp) {
    seviaConnectWhatsApp.addEventListener("click", function() {
        showSeviaHandover();
    });
}

const seviaSummaryContactHadi = document.getElementById("seviaContinueToHadi");

if (seviaSummaryContactHadi) {
    seviaSummaryContactHadi.addEventListener("click", function() {
        showSeviaHandover();
    });
}

    function seviaActionLabel() {

    const labels = {

        en: {
            BUY: "Buy",
            SELL: "Sell",
            RENT: "Rent",
            INVEST: "Invest",
            PRIMARY: "Primary Projects",
            UNSURE: "I'm Not Sure"
        },

        id: {
            BUY: "membeli",
            SELL: "menjual",
            RENT: "menyewa",
            INVEST: "berinvestasi",
            PRIMARY: "Proyek Baru",
            UNSURE: "belum menentukan"
        },

        zh: {
            BUY: "购买",
            SELL: "出售",
            RENT: "租赁",
            INVEST: "投资",
            PRIMARY: "新项目",
            UNSURE: "尚未确定"
        }

    };

    return (labels[seviaLanguage] || labels.en)[selection.action]
        || selection.action;
}


function seviaPropertyLabel() {

    const labels = {

        en: {
            "House": "House",
            "Apartment": "Apartment",
            "Commercial": "Commercial",
            "Warehouse": "Warehouse",
            "Land": "Land",
            "Primary Project": "Primary Project",
            "Other": "Other"
        },

        id: {
            "House": "Rumah",
            "Apartment": "Apartemen",
            "Commercial": "Properti Komersial",
            "Warehouse": "Gudang",
            "Land": "Tanah",
            "Primary Project": "Proyek Baru",
            "Other": "Lainnya"
        },

        zh: {
            "House": "住宅",
            "Apartment": "公寓",
            "Commercial": "商业地产",
            "Warehouse": "仓库",
            "Land": "土地",
            "Primary Project": "新项目",
            "Other": "其他"
        }

    };

    return (labels[seviaLanguage] || labels.en)[selection.property]
        || selection.property;
}


    function seviaPurposeText() {
        const config = seviaConfig();
        const choices = (selection.action === "RENT" && config.rentChoices) ? config.rentChoices : (selection.action === "SELL" && config.sellChoices) ? config.sellChoices : config.choices;
        return choices[seviaPurpose] || "";
    }

    function seviaSummaryText() {

    const config = seviaConfig();

    const action =
        actionLabels[selection.action] ||
        selection.action ||
        "Not specified";

    const purpose =
        seviaPurposeText() ||
        "Not specified";

    const property =
        seviaPropertyLabel() ||
        "Not specified";

    const area =
        selection.area ||
        "Not specified";

    const priority =
        seviaUserPriority ||
        "Not specified";

    const additional =
        seviaAdditionalNote ||
        "Not specified";

    return `${config.labels.name}: ${seviaName || "Not specified"}
${config.labels.action}: ${action}
${config.labels.property}: ${property}
${config.labels.area}: ${area}
${config.labels.purpose}: ${purpose}
${config.labels.priority}: ${priority}
${config.labels.additional}: ${additional}`;
}

    function buildSeviaHandover() {
        const config = seviaConfig();
        const action = actionLabels[selection.action] || selection.action || "Not specified";
        const property = selection.property || "Not specified";
        const area = selection.area || "Not specified";
        const purpose = seviaPurposeText() || "Not specified";
        const extra = seviaUserInput ? seviaUserInput.value.trim() : "";
        if (seviaLanguage === "zh") {
            return `您好 PropertyPoint.id，\n\n我刚刚通过 SeVIA 咨询。\n称呼：${seviaName || "Not specified"}\n需求：${action}\n房产：${property}\n区域：${area}\n用途：${purpose}${extra ? `\n补充：${extra}` : ""}\n\n我希望继续与 Hadi 沟通。`;
        }
        if (seviaLanguage === "id") {
            return `Hello PropertyPoint.id,\n\nSaya baru saja berkonsultasi dengan SeVIA.\nNama: ${seviaName || "Tidak disebutkan"}\nKebutuhan: ${action}\nProperty: ${property}\nArea: ${area}\nTujuan: ${purpose}${extra ? `\nTambahan: ${extra}` : ""}\n\nSaya ingin melanjutkan dengan Hadi.`;
        }
        return `Hello PropertyPoint.id,\n\nI just spoke with SeVIA.\nName: ${seviaName || "Not specified"}\nLooking to: ${action}\nProperty: ${property}\nArea: ${area}\nPurpose: ${purpose}${extra ? `\nAdditional note: ${extra}` : ""}\n\nI'd like to continue with Hadi.`;
    }

    function showSeviaHandover() {
    const config = seviaConfig();

        // Tampilkan summary yang sudah dibuat di Summary Page
    const handoverSummaryCard =
        document.querySelector("#seviaPageHandover .sevia-summary-card");

    if (handoverSummaryCard && seviaSummaryCard) {
        handoverSummaryCard.innerHTML =
            seviaSummaryCard.innerHTML;
    }

    // WhatsApp tetap membawa summary lengkap
    if (seviaWhatsApp) {
        seviaWhatsApp.href =
            "https://wa.me/" +
            WHATSAPP_NUMBER +
            "?text=" +
            encodeURIComponent(buildSeviaHandover());
    }

    // Gunakan karakter SeVIA yang sesuai bahasa
    seviaSetExploreCharacter(config.character);

    // Masuk ke halaman terakhir
    seviaSetPage("handover");
}

    if (seviaContinueHadi) seviaContinueHadi.addEventListener("click", showSeviaHandover);

    if (seviaWeChat) {
        seviaWeChat.addEventListener("click", function() {
            if (!seviaWeChatPanel) return;
            const active = seviaWeChatPanel.classList.toggle("active");
            seviaWeChatPanel.setAttribute("aria-hidden", active ? "false" : "true");
        });
    }

    if (seviaCopySummary) {
        seviaCopySummary.addEventListener("click", function() {
            const text = seviaSummaryText();
            const done = function() { if (seviaCopyStatus) seviaCopyStatus.textContent = seviaConfig().copied; };
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(done).catch(function() { window.prompt("Copy summary:", text); });
            } else {
                window.prompt("Copy summary:", text);
            }
        });
    }

    if (seviaBackToChat) {
        seviaBackToChat.addEventListener("click", function() {
            seviaSetCharacter(seviaConfig().guidingCharacter);
            seviaSetPage("chat");
        });
    }

    if (seviaSkip) {
        seviaSkip.addEventListener("click", function(event) {
            event.preventDefault();
            showResult();
        });
    }

 if (seviaBack) {
    seviaBack.addEventListener("click", function(event) {
        event.preventDefault();

        /* SeVIA Back Navigation
         * Handover → Chat
         * Chat → Intro
         * Intro → Bridge
         */

        if (
            seviaPageHandover &&
            seviaPageHandover.classList.contains("active")
        ) {
            seviaSetCharacter(
                seviaConfig().guidingCharacter
            );

            seviaSetPage("chat");
            return;
        }

        if (
            seviaPageChat &&
            seviaPageChat.classList.contains("active")
        ) {
            seviaSetCharacter(
                seviaConfig().character
            );

            seviaSetPage("intro");
            return;
        }

        if (
            seviaPageIntro &&
            seviaPageIntro.classList.contains("active")
        ) {
            seviaSetPage("bridge");
            return;
        }
    });
}

    if (seviaHome) {
    seviaHome.addEventListener(
        "click",
        function (event) {
            event.preventDefault();
            document.body.classList.remove("sevia-only-mode");
            goHome();
        }
    );
}

    /* =====================================================
       STEP 3
       AREA SELECTION
    ===================================================== */

    if (stepThree) {

        stepThree.addEventListener(
            "click",
            function (event) {

                const areaButton =
                    event.target.closest(
                        ".option[data-area]"
                    );


                if (!areaButton) {
                    return;
                }


                event.preventDefault();


                selection.area =
                    areaButton.dataset.area;


                showSeviaBridge();

            }
        );

    }


    /* =====================================================
       BACK TO STEP 1
    ===================================================== */

    if (backToStepOne) {

        backToStepOne.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                selection.action =
                    "";

                selection.property =
                    "";

                selection.area =
                    "";


                showStep(1);

            }
        );

    }


    /* =====================================================
       BACK TO STEP 2
    ===================================================== */

    if (backToStepTwo) {

        backToStepTwo.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                selection.area =
                    "";


                buildPropertyOptions(
                    selection.action
                );


                setStepTwoTitle(
                    selection.action
                );


                showStep(2);

            }
        );

    }


    /* =====================================================
       START OVER
    ===================================================== */

    if (startOver) {

        startOver.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                selection.action =
                    "";

                selection.property =
                    "";

                selection.area =
                    "";


                if (propertyOptions) {

                    propertyOptions.innerHTML =
                        "";

                }


                showStep(1);

            }
        );

    }




    /* =====================================================
       HOME / HERO NAVIGATION — EXPLICIT HANDLERS
       Keep these working even when the page is opened locally.
    ===================================================== */

    function goHome() {
        document.body.classList.remove("sevia-only-mode");
        selection.action = "";
        selection.property = "";
        selection.area = "";
        seviaLanguage = "en";
        seviaName = "";
        seviaPurpose = "";
        seviaChatStarted = false;

                seviaQualificationStep = 0;

        if (seviaPurposeChoices) {
            seviaPurposeChoices.style.display = "";
            seviaPurposeChoices
                .querySelectorAll(".sevia-shell-choice")
                .forEach(function(button) {
                    button.classList.remove("selected");
                });
        }

        const seviaContextCard =
            document.getElementById("seviaContextCard");

        if (seviaContextCard) {
            seviaContextCard.style.display = "";
        }

        if (seviaChatArea) {
            seviaChatArea.classList.remove("active");
            seviaChatArea.setAttribute("aria-hidden", "true");
        }

        if (seviaLocalResponse) {
            seviaLocalResponse.textContent = "";
            seviaLocalResponse.classList.remove("active");
        }

        if (propertyOptions) propertyOptions.innerHTML = "";
        if (seviaBridge) seviaBridge.classList.remove("active");
        if (seviaExperience) {
            seviaExperience.classList.remove("active");
            seviaExperience.setAttribute("aria-hidden", "true");
        }
        showStep(1);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    if (headerBrand) {
        headerBrand.addEventListener("click", function (event) {
            event.preventDefault();
            goHome();
        });
    }

    if (heroCta) {
        heroCta.addEventListener("click", function (event) {
            event.preventDefault();
            showStep(1);
            scrollToFinder();
        });
    }

    if (document.getElementById("finalCtaHome")) {
    document.getElementById("finalCtaHome").addEventListener("click", function (event) {
        event.preventDefault();
        goHome();
    });
}
    /* =====================================================
       HEADER — LET'S TALK
    ===================================================== */

    if (headerChat) {

        headerChat.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                const message =
                    `Hello PropertyPoint.id,

I would like to know more about your property services and opportunities.

Thank you.`;


                const url =
                    "https://wa.me/" +
                    WHATSAPP_NUMBER +
                    "?text=" +
                    encodeURIComponent(message);


                window.open(
                    url,
                    "_blank"
                );

            }
        );

    }


    /* =====================================================
       FOOTER NAVIGATION — CLOSE SEVIA BEFORE JUMPING
    ===================================================== */

    document.querySelectorAll(".footer-links a").forEach(function(link) {
        link.addEventListener("click", function(event) {
            const href = link.getAttribute("href") || "";
            if (href === "#top") {
                event.preventDefault();
                goHome();
            } else if (href === "#finder") {
                event.preventDefault();
                goHome();
                window.setTimeout(function() { scrollToFinder(); }, 50);
            } else if (href === "#join-us") {
                event.preventDefault();
                goHome();
                window.setTimeout(function() {
                    const target = document.getElementById("join-us");
                    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 50);
            }
        });
    });

    /* =====================================================
       INITIAL STATE
    ===================================================== */

    showStep(1);


    /* =====================================================
       DEBUG MESSAGE
    ===================================================== */

    console.log(
        "PropertyPoint.id — Property Finder loaded successfully."
    );

});

