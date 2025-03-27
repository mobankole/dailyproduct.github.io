document.addEventListener('DOMContentLoaded', function () {
    const taskContainer = document.getElementById('task-container');
    const prevTaskBtn = document.getElementById('prev-task-btn');
    const nextTaskBtn = document.getElementById('next-task-btn');
    const searchInput = document.getElementById('search-input');
    const pmSection = document.getElementById('pm-section');
    const sdSection = document.getElementById('sd-section');
    const uxSection = document.getElementById('ux-section');
    const navLinks = document.querySelectorAll('.nav-link');

    const tasks = {
        pm: [
            "Create a product vision statement for a fitness app.",
        "Develop a 3-year product roadmap for an e-commerce platform.",
        "Outline a go-to-market strategy for a new social media app.",
        "Design a product strategy for entering a new geographic market.",
        "Create a competitive analysis for a video streaming service.",
        "Develop a value proposition for a niche dating app.",
        "Create a product differentiation strategy for a food delivery service.",
        "Design a customer segmentation strategy for a B2B SaaS product.",
        "Build a growth strategy for a subscription-based news app.",
        "Develop a monetization strategy for a free-to-play mobile game.",
        "Conduct a SWOT analysis for a leading fintech app.",
        "Create a user persona for a ride-sharing service.",
        "Design a survey to identify user pain points in online shopping.",
        "Conduct a competitor teardown of a popular project management tool.",
        "Create a market analysis report for a smart home product.",
        "Develop user research questions for a food tracking app.",
        "Analyze user reviews to identify common themes in a travel booking app.",
        "Design an empathy map for users of a mental health app.",
        "Create a job-to-be-done framework for a task management tool.",
        "Conduct a heuristic evaluation of a mobile banking app.",
        "Design a wireframe for a habit-tracking app.",
        "Create a simple PRD for a budgeting tool.",
        "Develop user stories for a loyalty program feature in a retail app.",
        "Design a mockup for a feature in a music streaming app.",
        "Create a feature prioritization matrix for a SaaS platform.",
        "Develop a prototype for a new social sharing feature in a photo app.",
        "Design a flowchart for a user onboarding process in a mobile app.",
        "Create a feature comparison table for top productivity apps.",
        "Write acceptance criteria for a new checkout process in an e-commerce app.",
        "Develop a product requirements document for a health tracking wearable.",
        "Create a launch plan for a new feature in a ride-hailing app.",
        "Design a landing page for a product beta release.",
        "Develop a messaging framework for a new product introduction.",
        "Create a content strategy for a product launch blog.",
        "Outline an email marketing campaign for a new app release.",
        "Design a user acquisition strategy for a mobile fitness app.",
        "Create a launch checklist for a SaaS product update.",
        "Develop an influencer marketing strategy for a niche lifestyle app.",
        "Design an A/B test plan for a new landing page.",
        "Create a timeline for a cross-platform product launch.",
        "Build a backlog for a team collaboration tool.",
        "Design a roadmap using a Gantt chart for a multi-phase project.",
        "Create a Kanban board for tracking product development tasks.",
        "Develop a sprint plan for a new feature in a web app.",
        "Design a RACI matrix for a product launch team.",
        "Create a burn-down chart to track progress in an agile sprint.",
        "Develop a capacity planning model for a product development team.",
        "Design a user journey map for a customer onboarding process.",
        "Create a risk management plan for a product launch.",
        "Develop a stakeholder communication plan for a product update.",
        "Prioritize features using the MoSCoW method for a project management tool.",
        "Create an OKR framework for a mobile banking app.",
        "Develop a feature roadmap for a travel planning app.",
        "Design a weighted scoring model for feature prioritization.",
        "Create a product roadmap using the Now-Next-Later framework.",
        "Prioritize features based on customer feedback for a SaaS tool.",
        "Develop a roadmap for a mobile app redesign.",
        "Create a roadmap for launching a series of educational courses.",
        "Design a roadmap for international expansion of an e-commerce platform.",
        "Prioritize new features based on business impact and technical feasibility.",
        "Design a user feedback loop for a mobile app.",
        "Create a journey map for a user trying to book a flight.",
        "Develop a user testing plan for a new website feature.",
        "Design a low-fidelity prototype for a personal finance app.",
        "Create wireframes for a new feature in a social media platform.",
        "Conduct a usability test for a mobile e-commerce app.",
        "Design an interactive prototype using a design tool like Figma.",
        "Create a user onboarding flow for a subscription service.",
        "Develop a series of A/B test scenarios for a product feature.",
        "Design a feedback form to capture user insights after a feature launch.",
        "Analyze user behavior data to identify a drop-off point in a signup flow.",
        "Create a dashboard to track key product metrics using a tool like Tableau.",
        "Develop a hypothesis for a product experiment based on user data.",
        "Analyze conversion rates to optimize a checkout process.",
        "Create a report on user engagement metrics for a mobile app.",
        "Develop a plan to improve user retention based on cohort analysis.",
        "Analyze customer churn data to identify at-risk users.",
        "Create a data-driven feature prioritization model.",
        "Develop a set of KPIs to track the success of a new feature.",
        "Analyze A/B test results to decide the best version of a feature.",
        "Perform a detailed teardown of the Airbnb app.",
        "Analyze the product strategy of Netflix.",
        "Conduct a teardown of Spotify's music discovery features.",
        "Analyze Uber's pricing strategy.",
        "Conduct a teardown of Amazon's recommendation engine.",
        "Analyze the user experience of the Duolingo app.",
        "Perform a competitive analysis of Slack vs. Microsoft Teams.",
        "Analyze the growth strategy of TikTok.",
        "Conduct a teardown of the Stripe payment platform.",
        "Analyze the product-market fit of Zoom during the pandemic.",
        "Design a feature to improve accessibility in a popular app.",
        "Create a customer feedback loop for continuous product improvement.",
        "Develop a plan to pivot a failing product to a new market.",
        "Create a strategy to increase user engagement in a dormant app.",
        "Develop a cross-functional collaboration plan for a large-scale project.",
        "Design a feature to enhance security in a fintech app.",
        "Create a localization plan for a global product launch.",
        "Develop a strategy to monetize a free tool or app.",
        "Create a contingency plan for a product launch delay.",
        "Design a sustainability strategy for a consumer electronics product."
    ],
        sd: [
            "Implement a login feature using Node.js and Express.",
        "Build a REST API for a book management system.",
        "Create a to-do list application using React.",
        "Develop a simple e-commerce website with shopping cart functionality.",
        "Implement a user authentication system with JWT.",
        "Create a blog platform using Django.",
        "Design a chat application using WebSockets.",
        "Build a weather forecast app using a third-party API.",
        "Create a CRUD application with Flask and SQLite.",
        "Develop a responsive portfolio website using HTML, CSS, and JavaScript.",
        "Implement a search functionality in a website using Elasticsearch.",
        "Build a movie recommendation system using collaborative filtering.",
        "Create a simple machine learning model to classify images using TensorFlow.js.",
        "Develop a mobile app with React Native for tracking fitness activities.",
        "Implement real-time notifications in a web app using Firebase.",
        "Create a RESTful API with Laravel and MySQL.",
        "Build a task management application using Angular.",
        "Design a system to manage user roles and permissions.",
        "Develop a real-time chat application using Node.js and Socket.io.",
        "Implement file upload and download functionality in a web app.",
        "Create a personal finance tracker using Vue.js.",
        "Build a dynamic quiz application with JavaScript and local storage.",
        "Implement OAuth 2.0 authentication for a web application.",
        "Create a web scraper using Python and BeautifulSoup.",
        "Develop a photo gallery website with image uploading and viewing.",
        "Build a currency converter application using vanilla JavaScript.",
        "Create a URL shortener service using Express and MongoDB.",
        "Implement pagination in a web application with React.",
        "Design a voting system for polls using Node.js.",
        "Develop a blog CMS with a WYSIWYG editor using Django.",
        "Create a mobile-first design for a restaurant website.",
        "Build an online code editor with syntax highlighting.",
        "Implement two-factor authentication in a web app.",
        "Create a real-time collaborative text editor using Firebase.",
        "Develop a job board website with search and filter functionality.",
        "Build a music player application with playlist support.",
        "Create an expense tracker with charts and graphs using Chart.js.",
        "Implement an email subscription feature with validation.",
        "Develop a forum website with post and comment functionalities.",
        "Create a booking system for appointments using PHP.",
        "Build a file sharing application with download links.",
        "Implement push notifications for a web application.",
        "Create a responsive photo album using CSS Grid and Flexbox.",
        "Develop a blogging platform with tag and category filtering.",
        "Implement social media sharing buttons on a blog.",
        "Create a multi-step form with validation using React.",
        "Build a task scheduler with calendar integration.",
        "Implement a chatbot using Node.js and NLP.js.",
        "Create a custom content management system (CMS).",
        "Develop an event management system with RSVP functionality.",
        "Build a movie search app using an external API.",
        "Implement a shopping list application with local storage.",
        "Create a feedback form with email notifications using PHP.",
        "Build a fitness tracking app with workout logs.",
        "Implement drag-and-drop functionality in a to-do list app.",
        "Create a markdown editor with live preview.",
        "Develop a recipe app with ingredient filtering.",
        "Build a video streaming service using Node.js.",
        "Implement role-based access control in a web app.",
        "Create a forum with thread and reply features using Django.",
        "Build a static site generator using JavaScript.",
        "Develop a URL shortener service with analytics.",
        "Implement a payment gateway integration for an e-commerce site.",
        "Create a personal budgeting tool with data visualization.",
        "Build a simple blogging platform with markdown support.",
        "Develop a live chat widget for websites using WebSockets.",
        "Implement a search autocomplete feature using JavaScript.",
        "Create a movie database with search and filter capabilities.",
        "Build a weather dashboard with API integration.",
        "Implement a responsive navbar with dropdown menus.",
        "Create a real-time voting app using Node.js and Express.",
        "Develop a recipe website with user-generated content.",
        "Build a subscription service with recurring payments.",
        "Implement geolocation-based search functionality.",
        "Create a knowledge base with articles and tags.",
        "Develop a personal portfolio website with project showcase.",
        "Build a simple task manager with React and Redux.",
        "Implement a user activity log in a web application.",
        "Create a blog with infinite scrolling using React.",
        "Develop a shopping cart system with product variations.",
        "Build an interactive map using Leaflet.js.",
        "Implement password reset functionality in a web app.",
        "Create a REST API for managing user profiles.",
        "Develop a blog with a commenting system using Django.",
        "Build a contact form with validation and email sending.",
        "Implement a responsive image gallery with lightbox.",
        "Create a file manager with drag-and-drop upload.",
        "Develop a user dashboard with data visualization.",
        "Build a survey application with multiple question types.",
        "Implement a real-time notification system using WebSockets.",
        "Create a booking system with calendar and time slots.",
        "Develop a mobile app with offline capabilities.",
        "Build a blogging platform with customizable themes.",
        "Implement data encryption for sensitive information in a web app.",
        "Create a task board with drag-and-drop functionality.",
        "Develop a forum with user roles and permissions.",
        "Build a social media profile page with posts and comments.",
        "Implement a recommendation system using collaborative filtering.",
        "Create a personal wiki with markdown support.",
        "Develop a code snippet manager with search functionality.",
        "Build an online store with product reviews and ratings.",
        "Implement multi-language support for a web application.",
        "Create a recipe book app with ingredient search."
    ],
        ux: [
        "Design a mobile app interface for a to-do list app.",
        "Create a user persona for an e-commerce website.",
        "Develop a wireframe for a landing page of a SaaS product.",
        "Design a user onboarding experience for a finance app.",
        "Create a responsive navigation menu for a website.",
        "Conduct a usability test for an existing mobile app and report findings.",
        "Design a checkout flow for an online store.",
        "Create a mood board for a travel website.",
        "Develop a high-fidelity prototype for a fitness app.",
        "Redesign the homepage of a popular blog site.",
        "Create an information architecture for a large e-commerce site.",
        "Design a mobile-first user interface for a restaurant app.",
        "Develop a style guide for a brand-new startup.",
        "Create an interactive prototype using Figma.",
        "Design a product detail page for an online marketplace.",
        "Create a user flow diagram for a social media app.",
        "Develop a color scheme for a healthcare app.",
        "Redesign a login page for improved accessibility.",
        "Create a wireframe for a portfolio website.",
        "Design a search results page with filtering options.",
        "Develop a UI kit for a design system.",
        "Create an onboarding flow for a subscription-based service.",
        "Design a dashboard for a data analytics tool.",
        "Create a responsive grid layout for a news website.",
        "Redesign an existing mobile app to improve user experience.",
        "Develop a user journey map for a travel booking site.",
        "Create a clickable prototype for a charity donation app.",
        "Design a feedback form with user-friendly input fields.",
        "Create a card-based layout for a blog.",
        "Design a dark mode version of an existing app.",
        "Develop a typography hierarchy for a content-heavy website.",
        "Create a mobile navigation pattern for a complex app.",
        "Design a custom icon set for a financial app.",
        "Create a sitemap for a large corporate website.",
        "Develop a landing page with a clear call to action.",
        "Redesign a sign-up flow to reduce friction.",
        "Create a UX case study for a recent project.",
        "Design a user profile page with customizable settings.",
        "Create a UI animation for a button hover effect.",
        "Develop a visual hierarchy for a mobile app.",
        "Create a low-fidelity wireframe for a multi-step form.",
        "Design a settings page for a web application.",
        "Create a responsive image gallery layout.",
        "Develop an empathy map for a target user group.",
        "Create a responsive table design for a data-heavy page.",
        "Design a subscription pricing page with tiered options.",
        "Create a customer journey map for an e-commerce site.",
        "Design a mobile app splash screen with animation.",
        "Create a search bar with advanced filtering options.",
        "Develop a high-fidelity wireframe for a blog homepage.",
        "Design a user-friendly 404 error page.",
        "Create a UI for a task management dashboard.",
        "Design an interactive map for a location-based service.",
        "Create a responsive form with validation states.",
        "Develop a visual style guide for a corporate website.",
        "Create a wireframe for a multi-column layout.",
        "Design a mobile app onboarding sequence.",
        "Create a carousel for featured products on an e-commerce site.",
        "Design a call-to-action button with various states.",
        "Develop a responsive card layout for a product listing.",
        "Create a hover effect for images in a portfolio site.",
        "Design a modal dialog for user feedback submission.",
        "Create a responsive layout for a product comparison page.",
        "Design a user dashboard with interactive charts.",
        "Create a flowchart for a user registration process.",
        "Develop a UI for a calendar scheduling app.",
        "Create a responsive footer design for a corporate website.",
        "Design a mobile app navigation drawer.",
        "Create a toggle switch component with different states.",
        "Develop a responsive hero section for a landing page.",
        "Create a hover effect for links in a navigation bar.",
        "Design a user-friendly settings page for a mobile app.",
        "Create a UI for a file upload feature.",
        "Design a checkout summary page with payment options.",
        "Create a responsive layout for a multi-page form.",
        "Design a contact page with an interactive map.",
        "Create a custom progress bar for a form completion.",
        "Develop a UI for a social media sharing widget.",
        "Create a responsive grid for displaying multiple products.",
        "Design a mobile app settings menu with nested options.",
        "Create a UI for a product review section.",
        "Design a responsive sidebar for a content-heavy website.",
        "Create a hover effect for buttons in a UI kit.",
        "Design a mobile app search bar with predictive text.",
        "Create a responsive layout for a pricing comparison table.",
        "Develop a UI for a customer support chat widget.",
        "Create a responsive layout for a blog article page.",
        "Design a mobile app login screen with social sign-in options.",
        "Create a responsive header with a search bar and logo.",
        "Design a product detail page with an image carousel.",
        "Create a hover effect for icons in a navigation bar.",
        "Design a UI for a user feedback form.",
        "Create a responsive layout for a multi-product showcase.",
        "Develop a UI for a newsletter subscription form.",
        "Create a custom checkbox and radio button style.",
        "Design a responsive layout for an event landing page.",
        "Create a responsive image slider for a portfolio site.",
        "Design a mobile app profile screen with customizable options."
    ]
    };

    let currentTasks = tasks.pm;
    let currentTaskIndex = 0;

    function loadTask(index) {
        taskContainer.textContent = currentTasks[index];
    }

    function filterTasks(query) {
        return currentTasks.filter(task => task.toLowerCase().includes(query.toLowerCase()));
    }

    function updateSectionTasks(newTasks) {
        currentTasks = newTasks;
        currentTaskIndex = 0;
        loadTask(currentTaskIndex);
    }

    pmSection.addEventListener('click', function () {
        updateSectionTasks(tasks.pm);
        setActiveLink(pmSection);
    });

    sdSection.addEventListener('click', function () {
        updateSectionTasks(tasks.sd);
        setActiveLink(sdSection);
    });

    uxSection.addEventListener('click', function () {
        updateSectionTasks(tasks.ux);
        setActiveLink(uxSection);
    });

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.trim();
        const filteredTasks = query === '' ? currentTasks : filterTasks(query);
        currentTaskIndex = 0;
        if (filteredTasks.length > 0) {
            loadTask(currentTaskIndex);
        } else {
            taskContainer.textContent = 'No tasks found';
        }
    });

    prevTaskBtn.addEventListener('click', function () {
        if (currentTaskIndex > 0) {
            currentTaskIndex--;
            loadTask(currentTaskIndex);
        }
    });

    nextTaskBtn.addEventListener('click', function () {
        if (currentTaskIndex < currentTasks.length - 1) {
            currentTaskIndex++;
            loadTask(currentTaskIndex);
        }
    });

    function setActiveLink(activeLink) {
        navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    }

    // Initialize the first task
    loadTask(currentTaskIndex);
});
