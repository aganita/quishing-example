// Modal functionality
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.getElementsByClassName('close')[0];

// Threat details data
const threatDetails = {
    'fake-sites': {
        title: 'QR Phishing to Fake Sites - Detailed Information',
        content: `
            <h3>How It Works</h3>
            <p>Attackers create QR codes that lead to convincing replicas of legitimate websites. These fake sites are designed to steal your login credentials, credit card information, or other sensitive data.</p>
            
            <h3>Common Examples</h3>
            <ul>
                <li><strong>Fake Microsoft 365 Login:</strong> QR codes claiming to give access to documents but lead to phishing pages</li>
                <li><strong>HR Portal Scams:</strong> Fake employee benefit or timesheet portals</li>
                <li><strong>Parking Payment Fraud:</strong> QR codes on fake parking signs directing to fraudulent payment sites</li>
                <li><strong>Restaurant Scams:</strong> Fake menu QR codes that lead to payment harvesting sites</li>
            </ul>
            
            <h3>Red Flags to Watch For</h3>
            <ul>
                <li>URLs that don't match the official domain (e.g., "mircosoft.com" instead of "microsoft.com")</li>
                <li>Poor grammar or spelling on the landing page</li>
                <li>Requests for unusual information (SSN, full credit card details for simple services)</li>
                <li>Lack of HTTPS or security certificates</li>
            </ul>
            
            <h3>Protection Tips</h3>
            <ul>
                <li>Always verify the domain name carefully before entering credentials</li>
                <li>Use password managers that won't auto-fill on fake domains</li>
                <li>Enable two-factor authentication on all accounts</li>
                <li>When in doubt, navigate to the site manually instead of using the QR code</li>
            </ul>
        `
    },
    'malware': {
        title: 'Malicious URL → Malware Download - Detailed Information',
        content: `
            <h3>The Threat Explained</h3>
            <p>Malicious QR codes can lead to websites that automatically download malware to your device or trick you into installing harmful applications.</p>
            
            <h3>Types of Malware Delivered</h3>
            <ul>
                <li><strong>Spyware:</strong> Monitors your activities, steals passwords, and tracks location</li>
                <li><strong>Ransomware:</strong> Encrypts your files and demands payment for recovery</li>
                <li><strong>Banking Trojans:</strong> Steals financial information and banking credentials</li>
                <li><strong>Cryptominers:</strong> Uses your device's resources to mine cryptocurrency</li>
            </ul>
            
            <h3>Attack Vectors</h3>
            <ul>
                <li>Drive-by downloads that exploit browser vulnerabilities</li>
                <li>Fake app stores with malicious applications</li>
                <li>PDF or document downloads containing embedded malware</li>
                <li>JavaScript-based attacks that execute in your browser</li>
            </ul>
            
            <h3>Prevention Strategies</h3>
            <ul>
                <li>Keep your device OS and apps updated with latest security patches</li>
                <li>Use reputable antivirus software on your mobile device</li>
                <li>Never install apps from unknown sources</li>
                <li>Be suspicious of QR codes that immediately prompt downloads</li>
                <li>Use QR scanners with built-in security checks</li>
            </ul>
        `
    },
    'payment-fraud': {
        title: 'Invoice and Payment Fraud - Detailed Information',
        content: `
            <h3>Understanding Payment QR Scams</h3>
            <p>Fraudsters use QR codes to redirect payments to their accounts while posing as legitimate businesses, charities, or services.</p>
            
            <h3>Common Scam Scenarios</h3>
            <ul>
                <li><strong>Fake Charity Campaigns:</strong> QR codes on posters for disaster relief or causes that don't exist</li>
                <li><strong>Parking Meter Fraud:</strong> Stickers placed on meters directing to scammer payment portals</li>
                <li><strong>Invoice Redirection:</strong> Modified invoices with QR codes pointing to attacker accounts</li>
                <li><strong>Event Ticket Scams:</strong> Fake QR codes for concert or event payments</li>
            </ul>
            
            <h3>How to Verify Legitimate Payments</h3>
            <ul>
                <li>Cross-reference the organization's official website</li>
                <li>Look for official payment processor logos and security indicators</li>
                <li>Verify charity registration numbers</li>
                <li>Check reviews and ratings of the business</li>
                <li>Contact the organization directly if suspicious</li>
            </ul>
            
            <h3>Safe Payment Practices</h3>
            <ul>
                <li>Use credit cards instead of debit cards for better fraud protection</li>
                <li>Save receipts and transaction confirmations</li>
                <li>Monitor bank statements regularly</li>
                <li>Report suspicious charges immediately</li>
                <li>Use payment apps with buyer protection features</li>
            </ul>
        `
    },
    'physical-replacement': {
        title: 'Physical Code Replacement/Overlay - Detailed Information',
        content: `
            <h3>The Physical Tampering Threat</h3>
            <p>Criminals print malicious QR codes on stickers and place them over legitimate codes in public spaces, redirecting unsuspecting users to fraudulent sites.</p>
            
            <h3>Common Target Locations</h3>
            <ul>
                <li><strong>Restaurants:</strong> Menu QR codes replaced with fake ordering systems</li>
                <li><strong>Public Transit:</strong> Schedule and payment QR codes tampered with</li>
                <li><strong>Tourist Attractions:</strong> Information kiosks with overlaid malicious codes</li>
                <li><strong>Retail Stores:</strong> Product information or discount QR codes replaced</li>
                <li><strong>Parking Areas:</strong> Payment instruction codes covered with fraudulent ones</li>
            </ul>
            
            <h3>How to Spot Tampered QR Codes</h3>
            <ul>
                <li>Look for stickers that seem poorly aligned or bubbled</li>
                <li>Check if edges are peeling or recently applied</li>
                <li>Notice if the QR code looks different from others nearby</li>
                <li>Be suspicious of handwritten QR code signs</li>
                <li>Feel the surface - legitimate codes are usually printed directly</li>
            </ul>
            
            <h3>Best Practices</h3>
            <ul>
                <li>When possible, type URLs manually instead of scanning</li>
                <li>Ask staff to verify QR codes in restaurants or stores</li>
                <li>Report suspicious QR codes to authorities or venue management</li>
                <li>Take a photo of suspicious codes for evidence</li>
                <li>Use official apps instead of QR codes when available</li>
            </ul>
        `
    }
};

// Learn More button functionality
document.querySelectorAll('.learn-more').forEach(button => {
    button.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        const details = threatDetails[target];
        
        if (details) {
            modalBody.innerHTML = `
                <h2>${details.title}</h2>
                ${details.content}
            `;
            modal.style.display = 'block';
        }
    });
});

// Close modal functionality
closeBtn.onclick = function() {
    modal.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Quiz functionality
const quizQuestions = [
    {
        question: "You see a QR code sticker on a parking meter. What should you do?",
        options: [
            "Scan it immediately to pay for parking",
            "Check if the sticker looks properly aligned and official before scanning",
            "Ignore it and find another parking spot",
            "Take a photo and post it on social media"
        ],
        correct: 1,
        feedback: "Always inspect QR codes for signs of tampering, especially on public infrastructure like parking meters."
    },
    {
        question: "A QR code in an email claims to be from your bank. What's the safest approach?",
        options: [
            "Scan it to see where it goes",
            "Delete the email immediately",
            "Log into your bank account directly through their official website or app",
            "Forward it to your friends to warn them"
        ],
        correct: 2,
        feedback: "Banks rarely use QR codes in emails. Always access your bank through official channels."
    },
    {
        question: "What's a red flag when a QR code opens a website?",
        options: [
            "The site uses HTTPS",
            "The URL matches the company name exactly",
            "The site asks for your password immediately without context",
            "The site has a privacy policy"
        ],
        correct: 2,
        feedback: "Legitimate sites provide context before asking for credentials. Be suspicious of immediate password requests."
    },
    {
        question: "You're at a restaurant and the menu QR code looks like it has a sticker over it. What should you do?",
        options: [
            "Scan it anyway - it's probably just worn out",
            "Ask the staff for a physical menu or verify the QR code",
            "Try to peel off the sticker",
            "Use your friend's phone to scan it"
        ],
        correct: 1,
        feedback: "When in doubt, verify with staff. They can confirm if the QR code is legitimate."
    },
    {
        question: "Which QR scanner feature helps protect against malicious codes?",
        options: [
            "Automatic flash",
            "URL preview before opening",
            "Code history",
            "Social sharing"
        ],
        correct: 1,
        feedback: "QR scanners that show the URL before opening it give you a chance to verify the destination."
    }
];

let currentQuestion = 0;
let score = 0;
let quizStarted = false;

const startQuizBtn = document.getElementById('start-quiz');
const quizContainer = document.getElementById('quiz-container');

startQuizBtn.addEventListener('click', startQuiz);

function startQuiz() {
    quizStarted = true;
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const question = quizQuestions[currentQuestion];
    
    quizContainer.innerHTML = `
        <div class="quiz-question">
            <h3>Question ${currentQuestion + 1} of ${quizQuestions.length}</h3>
            <p>${question.question}</p>
            <div class="quiz-options">
                ${question.options.map((option, index) => `
                    <div class="quiz-option" data-index="${index}">
                        ${option}
                    </div>
                `).join('')}
            </div>
            <button id="submit-answer" class="cta-button" style="display: none;">Submit Answer</button>
        </div>
    `;
    
    // Add click handlers to options
    const options = document.querySelectorAll('.quiz-option');
    const submitBtn = document.getElementById('submit-answer');
    let selectedAnswer = null;
    
    options.forEach(option => {
        option.addEventListener('click', function() {
            options.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            selectedAnswer = parseInt(this.getAttribute('data-index'));
            submitBtn.style.display = 'block';
        });
    });
    
    submitBtn.addEventListener('click', function() {
        checkAnswer(selectedAnswer);
    });
}

function checkAnswer(selectedIndex) {
    const question = quizQuestions[currentQuestion];
    const options = document.querySelectorAll('.quiz-option');
    const isCorrect = selectedIndex === question.correct;
    
    // Disable further selection
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // Show correct/incorrect styling
    options[selectedIndex].classList.add(isCorrect ? 'correct' : 'incorrect');
    if (!isCorrect) {
        options[question.correct].classList.add('correct');
    }
    
    // Update score
    if (isCorrect) {
        score++;
    }
    
    // Show feedback
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = `quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedbackDiv.innerHTML = `
        <p><strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</strong></p>
        <p>${question.feedback}</p>
    `;
    document.querySelector('.quiz-question').appendChild(feedbackDiv);
    
    // Update button for next question or results
    const submitBtn = document.getElementById('submit-answer');
    if (currentQuestion < quizQuestions.length - 1) {
        submitBtn.textContent = 'Next Question';
        submitBtn.onclick = function() {
            currentQuestion++;
            showQuestion();
        };
    } else {
        submitBtn.textContent = 'View Results';
        submitBtn.onclick = showResults;
    }
}

function showResults() {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    let message = '';
    
    if (percentage === 100) {
        message = "Perfect score! You're a QR security expert!";
    } else if (percentage >= 80) {
        message = "Great job! You have strong QR security awareness.";
    } else if (percentage >= 60) {
        message = "Good effort! Review the protection tips to improve your knowledge.";
    } else {
        message = "Keep learning! QR security is important for your digital safety.";
    }
    
    quizContainer.innerHTML = `
        <div class="quiz-question">
            <h3>Quiz Complete!</h3>
            <p style="font-size: 2rem; margin: 1rem 0;">Score: ${score}/${quizQuestions.length}</p>
            <p style="font-size: 1.5rem; margin: 1rem 0;">${percentage}%</p>
            <p>${message}</p>
            <button onclick="startQuiz()" class="cta-button">Retake Quiz</button>
        </div>
    `;
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and tips
document.querySelectorAll('.threat-card, .tip').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});