var route1 = function(router) {

    // ROUTES
    router.get('/', function(req, res) {
	res.render('page1');
    });

    return router;
};

module.exports = route1;
