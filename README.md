# Tenaye (ጤናዬ) | AI Health & Emergency Assistant

> **"Understand the problem. Assess the risk. Locate the person. Connect the right help."**

Tenaye (ጤናዬ - *My Health*) is a multilingual, location-aware AI platform designed to bridge the critical gap between knowing and acting during health events and emergencies. The platform transforms unstructured voice or text reports into understandable guidance, risk-aware escalation pathways, nearby care discovery, and authorized emergency response dispatches.

---

## 🚀 Key Features

* **Amharic & English Voice Engine:** Native voice-first reporting with speech-to-text processing for local languages and typed fallbacks.
* **Risk-Aware AI Orchestration:** Combines LLM conversational capability with deterministic safety rules to extract structured details, ask focused follow-ups, and flag emergency warning signals.
* **Permission-Based Location Intelligence:** Utilizes the browser's Geolocation API and OpenStreetMap's Overpass API via Leaflet.js to dynamically locate and display nearby hospitals, complete with names, phone numbers, and coordinates on an interactive map.
* **Structured Emergency Handoff:** Assembles the user's name, contact info, situation summary, exact GPS coordinates, and urgency status into a unified report to eliminate repeated explanations across emergency channels.
* **Curated First-Aid Hub:** Visual, step-by-step first-aid guides for scenarios like burns, fractures, and stroke warning signs.
* **Health Tip Page:** Dedicated section providing daily, actionable wellness advice and preventative care guidance for users.
* **Disease Library Page:** Comprehensive reference repository detailing common illnesses, symptoms, prevention methods, and vital health information.
* **Community Health Analytics:** Aggregates anonymized trends to support public health monitoring, time-series alerts, and regional disaster relief visualization.

---

## 🛠️ System Architecture & Tech Layer

| Layer | Technology | Key Functionality |
| --- | --- | --- |
| **tech** | React.js, Tailwind CSS, TypeScript | Responsive user interfaces, chat streams, microphone capture, GPS permission triggers, and map views |
| **AI / Speech** | Speech-to-Text API + LLM Service | Multilingual transcription (Amharic/English), structured JSON extraction, safety rule checks |
| **Communication** | SMS / Voice Provider APIs | User-authorized SMS/Call dispatch with delivery status tracking |

---

## ⚡ Emergency Execution Flow

1. **Voice/Text Report** – Capture natural speech or text in Amharic or English.
2. **Identify User** – Collect contact details and primary identity information.
3. **Assess Risk & Flags** – Evaluate symptoms against deterministic safety rules and urgency criteria.
4. **Request GPS & Locate Care** – Retrieve location with user consent and surface nearby hospitals.
5. **Package Report** – Assemble situation summary, coordinates, and urgency status into a unified report.
6. **Authorize Call/SMS** – Dispatch the compiled report through verified communication channels.

---

## 🛡️ Responsible AI & Safety Boundaries

* **No Automated Unverified Dispatch:** The platform never claims to have dispatched emergency services automatically or provided a definitive medical diagnosis.
* **Explicit Consent First:** Geolocation access and emergency report dispatches require clear, explicit user permission.
* **Data Minimization & Auditing:** Collects strictly necessary data for care routing while logging consent and critical system events for verification.

---

## 👥 Team D.205

* **Team Members:** Yonathan Muluken, Nahom Tibebu, Dagmawi Shigute, Ayub Ebrahim
* **Mission:** Building responsible, multilingual, location-aware health technology for communities.
