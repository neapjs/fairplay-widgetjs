import { Fairplay, _classificationsToCategories } from '../src/app.js'

describe('_classificationsToCategories', () => {
	it('converts classifications to categories', () => {
		const categories = _classificationsToCategories({
			classifications: {
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
		})
		expect(categories['1']).toBe('IT')
		expect(categories['2']).toBe('IT')
		expect(categories['3']).toBe('Human Resources')
		expect(categories['10']).toBe('Sydney')
		expect(categories['20']).toBe('Sydney')
		expect(categories['30']).toBe('Sydney')
		expect(categories['40']).toBe('Melbourne')
		expect(categories['60']).toBe('Full-time')
		expect(categories['70']).toBe('Part-time')
		expect(categories['80']).toBe('Contract')
		expect(categories['90']).toBe('Contract')
		expect(categories['100']).toBe('Manager')
		expect(categories['110']).toBe('Head of Recruitment')
		expect(categories['200']).toBe('Support')
		expect(categories['210']).toBe('Compliance Manager')
		expect(categories['300']).toBe('Support')
		expect(categories['310']).toBe('Compliance Manager')
		expect(categories['400']).toBe('Support')
		expect(categories['410']).toBe('Compliance Manager')
		expect(categories['1000']).toBe('CBD')
		expect(categories['2000']).toBe('Inner West')
		expect(categories['3000']).toBe('Inner West')
		expect(categories['4000']).toBe('Inner West')
		expect(categories['5000']).toBe('CBD')
		expect(categories['6000']).toBe('CBD')
		expect(categories['7000']).toBe('Coast')
	})
})

describe('Fairplay', () => {
	describe('repo.<repo-name>.find', () => {
		it('returns the correct entity', () => {
			const fp = new Fairplay({
				mode:'dev',
				classifications: {
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
			})

			const sydneyAreas = fp.repo.location.find({ where: { id:30 } }).areas
			expect(sydneyAreas).toBeTruthy()
			expect(sydneyAreas.length).toBe(2)
			expect(sydneyAreas[0].name).toBe('CBD')
			expect(sydneyAreas[1].name).toBe('Inner West')
			expect((fp.repo.profession.find({ where: { id:1 } }) || {}).name).toBe('IT')
			expect((fp.repo.profession.find({ where: { id:'1' } }) || {}).name).toBe('IT')
			expect((fp.repo.profession.find({ where: { id:'1_2' } }) || {}).name).toBe('IT')
			expect((fp.repo.profession.find({ where: { id:'2_1' } }) || {}).name).toBe('IT')
			expect((fp.repo.profession.find({ where: { id:70 } }) || {}).name).toBeFalsy()
			expect((fp.repo.workType.find({ where: { id:70 } }) || {}).name).toBe('Part-time')
			expect((fp.repo.role.find({ where: { id:110 } }) || {}).name).toBe('Head of Recruitment')
		})
	})
})

