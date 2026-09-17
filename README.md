

# Tenaye (ጤናዬ) - Multilingual AI Health & Emergency Assistant

**Tagline:** Bridging the gap between a health crisis and immediate care with Voxide-powered voice intelligence, real-time hospital routing, and rapid emergency triage.

📋 **1. Project Overview**

Tenaye (ጤናዬ) is a bilingual (Amharic and English) health and emergency web application developed for the Stark Official Hackathon. Designed to eliminate critical delays during medical emergencies, Tenaye integrates voice-first symptom reporting via the Voxide processing engine, rapid emergency dialing, hospital geolocation, a comprehensive medical reference library, a globally persistent AI assistant widget accessible across all pages with a full-screen display mode, and an integrated **Scholarship/ScholarXiv search feature** directly accessible via the search bar for instant verified research.

🎯 **2. Problem Statement**

During medical emergencies or health crises in regions like Ethiopia:

* **Language & Literacy Barriers:** Complex medical terms and language gaps prevent users from quickly understanding symptoms or accessing instructions.
* **Panic & Information Overload:** During acute trauma or sudden illness, searching through lengthy text manuals causes fatal delays.
* **Hospital Location Friction:** Finding the nearest operational hospital or ambulance service often requires frantic, unorganized searching.
* **Connectivity & Real-Time Constraints:** Accessing accurate, structured health information swiftly under pressure is vital for saving lives.

💡 **3. Core Features & Architecture**

* **Navigation & Global AI Assistant**
* *Clean Multi-Page Navbar:* Structured navigation including Home, Emergency, Diseases, First Aid Help, Health Tips, About, and Contact.
* *Global Floating AI Chatbot Widget:* Available on every page via a persistent chat icon. Users can toggle a popup or expand it to full-screen mode for deep symptom analysis, hospital searching, and triage.


* **Integrated ScholarXiv Search Bar (New Feature)**
* *Direct Search Bar Integration:* Seamlessly queries the ScholarXiv API directly from the frontend interface.
* *Verified Research Bridge:* Instantly connects general symptom and medical queries to verified scholarly literature and research papers without requiring a complex backend setup.


* **Detailed Page Breakdown:**
* *Home / Landing Page:* Primary landing dashboard featuring high-impact hero sections and quick-access pathways.
* *Emergency and Ambulance Hub:* Geolocation-based hospital locator paired with an emergency quick-dial dashboard.
* *Disease Library Page:* Comprehensive repository detailing medical causes, symptoms, risk factors, and treatments.
* *First Aid Help Page:* Visual, step-by-step emergency care instructions.
* *Health Tip Page:* Daily wellness guidance, nutritional insights, and preventative care practices.
* *About Page:* Project mission, problem statement, and team overview.
* *Contact Page:* Support channels and feedback mechanisms.


* **Smart AI & Voice Engine (Chatbot)**
* *Voxide Voice and Text Intake:* Bilingual speech-to-text and voice command processing powered by Voxide, supplemented by traditional text input supporting both Amharic and English languages.
* *Multi-Purpose AI Chatbot:* Functions as an emergency hospital locator, symptom assessor, and first-aid assistant utilizing hybrid knowledge routing:
* *Local Database Match:* Instantly pulls structured summaries for known conditions and links directly to the Disease Library.
* *Gemini API Fallback:* Dynamically generates structured medical insights for less common queries.


* *Interactive First-Aid Hub:* Step-by-step visual instructional guides designed for acute accidents and high-stress medical situations.



🛠 **4. Technical Stack**

* **Techs:** React, TypeScript, Tailwind CSS
* **Search & Research Integration:** ScholarXiv API (Frontend fetch integration via search bar)
* **Voice Processing Engine:** Voxide (Amharic and English Speech-to-Text and Text-to-Speech)
* **Artificial Intelligence:** Gemini API and Local Medical Knowledge Base

👥 **5. Team Information**

* **Project Name:** Tenaye (ጤናዬ)
* **Team Members:** Yonatan Muluken, Nahom Tibebu, Dagmawi Shigute, and Ayub Ebrahim
* **Target Competition:** Stark Official Hackathon

---
