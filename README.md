# Tenaye (ጤናዬ) | AI Health & Emergency Assistant

> **"Understand the problem. Assess the risk. Locate the person. Connect the right help."**
> 

Tenaye (ጤናዬ - *My Health*) is a multilingual, location-aware AI platform designed to bridge the critical gap between knowing and acting during health events and emergencies. The platform transforms unstructured voice or text reports into understandable guidance, risk-aware escalation pathways, nearby care discovery, and authorized emergency response dispatches.

---

**Key Features**

* **Amharic & English Voice Engine:** Native voice-first reporting with speech-to-text processing for local languages and typed fallbacks.


* **Risk-Aware AI Orchestration:** Combines LLM conversational capability with deterministic safety rules to extract structured details, ask focused follow-ups, and flag emergency warning signals.


* **Permission-Based Location Intelligence:** Utilizes browser/device GPS and geocoding services to locate nearby healthcare facilities and hospitals dynamically.


* **Structured Emergency Handoff:** Assembles name, contact info, situation summary, exact GPS coordinates, and urgency status into a unified report to eliminate repeated explanations across emergency channels.


* **Curated First-Aid Hub:** Visual, step-by-step first-aid guides for scenarios like burns, fractures, and stroke warning signs.


* **Community Health Analytics:** Aggregates anonymized trends to support public health monitoring, time-series alerts, and regional disaster relief visualization.



---

**System Architecture & Tech Stack**

| Layer | Technology | Key Functionality |
| --- | --- | --- |
| **Frontend** | HTML/CSS/JS (Prototype) / React/Next.js

 | Responsive UI, chat stream, mic capture, GPS permission, map views

 |
| **Backend API** | Python (FastAPI) / Node.js (Express)

 | Orchestration, AI prompt execution, user consent, hospital lookup routes

 |
| **AI / Speech** | Speech-to-Text API + LLM Service

 | Multilingual transcription (Amharic/English), structured JSON extraction, safety rule checks

 |
| **Location & Maps** | Browser Geolocation API + Geocoding Services

 | Coordinate retrieval, reverse geocoding, hospital directory querying

 |
| **Database** | PostgreSQL

 | Encrypted storage for users, consents, audit logs, and medical facility directories

 |
| **Communication** | SMS / Voice Provider APIs

 | User-authorized SMS/Call dispatch with delivery status tracking

 |

---

**Emergency Execution Flow**

1. **Voice/Text Report** – Capture natural speech or text in Amharic/English.


2. **Identify User** – Collect contact details and primary identity.


3. **Assess Risk & Flags** – Evaluate symptoms against deterministic safety rules.


4. **Request GPS & Locate Care** – Retrieve location with consent and find nearby hospitals.


5. **Package Report** – Assemble situation, coordinates, and urgency status into a unified report.


6. **Authorize Call/SMS** – Dispatch report through verified communication channels.



---

**Responsible AI & Safety Boundaries**

* **No Automated Unverified Dispatch:** The platform never claims to have dispatched emergency services automatically or provided a definitive medical diagnosis.


* **Explicit Consent First:** Geolocation access and emergency report dispatches require clear user permission.


* **Data Minimization & Auditing:** Collects only necessary data for care routing; logs consent and critical events for verification.
