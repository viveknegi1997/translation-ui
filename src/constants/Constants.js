export const APP_NAME = 'Manhua Point'


export const appStrings = {
    schoolName: "Manhua Point",
    notices: "Important Notices",
    principalsMessageLabel: "Board's Message",
    aboutUs: {
        aboutUs: "About Us",
        vision: "Core Values",
        mission: "Our mission",
        managedBy: "Managed By",
    },
    school: {
        school: "School",
        coScholasticActivities: "Co-Scholastic Activities",
        educationalProgram: "Educational Program",
        eLearning: "E-Learning",
        facilities: "Facilities",
    },
    contactUs: "Contact Us"
};


export const aboutUsData = {
    mainText:[
        appStrings.schoolName + " is a place for and created by manhua manhwa manga fans",
        "We will be posting reviews, content and episodes of various comics after scanning all material provided to us.",
        "Currently we haven't integrated Chat support, Please Join Discord for comic discussions.",
    ],
    quote: {
        text: "“haha lol”",
        by: "pappu"
    },
    schoolPhoto: "//cdn.pixabay.com/photo/2014/05/02/23/52/castle-336498_1280.jpg"
};

export const contactUsData = {
    mainText:[
        appStrings.schoolName + " available contacts",
        "You can contact us on manhuapoint@gmail.com.",
        "We are also available on Discord",
    ]
};

export const privacyPolicy = {
    mainText:[
        "we have enabled google addsense in website",
        "Google Adsense ads may be served by Google. Google cookie enables it to serve ads to Users based on their visit to our Site and other sites on the Internet. DART uses “non personally identifiable information” and does NOT track personal information about you, such as your name, email address, physical address, etc. You may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy at http://www.google.com/privacy_ads.html",
        "If you have any concerns please reach out to us",
    ]
};

export const comics = [
    {
        name: 'Demon Magic Emperor',
        photo: require('assets/img/demonmagic.png'),
        description: 'Chapter Reviews for comic',
        url: '#/dme'
    },
    {
        name: 'The King Of Bugs',
        photo: require('assets/img/bugsking.png'),
        description: 'Chapter Reviews for comic',
        url: '#/tkob'
    },
    {
        name: 'Act Wildly',
        photo: require('assets/img/act.png'),
        description: 'Chapter Reviews for comic',
        url: '#/aw'
    },
    {
        name: 'Father I Dont Want To Get Married',
        photo: require('assets/img/father.jpeg'),
        description: 'Chapter Reviews for comic',
        url: '#/fidwtm'
    },
    {
        name: 'Silent Lover',
        photo: require('assets/img/silent.png'),
        description: 'Chapter Reviews for comic',
        url: '#/sl'
    }
];


export const externalLinks = {
    facebook: "//www.facebook.com",
    twitter: "//www.twitter.com",
    instagram: "//www.instagram.com",
};


export const subdomains = {
    aboutUs: "/about-us",
    notices: "/notices",
    vision: "/vision",
    contactUs: "/contact-us",
    root: "/",
    components: "/components",
    managedBy: "/managed-by",
    facilities: "/facilities",
    profile: "/profile",
    login: "/login",
    icons: "/icons",
    educationalProgram: "/educational-program",
    coScholasticActivities: "/co-scholastic-activities",
    eLearning: "/e-learning",
};