
var JOB_AD_URL = '/jobs'
var JOB_API_TEST = 'https://api-test-dot-fp-recruit-vquqd.appspot.com'
var JOB_API_PROD = 'https://api-dot-fp-recruit-vquqd.appspot.com'
var CLIENT_ID_TEST = '9s7vo-iiu99-b4w7s-5rxr4'
var DEFAULT_PAGE_SIZE = 10
var ANNUALY_ID = 1
var MONTHLY_ID = 2
var DAILY_ID = 3
var HOURLY_ID = 4

var _eventBus = new Vue({})

function _idFn(x) { return x }

function _delay(time) {
	return new Promise(function (onSuccess) {
		setTimeout(onSuccess, time)
	})
}

function _idToString(ids) {
	return (ids && Array.isArray(ids) ? ids : ids ? [ids] : []).join('_')
}

function _stringToIds(str) {
	return (str || '').split('_').map(function(s){return s*1})
}

function _getCategoryId(id, categories) {
	categories = categories || {}
	var mappedCategoryName = categories[id]
	if (mappedCategoryName)
		return Object.keys(categories).reduce(function(acc,key){
			if (categories[key] == mappedCategoryName)
				acc.push(key*1)
			return acc
		}, []).sort(function(a,b){return a-b})
	else 
		return [id*1] 
}

function _getLeftMenuData(ads, categories) {
	ads = ads || []
	categories = categories || {}
	var data = ads.reduce(function(acc,ad){
		// 1. Extract 'professions' & 'roles'
		if (ad.profession && ad.profession.id) {
			var professionIds = _getCategoryId(ad.profession.id, categories)
			var professionName = categories[ad.profession.id] || ad.profession.name
			var professionStrIds = professionIds.join('_')
			if (acc._professions[professionStrIds])
				acc._professions[professionStrIds].count++
			else {
				acc._professions[professionStrIds] = { id:professionIds, name:professionName, count:1, roles:[] }
				acc.menu.professions.push(acc._professions[professionStrIds])
			}

			if (ad.profession && ad.profession.role && ad.profession.role.id) {
				var roleIds = _getCategoryId(ad.profession.role.id, categories)
				var roleName = categories[ad.profession.role.id] || ad.profession.role.name
				var roleStrIds = roleIds.join('_')
				if (acc._roles[roleStrIds])
					acc._roles[roleStrIds].count++
				else {
					acc._roles[roleStrIds] = { id:roleIds, name:roleName, count:1 }
					acc._professions[professionStrIds].roles.push(acc._roles[roleStrIds])
				}
			}
		}

		// 2. Extract 'locations' & 'areas'
		if (ad.location && ad.location.id) {
			var locationIds = _getCategoryId(ad.location.id, categories)
			var locationName = categories[ad.location.id] || ad.location.name
			var locationStrIds = locationIds.join('_')
			if (acc._locations[locationStrIds])
				acc._locations[locationStrIds].count++
			else {
				acc._locations[locationStrIds] = { id:locationIds, name:locationName, count:1, areas:[] }
				acc.menu.locations.push(acc._locations[locationStrIds])
			}

			if (ad.location && ad.location.area && ad.location.area.id) {
				var areaIds = _getCategoryId(ad.location.area.id, categories)
				var areaName = categories[ad.location.area.id] || ad.location.area.name
				var areaStrIds = areaIds.join('_')
				if (acc._areas[areaStrIds])
					acc._areas[areaStrIds].count++
				else {
					acc._areas[areaStrIds] = { id:areaIds, name:areaName, count:1 }
					acc._locations[locationStrIds].areas.push(acc._areas[areaStrIds])
				}
			}
		}

		// 3. Extract 'workTypes'
		if (ad.workType && ad.workType.id) {
			var workTypeIds = _getCategoryId(ad.workType.id, categories)
			var workTypeName = categories[ad.workType.id] || ad.workType.name
			var workTypeStrIds = workTypeIds.join('_')
			if (acc._workTypes[workTypeStrIds])
				acc._workTypes[workTypeStrIds].count++
			else {
				acc._workTypes[workTypeStrIds] = { id:workTypeIds, name:workTypeName, count:1, roles:[] }
				acc.menu.workTypes.push(acc._workTypes[workTypeStrIds])
			}
		}

		// 4. Extract 'salaryTypes'
		ad.salary = ad.salary || {}
		if (ad.salary.per == 'Year' && !acc._salaryTypes.year){
			acc._salaryTypes.year = true
			acc.menu.salaryTypes.push({ id: ANNUALY_ID, name: 'Annual Salary' })
		}
		if (ad.salary.per == 'Hour' && !acc._salaryTypes.hour){
			acc._salaryTypes.hour = true
			acc.menu.salaryTypes.push({ id: HOURLY_ID, name: 'Hourly Rate' })
		}
		if (ad.salary.per == 'Month' && !acc._salaryTypes.month){
			acc._salaryTypes.month = true
			acc.menu.salaryTypes.push({ id: MONTHLY_ID, name: 'Monthly Salary' })
		}
		if (ad.salary.per == 'Day' && !acc._salaryTypes.day){
			acc._salaryTypes.day = true
			acc.menu.salaryTypes.push({ id: DAILY_ID, name: 'Daily Rate' })
		}


		return acc
	}, { menu: { professions:[], locations:[], workTypes:[], salaryTypes:[] }, _salaryTypes:{}, _professions:{}, _locations:{}, _workTypes:{}, _roles:{}, _areas:{} })

	var menu = data.menu
	
	menu.professions = menu.professions || []
	menu.professions.forEach(function(x) {
		x.strId = _idToString(x.id)
		x.roles = x.roles || []
		x.roles.forEach(function(y){y.strId = _idToString(y.id)})
	})
	menu.locations = menu.locations || []
	menu.locations.forEach(function(x) {
		x.strId = _idToString(x.id)
		x.areas = x.areas || []
		x.areas.forEach(function(y){y.strId = _idToString(y.id)})
	})
	menu.workTypes = menu.workTypes || []
	menu.workTypes.forEach(function(x) {
		x.strId = _idToString(x.id)
	})

	return menu
}

function _formatMoney(number) {
	return number ? ('$' + number.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,').slice(0,-2)) : '$0'
}

function _escapeJobCategoriesName(name){
	return encodeURIComponent((name || '').toLowerCase().trim().replace(/^\s+|\s+$/g, '').replace(/&/g, 'and').replace(/[^a-zA-Z0-9]/g, '-').replace(/(-)\1+/, '-'))
}

function _fetchJobAds({ clientId, categories, mode }) {
	let jobApi
	if (mode == 'dev') {
		jobApi = JOB_API_TEST
		clientId = CLIENT_ID_TEST
	} else
		jobApi = JOB_API_PROD

	if (!clientId)
		throw new Error('Missing required argument \'clientId\'')

	categories = categories || {}

	return new Promise(function(onSuccess, onFailure) {
		var xmlhttp = new XMLHttpRequest()

		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
				if (xmlhttp.status < 400) {
					var data = JSON.parse(xmlhttp.responseText) || {}
					var ads = (((data.data || {}).jobAds || {}).data || []).map(function(ad){
						// 1. Format salary
						var money = []	
						var paidFreq = ''
						ad.salary = ad.salary || {}
						var lower = (ad.salary.lowest || 0) * 1 
						var upper = (ad.salary.highest || 0) * 1
						ad.salary.lower = lower
						ad.salary.upper = upper
						if (ad.salary.per == 'Year') {
							paidFreq = 'per annum'
							ad.salary.id = ANNUALY_ID
						} else if (ad.salary.per == 'Hour') {
							paidFreq = 'per hour'
							ad.salary.id = HOURLY_ID
						} else if (ad.salary.per == 'Day') {
							paidFreq = 'per day'
							ad.salary.id = DAILY_ID
						} else if (ad.salary.per == 'Month') {
							paidFreq = 'per month'
							ad.salary.id = MONTHLY_ID
						}

						if (lower > 0 || upper > 0) {
							if (lower > 0)
								money.push(_formatMoney(lower))
							if (upper > 0)
								money.push(_formatMoney(upper))

							ad.salary.description = money.join(' - ') + ' ' + paidFreq
						} else
							ad.salary.description = ''

						// 2. Add new 'date' property and format it:
						ad.date = new Date(ad.created).toJSON().slice(0,10).split('-').reverse().join('/')

						// 3. Apply custom category mappings:
						if (ad.profession && ad.profession.id && categories[ad.profession.id])
							ad.profession.name = categories[ad.profession.id]
						if (ad.profession && ad.profession.role && ad.profession.role.id && categories[ad.profession.role.id])
							ad.profession.role.name = categories[ad.profession.role.id]
						if (ad.location && ad.location.id && categories[ad.location.id])
							ad.location.name = categories[ad.location.id]
						if (ad.location && ad.location.area && ad.location.area.id && categories[ad.location.area.id])
							ad.location.area.name = categories[ad.location.area.id]
						if (ad.workType && ad.workType.id && categories[ad.workType.id])
							ad.workType.name = categories[ad.workType.id]

						// 3. Create a job ad link:
						var pathname = []
						if (ad.profession && ad.profession.name)
							pathname.push(_escapeJobCategoriesName(ad.profession.name))
						if (ad.title)
							pathname.push(_escapeJobCategoriesName(ad.title))
						pathname.push(ad.id)
						ad.link = JOB_AD_URL + '/' + pathname.join('/')

						// 4. Create a profession search link:
						if (ad.profession && ad.profession.id && ad.profession.name) {
							var proIds = _getCategoryId(ad.profession.id, categories)
							ad.profession.link = '?professions=' + encodeURIComponent(ad.profession.name) + '-' + proIds.join('_')
							if (ad.profession.role && ad.profession.role.id && ad.profession.role.name) {
								var roleIds = _getCategoryId(ad.profession.role.id, categories)
								ad.profession.role.link = ad.profession.link + '&roles=' + encodeURIComponent(ad.profession.role.name) + '-' + roleIds.join('_')
							}
						}

						return ad
					}).reverse()
					onSuccess({ status: xmlhttp.status, data: ads })
				} else
					onFailure({ status: xmlhttp.status, message: xmlhttp.responseText })
			}
		}

		var api_url = jobApi + '?query=' + encodeURIComponent('{ \n' + 
			'jobAds(where:{clientId:"' + clientId + '"}) { \n' +
				'data{ \n' +
					'id \n' +
					'title \n' +
					'summary \n' +
					'bulletPoints \n' +
					'created \n' +
					'profession{ \n' +
						'id \n' +
						'name \n' +
						'role{ \n' +
							'id \n' +
							'name \n' +
						'} \n' +
					'} \n' +
					'location{ \n' +
						'id \n' +
						'name \n' +
						'area{ \n' +
							'id \n' +
							'name \n' +
						'} \n' +
					'} \n' +
					'workType{ \n' +
						'id \n' +
						'name \n' +
					'} \n' +
					'salary { \n' +
						'per \n' +
						'lowest \n' +
						'highest \n' +
					'} \n' +
				'} \n' +
			'} \n' +
		'}')

		xmlhttp.open('GET', api_url, true)
		xmlhttp.send()
	})
}

function _getJobAds(options) { 
	options = options || {}
	return _fetchJobAds(options).then(function(res){ return res.data })
	// retry attempt 1
		.catch(function(err1){
			console.log('Error while fetching jobs from the server (1st attempt): ' + err1.status + ' - ' + err1.message)
			return  _delay(1000).then(function(){
				return _fetchJobAds(options).then(function(res){return res.data})
				// retry attempt 2
					.catch(function(err2){
						console.log('Error while fetching jobs from the server (2nd attempt): ' + err2.status + ' - ' + err2.message)
						return  _delay(2000).then(function(){
							return _fetchJobAds(options).then(function(res){return res.data})
							// retry attempt 2
								.catch(function(err3){
									console.log('Error while fetching jobs from the server (3rd attempt): ' + err3.status + ' - ' + err3.message)
									return  _delay(3000).then(function(){
										return _fetchJobAds(options).then(function(res){return res.data}).catch(function(){return []})
									})
								})
						})
					})
			})
		})
}

function _getQueryStringFilters(){
	var q = _getQueryString() || {}
	var filters = []
	var stdTypes = ['professions', 'roles', 'locations', 'areas', 'workTypes']
	stdTypes.forEach(function(stdType) {
		var parts = (q[stdType] || '').split('-')
		if (parts.length > 0) {
			var strId = parts.slice(-1)[0]
			var id = _stringToIds(strId)
			var name = parts.slice(0, -1).map(function(n){ return decodeURIComponent(n) }).join('-')
			if (name)
				filters.push({ id:id, strId:strId, name:name, type:stdType })
		}
	})
	if (q.keywords) {
		var keywords = decodeURIComponent(q.keywords)
		filters.push({ id:[0], strId:'0', name: keywords, type: 'keywords' })
	}
	var salaryRange = q.annualy || q.hourly || q.daily || q.monthly
	if (salaryRange) {
		var parts = salaryRange.split('-')
		var lower = parts[0] * 1
		var upper = parts[1] * 1
		var salaryTypeId = q.annualy ? ANNUALY_ID : q.hourly ? HOURLY_ID : q.daily ? DAILY_ID : MONTHLY_ID  
		filters.push({ id:[0], strId:'0', name: null, type: 'salary', salaryTypeId: salaryTypeId, lower: lower, upper: upper })
	}

	var page = q.page >= 1 ? q.page : 1

	return { filters: filters, page: page }
}

function _getQueryString() {
	return (window.location.search || '').replace(/^\?/, '').split('&').reduce(function (acc, keyValue) {
		var parts = keyValue.split('=')
		acc[parts[0]] = decodeURIComponent(parts[1])
		return acc
	},{})
} 

function _updateQueryString(queryString) {
	var currentQuery = _getQueryString() || {}
	var updatedQuery = Object.assign(currentQuery, queryString || {})
	var q = Object.keys(updatedQuery).filter(function(x) { return x }).map(function(key){
		var val = updatedQuery[key]
		return val ? (key + '=' + encodeURIComponent(updatedQuery[key] || '')) : null
	}).filter(function(x) { return x }).join('&')

	var newUrl = q ? ('?'+q) : window.location.pathname
	if (window.history && window.history.pushState)
		window.history.pushState('', '', newUrl)
	else // Adds support for older browser which do not support window.history (e.g. IE < 10)
		window.location.replace(newUrl)
} 

Vue.component('neap-widget', {
	props: ['jobads'],
	template: `
	<div id="fp-wrapper" class="fp-box fp-container">
		<div id="fp-side-left" class="fp-col-sm-4 fp-col-md-3" :class="sideMenuClass">
			<left-menu-status></left-menu-status>
			<left-menu></left-menu>
		</div>
		
		<div id="fp-content" class="fp-col-sm-8 fp-col-md-9 fp-col-xs-12" :class="contentClass">
			<div class="fp-content-holder">
				<job-search-header></job-search-header>
				<jobads v-bind:jobads="jobads"></jobads>
				<page-buttons></page-buttons>
			</div>
		</div>
	</div>
	`,
	data(){
		return {
			sideMenuClass:'fp-hidden-xs', // by default the side menu is not visible in mobile
			contentClass:'' // by default the content is visible
		}
	},
	methods: {
		showMenu() {
			this.contentClass = 'fp-hidden-xs'
			this.sideMenuClass = ''
		},
		hideMenu() {
			this.sideMenuClass = 'fp-hidden-xs'
			this.contentClass = ''
		}
	},
	created() {
		_eventBus.$on('neap-widget.show-menu', this.showMenu)
		_eventBus.$on('neap-widget.hide-menu', this.hideMenu)
	}
})

Vue.component('left-menu', {
	template: `
	<ul id="fp-side-drop-menu" class="fp-side-menu-cursor">
		<li :class="menu.professions.hidden">
			<a @click="expandMenu('professions')">Classification</a>
			<ul :class="menu.professions.expand">
				<li v-for="item in menu.professions.items">
					<a @click="filterBy(item.strId, item.name, 'professions')">{{ item.name }} <span>({{ item.count }})</span></a>
				</li>
			</ul>
		</li>
		<li :class="menu.roles.hidden">
			<a @click="expandMenu('roles')">Sub-classification</a>
			<ul :class="menu.roles.expand">
				<li v-for="item in menu.roles.items">
					<a @click="filterBy(item.strId, item.name, 'roles')">{{ item.name }} <span>({{ item.count }})</span></a>
				</li>
			</ul>
		</li>
		<li :class="menu.locations.hidden">
			<a @click="expandMenu('locations')">Location</a>
			<ul :class="menu.locations.expand">
				<li v-for="item in menu.locations.items">
					<a @click="filterBy(item.strId, item.name, 'locations')">{{ item.name }} <span>({{ item.count }})</span></a>
				</li>
			</ul>
		</li>
		<li :class="menu.areas.hidden">
			<a @click="expandMenu('areas')">Area</a>
			<ul :class="menu.areas.expand">
				<li v-for="item in menu.areas.items">
					<a @click="filterBy(item.strId, item.name, 'areas')">{{ item.name }} <span>({{ item.count }})</span></a>
				</li>
			</ul>
		</li>
		<li :class="menu.workTypes.hidden">
			<a @click="expandMenu('workTypes')">Work type</a>
			<ul :class="menu.workTypes.expand">
				<li v-for="item in menu.workTypes.items">
					<a @click="filterBy(item.strId, item.name, 'workTypes')">{{ item.name }} <span>({{ item.count }})</span></a>
				</li>
			</ul>
		</li>
		<li v-if="menu.salaryTypes && menu.salaryTypes.length > 0">
			<a href="#">Salary</a>
			<div class="neap-salary-type">
				<select name="salary-type" v-model="menu.salary.id" class="fp-form-control">
					<option v-for="(item,idx) in menu.salaryTypes" :value="item.id" :selected="idx == 0">{{ item.name }}</option>
				</select>
			</div>
			<div class="neap-salary-bands">
				<div class="neap-salary-min">
					<label for="txtSalaryLowerBand">Minimum Salary</label>
					<div class="neap-salary-input">
						<span class="neap-salary-currency"></span>
						<input name="salary-lower-band" type="text" v-model="menu.salary.lower" class="fp-form-control" placeholder="Min." @keypress="isNumber">
					</div>
				</div>
				<div class="neap-salary-to">to</div>
				<div class="neap-salary-max">
					<label for="txtSalaryUpperBand">Maximum Salary</label>
					<div class="neap-salary-input">
						<span class="neap-salary-currency"></span>
						<input name="salary-upper-band" type="text" v-model="menu.salary.upper" class="fp-form-control" placeholder="Max." @keypress="isNumber">
					</div>
				</div>
			</div>

			<div class="neap-salary-bands-error" v-if="showSalaryError">Please enter at least one min. or max. salary greater than zero</div>

			<div class="neap-salary-submit">
				<input type="submit" name="salary-submit-button" value="Submit" @click="filterBySalary" class="fp-mini-new-buttons fp-btn fp-btn-primary">
			</div>
		</li>
	</ul>`,
	data() {
		return { 
			showSalaryError: false,
			all:{},
			menu: {
				professions: {
					hidden: '',
					expand: 'fp-expand-menu',
					items: [],
					selectedIds: null
				},
				roles: {
					hidden: 'fp-hidden',
					expand: 'fp-collapse-menu',
					items: [],
					selectedIds: null
				},
				locations: {
					hidden: '',
					expand: 'fp-collapse-menu',
					items: [],
					selectedIds: null
				},
				areas: {
					hidden: 'fp-hidden',
					expand: 'fp-collapse-menu',
					items: [],
					selectedIds: null
				},
				workTypes: {
					hidden: '',
					expand: 'fp-collapse-menu',
					items: [],
					selectedIds: null
				},
				salaryTypes:[],
				salary: {
					id: 1,
					lower: null,
					upper: null
				}
			}
		}
	},
	methods: {
		isNumber(evt) {
			evt = (evt) ? evt : window.event
			var charCode = (evt.which) ? evt.which : evt.keyCode
			if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
				evt.preventDefault()
			} else {
				return true
			}
		},
		filterBy(strId, name, type) {
			var filters = [{ strId:strId, type:type, name:name }]
			this.toggleFilters(filters)
		},
		filterByKeywords(keywords) {
			var filters = [{ strId:null, type:'keywords', name:keywords }]
			this.toggleFilters(filters)
		},
		filterBySalary() {
			// 1. Clean & Validate the data
			var lower = this.menu.salary.lower * 1
			var upper = this.menu.salary.upper * 1

			if (upper < lower) {
				this.menu.salary.upper = this.menu.salary.lower
				upper = lower
			}

			if (lower == 0 && upper > 0)
				this.menu.salary.lower = 0

			this.showSalaryError = !(this.menu.salary.id && upper > 0)

			// 2. If no error, broadcast event
			if (!this.showSalaryError) {
				var filters = [{
					strId: '0', 
					id: 0,
					type:'salary', 
					name: null,
					salaryTypeId: this.menu.salary.id, 
					lower: lower, 
					upper: upper 
				}]
				this.toggleFilters(filters)
			}
		},
		toggleFilters(filters) {
			var vm = this
			filters = (filters || []).filter(_idFn)
			filters.forEach(function(filter) {
				var ids = _stringToIds(filter.strId).reduce(function(acc,id){
					acc[id] = true
					return acc
				}, {})
				var type = filter.type

				if (type == 'professions') {
					vm.menu.professions.hidden = 'fp-hidden'
					vm.menu.professions.selectedIds = ids
					
					if (!filters.some(function(f){ return f.type == 'roles' }))
						vm.expandMenu('roles')
				} else if (type == 'locations') {
					vm.menu.locations.hidden = 'fp-hidden'
					vm.menu.locations.selectedIds = ids
					
					if (!filters.some(function(f){ return f.type == 'areas' }))
						vm.expandMenu('areas')
				} else if (type == 'workTypes') {
					vm.menu.workTypes.hidden = 'fp-hidden'
					vm.menu.workTypes.selectedIds = ids
				} else if (type == 'areas') {
					vm.menu.areas.hidden = 'fp-hidden'
					vm.menu.areas.selectedIds = ids
				} else if (type == 'roles') {
					vm.menu.roles.hidden = 'fp-hidden'
					vm.menu.roles.selectedIds = ids
				}
			})
			this.updateSubMenus()

			// 3. Let all other components know
			_eventBus.$emit('filterBy', filters)
		},
		untoggleFilter(filter) {
			if (filter && filter.type) {
				var type = filter.type

				if (type == 'professions') {
					this.menu.professions.hidden = ''
					this.menu.professions.selectedIds = null
					this.menu.roles.hidden = 'fp-hidden'
				} else if (type == 'locations') {
					this.menu.locations.hidden = ''
					this.menu.locations.selectedIds = null
					this.menu.areas.hidden = 'fp-hidden'
				} else if (type == 'workTypes') {
					this.menu.workTypes.hidden = ''
					this.menu.workTypes.selectedIds = null
				} else if (type == 'areas') {
					this.menu.areas.hidden = ''
					this.menu.areas.selectedIds = null
				} else if (type == 'roles') {
					this.menu.roles.hidden = ''
					this.menu.roles.selectedIds = null
				}

				this.updateSubMenus()
			}
		},
		update(jobAds, options) {
			options = options || {}
			jobAds = jobAds || []
			var leftMenuData = _getLeftMenuData(jobAds, options.categories)
			this.all = leftMenuData
			this.menu.professions.items = (leftMenuData || {}).professions || []
			this.menu.locations.items = (leftMenuData || {}).locations || []
			this.menu.workTypes.items = (leftMenuData || {}).workTypes || []
			this.menu.salaryTypes = (leftMenuData.salaryTypes || []).sort(function(a,b){return a.id-b.id})
			var id = (this.menu.salaryTypes[0] || {}).id 
			if (id)
				this.menu.salary.id = id
		},
		updateSubMenus() {
			var vm = this
			// 1. Update the 'roles' based on the selected profession
			if (vm.menu.professions.selectedIds) {
				var _containsProIds = function(itemIds) {
					itemIds = itemIds || []
					return itemIds.some(function(id){return vm.menu.professions.selectedIds[id]})
				}
				vm.menu.roles.items = vm.all.professions.reduce(function(acc,item) { 
					if (item && _containsProIds(item.id)) {
						var roles = item.roles || []
						roles.forEach(function(r){acc.push(r)})
					}
					return acc 
				}, [])
			}

			// 2. Update the 'areas' based on the selected location
			if (vm.menu.locations.selectedIds) {
				var _containsLocIds = function(itemIds) {
					itemIds = itemIds || []
					return itemIds.some(function(id){return vm.menu.locations.selectedIds[id]})
				}
				vm.menu.areas.items = vm.all.locations.reduce(function(acc,item) { 
					if (item && _containsLocIds(item.id)) {
						var areas = item.areas || []
						areas.forEach(function(r){acc.push(r)})
					}
					return acc 
				}, [])
			}
		},
		expandMenu(menuName) {
			//_eventBus.$emit('expandMenu', menuName)
			var vm = this
			this.menu[menuName].hidden = ''
			// This menu is not expanded, so expand it
			if (this.menu[menuName].expand == 'fp-collapse-menu') {
				var allMenus = ['professions', 'roles', 'locations', 'areas', 'workTypes']
				var hideMenus = allMenus.filter(function(name) { return name != menuName })
				hideMenus.forEach(function(name) {
					vm.menu[name].expand = 'fp-collapse-menu'
				})
				this.menu[menuName].expand = 'fp-expand-menu'
			} else // This menu is already expanded, so collapse it
				this.menu[menuName].expand = 'fp-collapse-menu'
		}
	},
	created() {
		_eventBus.$on('left-menu.untoggle-filter', this.untoggleFilter)
		_eventBus.$on('left-menu.toggle-filters', this.toggleFilters)
		_eventBus.$on('left-menu.update', this.update)
	}
})

Vue.component('jobads', {
	props: ['jobads'],
	template: `
	<div>
		<div v-for="jobad in jobads" v-bind:key="jobad.id" class="fp-job-holder">
			<div class="fp-job-toplink">
				<a :href="jobad.link">{{ jobad.title }}</a>
				<div class="fp-nameofcompany">{{ jobad.company }}</div>
			</div>
			<div class="fp-job-rightlinks">
				<span class="dateText">{{ jobad.date }}</span>
			</div>
			<div class="fp-description-holder">
				<div class="locandsalary">
					<span>{{ jobad.location.name }}</span>
					<span class="neap-result-area">{{ jobad.location.area.name }}</span>
					<span class="neap-result-salary">{{ jobad.salary.description }}</span>
					<span>{{ jobad.workType.name }}</span>
				</div>
				<div class="fp-description-text">
					<ul>
						<li v-for="item in jobad.bulletPoints">{{ item }}</li>
					</ul>
				</div>
			</div>
			<div class="fp-description-holder">
				<div class="short-fp-description-text">{{ jobad.summary }}</div>
			</div>
			<br/>
			<div class="fp-job-breadcrumbs">
				<a v-bind:href="jobad.profession.link">{{ jobad.profession.name }}</a> &gt; <a v-bind:href="jobad.profession.role.link">{{ jobad.profession.role.name }}</a>
			</div>
		</div>
	</div>`
})

Vue.component('left-menu-status', {
	template: `
	<div>
		<div v-for="filter in filters" v-bind:key="filter.id" class="fp-search-query fp-side-menu-cursor">
			<p>
				<span>{{ filter.name }}</span>
				<span class="fp-red-remove">(<a @click="removeFilter(filter)">Remove</a>)</span>
			</p>
		</div>
	</div>`,
	data() {
		return { filters: [] }
	},
	methods: {
		addFilters(filters) {
			var vm = this
			filters = filters || []
			var updatedFilters = filters.filter(_idFn).reduce(function(acc, filter) {
				var id = filter.strId
				var type = filter.type
				var name = filter.name
				var salaryTypeNames = {}
				salaryTypeNames[ANNUALY_ID] = 'Annual Salary'
				salaryTypeNames[MONTHLY_ID] = 'Monthly Salary'
				salaryTypeNames[DAILY_ID] = 'Daily Rate'
				salaryTypeNames[HOURLY_ID] = 'Hourly Rate'
				var lower = filter.salaryTypeId == ANNUALY_ID || filter.salaryTypeId == MONTHLY_ID ? (Math.round((filter.lower || 0)/1000) + 'K') : filter.lower
				var upper = filter.salaryTypeId == ANNUALY_ID || filter.salaryTypeId == MONTHLY_ID  ? (Math.round((filter.upper || 0)/1000) + 'K') : filter.upper
				var filterName = type == 'salary' ? (salaryTypeNames[filter.salaryTypeId] + ' (' + lower + ' to ' + upper + ')') : name 
				var newFilter = { 
					id: Date.now() + Math.round(Math.random()*10000),			
					itemId: id, 
					type: type,
					name: filterName
				}
				// There is already one salary filter. Replace it with the new one
				if (type == 'salary' && acc.some(function(f) { return f.type == type })) {
					var newFilters = acc.filter(function(f) { return f.type != type })
					newFilters.push(newFilter)
					acc = newFilters
				} else if (!acc.some(({ itemId }) => itemId == newFilter.itemId ))
					acc.push(newFilter)

				return acc
			}, vm.filters.map(_idFn))

			this.filters = updatedFilters
		},
		removeFilter(filter) {
			// 1. Remove the filter
			var newFilters = this.filters.filter(function(f) { return f.id != filter.id })
			// 2. If the filter is a parent filter (i.e., 'professions' or 'locations'), then also remove their child
			if (filter.type == 'professions')
				newFilters = newFilters.filter(function(f) { return f.type != 'roles' })
			if (filter.type == 'locations')
				newFilters = newFilters.filter(function(f) { return f.type != 'areas' })

			this.filters = newFilters

			// 3. Let all other components know
			_eventBus.$emit('removeFilter', filter)
		}
	},
	created() {
		_eventBus.$on('left-menu-status.add-filters', this.addFilters)
	}
})

Vue.component('page-buttons', {
	template: `
	<div id="fairplay-pagination" v-bind:style="page.style">
		<a @click="pageChange(1)">&lt;&lt;</a>
		<a @click="pageChange(page.current-1)">Prev</a>
		<a v-for="number in page.numbers" @click="pageChange(number)" :class="page[number]" >
			{{ number }}
		</a>
		<a @click="pageChange(page.current+1)">Next</a>
		<a @click="pageChange(page.numbers.length)">&gt;&gt;</a>
	</div>`,
	data() {
		return { 
			page: {
				id:0,
				style: 'display:none;',
				numbers:[1],
				current:1,
				max:1
			}
		}
	},
	methods: {
		pageChange(pos) {
			var newPos = pos < 1 ? 1 : pos > this.page.max ? this.page.max : pos

			this.page.current = newPos
			var vm = this
			Object.keys(this.page).forEach(function(key){
				if (vm.page[key] == 'fp-active') 
					Vue.set(vm.page, key, '')
			})
			Vue.set(this.page, newPos, 'fp-active')

			_eventBus.$emit('pageChange', newPos)
		},
		update(jobAds, page, options) {
			var vm = this
			var pageSize = (options || {}).pageSize || DEFAULT_PAGE_SIZE
			page = page || 1
			jobAds = jobAds || []
			var pageNumbers = Math.ceil(jobAds.length/pageSize)
			if (jobAds.length == 0 || pageNumbers == 1) 
				this.page.style = 'display:none;'
			else {
				this.page.max = pageNumbers
				this.page.style = 'display:block;'
				this.page.numbers = Array.apply(null, Array(pageNumbers)).map((_,idx) => idx+1)
			}

			Object.keys(this.page).forEach(function(key){
				if (vm.page[key] == 'fp-active') 
					Vue.set(vm.page, key, '')
			})
			Vue.set(this.page, page, 'fp-active')
		}
	},
	created() {
		_eventBus.$on('page-buttons.page-change', this.pageChange)
		_eventBus.$on('page-buttons.update', this.update)
	}
})

Vue.component('job-search-header', {
	template: `
	<div class="fp-num-results" v-if="jobads">
		Your search resulted in: <span class="fp-searchresult-number">{{ jobads.length }}</span> position{{ jobads.length > 1 ? 's' : '' }}<span class="fp-new-search-link fp-side-menu-cursor"><a @click="showSearch">New Search</a></span>
	</div>
	<div class="fp-num-results" v-else>
		Searching jobs...
	</div>`,
	data() {
		return { jobads: null }
	},
	methods: {
		showSearch() {
			_eventBus.$emit('showSearch')
		},
		update(jobAds) {
			jobAds = jobAds || []
			this.jobads = jobAds
		}
	},
	created(){
		_eventBus.$on('job-search-header.update', this.update)
	}
})

var fairplay = function(options) {
	options = options || {}
	options.categories = options.categories || {}
	options.pageSize = options.pageSize || DEFAULT_PAGE_SIZE
	var pageSize = options.pageSize
	var el = options.el 
	if (!el)
		throw new Error('Missing required argument \'el\'. Please set up the \'fairplay\' widget with a valid CSS selector (example: fairplay({ el: \'#container\', clientId:\'your-client-id\' }))')

	document.querySelector(el).innerHTML = document.querySelector(el).innerHTML + '<neap-widget v-bind:jobads="jobads"></neap-widget>'
	
	new Vue({
		el: el,
		data: {
			allJobAds:[],
			allFilteredJobAds:[],
			jobads:[]
		},
		created(){
			var vm = this

			var filterJobAds = function() {
				var queryFilter = _getQueryStringFilters() || {}
				var filters = queryFilter.filters || []
				var page = queryFilter.page 

				var filteredJobAds = vm.allJobAds.map(_idFn)
				filters.forEach(function(filter) {
					var filterIds = (filter.id || []).reduce(function(acc,id){
						acc[id] = true
						return acc 
					}, {})
					if (filter.type == 'professions') 
						filteredJobAds = filteredJobAds.filter(function(jobAd) { return jobAd.profession && filterIds[jobAd.profession.id] })
					else if (filter.type == 'roles')
						filteredJobAds = filteredJobAds.filter(function(jobAd) { return jobAd.profession && jobAd.profession.role && filterIds[jobAd.profession.role.id] })
					else if (filter.type == 'locations')
						filteredJobAds = filteredJobAds.filter(function(jobAd) { return jobAd.location && filterIds[jobAd.location.id] })
					else if (filter.type == 'areas')
						filteredJobAds = filteredJobAds.filter(function(jobAd) { return jobAd.location && jobAd.location.area && filterIds[jobAd.location.area.id] })
					else if (filter.type == 'workTypes')
						filteredJobAds = filteredJobAds.filter(function(jobAd) { return jobAd.workType && filterIds[jobAd.workType.id] })
					else if (filter.type == 'salary') {				
						filteredJobAds = filteredJobAds.filter(function(jobAd) { 
							return jobAd.salary 
								&& jobAd.salary.id == filter.salaryTypeId 
								&& ((jobAd.salary.lower <= filter.lower && filter.lower <= jobAd.salary.upper) 
									|| (jobAd.salary.lower <= filter.upper && filter.upper <= jobAd.salary.upper)
									|| (filter.lower <= jobAd.salary.lower && jobAd.salary.lower <= filter.upper)
									|| (filter.lower <= jobAd.salary.upper && jobAd.salary.upper <= filter.upper))
						})
					}
					else if (filter.type == 'keywords' && filter.name) {
						var k = filter.name.toLowerCase().trim()
						filteredJobAds = filteredJobAds.filter(function(jobAd) { 
							return jobAd.title && jobAd.title.toLowerCase().indexOf(k) >= 0 
								|| jobAd.profession && jobAd.profession.name && jobAd.profession.name.toLowerCase().indexOf(k) >= 0
								|| jobAd.profession && jobAd.profession.role && jobAd.profession.role.name && jobAd.profession.role.name.toLowerCase().indexOf(k) >= 0
								|| jobAd.location && jobAd.location.name && jobAd.location.name.toLowerCase().indexOf(k) >= 0
								|| jobAd.location && jobAd.location.area && jobAd.location.area.name && jobAd.location.area.name.toLowerCase().indexOf(k) >= 0
								|| jobAd.workType && jobAd.workType.name && jobAd.workType.name.toLowerCase().indexOf(k) >= 0
								|| jobAd.summary && jobAd.summary.toLowerCase().indexOf(k) >= 0
						})
					}
				})

				vm.allFilteredJobAds = filteredJobAds
				vm.jobads = filteredJobAds.slice((page-1)*pageSize, page*pageSize)

				_eventBus.$emit('job-search-header.update', filteredJobAds, page)
				_eventBus.$emit('page-buttons.update', filteredJobAds, page, options)
				_eventBus.$emit('left-menu.update', filteredJobAds, options)
				_eventBus.$emit('neap-widget.hide-menu')
			}

			_eventBus.$on('pageChange', function(pos) {
				// 1. Update query string
				_updateQueryString({ page: pos })
				
				// 2. Update all components accordingly
				var start = pos-1 >= 0 ? pos-1 : 0
				var next = start + 1
				vm.jobads = vm.allFilteredJobAds.slice(start*pageSize, next*pageSize)
			})

			_eventBus.$on('filterBy', function(filters, page, origin) {
				// 1. Update query string
				if (origin != 'querystring') {
					var q = {}	
					filters = filters || []
					filters.forEach(function(filter) {
						if (filter.type == 'salary') {
							var labels = {}
							labels[ANNUALY_ID] = 'annualy'
							labels[MONTHLY_ID] = 'monthly'
							labels[DAILY_ID] = 'daily'
							labels[HOURLY_ID] = 'hourly'
							Object.keys(labels).forEach(function(key){
								if (key == filter.salaryTypeId)
									q[labels[key]] = filter.lower + '-' + filter.upper
								else
									q[labels[key]] = null
							})
						} 
						else if (filter.type == 'keywords')
							q[filter.type] = encodeURIComponent(filter.name)
						else
							q[filter.type] = encodeURIComponent(filter.name) + '-' + filter.strId	
					})
					q.page = 1
					_updateQueryString(q)
				}

				// 2. Update all components accordingly
				filterJobAds()
				_eventBus.$emit('left-menu-status.add-filters', filters)
				if (page || origin) // that means that this event does not come from the 'left-menu' itself
					_eventBus.$emit('left-menu.toggle-filters', filters)
			})

			_eventBus.$on('removeFilter', function(filter) {
				// 1. Update query string. If the filter is a parent filter ('professions' or 'locations'), then also remove their resp. child
				var q = {}
				if (filter.type == 'professions')
					q = { professions: null, roles: null }
				else if (filter.type == 'locations')
					q = { locations: null, areas: null }
				else if (filter.type == 'salary')
					q = { annualy: null, hourly: null, monthly: null, daily: null }
				else 
					q[filter.type] = null
				q.page = 1
				_updateQueryString(q)

				// 2. Update all components accordingly
				filterJobAds()
				_eventBus.$emit('page-buttons.page-change', 1)
				_eventBus.$emit('left-menu.untoggle-filter', filter)
			})

			_eventBus.$on('showSearch', function() {
				_eventBus.$emit('neap-widget.show-menu')
			})

			_getJobAds(options).then(function(jobs) {
				vm.allJobAds = jobs
				vm.allFilteredJobAds = jobs
				var queryFilter = _getQueryStringFilters() || {}
				_eventBus.$emit('filterBy', queryFilter.filters, queryFilter.page, 'querystring')
			})
		}
	})
}

module.exports.fairplay = fairplay


