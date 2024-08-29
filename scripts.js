document.addEventListener('DOMContentLoaded', function () {
    const taskContainer = document.getElementById('task-container');
    const prevTaskBtn = document.getElementById('prev-task-btn');
    const nextTaskBtn = document.getElementById('next-task-btn');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    const tasks = [
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
    ];

    let currentTaskIndex = 0;

    function loadTask(index) {
        taskContainer.textContent = tasks[index];
    }

    prevTaskBtn.addEventListener('click', function () {
        if (currentTaskIndex > 0) {
            currentTaskIndex--;
            loadTask(currentTaskIndex);
        }
    });

    nextTaskBtn.addEventListener('click', function () {
        if (currentTaskIndex < tasks.length - 1) {
            currentTaskIndex++;
            loadTask(currentTaskIndex);
        }
    });

    searchBtn.addEventListener('click', function () {
        const query = searchInput.value.toLowerCase();
        filteredTasks = tasks.filter(task => task.toLowerCase().includes(query));
        currentTaskIndex = 0;
        if (filteredTasks.length > 0) {
            loadTask(currentTaskIndex);
        } else {
            taskContainer.textContent = 'No tasks found.';
        }
    });

    // Load the first task initially
    loadTask(currentTaskIndex);
});
