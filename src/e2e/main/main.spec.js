describe('mwwr case hompage', function() {
	it('should have title', function() {
		browser.get('http://localhost:9090');

		expect(browser.getTitle()).toEqual('MMWR - Case of the Week');
	});
});