describe('mwwr case hompage', function() {
	beforeEach(function() {
		browser.get('http://localhost:9090');
	});

	it('should have title', function() {
		expect(browser.getTitle()).toEqual('MMWR - Case of the Week');
	});

	it('should be displaying current case', function() {
		expect(by.model('currentCase').toEqual('Hepatitis B'));
	});
});