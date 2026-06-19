Aditya Raj Singh — Portfolio

Personal portfolio site for Aditya Raj Singh — AI/ML Engineer and final-year B.Tech student (Electronics System Engineering, NIELIT Aurangabad, 2026).

Live site: https://sunny-sunburst-ddec37.netlify.app/


About

A single-page portfolio built around the idea of a data pipeline — fitting, since most of the featured projects are pipelines themselves (RAG retrieval, ANN forecasting, computer vision inference). Sections include work experience, projects with live animated stats, a technical stack overview, and contact details.


Tech stack

- HTML5 — semantic structure
- CSS3 — custom properties, grid/flexbox layouts, scroll-triggered animations
- Vanilla JavaScript — no frameworks or build step:
  - Typing-effect hero text
  - Scroll-based reveal animations (IntersectionObserver)
  - Animated stat counters
  - Mobile nav menu
  - Scroll progress indicator

No dependencies, no build process — just open index.html or deploy the folder as-is.


Project structure

index.html                    - Main page
style.css                     - All styling
script.js                     - All interactivity
Aditya.jpg                    - Profile photo
Aditya_Raj_Singh_Resume.pdf   - Downloadable résumé

Note: All file paths in index.html are relative and assume this flat structure. If you rename or move Aditya.jpg or the résumé PDF, update the matching reference in index.html to keep them in sync.


Running locally

No build tools needed. Either:

- Open index.html directly in a browser, or
- Serve it locally for the best experience:
  python3 -m http.server 8080
  Then visit http://localhost:8080


Deployment

Currently deployed on Netlify. To update the live site:

1. Make changes locally
2. Go to the Netlify dashboard, open this site, go to Deploys
3. Drag the updated project folder onto the deploy area

The site URL stays the same after every redeploy.


Sections

Hero — Name, role, résumé download, social links
Work — NIELIT Buxar internship, 5G/6G training
Projects — EduBot (RAG chatbot), IndustrIQ (energy forecasting), FaceLog (facial recognition attendance)
Stack — Languages, ML/DL, GenAI & LLMs, frameworks, databases, certifications
About — Background, focus areas, extracurriculars
Contact — Email, phone, LinkedIn, GitHub


Contact

Email: adityarajs061@gmail.com
LinkedIn: https://www.linkedin.com/in/adityarajsingh-nielit/
GitHub: https://github.com/aditya-raj-singh-619


Designed and built by Aditya Raj Singh.
