function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function checkSoilHealth() {
    let ph = parseFloat(document.getElementById('ph-value').value);
    let result = "";
    let suggestion = "";
    if (ph < 6) {
        result = "आपकी मिट्टी अम्लीय है।";
        suggestion = "चूना या जैविक खाद मिलाएं।";
    } else if (ph >= 6 && ph <= 7.5) {
        result = "आपकी मिट्टी तटस्थ है, जो अधिकांश फसलों के लिए उपयुक्त है।";
        suggestion = "मिट्टी की सेहत बनाए रखें।";
    } else {
        result = "आपकी मिट्टी क्षारीय है।";
        suggestion = "सल्फर या जैविक मल्च का उपयोग करें।";
    }
    document.getElementById('result').innerText = result;
    document.getElementById('suggestion').innerText = suggestion;
}

function calculateFertilizer() {
    let landArea = document.getElementById("landArea").value;
    if (landArea > 0) {
        let fertilizerAmount = landArea * 50; // प्रति एकड़ 50 किग्रा उर्वरक का अनुमानित उपयोग
        document.getElementById("fertilizerResult").innerText = "अनुशंसित उर्वरक: " + fertilizerAmount + " किग्रा";
    } else {
        document.getElementById("fertilizerResult").innerText = "कृपया सही भूमि क्षेत्रफल दर्ज करें।";
    }
}

function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    let chatBox = document.getElementById("chat-box");

    // यूजर का मैसेज दिखाएं
    let userMessage = document.createElement("div");
    userMessage.className = "user-msg";
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    // जवाब देने का सिंपल सिस्टम (डेमो के लिए)
    let botReply = document.createElement("div");
    botReply.className = "bot-msg";

    if (userInput.includes("उर्वरक")) {
        botReply.textContent = "आपको जैविक उर्वरकों का उपयोग करना चाहिए।";
    } else if (userInput.includes("कीटनाशक")) {
        botReply.textContent = "कीटनाशकों का सीमित उपयोग करें, जैविक विकल्प बेहतर हैं।";
    } else {
        botReply.textContent = "मुझे क्षमा करें, मैं इस पर विशेषज्ञ से जानकारी प्राप्त करूँगा।";
    }

    setTimeout(() => {
        chatBox.appendChild(botReply);
        chatBox.scrollTop = chatBox.scrollHeight; 
    }, 1000);

    document.getElementById("user-input").value = "";
}

 