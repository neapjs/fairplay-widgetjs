# Table of Contents

> - [Where Am I Hosted?](#where-am-i-hosted)
> - [How To](#how-to)
> - [Annexes](#annexes)
> 	- [JobAdder - Neap Board Categories](#jobadder-neap-board-categories)

# Where Am I Hosted?

[https://unpkg.com/@neap/fairplay-widgetjs](https://unpkg.com/@neap/fairplay-widgetjs)

You can access that JS and the default CSS using a specific version as follow:
* [https://unpkg.com/@neap/fairplay-widgetjs@0.0.10/dist/fairplay.js](https://unpkg.com/@neap/fairplay-widgetjs@0.0.10/dist/fairplay.js)
* [https://unpkg.com/@neap/fairplay-widgetjs@0.0.10/dist/fairplay.min.js](https://unpkg.com/@neap/fairplay-widgetjs@0.0.10/dist/fairplay.min.js)
* [https://unpkg.com/@neap/fairplay-widgetjs@0.0.10/dist/fairplay.css](https://unpkg.com/@neap/fairplay-widgetjs@0.0.10/dist/fairplay.css)
* [https://unpkg.com/@neap/fairplay-widgetjs@0.0.10/dist/fairplay.min.css](https://unpkg.com/@neap/fairplay-widgetjs@0.0.10/dist/fairplay.min.css)

# How To
## How To Use Me

Simply run this:

```
npm run dev
```

This will host 2 versionof the widget:

__Dev__: [http://localhost:8080/dev](http://localhost:8080/dev)
__Prod__: [http://localhost:8080/prod](http://localhost:8080/prod)

 Prod uses the minified/uglified ES5 version of the code (to see how to compile that code, jump to the  section). 

## How To Compile The Code To ES5

Simply run:

```
npm run build
```

This will produce multiple artefacts under the __dist__ folder.

## How To Deploy A New Version

1. Make sure the code is linted properly: `npm run lint`
2. Build all the artefacts: `npm run build`
3. Commit your changes: `git cm 'your message'`
4. Get the current verison: `npm run v`
5. Bump to higher version: `npm run rls <the new version>`
6. Publish: `npm run push`

This will host the minified and unminified versions to [https://unpkg.com/@neap/fairplay-widgetjs](https://unpkg.com/@neap/fairplay-widgetjs).

You can access that JS and the default CSS using a specific version as follow:
* [https://unpkg.com/@neap/fairplay-widgetjs@0.0.10/dist/fairplay.js](https://unpkg.com/@neap/fairplay-widgetjs@0.0.10/dist/fairplay.js)
* [https://unpkg.com/@neap/fairplay-widgetjs@0.0.10/dist/fairplay.min.js](https://unpkg.com/@neap/fairplay-widgetjs@0.0.10/dist/fairplay.min.js)
* [https://unpkg.com/@neap/fairplay-widgetjs@0.0.10/dist/fairplay.css](https://unpkg.com/@neap/fairplay-widgetjs@0.0.10/dist/fairplay.css)
* [https://unpkg.com/@neap/fairplay-widgetjs@0.0.10/dist/fairplay.min.css](https://unpkg.com/@neap/fairplay-widgetjs@0.0.10/dist/fairplay.min.css)

# Annexes
## JobAdder - Neap Board Categories
### Professions

| ID 		| Name									|
|-----------|---------------------------------------|
| 1491152 | Accounting |
| 1491153 | Administration |
| 1491154 | Advert/Media/Comm/Ent & Design |
| 1491155 | Aged Care Jobs |
| 1491156 | Apprenticeships & Traineeships |
| 1491157 | Automotive |
| 1491158 | Aviation |
| 1491159 | Banking & Finance |
| 1491160 | Call Centre & Customer Service |
| 1491161 | Community & Sports |
| 1491162 | Community Jobs |
| 1491163 | Construction & Architecture |
| 1491164 | Consulting |
| 1491165 | Dentistry |
| 1491166 | Disability Jobs |
| 1491167 | Education & Training |
| 1491168 | Engineering |
| 1491169 | Executive |
| 1491170 | Government, Defence, Emergency |
| 1491171 | Graduate |
| 1491172 | Health |
| 1491173 | Hospitality, Tourism & Travel |
| 1491174 | HR & Recruitment |
| 1491175 | IT |
| 1491176 | Insurance & Superannuation |
| 1491177 | Legal |
| 1491178 | Library and Information |
| 1491179 | Manufacturing/Operations |
| 1491180 | Marketing |
| 1491181 | Mental Health jobs |
| 1491182 | Mining, Oil & Gas |
| 1491183 | Other |
| 1491184 | Primary Industry |
| 1491185 | Real Estate & Property |
| 1491186 | Records and Information Management |
| 1491187 | Records, Information and Archives |
| 1491188 | Retail & Fashion |
| 1491189 | Sales |
| 1491190 | Sales & Marketing |
| 1491191 | SAP Functional |
| 1491192 | SAP Management |
| 1491193 | SAP Other |
| 1491194 | SAP Sales Marketing |
| 1491195 | SAP Technical |
| 1491196 | SAP Training & Documentation |
| 1491197 | Science |
| 1491198 | Self Employment |
| 1491199 | Trades & Services |
| 1491200 | Transport, Shipping, Logistics |
| 1491201 | Volunteer |
| 1491202 | Wine |
| 1491203 | Social Care Jobs |

### Roles

| ID 		| Name									| Parent ID 	| Parent Name 					|
|-----------|---------------------------------------|---------------|-------------------------------|
| 1491204 | Accountant - Assistant/Graduate | 1491152 | Accounting |
| 1491205 | Accountant - Audit/Bus. Services | 1491152 | Accounting |
| 1491206 | Accountant - Chartered/CPA (General) | 1491152 | Accounting |
| 1491207 | Accountant - Cost | 1491152 | Accounting |
| 1491208 | Accountant - Financial | 1491152 | Accounting |
| 1491209 | Accountant - Insolvency | 1491152 | Accounting |
| 1491210 | Accountant - Other | 1491152 | Accounting |
| 1491211 | Accountant - Tax | 1491152 | Accounting |
| 1491212 | Accounts Clerk/Administration | 1491152 | Accounting |
| 1491213 | Accounts Payable | 1491152 | Accounting |
| 1491214 | Accounts Receivable | 1491152 | Accounting |
| 1491215 | Analyst | 1491152 | Accounting |
| 1491216 | Bookkeeper | 1491152 | Accounting |
| 1491217 | CFO/Finance Director | 1491152 | Accounting |
| 1491218 | Collections/Recovery | 1491152 | Accounting |
| 1491219 | Company Secretary | 1491152 | Accounting |
| 1491220 | Corporate Advisory & Forensic | 1491152 | Accounting |
| 1491221 | Credit | 1491152 | Accounting |
| 1491222 | Finance Manager | 1491152 | Accounting |
| 1491223 | Financial Controller | 1491152 | Accounting |
| 1491224 | Management Accountant | 1491152 | Accounting |
| 1491225 | Other | 1491152 | Accounting |
| 1491226 | Payroll | 1491152 | Accounting |
| 1491227 | Procurement & Inventory | 1491152 | Accounting |
| 1491228 | Superannuation/Fund Management | 1491152 | Accounting |
| 1491229 | Administration | 1491153 | Administration |
| 1491230 | Data Entry/WPO | 1491153 | Administration |
| 1491231 | Management | 1491153 | Administration |
| 1491232 | Office Manager | 1491153 | Administration |
| 1491233 | Office Support & Secretarial | 1491153 | Administration |
| 1491234 | Other | 1491153 | Administration |
| 1491235 | Personal/Executive Assistant | 1491153 | Administration |
| 1491236 | Reception | 1491153 | Administration |
| 1491237 | Account Management | 1491154 | Advert/Media/Comm/Ent & Design |
| 1491238 | Actor, Artist & Musician | 1491154 | Advert/Media/Comm/Ent & Design |
| 1491239 | Administration & Support | 1491154 | Advert/Media/Comm/Ent & Design |
| 1491240 | Choreographer, Dancer | 1491154 | Advert/Media/Comm/Ent & Design |
| 1491241 | Creative Roles | 1491154 | Advert/Media/Comm/Ent & Design |
| 1491242 | Design & Graphics | 1491154 | Advert/Media/Comm/Ent & Design |
| 1491243 | Film, Radio & TV | 1491154 | Advert/Media/Comm/Ent & Design |
| 1491244 | Media Buying, Booking, Traffic | 1491154 | Advert/Media/Comm/Ent & Design |
| 1491245 | Models & Promotions Staff | 1491154 | Advert/Media/Comm/Ent & Design |
| 1491246 | Other | 1491154 | Advert/Media/Comm/Ent & Design |
| 1491247 | Photography | 1491154 | Advert/Media/Comm/Ent & Design |
| 1491248 | Producers | 1491154 | Advert/Media/Comm/Ent & Design |
| 1491249 | Public Relations | 1491154 | Advert/Media/Comm/Ent & Design |
| 1491250 | Publishing | 1491154 | Advert/Media/Comm/Ent & Design |
| 1491251 | Reporter/Correspondent/Writer | 1491154 | Advert/Media/Comm/Ent & Design |
| 1491252 | Strategic Planning | 1491154 | Advert/Media/Comm/Ent & Design |
| 1491253 | Journalist | 1491154 | Advert/Media/Comm/Ent & Design |
| 1491254 | Accounting & Finance | 1491155 | Aged Care Jobs |
| 1491255 | Administration | 1491155 | Aged Care Jobs |
| 1491256 | Case Manager | 1491155 | Aged Care Jobs |
| 1491257 | Employment Consultant | 1491155 | Aged Care Jobs |
| 1491258 | Executive | 1491155 | Aged Care Jobs |
| 1491259 | Fundraising & Marketing | 1491155 | Aged Care Jobs |
| 1491260 | Health Professionals | 1491155 | Aged Care Jobs |
| 1491261 | Human Resources | 1491155 | Aged Care Jobs |
| 1491262 | Information Technology | 1491155 | Aged Care Jobs |
| 1491263 | Management | 1491155 | Aged Care Jobs |
| 1491264 | Professional Support Workers | 1491155 | Aged Care Jobs |
| 1491265 | Service Co-ordinators | 1491155 | Aged Care Jobs |
| 1491266 | Service Managers | 1491155 | Aged Care Jobs |
| 1491267 | Support Workers | 1491155 | Aged Care Jobs |
| 1491268 | Accounting, Financial Services | 1491156 | Apprenticeships & Traineeships |
| 1491269 | Agriculture & Horticulture | 1491156 | Apprenticeships & Traineeships |
| 1491270 | Auto/Transport/Distribution | 1491156 | Apprenticeships & Traineeships |
| 1491271 | Building & Construction | 1491156 | Apprenticeships & Traineeships |
| 1491272 | Community Services & Health | 1491156 | Apprenticeships & Traineeships |
| 1491273 | Engineering | 1491156 | Apprenticeships & Traineeships |
| 1491274 | Food, Hosp, Tourism & Travel | 1491156 | Apprenticeships & Traineeships |
| 1491275 | Government & Defence | 1491156 | Apprenticeships & Traineeships |
| 1491276 | Hairdressing | 1491156 | Apprenticeships & Traineeships |
| 1491277 | IT & Telecommunications | 1491156 | Apprenticeships & Traineeships |
| 1491278 | Manufacturing | 1491156 | Apprenticeships & Traineeships |
| 1491279 | Media, the Arts & Printing | 1491156 | Apprenticeships & Traineeships |
| 1491280 | Mining, Oil & Gas | 1491156 | Apprenticeships & Traineeships |
| 1491281 | Other | 1491156 | Apprenticeships & Traineeships |
| 1491282 | Property Services | 1491156 | Apprenticeships & Traineeships |
| 1491283 | Public Services | 1491156 | Apprenticeships & Traineeships |
| 1491284 | Retail | 1491156 | Apprenticeships & Traineeships |
| 1491285 | Sport & Recreation | 1491156 | Apprenticeships & Traineeships |
| 1491286 | Teaching, Childcare & Library | 1491156 | Apprenticeships & Traineeships |
| 1491287 | Utilities & Energy | 1491156 | Apprenticeships & Traineeships |
| 1491288 | Admin & Customer Service | 1491157 | Automotive |
| 1491289 | Drivers & Couriers | 1491157 | Automotive |
| 1491290 | Fleet, Finance & Insurance | 1491157 | Automotive |
| 1491291 | Management & Operations | 1491157 | Automotive |
| 1491292 | Manufacturing | 1491157 | Automotive |
| 1491293 | Marketing | 1491157 | Automotive |
| 1491294 | Other | 1491157 | Automotive |
| 1491295 | Retail & Dealership | 1491157 | Automotive |
| 1491296 | Sales & Account Management | 1491157 | Automotive |
| 1491297 | Service, Technical & Repair | 1491157 | Automotive |
| 1491298 | Trades | 1491157 | Automotive |
| 1491299 | Engineering | 1491158 | Aviation |
| 1491300 | Other | 1491158 | Aviation |
| 1491301 | Trades | 1491158 | Aviation |
| 1491302 | Actuaries | 1491159 | Banking & Finance |
| 1491303 | Administration & Support | 1491159 | Banking & Finance |
| 1491304 | Analyst | 1491159 | Banking & Finance |
| 1491305 | Banking & Branch Staff | 1491159 | Banking & Finance |
| 1491306 | Collections/Recovery | 1491159 | Banking & Finance |
| 1491307 | Compliance | 1491159 | Banking & Finance |
| 1491308 | Corp Finance & Invest. Banking | 1491159 | Banking & Finance |
| 1491309 | Credit Management | 1491159 | Banking & Finance |
| 1491310 | Customer Service/Call Centre | 1491159 | Banking & Finance |
| 1491311 | Financial Planning | 1491159 | Banking & Finance |
| 1491312 | Funds Management | 1491159 | Banking & Finance |
| 1491313 | Internal Audit | 1491159 | Banking & Finance |
| 1491314 | Management | 1491159 | Banking & Finance |
| 1491315 | Mortgage & Lending | 1491159 | Banking & Finance |
| 1491316 | Other | 1491159 | Banking & Finance |
| 1491317 | Risk Management | 1491159 | Banking & Finance |
| 1491318 | Settlements Officers | 1491159 | Banking & Finance |
| 1491319 | Stock Broking | 1491159 | Banking & Finance |
| 1491320 | Treasury | 1491159 | Banking & Finance |
| 1491321 | Analyst | 1491160 | Call Centre & Customer Service |
| 1491322 | Call Centre Operator | 1491160 | Call Centre & Customer Service |
| 1491323 | Customer Service | 1491160 | Call Centre & Customer Service |
| 1491324 | Operations & Management | 1491160 | Call Centre & Customer Service |
| 1491325 | Other | 1491160 | Call Centre & Customer Service |
| 1491326 | Supervisor/Team Leader | 1491160 | Call Centre & Customer Service |
| 1491327 | Technical Support & Help Desk | 1491160 | Call Centre & Customer Service |
| 1491328 | Telemarketing/Telesales | 1491160 | Call Centre & Customer Service |
| 1491329 | Trainer | 1491160 | Call Centre & Customer Service |
| 1491330 | Administration & Support | 1491161 | Community & Sports |
| 1491331 | Associations/Non-Profits | 1491161 | Community & Sports |
| 1491332 | Coaching & Instructing | 1491161 | Community & Sports |
| 1491333 | Community Services | 1491161 | Community & Sports |
| 1491334 | Fitness | 1491161 | Community & Sports |
| 1491335 | Fundraising | 1491161 | Community & Sports |
| 1491336 | Other | 1491161 | Community & Sports |
| 1491337 | Sales & Sponsorship | 1491161 | Community & Sports |
| 1491338 | Sports People | 1491161 | Community & Sports |
| 1491339 | Accounting & Finance | 1491162 | Community Jobs |
| 1491340 | Administration | 1491162 | Community Jobs |
| 1491341 | Case Manager | 1491162 | Community Jobs |
| 1491342 | Employment Consultant | 1491162 | Community Jobs |
| 1491343 | Executive | 1491162 | Community Jobs |
| 1491344 | Fundraising & Marketing | 1491162 | Community Jobs |
| 1491345 | Health Professionals | 1491162 | Community Jobs |
| 1491346 | Human Resources | 1491162 | Community Jobs |
| 1491347 | Information Technology | 1491162 | Community Jobs |
| 1491348 | Management | 1491162 | Community Jobs |
| 1491349 | Professional Support Workers | 1491162 | Community Jobs |
| 1491350 | Service Co-ordinators | 1491162 | Community Jobs |
| 1491351 | Service Managers | 1491162 | Community Jobs |
| 1491352 | Support Workers | 1491162 | Community Jobs |
| 1491353 | Architecture | 1491163 | Construction & Architecture |
| 1491354 | Contracts Administration | 1491163 | Construction & Architecture |
| 1491355 | Demolition, Excavation | 1491163 | Construction & Architecture |
| 1491356 | Design Manager | 1491163 | Construction & Architecture |
| 1491357 | Drafting/CAD | 1491163 | Construction & Architecture |
| 1491358 | Estimating | 1491163 | Construction & Architecture |
| 1491359 | Inspector | 1491163 | Construction & Architecture |
| 1491360 | Interior Design | 1491163 | Construction & Architecture |
| 1491361 | Labourer | 1491163 | Construction & Architecture |
| 1491362 | Landscape Architecture | 1491163 | Construction & Architecture |
| 1491363 | OH & S | 1491163 | Construction & Architecture |
| 1491364 | Other | 1491163 | Construction & Architecture |
| 1491365 | Planning | 1491163 | Construction & Architecture |
| 1491366 | Project Management | 1491163 | Construction & Architecture |
| 1491367 | Quant. Surveying/Cost Planning | 1491163 | Construction & Architecture |
| 1491368 | Site Mgmnt/Foreperson/Superv. | 1491163 | Construction & Architecture |
| 1491369 | Surveying | 1491163 | Construction & Architecture |
| 1491370 | Analyst | 1491164 | Consulting |
| 1491371 | Business Consulting | 1491164 | Consulting |
| 1491372 | HR | 1491164 | Consulting |
| 1491373 | IT | 1491164 | Consulting |
| 1491374 | OH & S | 1491164 | Consulting |
| 1491375 | Other | 1491164 | Consulting |
| 1491376 | Planning & Policy | 1491164 | Consulting |
| 1491377 | Project Management | 1491164 | Consulting |
| 1491378 | Risk | 1491164 | Consulting |
| 1491379 | Strategy | 1491164 | Consulting |
| 1491380 | Administration/Clerical Officer | 1491165 | Dentistry |
| 1491381 | Anaesthetist | 1491165 | Dentistry |
| 1491382 | Clinical Coordinator Dental Assistant | 1491165 | Dentistry |
| 1491383 | Cosmetic Dentist | 1491165 | Dentistry |
| 1491384 | Demonstrator/Lecturer | 1491165 | Dentistry |
| 1491385 | Dental Assistant | 1491165 | Dentistry |
| 1491386 | Dental Assistant Trainee | 1491165 | Dentistry |
| 1491387 | Dental Equipment Service Technician | 1491165 | Dentistry |
| 1491388 | Dental Hygienist | 1491165 | Dentistry |
| 1491389 | Dental Hygienist / Therapist | 1491165 | Dentistry |
| 1491390 | Dental Nurse | 1491165 | Dentistry |
| 1491391 | Dental Surgeon | 1491165 | Dentistry |
| 1491392 | Dental Technician | 1491165 | Dentistry |
| 1491393 | Dental Technician Trainee | 1491165 | Dentistry |
| 1491394 | Dental Therapist | 1491165 | Dentistry |
| 1491395 | Dentist | 1491165 | Dentistry |
| 1491396 | Endodontist | 1491165 | Dentistry |
| 1491397 | Forensic Dentist | 1491165 | Dentistry |
| 1491398 | Front Desk Coordinator / Receptionist | 1491165 | Dentistry |
| 1491399 | Geriatric Dentist | 1491165 | Dentistry |
| 1491400 | Health Promotion | 1491165 | Dentistry |
| 1491401 | Hygiene Coordinator Dental Assistant | 1491165 | Dentistry |
| 1491402 | Instrument Technician/Sterilization coordinator | 1491165 | Dentistry |
| 1491403 | Oral & Maxillofacial Surgeon | 1491165 | Dentistry |
| 1491404 | Oral Pathologist - Radiologist | 1491165 | Dentistry |
| 1491405 | Oral Surgeon | 1491165 | Dentistry |
| 1491406 | Orthodontist | 1491165 | Dentistry |
| 1491407 | Other | 1491165 | Dentistry |
| 1491408 | Pediatric Dentist - Pedodontist | 1491165 | Dentistry |
| 1491409 | Periodontist | 1491165 | Dentistry |
| 1491410 | Practice Manager | 1491165 | Dentistry |
| 1491411 | Prosthodontist | 1491165 | Dentistry |
| 1491412 | Sales Representatives | 1491165 | Dentistry |
| 1491413 | Accounting & Finance | 1491166 | Disability Jobs |
| 1491414 | Administration | 1491166 | Disability Jobs |
| 1491415 | Case Manager | 1491166 | Disability Jobs |
| 1491416 | Employment Consultant | 1491166 | Disability Jobs |
| 1491417 | Executive | 1491166 | Disability Jobs |
| 1491418 | Fundraising & Marketing | 1491166 | Disability Jobs |
| 1491419 | Health Professionals | 1491166 | Disability Jobs |
| 1491420 | Human Resources | 1491166 | Disability Jobs |
| 1491421 | Information Technology | 1491166 | Disability Jobs |
| 1491422 | Management | 1491166 | Disability Jobs |
| 1491423 | Professional Support Workers | 1491166 | Disability Jobs |
| 1491424 | Service Co-ordinators | 1491166 | Disability Jobs |
| 1491425 | Service Managers | 1491166 | Disability Jobs |
| 1491426 | Support Workers | 1491166 | Disability Jobs |
| 1491427 | Early Childhood - Childcare | 1491167 | Education & Training |
| 1491428 | Early Childhood - Kindergarten | 1491167 | Education & Training |
| 1491429 | Early Childhood - Other | 1491167 | Education & Training |
| 1491430 | Library Services | 1491167 | Education & Training |
| 1491431 | Other | 1491167 | Education & Training |
| 1491432 | Schools - Management & Administration | 1491167 | Education & Training |
| 1491433 | Schools - Other | 1491167 | Education & Training |
| 1491434 | Schools - Primary Teacher | 1491167 | Education & Training |
| 1491435 | Schools - Principal/Deputy | 1491167 | Education & Training |
| 1491436 | Schools - Secondary Teacher | 1491167 | Education & Training |
| 1491437 | Schools - Teacher's  Aide | 1491167 | Education & Training |
| 1491438 | Univeristy - Admin/Student Services | 1491167 | Education & Training |
| 1491439 | University - Lecturer/Senior Lecturer | 1491167 | Education & Training |
| 1491440 | University - Management | 1491167 | Education & Training |
| 1491441 | University - Other | 1491167 | Education & Training |
| 1491442 | University - Professor/Dean/Chair | 1491167 | Education & Training |
| 1491443 | University - Research | 1491167 | Education & Training |
| 1491444 | University - Tutor | 1491167 | Education & Training |
| 1491445 | VET - Other | 1491167 | Education & Training |
| 1491446 | VET - Teacher/Instructor | 1491167 | Education & Training |
| 1491447 | VET - Work Trainer/Assessor | 1491167 | Education & Training |
| 1491448 | Administration & Tech Support | 1491168 | Engineering |
| 1491449 | Aerospace | 1491168 | Engineering |
| 1491450 | Automotive | 1491168 | Engineering |
| 1491451 | Building Services | 1491168 | Engineering |
| 1491452 | Chemical & Process | 1491168 | Engineering |
| 1491453 | Civil | 1491168 | Engineering |
| 1491454 | Drafting/CAD | 1491168 | Engineering |
| 1491455 | Electrical & Electronics | 1491168 | Engineering |
| 1491456 | Engineer | 1491168 | Engineering |
| 1491457 | Environmental | 1491168 | Engineering |
| 1491458 | Highway | 1491168 | Engineering |
| 1491459 | HVAC | 1491168 | Engineering |
| 1491460 | Industrial | 1491168 | Engineering |
| 1491461 | IT & Telecommunications | 1491168 | Engineering |
| 1491462 | Maintenance | 1491168 | Engineering |
| 1491463 | Maintenance, Plant, Facilities | 1491168 | Engineering |
| 1491464 | Management | 1491168 | Engineering |
| 1491465 | Manufacturing | 1491168 | Engineering |
| 1491466 | Mapping & GIS | 1491168 | Engineering |
| 1491467 | Marine | 1491168 | Engineering |
| 1491468 | Mechanical | 1491168 | Engineering |
| 1491469 | Mining, Oil & Gas | 1491168 | Engineering |
| 1491470 | Other | 1491168 | Engineering |
| 1491471 | Piping | 1491168 | Engineering |
| 1491472 | Planning | 1491168 | Engineering |
| 1491473 | Project Management | 1491168 | Engineering |
| 1491474 | QA & QC | 1491168 | Engineering |
| 1491475 | Rail | 1491168 | Engineering |
| 1491476 | Safety Coordinator - Officer | 1491168 | Engineering |
| 1491477 | Sales | 1491168 | Engineering |
| 1491478 | Scientific | 1491168 | Engineering |
| 1491479 | Structural | 1491168 | Engineering |
| 1491480 | Supervisor | 1491168 | Engineering |
| 1491481 | Surveying | 1491168 | Engineering |
| 1491482 | Systems | 1491168 | Engineering |
| 1491483 | Water & Waste | 1491168 | Engineering |
| 1491484 | CEO/MD | 1491169 | Executive |
| 1491485 | CFO/Finance Director | 1491169 | Executive |
| 1491486 | CIO/CTO | 1491169 | Executive |
| 1491487 | Company Secretary | 1491169 | Executive |
| 1491488 | Consulting | 1491169 | Executive |
| 1491489 | Engineering | 1491169 | Executive |
| 1491490 | Financial Controller | 1491169 | Executive |
| 1491491 | General Manager <120K | 1491169 | Executive |
| 1491492 | General Manager >120K | 1491169 | Executive |
| 1491493 | HR Director & Senior Mgmnt | 1491169 | Executive |
| 1491494 | Marketing Director & Manager | 1491169 | Executive |
| 1491495 | Non Executive Director | 1491169 | Executive |
| 1491496 | Other | 1491169 | Executive |
| 1491497 | Partner: Law/Acctg/Consulting | 1491169 | Executive |
| 1491498 | Sales Director/Nat. Sales Mgr | 1491169 | Executive |
| 1491499 | Air Force | 1491170 | Government, Defence, Emergency |
| 1491500 | Army | 1491170 | Government, Defence, Emergency |
| 1491501 | Emergency Services | 1491170 | Government, Defence, Emergency |
| 1491502 | Government Federal | 1491170 | Government, Defence, Emergency |
| 1491503 | Government Local | 1491170 | Government, Defence, Emergency |
| 1491504 | Government State | 1491170 | Government, Defence, Emergency |
| 1491505 | Navy | 1491170 | Government, Defence, Emergency |
| 1491506 | Other | 1491170 | Government, Defence, Emergency |
| 1491507 | Police/Prison Workers | 1491170 | Government, Defence, Emergency |
| 1491508 | Policy Analyst/Advisor | 1491170 | Government, Defence, Emergency |
| 1491509 | Accounting | 1491171 | Graduate |
| 1491510 | Advertising, Media & Ent. | 1491171 | Graduate |
| 1491511 | Banking & Financial Services | 1491171 | Graduate |
| 1491512 | Community Welfare | 1491171 | Graduate |
| 1491513 | Construction & Architecture | 1491171 | Graduate |
| 1491514 | Education | 1491171 | Graduate |
| 1491515 | Engineering | 1491171 | Graduate |
| 1491516 | Government & Defence | 1491171 | Graduate |
| 1491517 | Healthcare | 1491171 | Graduate |
| 1491518 | Hospitality, Tourism & Travel | 1491171 | Graduate |
| 1491519 | HR & Recruitment | 1491171 | Graduate |
| 1491520 | Insurance & Superannuation | 1491171 | Graduate |
| 1491521 | IT & Telecommunications | 1491171 | Graduate |
| 1491522 | Legal | 1491171 | Graduate |
| 1491523 | Manufacturing | 1491171 | Graduate |
| 1491524 | Marketing | 1491171 | Graduate |
| 1491525 | Mining, Oil & Gas | 1491171 | Graduate |
| 1491526 | Other | 1491171 | Graduate |
| 1491527 | Primary Industry | 1491171 | Graduate |
| 1491528 | Real Estate & Property | 1491171 | Graduate |
| 1491529 | Retail | 1491171 | Graduate |
| 1491530 | Sales | 1491171 | Graduate |
| 1491531 | Science | 1491171 | Graduate |
| 1491532 | Trades & Services | 1491171 | Graduate |
| 1491533 | Transport, Shipping, Logistics | 1491171 | Graduate |
| 1491534 | Administration & Admissions | 1491172 | Health |
| 1491535 | Aged Care | 1491172 | Health |
| 1491536 | Allied | 1491172 | Health |
| 1491537 | Alternate Medicine | 1491172 | Health |
| 1491538 | Anesthesiology | 1491172 | Health |
| 1491539 | Basic Science | 1491172 | Health |
| 1491540 | Cardiology | 1491172 | Health |
| 1491541 | Carer | 1491172 | Health |
| 1491542 | Chiropractor | 1491172 | Health |
| 1491543 | Clinical & Medical Research | 1491172 | Health |
| 1491544 | Clinical Nurse Specialist | 1491172 | Health |
| 1491545 | Clinical Professional | 1491172 | Health |
| 1491546 | Community Care | 1491172 | Health |
| 1491547 | Dental | 1491172 | Health |
| 1491548 | Disabled Care | 1491172 | Health |
| 1491549 | Emergency | 1491172 | Health |
| 1491550 | Environmental Services | 1491172 | Health |
| 1491551 | Management | 1491172 | Health |
| 1491552 | Medical Specialist | 1491172 | Health |
| 1491553 | Medical/General Practitioner | 1491172 | Health |
| 1491554 | Mental Health | 1491172 | Health |
| 1491555 | Midwifery | 1491172 | Health |
| 1491556 | Nurse Practitioner | 1491172 | Health |
| 1491557 | Nursing: EN & Div 2 | 1491172 | Health |
| 1491558 | Nursing: PCA/EN & Div 2 | 1491172 | Health |
| 1491559 | Nursing: RN & Div 1 | 1491172 | Health |
| 1491560 | Other | 1491172 | Health |
| 1491561 | Pathology | 1491172 | Health |
| 1491562 | Pediatrics | 1491172 | Health |
| 1491563 | Pharmaceuticals | 1491172 | Health |
| 1491564 | Pharmacy | 1491172 | Health |
| 1491565 | Physiotherapy | 1491172 | Health |
| 1491566 | Primary Care | 1491172 | Health |
| 1491567 | Psychiatry | 1491172 | Health |
| 1491568 | Psychology/Counsel | 1491172 | Health |
| 1491569 | Public Health | 1491172 | Health |
| 1491570 | Radiology & Sonography | 1491172 | Health |
| 1491571 | Safety Inspector | 1491172 | Health |
| 1491572 | Sales | 1491172 | Health |
| 1491573 | Surgical Sub Specialist | 1491172 | Health |
| 1491574 | Veterinarian & Animal Welfare | 1491172 | Health |
| 1491575 | Airline | 1491173 | Hospitality, Tourism & Travel |
| 1491576 | Bar & Beverage Staff | 1491173 | Hospitality, Tourism & Travel |
| 1491577 | Barista | 1491173 | Hospitality, Tourism & Travel |
| 1491578 | Chefs & Cooks | 1491173 | Hospitality, Tourism & Travel |
| 1491579 | Christmas Casuals | 1491173 | Hospitality, Tourism & Travel |
| 1491580 | Event Management | 1491173 | Hospitality, Tourism & Travel |
| 1491581 | Fast Food, Kitch/Sandwich Hand | 1491173 | Hospitality, Tourism & Travel |
| 1491582 | Front/Back Office | 1491173 | Hospitality, Tourism & Travel |
| 1491583 | Gaming | 1491173 | Hospitality, Tourism & Travel |
| 1491584 | Housekeeping | 1491173 | Hospitality, Tourism & Travel |
| 1491585 | Management | 1491173 | Hospitality, Tourism & Travel |
| 1491586 | Marketing | 1491173 | Hospitality, Tourism & Travel |
| 1491587 | Other | 1491173 | Hospitality, Tourism & Travel |
| 1491588 | Product Management | 1491173 | Hospitality, Tourism & Travel |
| 1491589 | Sales | 1491173 | Hospitality, Tourism & Travel |
| 1491590 | Tour Operators & Guides | 1491173 | Hospitality, Tourism & Travel |
| 1491591 | Travel Agents | 1491173 | Hospitality, Tourism & Travel |
| 1491592 | Waiting Staff | 1491173 | Hospitality, Tourism & Travel |
| 1491593 | Administration & Support | 1491174 | HR & Recruitment |
| 1491594 | Change Management | 1491174 | HR & Recruitment |
| 1491595 | Compensation & Benefit | 1491174 | HR & Recruitment |
| 1491596 | Consulting: HR | 1491174 | HR & Recruitment |
| 1491597 | General HR | 1491174 | HR & Recruitment |
| 1491598 | HR Director & Senior Mgmnt | 1491174 | HR & Recruitment |
| 1491599 | HR General | 1491174 | HR & Recruitment |
| 1491600 | Industrial Relations | 1491174 | HR & Recruitment |
| 1491601 | Management | 1491174 | HR & Recruitment |
| 1491602 | OH & S | 1491174 | HR & Recruitment |
| 1491603 | Other | 1491174 | HR & Recruitment |
| 1491604 | Recruitment Consultant | 1491174 | HR & Recruitment |
| 1491605 | Recruitment Internal | 1491174 | HR & Recruitment |
| 1491606 | Sales/Business Development | 1491174 | HR & Recruitment |
| 1491607 | Training & Development | 1491174 | HR & Recruitment |
| 1491608 | Analyst/Programmer | 1491175 | IT |
| 1491609 | Architect | 1491175 | IT |
| 1491610 | Business Analyst | 1491175 | IT |
| 1491611 | Computer Operators | 1491175 | IT |
| 1491612 | Consultant/Funct. Consultant | 1491175 | IT |
| 1491613 | Consulting: IT | 1491175 | IT |
| 1491614 | Database Dev. & Admin | 1491175 | IT |
| 1491615 | Engineer - Hardware | 1491175 | IT |
| 1491616 | Engineer - Network | 1491175 | IT |
| 1491617 | Engineer - Software | 1491175 | IT |
| 1491618 | Helpdesk & Support | 1491175 | IT |
| 1491619 | Internet/Multimedia Design | 1491175 | IT |
| 1491620 | Internet/Multimedia Dev. | 1491175 | IT |
| 1491621 | Management | 1491175 | IT |
| 1491622 | Network & Systems | 1491175 | IT |
| 1491623 | Other | 1491175 | IT |
| 1491624 | Product Management | 1491175 | IT |
| 1491625 | Project Management | 1491175 | IT |
| 1491626 | QA, Testers | 1491175 | IT |
| 1491627 | Sales - Pre & Post | 1491175 | IT |
| 1491628 | Security | 1491175 | IT |
| 1491629 | Team Leaders | 1491175 | IT |
| 1491630 | Technical Writer | 1491175 | IT |
| 1491631 | Telecommunications | 1491175 | IT |
| 1491632 | Trainers | 1491175 | IT |
| 1491633 | Web Development/Design/Admin | 1491175 | IT |
| 1491634 | Actuaries | 1491176 | Insurance & Superannuation |
| 1491635 | Administration & Support | 1491176 | Insurance & Superannuation |
| 1491636 | Analyst | 1491176 | Insurance & Superannuation |
| 1491637 | Assessor | 1491176 | Insurance & Superannuation |
| 1491638 | Broking | 1491176 | Insurance & Superannuation |
| 1491639 | Claims | 1491176 | Insurance & Superannuation |
| 1491640 | Consultant: Risk | 1491176 | Insurance & Superannuation |
| 1491641 | Customer Service/Call Centre | 1491176 | Insurance & Superannuation |
| 1491642 | Financial Advisor | 1491176 | Insurance & Superannuation |
| 1491643 | Management | 1491176 | Insurance & Superannuation |
| 1491644 | Other | 1491176 | Insurance & Superannuation |
| 1491645 | Sales & Marketing | 1491176 | Insurance & Superannuation |
| 1491646 | Superannuation | 1491176 | Insurance & Superannuation |
| 1491647 | Underwriting | 1491176 | Insurance & Superannuation |
| 1491648 | Workers Compensation | 1491176 | Insurance & Superannuation |
| 1491649 | Building And Construction Law | 1491177 | Legal |
| 1491650 | Commercial Law | 1491177 | Legal |
| 1491651 | Conveyancing | 1491177 | Legal |
| 1491652 | Criminal | 1491177 | Legal |
| 1491653 | Family | 1491177 | Legal |
| 1491654 | Family Law | 1491177 | Legal |
| 1491655 | Immigration Law | 1491177 | Legal |
| 1491656 | Law Clerks/Paralegals | 1491177 | Legal |
| 1491657 | Legal Clerk | 1491177 | Legal |
| 1491658 | Legal Secretaries | 1491177 | Legal |
| 1491659 | Other | 1491177 | Legal |
| 1491660 | Patent Law | 1491177 | Legal |
| 1491661 | Personal Injury Law | 1491177 | Legal |
| 1491662 | Property Law | 1491177 | Legal |
| 1491663 | Solicitor | 1491177 | Legal |
| 1491664 | Solicitor: In House | 1491177 | Legal |
| 1491665 | Solicitor: Partners/Snr Assoc. | 1491177 | Legal |
| 1491666 | Solicitor: Private Practice | 1491177 | Legal |
| 1491667 | Solicitor: Public Practice | 1491177 | Legal |
| 1491668 | Tax Law | 1491177 | Legal |
| 1491669 | Trademark/Patent Attorney | 1491177 | Legal |
| 1491670 | Cataloguer | 1491178 | Library and Information |
| 1491671 | Consultant | 1491178 | Library and Information |
| 1491672 | Director/Manager | 1491178 | Library and Information |
| 1491673 | Executive Search Specialist | 1491178 | Library and Information |
| 1491674 | Librarian | 1491178 | Library and Information |
| 1491675 | Library Assistant | 1491178 | Library and Information |
| 1491676 | Library Assistant | 1491178 | Library and Information |
| 1491677 | Library Officer | 1491178 | Library and Information |
| 1491678 | Library Technician | 1491178 | Library and Information |
| 1491679 | Research Assistant | 1491178 | Library and Information |
| 1491680 | Researcher | 1491178 | Library and Information |
| 1491681 | Sales Manager | 1491178 | Library and Information |
| 1491682 | Shelver | 1491178 | Library and Information |
| 1491683 | Teacher Librarian | 1491178 | Library and Information |
| 1491684 | Assembly Line | 1491179 | Manufacturing/Operations |
| 1491685 | Fitters & Machinists | 1491179 | Manufacturing/Operations |
| 1491686 | Industrial Design | 1491179 | Manufacturing/Operations |
| 1491687 | Machine Operators | 1491179 | Manufacturing/Operations |
| 1491688 | Manufacturing Management | 1491179 | Manufacturing/Operations |
| 1491689 | Marketing | 1491179 | Manufacturing/Operations |
| 1491690 | Other | 1491179 | Manufacturing/Operations |
| 1491691 | Packers & Fillers | 1491179 | Manufacturing/Operations |
| 1491692 | Planning & Scheduling | 1491179 | Manufacturing/Operations |
| 1491693 | Process Worker | 1491179 | Manufacturing/Operations |
| 1491694 | Product Management & Dev | 1491179 | Manufacturing/Operations |
| 1491695 | Purchasing | 1491179 | Manufacturing/Operations |
| 1491696 | QA & QC | 1491179 | Manufacturing/Operations |
| 1491697 | Sales | 1491179 | Manufacturing/Operations |
| 1491698 | Store person & Warehousing | 1491179 | Manufacturing/Operations |
| 1491699 | Supervisor | 1491179 | Manufacturing/Operations |
| 1491700 | Toolmaker | 1491179 | Manufacturing/Operations |
| 1491701 | Analyst | 1491180 | Marketing |
| 1491702 | Brand Manager | 1491180 | Marketing |
| 1491703 | Communications | 1491180 | Marketing |
| 1491704 | Coordinator & Support | 1491180 | Marketing |
| 1491705 | Direct Marketing | 1491180 | Marketing |
| 1491706 | e Marketing | 1491180 | Marketing |
| 1491707 | Market Research | 1491180 | Marketing |
| 1491708 | Marketing Manager/Director | 1491180 | Marketing |
| 1491709 | Network Marketing | 1491180 | Marketing |
| 1491710 | Other | 1491180 | Marketing |
| 1491711 | Product Management/Development | 1491180 | Marketing |
| 1491712 | Public Relations | 1491180 | Marketing |
| 1491713 | Strategic Marketing | 1491180 | Marketing |
| 1491714 | Telemarketing | 1491180 | Marketing |
| 1491715 | Trade Marketing | 1491180 | Marketing |
| 1491716 | Accounting & Finance | 1491181 | Mental Health jobs |
| 1491717 | Administration | 1491181 | Mental Health jobs |
| 1491718 | Case Manager | 1491181 | Mental Health jobs |
| 1491719 | Employment Consultant | 1491181 | Mental Health jobs |
| 1491720 | Executive | 1491181 | Mental Health jobs |
| 1491721 | Fundraising & Marketing | 1491181 | Mental Health jobs |
| 1491722 | Health Professionals | 1491181 | Mental Health jobs |
| 1491723 | Human Resources | 1491181 | Mental Health jobs |
| 1491724 | Information Technology | 1491181 | Mental Health jobs |
| 1491725 | Management | 1491181 | Mental Health jobs |
| 1491726 | Professional Support Workers | 1491181 | Mental Health jobs |
| 1491727 | Service Co-ordinators | 1491181 | Mental Health jobs |
| 1491728 | Service Managers | 1491181 | Mental Health jobs |
| 1491729 | Support Workers | 1491181 | Mental Health jobs |
| 1491730 | Business Services | 1491182 | Mining, Oil & Gas |
| 1491731 | Drilling | 1491182 | Mining, Oil & Gas |
| 1491732 | Environ./Health & Safety | 1491182 | Mining, Oil & Gas |
| 1491733 | Environmental, OH & S | 1491182 | Mining, Oil & Gas |
| 1491734 | Exploration | 1491182 | Mining, Oil & Gas |
| 1491735 | Geoscience | 1491182 | Mining, Oil & Gas |
| 1491736 | Geosciences | 1491182 | Mining, Oil & Gas |
| 1491737 | Maintenance | 1491182 | Mining, Oil & Gas |
| 1491738 | Management | 1491182 | Mining, Oil & Gas |
| 1491739 | Mining - Eng. & Maintenance | 1491182 | Mining, Oil & Gas |
| 1491740 | Mining - Mineral Processing | 1491182 | Mining, Oil & Gas |
| 1491741 | Mining - Production | 1491182 | Mining, Oil & Gas |
| 1491742 | Mining: Open Cut | 1491182 | Mining, Oil & Gas |
| 1491743 | Mining: Underground | 1491182 | Mining, Oil & Gas |
| 1491744 | Oil & Gas - Eng. & Maintenance | 1491182 | Mining, Oil & Gas |
| 1491745 | Oil & Gas - Exploration | 1491182 | Mining, Oil & Gas |
| 1491746 | Oil & Gas - Maintenance | 1491182 | Mining, Oil & Gas |
| 1491747 | Oil & Gas - Production | 1491182 | Mining, Oil & Gas |
| 1491748 | Operations | 1491182 | Mining, Oil & Gas |
| 1491749 | Other | 1491182 | Mining, Oil & Gas |
| 1491750 | Processing | 1491182 | Mining, Oil & Gas |
| 1491751 | Production | 1491182 | Mining, Oil & Gas |
| 1491752 | Project Management | 1491182 | Mining, Oil & Gas |
| 1491753 | Other | 1491183 | Other |
| 1491754 | Agriculture & Farming | 1491184 | Primary Industry |
| 1491755 | Environ. & Natural Resources | 1491184 | Primary Industry |
| 1491756 | Fishing & Aquaculture | 1491184 | Primary Industry |
| 1491757 | Forestry | 1491184 | Primary Industry |
| 1491758 | Horticulture | 1491184 | Primary Industry |
| 1491759 | Other | 1491184 | Primary Industry |
| 1491760 | Services/Consultancy | 1491184 | Primary Industry |
| 1491761 | Winery/Viticulture | 1491184 | Primary Industry |
| 1491762 | Administration & Support | 1491185 | Real Estate & Property |
| 1491763 | Analyst | 1491185 | Real Estate & Property |
| 1491764 | Leasing | 1491185 | Real Estate & Property |
| 1491765 | Maintenance | 1491185 | Real Estate & Property |
| 1491766 | Management | 1491185 | Real Estate & Property |
| 1491767 | Other | 1491185 | Real Estate & Property |
| 1491768 | Property Mgmnt & Development | 1491185 | Real Estate & Property |
| 1491769 | Sales | 1491185 | Real Estate & Property |
| 1491770 | Valuation | 1491185 | Real Estate & Property |
| 1491771 | Information Management | 1491186 | Records and Information Management |
| 1491772 | Knowledge Management | 1491186 | Records and Information Management |
| 1491773 | Libraries | 1491186 | Records and Information Management |
| 1491774 | Record Management and Archives | 1491186 | Records and Information Management |
| 1491775 | Vendor and Suppliers | 1491186 | Records and Information Management |
| 1491776 | Archives Assistant | 1491187 | Records, Information and Archives |
| 1491777 | Archivist | 1491187 | Records, Information and Archives |
| 1491778 | Assistant | 1491187 | Records, Information and Archives |
| 1491779 | Business Analyst | 1491187 | Records, Information and Archives |
| 1491780 | Coordinator | 1491187 | Records, Information and Archives |
| 1491781 | Director | 1491187 | Records, Information and Archives |
| 1491782 | Mailroom Assistant | 1491187 | Records, Information and Archives |
| 1491783 | Mailroom Clerk | 1491187 | Records, Information and Archives |
| 1491784 | Manager | 1491187 | Records, Information and Archives |
| 1491785 | Project Manager | 1491187 | Records, Information and Archives |
| 1491786 | Records Officer | 1491187 | Records, Information and Archives |
| 1491787 | Scanning Assistant | 1491187 | Records, Information and Archives |
| 1491788 | Scanning Officer | 1491187 | Records, Information and Archives |
| 1491789 | Sentencing Officer | 1491187 | Records, Information and Archives |
| 1491790 | Systems Administrator | 1491187 | Records, Information and Archives |
| 1491791 | Assistant Manager | 1491188 | Retail & Fashion |
| 1491792 | Buying | 1491188 | Retail & Fashion |
| 1491793 | Christmas Casuals | 1491188 | Retail & Fashion |
| 1491794 | Designers | 1491188 | Retail & Fashion |
| 1491795 | Franchise | 1491188 | Retail & Fashion |
| 1491796 | Loss Prevention | 1491188 | Retail & Fashion |
| 1491797 | Management | 1491188 | Retail & Fashion |
| 1491798 | Marketing | 1491188 | Retail & Fashion |
| 1491799 | Merchandising | 1491188 | Retail & Fashion |
| 1491800 | Models & Promotions Staff | 1491188 | Retail & Fashion |
| 1491801 | Other | 1491188 | Retail & Fashion |
| 1491802 | Product Dev, Planning & Mgmt | 1491188 | Retail & Fashion |
| 1491803 | Sales Assistant | 1491188 | Retail & Fashion |
| 1491804 | Sales/Business Development | 1491188 | Retail & Fashion |
| 1491805 | Store Manager | 1491188 | Retail & Fashion |
| 1491806 | Account Management | 1491189 | Sales |
| 1491807 | Analyst | 1491189 | Sales |
| 1491808 | Business Development Manager | 1491189 | Sales |
| 1491809 | Christmas Casuals | 1491189 | Sales |
| 1491810 | Coordinator & Support | 1491189 | Sales |
| 1491811 | Other | 1491189 | Sales |
| 1491812 | Sales Director/Nat. Sales Mgr | 1491189 | Sales |
| 1491813 | Sales Exec/Representative | 1491189 | Sales |
| 1491814 | Sales Manager | 1491189 | Sales |
| 1491815 | Telesales | 1491189 | Sales |
| 1491816 | Account Management | 1491190 | Sales & Marketing |
| 1491817 | Analyst | 1491190 | Sales & Marketing |
| 1491818 | Business Development Manager | 1491190 | Sales & Marketing |
| 1491819 | Christmas Casuals | 1491190 | Sales & Marketing |
| 1491820 | Coordinator & Support | 1491190 | Sales & Marketing |
| 1491821 | Other | 1491190 | Sales & Marketing |
| 1491822 | Sales Director/Nat. Sales Mgr | 1491190 | Sales & Marketing |
| 1491823 | Sales Exec/Representative | 1491190 | Sales & Marketing |
| 1491824 | Sales Manager | 1491190 | Sales & Marketing |
| 1491825 | Telesales | 1491190 | Sales & Marketing |
| 1491826 | Business Intelligence | 1491191 | SAP Functional |
| 1491827 | Core Banking | 1491191 | SAP Functional |
| 1491828 | Customer Relationship Management | 1491191 | SAP Functional |
| 1491829 | Financials | 1491191 | SAP Functional |
| 1491830 | Global Trade Management | 1491191 | SAP Functional |
| 1491831 | Global Trade Services | 1491191 | SAP Functional |
| 1491832 | Governance Risk & Compliance | 1491191 | SAP Functional |
| 1491833 | Human Capital Management | 1491191 | SAP Functional |
| 1491834 | IS-Retail | 1491191 | SAP Functional |
| 1491835 | IS-Utilities | 1491191 | SAP Functional |
| 1491836 | Supply Chain Management | 1491191 | SAP Functional |
| 1491837 | Consulting Manager | 1491192 | SAP Management |
| 1491838 | General Manager | 1491192 | SAP Management |
| 1491839 | Managing Director | 1491192 | SAP Management |
| 1491840 | Practice Manager | 1491192 | SAP Management |
| 1491841 | Project Lead | 1491192 | SAP Management |
| 1491842 | Project Manager | 1491192 | SAP Management |
| 1491843 | Regional Manager | 1491192 | SAP Management |
| 1491844 | Project Administrator | 1491193 | SAP Other |
| 1491845 | Project Coordinator | 1491193 | SAP Other |
| 1491846 | Resource Manager | 1491193 | SAP Other |
| 1491847 | Account Manager | 1491194 | SAP Sales Marketing |
| 1491848 | Business Development Manager | 1491194 | SAP Sales Marketing |
| 1491849 | Marketing Assistant | 1491194 | SAP Sales Marketing |
| 1491850 | Marketing Director | 1491194 | SAP Sales Marketing |
| 1491851 | Marketing Manager | 1491194 | SAP Sales Marketing |
| 1491852 | Sales Director | 1491194 | SAP Sales Marketing |
| 1491853 | Sales Executive | 1491194 | SAP Sales Marketing |
| 1491854 | Telesales | 1491194 | SAP Sales Marketing |
| 1491855 | ABAP | 1491195 | SAP Technical |
| 1491856 | CRM Technical | 1491195 | SAP Technical |
| 1491857 | Java / J2EE | 1491195 | SAP Technical |
| 1491858 | Master Data Management | 1491195 | SAP Technical |
| 1491859 | Netweaver - Basis | 1491195 | SAP Technical |
| 1491860 | Netweaver – Process Integration | 1491195 | SAP Technical |
| 1491861 | Portals Administrator | 1491195 | SAP Technical |
| 1491862 | Portals Developer | 1491195 | SAP Technical |
| 1491863 | SQL Developer | 1491195 | SAP Technical |
| 1491864 | Webdynpro | 1491195 | SAP Technical |
| 1491865 | Change Management | 1491196 | SAP Training & Documentation |
| 1491866 | Communications | 1491196 | SAP Training & Documentation |
| 1491867 | eLearning | 1491196 | SAP Training & Documentation |
| 1491868 | Training Delivery | 1491196 | SAP Training & Documentation |
| 1491869 | Training Development | 1491196 | SAP Training & Documentation |
| 1491870 | Bio Tech | 1491197 | Science |
| 1491871 | Chemist | 1491197 | Science |
| 1491872 | Environmental | 1491197 | Science |
| 1491873 | Food | 1491197 | Science |
| 1491874 | Laboratory | 1491197 | Science |
| 1491875 | Other | 1491197 | Science |
| 1491876 | QA & QC | 1491197 | Science |
| 1491877 | Research & Development | 1491197 | Science |
| 1491878 | Sales & Marketing | 1491197 | Science |
| 1491879 | Technical | 1491197 | Science |
| 1491880 | Businesses for Sale | 1491198 | Self Employment |
| 1491881 | Commission Only | 1491198 | Self Employment |
| 1491882 | Franchise | 1491198 | Self Employment |
| 1491883 | Freelance | 1491198 | Self Employment |
| 1491884 | Network Marketing | 1491198 | Self Employment |
| 1491885 | Other | 1491198 | Self Employment |
| 1491886 | Work from Home | 1491198 | Self Employment |
| 1491887 | Apprenticeships | 1491199 | Trades & Services |
| 1491888 | Automotive | 1491199 | Trades & Services |
| 1491889 | Babysitting & Nannies | 1491199 | Trades & Services |
| 1491890 | Baker, Butcher | 1491199 | Trades & Services |
| 1491891 | Beauty & Hairdressing | 1491199 | Trades & Services |
| 1491892 | Boilermaker | 1491199 | Trades & Services |
| 1491893 | Bricklayer | 1491199 | Trades & Services |
| 1491894 | Builder | 1491199 | Trades & Services |
| 1491895 | Carpentry/Joiner/Cabinetmaking | 1491199 | Trades & Services |
| 1491896 | Cleaner | 1491199 | Trades & Services |
| 1491897 | Concrete, Cement & Stone | 1491199 | Trades & Services |
| 1491898 | Demolition, Excavation | 1491199 | Trades & Services |
| 1491899 | Electrician | 1491199 | Trades & Services |
| 1491900 | Fitting & Welding | 1491199 | Trades & Services |
| 1491901 | Florist | 1491199 | Trades & Services |
| 1491902 | HVAC | 1491199 | Trades & Services |
| 1491903 | Labourer & Handyperson | 1491199 | Trades & Services |
| 1491904 | Landscape Gardener | 1491199 | Trades & Services |
| 1491905 | Other | 1491199 | Trades & Services |
| 1491906 | Painting & Decorating | 1491199 | Trades & Services |
| 1491907 | Plasterer | 1491199 | Trades & Services |
| 1491908 | Plumbing | 1491199 | Trades & Services |
| 1491909 | Printing | 1491199 | Trades & Services |
| 1491910 | Security | 1491199 | Trades & Services |
| 1491911 | Admin/Customer Service/Support | 1491200 | Transport, Shipping, Logistics |
| 1491912 | Aviation & Airline | 1491200 | Transport, Shipping, Logistics |
| 1491913 | Drivers & Couriers | 1491200 | Transport, Shipping, Logistics |
| 1491914 | Fleet Management | 1491200 | Transport, Shipping, Logistics |
| 1491915 | Freight Forwarding | 1491200 | Transport, Shipping, Logistics |
| 1491916 | Import & Export | 1491200 | Transport, Shipping, Logistics |
| 1491917 | Management & Operations | 1491200 | Transport, Shipping, Logistics |
| 1491918 | Other | 1491200 | Transport, Shipping, Logistics |
| 1491919 | Planning | 1491200 | Transport, Shipping, Logistics |
| 1491920 | Product Development | 1491200 | Transport, Shipping, Logistics |
| 1491921 | Purchasing | 1491200 | Transport, Shipping, Logistics |
| 1491922 | Sales & Account Management | 1491200 | Transport, Shipping, Logistics |
| 1491923 | Shipping Lines | 1491200 | Transport, Shipping, Logistics |
| 1491924 | Supply Chain | 1491200 | Transport, Shipping, Logistics |
| 1491925 | Transport | 1491200 | Transport, Shipping, Logistics |
| 1491926 | Warehouse & Distribution | 1491200 | Transport, Shipping, Logistics |
| 1491927 | Campaigning & Lobbying | 1491201 | Volunteer |
| 1491928 | Education & Library | 1491201 | Volunteer |
| 1491929 | Emergency Services | 1491201 | Volunteer |
| 1491930 | Fundraising | 1491201 | Volunteer |
| 1491931 | Management | 1491201 | Volunteer |
| 1491932 | Material Relief | 1491201 | Volunteer |
| 1491933 | Mental Health | 1491201 | Volunteer |
| 1491934 | Other | 1491201 | Volunteer |
| 1491935 | Overseas | 1491201 | Volunteer |
| 1491936 | Sports | 1491201 | Volunteer |
| 1491937 | The Arts | 1491201 | Volunteer |
| 1491938 | Working with Animals | 1491201 | Volunteer |
| 1491939 | Working with Kids | 1491201 | Volunteer |
| 1491940 | Working with the Aged | 1491201 | Volunteer |
| 1491941 | Working with the Disabled | 1491201 | Volunteer |
| 1491942 | Assistant Winemaker | 1491202 | Wine |
| 1491943 | Bottlling Attendant | 1491202 | Wine |
| 1491944 | Cellar Operations | 1491202 | Wine |
| 1491945 | Winemaker | 1491202 | Wine |
| 1491946 | Accounting & Finance | 1491203 | Social Care Jobs |
| 1491947 | Administration | 1491203 | Social Care Jobs |
| 1491948 | Case Manager | 1491203 | Social Care Jobs |
| 1491949 | Employment Consultant | 1491203 | Social Care Jobs |
| 1491950 | Executive | 1491203 | Social Care Jobs |
| 1491951 | Fundraising & Marketing | 1491203 | Social Care Jobs |
| 1491952 | Health Professionals | 1491203 | Social Care Jobs |
| 1491953 | Human Resources | 1491203 | Social Care Jobs |
| 1491954 | Information Technology | 1491203 | Social Care Jobs |
| 1491955 | Management | 1491203 | Social Care Jobs |
| 1491956 | Professional Support Workers | 1491203 | Social Care Jobs |
| 1491957 | Service Co-ordinators | 1491203 | Social Care Jobs |
| 1491958 | Service Managers | 1491203 | Social Care Jobs |
| 1491959 | Support Workers | 1491203 | Social Care Jobs |


### Location

| ID 		| Name									| 
|-----------|---------------------------------------|
| 1491960 | Sydney |
| 1491961 | Melbourne |
| 1491962 | Brisbane |
| 1491963 | Gold Coast |
| 1491964 | Perth |
| 1491965 | Adelaide |
| 1491966 | Hobart |
| 1491967 | Darwin |
| 1491968 | Canberra |
| 1491969 | Regional NSW |
| 1491970 | Regional VIC |
| 1491971 | Regional QLD |
| 1491972 | Regional WA |
| 1491973 | Regional SA |
| 1491974 | Regional TAS |
| 1491975 | Regional ACT |
| 1491976 | Regional NT |
| 1491977 | Other |
| 1491978 | New Zealand |
| 1491979 | All Malaysia |
| 1491980 | All Indonesia |
| 1491981 | All Singapore |
| 1491982 | All Hong Kong |


### Areas

| ID 		| Name									| Parent ID 	| Parent Name 					|
|-----------|---------------------------------------|---------------|-------------------------------|
1491983 | All Sydney | 1491960 | Sydney |
1491984 | CBD, Inner West & Eastern Suburbs | 1491960 | Sydney |
1491985 | North Shore & Northern Beaches | 1491960 | Sydney |
1491986 | North West & Hills District | 1491960 | Sydney |
1491987 | Parramatta & Western Suburbs | 1491960 | Sydney |
1491988 | Ryde & Macquarie Park | 1491960 | Sydney |
1491989 | South West & M5 Corridor | 1491960 | Sydney |
1491990 | Southern Suburbs & Sutherland Shire | 1491960 | Sydney |
1491991 | All Melbourne | 1491961 | Melbourne |
1491992 | CBD & Inner Suburbs | 1491961 | Melbourne |
1491993 | Northern Suburbs | 1491961 | Melbourne |
1491994 | Eastern Suburbs | 1491961 | Melbourne |
1491995 | Western Suburbs | 1491961 | Melbourne |
1491996 | Bayside & South Eastern Suburbs | 1491961 | Melbourne |
1491997 | All Brisbane | 1491962 | Brisbane |
1491998 | CBD & Inner Suburbs | 1491962 | Brisbane |
1491999 | Northern Suburbs | 1491962 | Brisbane |
1492000 | Northern Brisbane | 1491962 | Brisbane |
1492001 | Western Suburbs & Ipswich | 1491962 | Brisbane |
1492002 | Southern Suburbs & Logan | 1491962 | Brisbane |
1492003 | All Gold Coast | 1491963 | Gold Coast |
1492004 | All Perth | 1491964 | Perth |
1492005 | CBD, Inner & Western Suburbs | 1491964 | Perth |
1492006 | Eastern Suburbs | 1491964 | Perth |
1492007 | Fremantle & Southern Suburbs | 1491964 | Perth |
1492008 | Rockingham & Kwinana | 1491964 | Perth |
1492009 | Northern Suburbs & Joondalup | 1491964 | Perth |
1492010 | All Adelaide | 1491965 | Adelaide |
1492011 | All Hobart | 1491966 | Hobart |
1492012 | All Darwin | 1491967 | Darwin |
1492013 | All Canberra | 1491968 | Canberra |
1492014 | All Regional New South Wales | 1491969 | Regional NSW |
1492015 | Richmond & Hawkesbury | 1491969 | Regional NSW |
1492016 | Gosford & Central Coast | 1491969 | Regional NSW |
1492017 | Goulburn & Southern Tablelands | 1491969 | Regional NSW |
1492018 | Blue Mountains & Central West | 1491969 | Regional NSW |
1492019 | Albury, Wodonga & Murray | 1491969 | Regional NSW |
1492020 | Far West & North Central NSW | 1491969 | Regional NSW |
1492021 | Port Macquarie & Mid North Coast | 1491969 | Regional NSW |
1492022 | Tumut, Southern Highlands & Snowy | 1491969 | Regional NSW |
1492023 | Newcastle, Maitland & Hunter | 1491969 | Regional NSW |
1492024 | Tamworth & North West NSW | 1491969 | Regional NSW |
1492025 | Lismore & Far North Coast | 1491969 | Regional NSW |
1492026 | Coffs Harbour & North Coast | 1491969 | Regional NSW |
1492027 | Wagga Wagga & Riverina | 1491969 | Regional NSW |
1492028 | Wollongong, Illawarra and South Coast | 1491969 | Regional NSW |
1492029 | Dubbo & Central NSW | 1491969 | Regional NSW |
1492030 | All Regional Victoria | 1491970 | Regional VIC |
1492031 | Ballarat & Bendigo | 1491970 | Regional VIC |
1492032 | Geelong & Great Ocean Road | 1491970 | Regional VIC |
1492033 | Ballarat & Central Highlands | 1491970 | Regional VIC |
1492034 | Shepparton & Goulburn Valley | 1491970 | Regional VIC |
1492035 | Horsham & Grampians | 1491970 | Regional VIC |
1492036 | Bendigo, Goldfields & Macedon Ranges | 1491970 | Regional VIC |
1492037 | Mildura & Murray | 1491970 | Regional VIC |
1492038 | Yarra Valley & High Country | 1491970 | Regional VIC |
1492039 | Mornington Peninsula & Bass Coast | 1491970 | Regional VIC |
1492040 | Traralgon & La Trobe Valley | 1491970 | Regional VIC |
1492041 | All Regional Queensland | 1491971 | Regional QLD |
1492042 | Bundaberg & Wide Bay Burnett | 1491971 | Regional QLD |
1492043 | Hervey Bay & Fraser Coast | 1491971 | Regional QLD |
1492044 | MacKay & Coalfields | 1491971 | Regional QLD |
1492045 | Mt Isa & Western QLD | 1491971 | Regional QLD |
1492046 | Sunshine Coast | 1491971 | Regional QLD |
1492047 | Toowoomba & Darling Downs | 1491971 | Regional QLD |
1492048 | Cairns & Far North | 1491971 | Regional QLD |
1492049 | Gladstone & Central QLD | 1491971 | Regional QLD |
1492050 | Rockhampton & Capricorn Coast | 1491971 | Regional QLD |
1492051 | Somerset & Lockyer | 1491971 | Regional QLD |
1492052 | Townsville & Northern QLD | 1491971 | Regional QLD |
1492053 | All Regional WA | 1491972 | Regional WA |
1492054 | Port Hedland, Karratha & Pilbara | 1491972 | Regional WA |
1492055 | Kalgoorlie, Goldfields & Esperance | 1491972 | Regional WA |
1492056 | Broome & Kimberley | 1491972 | Regional WA |
1492057 | Bunbury & South West | 1491972 | Regional WA |
1492058 | Albany & Great Southern | 1491972 | Regional WA |
1492059 | Geraldton, Gascoyne & Mid West | 1491972 | Regional WA |
1492060 | Mandurah & Peel | 1491972 | Regional WA |
1492061 | Northam & Wheatbelt | 1491972 | Regional WA |
1492062 | All Regional South Australia | 1491973 | Regional SA |
1492063 | Mt Gambier & Limestone Coast | 1491973 | Regional SA |
1492064 | Riverland & Murray Mallee | 1491973 | Regional SA |
1492065 | Adelaide Hills & Barossa | 1491973 | Regional SA |
1492066 | Whyalla & Eyre Peninsula | 1491973 | Regional SA |
1492067 | Yorke Peninsula & Clare Valley | 1491973 | Regional SA |
1492068 | Coober Pedy & Outback SA | 1491973 | Regional SA |
1492069 | Fleurieu Peninsular & Kangaroo Island | 1491973 | Regional SA |
1492070 | All TAS | 1491974 | Regional TAS |
1492071 | Devenport & North West | 1491974 | Regional TAS |
1492072 | Central & South East | 1491974 | Regional TAS |
1492073 | Launceston & North East | 1491974 | Regional TAS |
1492074 | All ACT | 1491975 | Regional ACT |
1492075 | All Regional NT | 1491976 | Regional NT |
1492076 | Katherine & Northern Australia | 1491976 | Regional NT |
1492077 | Alice Springs & Central Australia | 1491976 | Regional NT |
1492078 | Other | 1491977 | Other |
1492079 | All New Zealand | 1491978 | New Zealand |
1492080 | Auckland | 1491978 | New Zealand |
1492081 | Christchurch | 1491978 | New Zealand |
1492082 | Rest of NZ | 1491978 | New Zealand |
1492083 | Wellington | 1491978 | New Zealand |
1492084 | All Malaysia | 1491979 | All Malaysia |
1492085 | All Indonesia | 1491980 | All Indonesia |
1492086 | All Singapore | 1491981 | All Singapore |
1492087 | All Hong Kong | 1491982 | All Hong Kong |

### Work Types

| ID 		| Name									| 
|-----------|---------------------------------------|
| 1492683 | Part Time |
| 1492684 | Full Time |
| 1492685 | Casual |
| 1492686 | Contract |
| 1492687 | Temporary |
| 1492688 | Apprentice |





