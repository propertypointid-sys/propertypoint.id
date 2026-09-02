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

   const aiGate =
    document.getElementById("aiGate");

const aiYesButton =
    document.getElementById("aiYesButton");

const aiSkipButton =
    document.getElementById("aiSkipButton");
   
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

    const finder =
        document.getElementById("finder");

    /* =====================================================
       AI CONCIERGE
    ===================================================== */

    const aiConcierge =
        document.getElementById("aiConcierge");

    const aiContextProperty =
        document.getElementById("aiContextProperty");

    const aiContextArea =
        document.getElementById("aiContextArea");

    const aiLanguageButtons =
        document.querySelectorAll(
            ".ai-language-button"
        );

    const aiNameInput =
        document.getElementById("aiNameInput");

    const aiNameButton =
        document.getElementById("aiNameButton");

    const aiChatPreview =
        document.getElementById("aiChatPreview");

   const aiMessageText =
    document.getElementById("aiMessageText");

   /* =====================================================
   AI CONCIERGE — LANGUAGE & NAME
===================================================== */

let aiLanguage = "";

let aiName = "";


/* LANGUAGE SELECTION */

aiLanguageButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                aiLanguage =
                    this.dataset.language;


                aiLanguageButtons.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                this.classList.add(
                    "active"
                );
               if (aiChatPreview) {
               
                   aiChatPreview.classList.add(
                       "active"
                   );
               
               }
            }
        );

    }
);


/* NAME — CONTINUE */

if (aiNameButton) {

    aiNameButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            if (!aiLanguage) {

                alert(
                    "Please choose your preferred language first."
                );

                return;

            }


            aiName =
                aiNameInput.value.trim();


            if (!aiName) {

                alert(
                    "Please enter your name first."
                );

                return;

            }


            const greetings = {

                id:
                    `Hi ${aiName}! Let's find the right property for you. What matters most to you?`,

                en:
                    `Hi ${aiName}! Let's find the right property for you. What matters most to you?`,

                zh:
                    `你好，${aiName}！让我们一起找到适合你的房产。对你来说，什么最重要？`

            };


            aiMessageText.textContent =
                greetings[aiLanguage] ||
                greetings.en;


            aiChatPreview.classList.add(
                "active"
            );

        }
    );

}
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
      if (aiGate) {
          aiGate.classList.remove("active");
      }
        if (finderResult) {
            finderResult.classList.remove("active");
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

       if (step === 5 && aiGate) {
    aiGate.classList.add("active");
}

        scrollToFinder();

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

                    showStep(3);

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


                if (
    selection.action === "BUY" &&
    selection.property === "House" &&
    selection.area === "PIK"
) {

    showStep(5);

} else {

    showResult();

}

            }
        );

    }

   /* =====================================================
   AI GATE — PROTOTYPE ACTIONS
===================================================== */

/* =====================================================
   AI GATE — OPEN CONCIERGE
===================================================== */

if (aiYesButton) {

    aiYesButton.addEventListener(
        "click",
        function () {

            if (aiGate) {
                aiGate.classList.add("ai-started");
            }

            if (aiConcierge) {
                aiConcierge.classList.add("active");
            }

            if (aiContextProperty) {
                aiContextProperty.textContent =
                    selection.property || "House";
            }

            if (aiContextArea) {
                aiContextArea.textContent =
                    selection.area || "PIK";
            }

            if (aiChatPreview) {
                aiChatPreview.classList.remove("active");
            }

        }
    );

}


/* =====================================================
   AI LANGUAGE SELECTION
===================================================== */

if (aiLanguageButtons.length) {

    aiLanguageButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    aiLanguageButtons.forEach(
                        function (item) {

                            item.classList.remove(
                                "selected"
                            );

                        }
                    );


                    this.classList.add(
                        "selected"
                    );


                    const language =
                        this.dataset.language;


                    console.log(
                        "AI Language:",
                        language
                    );

                }
            );

        }
    );

}


/* =====================================================
   AI NAME
===================================================== */

if (aiNameButton) {

    aiNameButton.addEventListener(
        "click",
        function () {

            const name =
                aiNameInput
                    ? aiNameInput.value.trim()
                    : "";


            if (!name) {

                if (aiNameInput) {
                    aiNameInput.focus();
                }

                return;

            }


            if (aiChatPreview) {

                aiChatPreview.classList.add(
                    "active"
                );

            }


            console.log(
                "AI Client Name:",
                name
            );

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
