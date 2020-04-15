# Table of Contents

> * [Getting Started](#getting-started)
> * [Where Am I Hosted?](#where-am-i-hosted)
> * [API - Fairplay Object](#api---fairplay-object)
>	- [getJobAds](#getjobads)
>	- [submitForm](#submitform)
>		- [Examples](#examples)
>		- [Submitting resume](#submitting-resume)
>		- [Submitting vacancy](#submitting-vacancy)
>		- [Subscribing to job alerts](#subscribing-to-job-alerts)
>		- [Contact us](#contact-us)
>		- [Getting a free report](#getting-a-free-report)
>		- [Apply to job](#apply-to-job)
>		- [Refer a friend](#refer-a-friend)
>	- [fp.repo.profession.find](#fprepoprofessionfind)
>	- [fp.on](#fpon)
> * [How To](#how-to)
>	- [How To Test Locally?](#how-to-test-locally)
>	- [How To Compile The Code To ES5?](#how-to-compile-the-code-to-es5)
>	- [How To Deploy A New Version?](#how-to-deploy-a-new-version)
>	- [How to send email to specific recipients only?](#how-to-send-email-to-specific-recipients-only)
> * [Annexes](#annexes)
> * [JobAdder - Neap Board Categories](#jobadder-neap-board-categories)

# IMPORTANT

This SDK requires `vue.js` and `jQuery`.

# Getting Started

```html
<!DOCTYPE html>
<html>
<head>
	<title>View JS Test</title>
	<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@neap/fairplay-widgetjs/dist/fairplay.min.css">
</head>
<body>
	<div id="wrapper"></div>
	<script src="https://cdn.jsdelivr.net/npm/@neap/fairplay-widgetjs"></script>
	<script type="text/javascript">
		var fp = new Fairplay({
			// clientId: 'dewdwq',
			mode:'dev' 					// Optional. When set to 'dev', the 'clientId' property is not required.
		})
		fp.createWidget({ 
			el: '#wrapper',
			pageSize: 2,					// Optional. Default is 10. 
			categories: { 					// Optional. This object overides the Neap's JobAdder's Board category names
				5843: 'Internet & Telco', 
				5821: 'Internet & Telco' 
			}
		})

		fp.getJobAds({ where:{ professionId:1123 } }, (err,data) => { console.log(data) })
	</script>
</body>
```

# Where Am I Hosted?

Latest version:
- JS: [https://cdn.jsdelivr.net/npm/@neap/fairplay-widgetjs](https://cdn.jsdelivr.net/npm/@neap/fairplay-widgetjs)
- CSS: [https://cdn.jsdelivr.net/npm/@neap/fairplay-widgetjs/dist/fairplay.min.css](https://cdn.jsdelivr.net/npm/@neap/fairplay-widgetjs/dist/fairplay.min.css)

You can access that JS and the default CSS using a specific version as follow:
* [https://cdn.jsdelivr.net/npm/@neap/fairplay-widgetjs@0.2.1/dist/fairplay.min.js](https://cdn.jsdelivr.net/npm/@neap/fairplay-widgetjs@0.2.1/dist/fairplay.min.js)
* [https://cdn.jsdelivr.net/npm/@neap/fairplay-widgetjs@0.2.1/dist/fairplay.min.css](https://cdn.jsdelivr.net/npm/@neap/fairplay-widgetjs@0.2.1/dist/fairplay.min.css)

# API - Fairplay Object

To create a Fairplay object, make sure you have your `clientId` (unless you're using the SDK in `dev` mode):

```js
var fp = new Fairplay({ 
	clientId:'123456789',   // Required
	businessId: 123,		// Required for certain APIs (e.g., 'submitForm')
	classifications: {	  // Optional. Used to overides out-of-the-box classification names, merge classfications into a single one or find classification to power select boxes.
		professions: [{
			ids:[1,2],
			name: 'IT',
			roles:[{
				ids:[100],
				name: 'Manager'
			}, {
				ids:[200,300,400],
				name: 'Support'
			}]
		}, {
			ids:[3],
			name: 'Human Resources',
			roles:[{
				ids:[110],
				name: 'Head of Recruitment'
			}, {
				ids:[210,310,410],
				name: 'Compliance Manager'
			}]
		}],
		locations: [{
			ids:[10,20,30],
			name: 'Sydney',
			areas:[{
				ids:[1000],
				name: 'CBD'
			}, {
				ids:[2000,3000,4000],
				name: 'Inner West'
			}]
		}, {
			ids:[40],
			name: 'Melbourne',
			areas:[{
				ids:[5000,6000],
				name: 'CBD'
			}, {
				ids:[7000],
				name: 'Coast'
			}]
		}],
		workTypes: [{
			ids:[60],
			name: 'Full-time'
		}, {
			ids:[70],
			name: 'Part-time'
		}, {
			ids:[80,90],
			name: 'Contract'
		}]
	}
});
```

## getJobAds

`fp.getJobAds({ where:<Where> }, next:<Function>)`

 - where.ownerId		 Recruiter's ID. 
 - where.ownerEmail	  Recruiter's email. 
 - where.jobId		   
 - where.professionId	
 - where.roleId		  
 - where.locationId	  
 - where.areaId		  
 - where.workTypeId	  
 - where.salary.per	  
 - where.salary.lowest   
 - where.salary.highest  

### JobAd Object

```js
{
	"id": "1265",
	"title": "Junior IT specialist for Hospital systems",
	"summary": "Looking for Junior IT specialist for Hospital systems to help supporting all IT systems in the hospital.",
	"bulletPoints": [
		"Advantageous package",
		"Flexible holidays"
	],
	"created": "2018-12-20T03:22:19Z",
	"owner": null,
	"profession":
	{
		"id": "5843",
		"name": "IT",
		"role":
		{
			"id": "6286",
			"name": "Helpdesk & Support",
			"link": "?professions=IT-5843&roles=Helpdesk%20%26%20Support-6286"
		},
		"link": "?professions=IT-5843"
	},
	"location":
	{
		"id": "6628",
		"name": "Sydney",
		"area":
		{
			"id": "6654",
			"name": "North West & Hills District"
		}
	},
	"workType":
	{
		"id": "5815",
		"name": "Full Time"
	},
	"salary":
	{
		"per": "Hour",
		"lowest": 40,
		"highest": 50,
		"lower": 40,
		"upper": 50,
		"id": 4,
		"description": "$40 - $50 per hour"
	},
	"date": "20/12/2018",
	"link": "/jobs/it/junior-it-specialist-for-hospital-systems/1265",
	"consultant": {

	}
}
```

## submitForm
### Examples

`fp.submitForm([formDOM:<Element>, event:<Event>, input:<Object>, next:<Function>])`

#### Example 01 - Using a Form Element

```js
document.getElementById('main-form').addEventListener('submit', function(event) {
	fp.submitForm(this,event, (error, res) => {
		if (error) {
			console.log('ERROR')
			console.log(JSON.stringify(error))
		} else {
			console.log(`Status: ${res.status}`)
			console.log(`Data: ${res.data}`)
		}
	})
})
```

#### Example 02 - Adding Extra Fields On A Form Element

```js
var formDOM = document.getElementById('main-form')
// Valid offers: 'Submit Resume', 'Submit Vacancy', 'Job Alert', 'Contact Us', 'Free Report', 'Apply Job', 'Refer Friend'
var extraInputs = { offer:'Submit Resume' }

// As you can see we can also omit the 'event' input.
fp.submitForm(formDOM, extraInputs,function(error,res) {
	if (error) {
		console.log('ERROR')
		console.log(JSON.stringify(error))
	} else {
		console.log(`Status: ${res.status}`)
		console.log(`Data: ${res.data}`)
	}
})
```

#### Example 03 - Using Explicit Fields With No Form Element

```js
fp.submitForm({ firstName:'Nic', lastName:'Dao' }, function(error,res) {
	if (error) {
		console.log('ERROR')
		console.log(JSON.stringify(error))
	} else {
		console.log(`Status: ${res.status}`)
		console.log(`Data: ${res.data}`)
	}
})
```

### Submitting resume

```html
<form onsubmit="submitResume(this, event)">
	...
</form>
```

```js
function submitResume(form, event) {
	event.preventDefault();

	// The assumption is that the form contains 'firstname', 'lastname', 'email', 'phone', 'message' and an attachement.
	var payload = {
	    offer: "Submit Resume",
	    type: "candidate",
	    recipients:['nic@neap.co'], 
	    recipientsOnly: true
	}

	showSubmitting();

	fp.submitForm(form, payload, (error, res) => {
	    hideSubmitting()
	    if (error) {
		var logMsg = error && error.data && error.data.error && typeof(error.data.error) == 'string' ? error.data.error.split('\n')[0] : 'Unknown error'

		console.log(logMsg)
	    } else {
		console.log(`Status: ${res.status}`)
		console.log(`Data: ${res.data}`)

		form.reset();
	    }
	})
}
```

### Submitting vacancy

```html
<form onsubmit="submitResume(this, event)">
	...
</form>
```

```js
function submitResume(form, event) {
	event.preventDefault();

	// The assumption is that the form contains 'firstname', 'lastname', 'email', 'phone', 'message', 'profession_name', 'job_title' and an attachement.
	var payload = {
	    offer: "Submit Vacancy",
	    type: "client",
	    recipients:['nic@neap.co'], 
	    recipientsOnly: true
	}

	showSubmitting();

	fp.submitForm(form, payload, (error, res) => {
	    hideSubmitting()
	    if (error) {
		var logMsg = error && error.data && error.data.error && typeof(error.data.error) == 'string' ? error.data.error.split('\n')[0] : 'Unknown error'

		console.log(logMsg)
	    } else {
		console.log(`Status: ${res.status}`)
		console.log(`Data: ${res.data}`)

		form.reset();
	    }
	})
}
```

### Subscribing to job alerts

### Contact us

```html
<form onsubmit="contactUs(this, event)">
	...
</form>
```

```js
function contactUs(form, event) {
	event.preventDefault();

	// The assumption is that the form contains 'firstname', 'lastname', 'email', 'phone', 'message'.
	var payload = {
	    offer: "Contact Us",
	    recipients:['nic@neap.co'], 
	    recipientsOnly: true
	}

	showSubmitting();

	fp.submitForm(form, payload, (error, res) => {
	    hideSubmitting()
	    if (error) {
		var logMsg = error && error.data && error.data.error && typeof(error.data.error) == 'string' ? error.data.error.split('\n')[0] : 'Unknown error'

		console.log(logMsg)
	    } else {
		console.log(`Status: ${res.status}`)
		console.log(`Data: ${res.data}`)

		form.reset();
	    }
	})
}
```

### Getting a free report

### Apply to job

### Refer a friend

```html
<form onsubmit="referFriend(this, event)">
	...
</form>
```

```js
function referFriend(form, event) {
	event.preventDefault();
	var formData = new FormData(form);

	var payload = {
	    offer: "Refer Friend",
	    type: "candidate",
	    firstName: formData.get("from_firstname"),
	    lastName: formData.get("from_lastname"),
	    email: formData.get("from_email"),
	    phone: formData.get("from_phone"),
	    message: formData.get("message"),
	    friend: {
		firstName: formData.get("friend_firstname"),
		lastName: formData.get("friend_lastname"),
		email: formData.get("friend_email"),
		phone: formData.get("friend_phone"),
		profession: formData.get("friend_profession")
	    },
	    recipients:['nic@neap.co'], 
	    recipientsOnly: true
	}

	showSubmitting();

	fp.submitForm(form, payload, (error, res) => {
	    hideSubmitting()
	    if (error) {
		var message = error && error.data && error.data.error && typeof(error.data.error) == 'string' ? error.data.error.split('\n')[0] : 'Unknown error'

		console.log(message)
	    } else {
		console.log(`Status: ${res.status}`)
		console.log(`Data: ${res.data}`)

		form.reset();
	    }
	})
}
```

## fp.repo.profession.find

`fp.repo.profession.find({ where:<Object> })`

> WARNING: This API only returns values if the optional `classifications` input was setup during the Fairplay instance creation.
	
- where.id
- where.name

```js
var p01 = fp.repo.profession.find({ where:{ id:1 } })
var p02 = fp.repo.profession.find({ where:{ id:'2' } })
var p03 = fp.repo.profession.find({ where:{ id:'1_2' } }) // equivalent to a search by ID where ID is equal to 1 or 2.
```

`profession` is not the only type of classification that cna be searched. The others are:

- `profession`
- `role`
- `location`
- `area`
- `workType`

## fp.on

`fp.on(eventName:<String>, next:<Function>)`

As of today, the only supported event is `job-alert-created`, which is fired after the _Create Job Alert_ button is clicked.

```js
fp.on('job-alert-created', data => {
	console.log(data.profession)	// e.g., { strId: '1_2', name:'Sales' }
	console.log(data.role)			// e.g., { strId: '10', name:'Manager' }
	console.log(data.location)		// e.g., { strId: '10_20', name:'Sydney' }
	console.log(data.area)			// e.g., { strId: '30', name:'CBD' }
	console.log(data.type)			// e.g., { strId: '400', name:'Full-time' }
	console.log(data.consultant)	
	console.log(data.keywords)		// e.g., 'Senior SDR'
	console.log(data.salary)		// e.g., { min:100, max:200, per:'hour' }
})
```

# How To
## How To Test Locally?

Simply run this:

```
npm run dev
```

This will host 2 version of the widget:

__Dev__: [http://localhost:8080/dev](http://localhost:8080/dev)
__Prod__: [http://localhost:8080/prod](http://localhost:8080/prod)

 Prod uses the minified/uglified ES5 version of the code (to see how to compile that code, jump to the  section). 

## How To Compile The Code To ES5?

Simply run:

```
npm run build
```

This will produce multiple artefacts under the __dist__ folder.

## How To Deploy A New Version?

1. Make sure the code is linted properly: `npm run lint`
2. Build all the artefacts: 
	```
	npm run dev
	npm run build
	```
3. Commit your changes: `git cm 'your message'`
4. Get the current verison: `npm run v`
5. Bump to higher version: `npm run rls <the new version>`
6. Publish: `npm run push`

This will host the minified version to [https://cdn.jsdelivr.net/npm/@neap/fairplay-widgetjs](https://cdn.jsdelivr.net/npm/@neap/fairplay-widgetjs). The minified CSS is located at [https://cdn.jsdelivr.net/npm/@neap/fairplay-widgetjs@0.2.1/dist/fairplay.min.css](https://cdn.jsdelivr.net/npm/@neap/fairplay-widgetjs@0.2.1/dist/fairplay.min.css)

You can access that JS and the default CSS using a specific version as follow:
* [https://cdn.jsdelivr.net/npm/@neap/fairplay-widgetjs@0.2.1/dist/fairplay.min.js](https://cdn.jsdelivr.net/npm/@neap/fairplay-widgetjs@0.2.1/dist/fairplay.min.js)
* [https://cdn.jsdelivr.net/npm/@neap/fairplay-widgetjs@0.2.1/dist/fairplay.min.css](https://cdn.jsdelivr.net/npm/@neap/fairplay-widgetjs@0.2.1/dist/fairplay.min.css)

## How to send email to specific recipients only?

```js
var formDOM = document.getElementById('main-form')
// Valid offers: 'Submit Resume', 'Submit Vacancy', 'Job Alert', 'Contact Us', 'Free Report', 'Apply Job', 'Refer Friend'
var extraInputs = { 
	offer:'Submit Resume',
	recipients:['somebody@example.com.au'], 
	recipientsOnly: true
}

// As you can see we can also omit the 'event' input.
fp.submitForm(formDOM, extraInputs,function(error,res) {
	if (error) {
		console.log('ERROR')
		console.log(JSON.stringify(error))
	} else {
		console.log(`Status: ${res.status}`)
		console.log(`Data: ${res.data}`)
	}
})
```


# Annexes
