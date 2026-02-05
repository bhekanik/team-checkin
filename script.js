// Check-in Questions Database
const questions = [
    // Culture & Background
    { text: "What's something unique about where you grew up that others might not know?", category: "culture" },
    { text: "What's a traditional dish from your country or region that everyone should try?", category: "culture" },
    { text: "What's a common misconception people have about your country or culture?", category: "culture" },
    { text: "What language(s) do you speak at home? How do you switch between them at work?", category: "culture" },
    { text: "What's a holiday or celebration from your culture that you wish everyone celebrated?", category: "culture" },
    { text: "How does your culture approach disagreement or conflict differently?", category: "culture" },
    { text: "What's something that surprised you about working with people from other cultures?", category: "culture" },
    { text: "What's a gesture or custom from your culture that might be misunderstood elsewhere?", category: "culture" },
    { text: "How do you typically greet people in your culture? Has that changed working remotely?", category: "culture" },
    { text: "What's a value from your upbringing that shapes how you work today?", category: "culture" },
    { text: "What was school like where you grew up? How did it shape your learning style?", category: "culture" },
    { text: "What's the most beautiful place in your home country that you'd recommend visiting?", category: "culture" },
    { text: "How does your culture view work-life balance differently?", category: "culture" },
    { text: "What's a phrase or saying from your language that doesn't translate well?", category: "culture" },
    { text: "What's considered polite or rude in your culture that might differ from others?", category: "culture" },
    { text: "How does hierarchy or authority work in your culture? How does that affect how you communicate at work?", category: "culture" },
    { text: "What's a childhood game or tradition from your country that you remember fondly?", category: "culture" },
    { text: "What's the biggest cultural adjustment you had to make working internationally?", category: "culture" },
    { text: "How do you prefer to receive feedback? Is that common in your culture?", category: "culture" },
    { text: "What's something about your city's culture that makes it special?", category: "culture" },
    { text: "How does your culture approach time and punctuality?", category: "culture" },
    { text: "What's a family tradition you still practice today?", category: "culture" },
    { text: "What's the most challenging part of communicating across cultures for you?", category: "culture" },
    { text: "What's a food or drink from your region that you're proud of?", category: "culture" },
    { text: "How do names work in your culture? What's the story behind your name?", category: "culture" },
    { text: "What's something you wish international colleagues understood better about your culture?", category: "culture" },
    { text: "How has your perspective changed from living in or working with different cultures?", category: "culture" },
    { text: "What's a typical weekend like where you're from?", category: "culture" },
    { text: "What's an assumption people make about your culture that you'd like to correct?", category: "culture" },
    { text: "How do you navigate cultural differences in communication styles on our team?", category: "culture" },
    { text: "What's a music, art, or cultural tradition from your background you'd like to share?", category: "culture" },
    { text: "How does your culture view direct vs. indirect communication?", category: "culture" },
    { text: "What was mealtime like in your family growing up?", category: "culture" },
    { text: "What's a cultural norm around meetings or decision-making in your background?", category: "culture" },
    { text: "What's something you do differently at home versus at work because of cultural reasons?", category: "culture" },
    { text: "What's a historical event from your country that shaped how people think today?", category: "culture" },
    { text: "How do you prefer to build trust with colleagues? Does that align with your cultural background?", category: "culture" },
    { text: "What's a small daily habit or ritual from your culture?", category: "culture" },
    { text: "What's the most interesting cultural difference you've noticed within our team?", category: "culture" },
    { text: "How does your culture handle apologies or making amends?", category: "culture" },

    // Icebreaker
    { text: "What's one thing you're looking forward to this week?", category: "icebreaker" },
    { text: "What's the best thing that happened to you since we last met?", category: "icebreaker" },
    { text: "If you could have any superpower for just one day, what would it be?", category: "icebreaker" },
    { text: "What's your favorite way to start the day?", category: "icebreaker" },
    { text: "What's one thing on your bucket list?", category: "icebreaker" },
    { text: "If you could instantly become an expert in something, what would it be?", category: "icebreaker" },
    { text: "What's a book, movie, or show you've enjoyed recently?", category: "icebreaker" },
    { text: "What's your go-to comfort food?", category: "icebreaker" },
    { text: "If you could travel anywhere in the world right now, where would you go?", category: "icebreaker" },
    { text: "What's a hobby or interest you have outside of work?", category: "icebreaker" },
    { text: "What's your favorite season and why?", category: "icebreaker" },
    { text: "Do you have any hidden talents?", category: "icebreaker" },
    { text: "What's your favorite way to relax after a long day?", category: "icebreaker" },
    { text: "If you could have dinner with anyone, living or dead, who would it be?", category: "icebreaker" },
    { text: "What's the last song you listened to?", category: "icebreaker" },

    // Team Building
    { text: "What's one thing you appreciate about someone on this team?", category: "team" },
    { text: "What's something you learned from a teammate recently?", category: "team" },
    { text: "What's one way we could improve how we work together?", category: "team" },
    { text: "Who on the team would you want as a trivia partner and why?", category: "team" },
    { text: "What's a moment when you felt proud to be part of this team?", category: "team" },
    { text: "What's something you admire about our team culture?", category: "team" },
    { text: "If our team had a mascot, what would it be?", category: "team" },
    { text: "What's one thing that makes you feel included here?", category: "team" },
    { text: "What's a strength of our team that we don't talk about enough?", category: "team" },
    { text: "What's your favorite memory with this team?", category: "team" },
    { text: "What's something you're grateful for about working here?", category: "team" },
    { text: "If we could have a team outing anywhere, where would you suggest?", category: "team" },
    { text: "What's one word that describes our team and why?", category: "team" },
    { text: "What's something you'd like to learn from someone on the team?", category: "team" },
    { text: "What's a small thing someone did that made a big difference for you?", category: "team" },

    // Personal
    { text: "What are you most grateful for right now?", category: "personal" },
    { text: "What's something you're proud of accomplishing recently?", category: "personal" },
    { text: "What's a challenge you're currently facing?", category: "personal" },
    { text: "What's something new you tried recently?", category: "personal" },
    { text: "What's a goal you're working toward?", category: "personal" },
    { text: "What's something that made you smile this week?", category: "personal" },
    { text: "What's one thing you'd like to do more of?", category: "personal" },
    { text: "What's a recent moment of joy you experienced?", category: "personal" },
    { text: "What's something you're curious about learning?", category: "personal" },
    { text: "What's a value that's important to you?", category: "personal" },
    { text: "What's something you're currently reading or watching?", category: "personal" },
    { text: "What's a small win you had recently?", category: "personal" },
    { text: "What's something that energizes you?", category: "personal" },
    { text: "What's a dream you're working toward?", category: "personal" },
    { text: "What's something you've changed your mind about recently?", category: "personal" },

    // Work
    { text: "What's one thing you're excited about at work?", category: "work" },
    { text: "What's a recent win you'd like to celebrate?", category: "work" },
    { text: "What's something you're currently struggling with at work?", category: "work" },
    { text: "What's one skill you'd like to develop professionally?", category: "work" },
    { text: "What's a project you're proud of?", category: "work" },
    { text: "What's one thing that would make your workday better?", category: "work" },
    { text: "What's the best piece of work advice you've received?", category: "work" },
    { text: "What's something you've learned at work recently?", category: "work" },
    { text: "What's a work ritual or routine that helps you?", category: "work" },
    { text: "What's one thing that motivates you in your work?", category: "work" },
    { text: "What's a challenge you overcame recently?", category: "work" },
    { text: "What's something you'd like to achieve this quarter?", category: "work" },
    { text: "What's your ideal work environment?", category: "work" },
    { text: "What's a tool or resource that's been helpful lately?", category: "work" },
    { text: "What's one thing you wish more people knew about your role?", category: "work" },

    // Fun
    { text: "What's your favorite joke or meme right now?", category: "fun" },
    { text: "If you were a flavor of ice cream, what would you be?", category: "fun" },
    { text: "What's the most unusual food you've ever tried?", category: "fun" },
    { text: "What's your guilty pleasure TV show or movie?", category: "fun" },
    { text: "If you were an animal, what would you be?", category: "fun" },
    { text: "What's a funny childhood memory?", category: "fun" },
    { text: "What's the worst haircut you've ever had?", category: "fun" },
    { text: "If you could only eat one cuisine for the rest of your life, what would it be?", category: "fun" },
    { text: "What's something silly that always makes you laugh?", category: "fun" },
    { text: "What's your most-used emoji and why?", category: "fun" },
    { text: "What's a game you loved playing as a kid?", category: "fun" },
    { text: "If you could have any fictional character as a best friend, who would it be?", category: "fun" },
    { text: "What's your favorite dad joke?", category: "fun" },
    { text: "What's the weirdest fact you know?", category: "fun" },
    { text: "If you were a pizza topping, what would you be?", category: "fun" },

    // Reflection
    { text: "What's something you've been thinking about lately?", category: "reflection" },
    { text: "What's a lesson you learned recently?", category: "reflection" },
    { text: "What's something that surprised you this week?", category: "reflection" },
    { text: "What's a belief or assumption you've questioned?", category: "reflection" },
    { text: "What's something you'd tell your younger self?", category: "reflection" },
    { text: "What's a moment that changed your perspective?", category: "reflection" },
    { text: "What's something you're still figuring out?", category: "reflection" },
    { text: "What's a mistake that taught you something valuable?", category: "reflection" },
    { text: "What's something you're holding onto that you should let go of?", category: "reflection" },
    { text: "What's a question you wish people asked you more often?", category: "reflection" },
    { text: "What's something you used to believe but don't anymore?", category: "reflection" },
    { text: "What's a moment you wish you could relive?", category: "reflection" },
    { text: "What's something that feels unfinished for you?", category: "reflection" },
    { text: "What's a risk you're glad you took?", category: "reflection" },
    { text: "What does success mean to you right now?", category: "reflection" },
];

// State
let currentIndex = 0;
let currentCategory = 'all';
let filteredQuestions = [...questions];
let doneQuestions = loadDoneQuestions();

// DOM Elements
const questionText = document.getElementById('questionText');
const categoryBadge = document.getElementById('categoryBadge');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const copyBtn = document.getElementById('copyBtn');
const copyIcon = copyBtn.querySelector('.icon-copy');
const checkIcon = copyBtn.querySelector('.icon-check');
const copyBtnText = copyBtn.querySelector('.btn-text');
const doneBtn = document.getElementById('doneBtn');
const doneBtnText = doneBtn.querySelector('.btn-text');
const cardInner = document.getElementById('cardInner');
const progressCount = document.getElementById('progressCount');
const resetBtn = document.getElementById('resetBtn');
const categoryPills = document.querySelectorAll('.category-pill');
const toast = document.getElementById('toast');

// Initialize
function init() {
    // Shuffle questions for initial random order
    shuffleQuestions();
    updateQuestion();
    setupEventListeners();
    updateProgressIndicator();
}

// Shuffle array using Fisher-Yates algorithm
function shuffleQuestions() {
    filteredQuestions = getFilteredQuestions();
    for (let i = filteredQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredQuestions[i], filteredQuestions[j]] = [filteredQuestions[j], filteredQuestions[i]];
    }
    currentIndex = 0;
}

// Get filtered questions based on category
function getFilteredQuestions() {
    if (currentCategory === 'all') {
        return [...questions];
    }
    return questions.filter(q => q.category === currentCategory);
}

// Get unique ID for a question
function getQuestionId(question) {
    return `${question.category}-${question.text.substring(0, 30)}`;
}

// Load done questions from localStorage
function loadDoneQuestions() {
    try {
        const saved = localStorage.getItem('checkin-done-questions');
        return saved ? JSON.parse(saved) : {};
    } catch (e) {
        return {};
    }
}

// Save done questions to localStorage
function saveDoneQuestions() {
    try {
        localStorage.setItem('checkin-done-questions', JSON.stringify(doneQuestions));
    } catch (e) {
        // Ignore storage errors
    }
}

// Check if current question is done
function isCurrentQuestionDone() {
    if (filteredQuestions.length === 0) return false;
    const question = filteredQuestions[currentIndex];
    const id = getQuestionId(question);
    return doneQuestions[id] === true;
}

// Toggle done state for current question
function toggleDone() {
    if (filteredQuestions.length === 0) return;
    
    const question = filteredQuestions[currentIndex];
    const id = getQuestionId(question);
    const isDone = doneQuestions[id];
    
    if (isDone) {
        delete doneQuestions[id];
    } else {
        doneQuestions[id] = true;
    }
    
    saveDoneQuestions();
    updateDoneButtonState();
    updateCardDoneState();
    updateProgressIndicator();
    
    // Show feedback
    if (!isDone) {
        showToast('Marked as done!');
    } else {
        showToast('Removed from done');
    }
}

// Update done button visual state
function updateDoneButtonState() {
    const isDone = isCurrentQuestionDone();
    if (isDone) {
        doneBtn.classList.add('is-done');
        doneBtnText.textContent = 'Done';
    } else {
        doneBtn.classList.remove('is-done');
        doneBtnText.textContent = 'Mark done';
    }
}

// Update card visual state
function updateCardDoneState() {
    const isDone = isCurrentQuestionDone();
    if (isDone) {
        cardInner.classList.add('is-done');
    } else {
        cardInner.classList.remove('is-done');
    }
}

// Update progress indicator
function updateProgressIndicator() {
    const total = Object.keys(doneQuestions).length;
    progressCount.textContent = `${total} done`;
}

// Reset all progress
function resetProgress() {
    if (totalDone() === 0) {
        showToast('No questions marked as done');
        return;
    }
    
    if (confirm('Reset all progress? This will unmark all questions.')) {
        doneQuestions = {};
        saveDoneQuestions();
        updateDoneButtonState();
        updateCardDoneState();
        updateProgressIndicator();
        showToast('Progress reset!');
    }
}

// Get total done count
function totalDone() {
    return Object.keys(doneQuestions).length;
}

// Update the displayed question
function updateQuestion(direction = null) {
    if (filteredQuestions.length === 0) return;
    
    const question = filteredQuestions[currentIndex];
    
    // Add animation class
    if (direction) {
        cardInner.classList.add(direction === 'next' ? 'animating-right' : 'animating-left');
        setTimeout(() => {
            cardInner.classList.remove('animating-right', 'animating-left');
        }, 400);
    }
    
    // Update content
    questionText.textContent = question.text;
    categoryBadge.textContent = question.category;
    categoryBadge.className = `category-badge ${question.category}`;
    
    // Update done state
    updateDoneButtonState();
    updateCardDoneState();
}

// Navigate to next question
function nextQuestion() {
    currentIndex = (currentIndex + 1) % filteredQuestions.length;
    updateQuestion('next');
}

// Navigate to previous question
function prevQuestion() {
    currentIndex = (currentIndex - 1 + filteredQuestions.length) % filteredQuestions.length;
    updateQuestion('prev');
}

// Copy question to clipboard
async function copyToClipboard() {
    const text = filteredQuestions[currentIndex].text;
    let copied = false;
    
    try {
        await navigator.clipboard.writeText(text);
        copied = true;
    } catch (err) {
        // Fallback for older browsers
        try {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.select();
            const successful = document.execCommand('copy');
            document.body.removeChild(textArea);
            copied = successful;
        } catch (e) {
            copied = false;
        }
    }
    
    if (copied) {
        showCopyFeedback();
    }
}

// Show copy button feedback
function showCopyFeedback() {
    // Clear any existing timeout
    if (copyBtn.resetTimeout) {
        clearTimeout(copyBtn.resetTimeout);
    }
    
    copyBtn.classList.add('copied');
    copyBtnText.textContent = 'Copied!';
    
    showToast('Copied to clipboard!');
    
    // Reset after 2 seconds
    copyBtn.resetTimeout = setTimeout(() => {
        copyBtn.classList.remove('copied');
        copyBtnText.textContent = 'Copy';
    }, 2000);
}

// Show toast notification
function showToast(message = 'Copied to clipboard!') {
    toast.textContent = message;
    toast.classList.add('show');
    
    // Clear existing timeout if any
    if (toast.hideTimeout) {
        clearTimeout(toast.hideTimeout);
    }
    
    toast.hideTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Filter by category
function filterByCategory(category) {
    currentCategory = category;
    
    // Update active pill
    categoryPills.forEach(pill => {
        pill.classList.toggle('active', pill.dataset.category === category);
    });
    
    // Shuffle and reset
    shuffleQuestions();
    updateQuestion();
}

// Setup event listeners
function setupEventListeners() {
    // Navigation buttons
    prevBtn.addEventListener('click', prevQuestion);
    nextBtn.addEventListener('click', nextQuestion);
    
    // Copy button
    copyBtn.addEventListener('click', copyToClipboard);
    
    // Done button
    doneBtn.addEventListener('click', toggleDone);
    
    // Reset button
    resetBtn.addEventListener('click', resetProgress);
    
    // Category pills
    categoryPills.forEach(pill => {
        pill.addEventListener('click', () => {
            filterByCategory(pill.dataset.category);
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevQuestion();
        } else if (e.key === 'ArrowRight') {
            nextQuestion();
        } else if (e.key === 'c' && (e.metaKey || e.ctrlKey)) {
            // Allow native copy
            return;
        } else if (e.key.toLowerCase() === 'c') {
            copyToClipboard();
        } else if (e.key.toLowerCase() === 'd') {
            toggleDone();
        }
    });
    
    // Swipe gestures for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    cardInner.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    cardInner.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextQuestion();
            } else {
                prevQuestion();
            }
        }
    }
}

// Start the app
init();
