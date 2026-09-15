# AI Health & Emergency Assistant

> **"Understand the problem. Assess the risk. Locate the person. Connect the right help."**
> 

A multilingual, location-aware AI platform designed to bridge the critical gap between knowing and acting during medical emergencies. The platform transforms unstructured voice or text reports in English and Amharic into actionable guidance, risk-aware escalation pathways, nearby care discovery, and structured emergency handoffs.

---

## Key Features

* **Multilingual Voice & Text Input:** Native voice-first reporting with English and Amharic speech-to-text and typed fallbacks.


* **Risk-Aware AI Orchestration:** Combines LLM conversational capability with deterministic safety rules to extract structured details, ask focused follow-ups, and flag emergency warning signals.


* **Permission-Based Location Intelligence:** Utilizes browser/device GPS and geocoding services to locate nearby healthcare facilities and hospitals dynamically.


* **Structured Emergency Handoff:** Assembles name, contact info, situation summary, exact GPS coordinates, and urgency status into a unified report to eliminate repeated explanations across emergency channels.


* **Curated First-Aid Hub:** Visual, step-by-step first-aid guides for scenarios like burns, fractures, and stroke warning signs.


* **Community Health Analytics:** Aggregates anonymized trends to support public health monitoring, time-series alerts, and disaster relief visualization.



---

## System Architecture & Tech Stack

| Layer | Technology | Key Functionality |
| --- | --- | --- |
| **Frontend** | HTML/CSS/JS (Prototype) / React/Next.js

 | Responsive UI, chat stream, mic capture, GPS permission, map views

 |
| **Backend API** | Python (FastAPI) / Node.js (Express)

 | Orchestration, AI prompt execution, user consent, hospital lookup routes

 |
| **AI / Speech** | Speech-to-Text API + LLM Service

 | Multilingual transcription, structured JSON extraction, safety rule checks

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

## Emergency Execution Flow

```
[01. Voice/Text Report] ──> [02. Identify User] ──> [03. Assess Risk & Flags]
                                                            │
[06. Authorize Call/SMS] <── [05. Package Report] <── [04. Request GPS & Locate Care]
```[cite: 1]

---

## Responsible AI & Safety Boundaries

* **No Automated Unverified Dispatch:** The platform never claims to have dispatched emergency services automatically or provided a definitive medical diagnosis[cite: 1].
* **Explicit Consent First:** Geolocation access and emergency report dispatches require clear user permission[cite: 1].
* **Data Minimization & Auditing:** Collects only necessary data for care routing; logs consent and critical events for verification[cite: 1].

```
